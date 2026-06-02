const pool = require("../db/db");
const { getNextAgent } = require("../Utils/assignmentUtil");
const { createLog } = require("../Utils/logger");

const createLead = async (data, userId) => {

    const {
        name,
        email,
        phone,
        source,
        status,
        notes
    } = data;

    const assignedAgentId = await getNextAgent();

    const query = `
        INSERT INTO leads
        (
            name,
            email,
            phone,
            source,
            status,
            assigned_to,
            notes
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *
    `;

    const values = [
        name,
        email,
        phone,
        source,
        status,
        assignedAgentId,
        notes
    ];

    const result = await pool.query(
        query,
        values
    );

    const lead = result.rows[0];

    await createLog(
        lead.id,
        "LEAD_CREATED",
        userId
    );

    await createLog(
        lead.id,
        "LEAD_ASSIGNED",
        userId
    );

    return lead;
};

const getAllLeads = async (
    queryParams,
    user
) => {

    const {
        page = 1,
        limit = 10,
        search = "",
        status,
        source,
        sortBy = "id"
    } = queryParams;

    const offset =
        (page - 1) * limit;

    let query = `
        SELECT *
        FROM leads
        WHERE
        (
            LOWER(name)
            LIKE LOWER($1)
            OR
            LOWER(email)
            LIKE LOWER($1)
        )
    `;

    const values = [
        `%${search}%`
    ];

    if (user.role === "AGENT") {

        query += `
        AND assigned_to = $${values.length + 1}
        `;

        values.push(user.id);

    }

    if (status) {

        query += `
        AND status = $${values.length + 1}
        `;

        values.push(status);

    }

    if (source) {

        query += `
        AND source = $${values.length + 1}
        `;

        values.push(source);

    }

    const allowedSortFields = [
        "id",
        "name",
        "status",
        "created_at"
    ];

    const sortField =
        allowedSortFields.includes(sortBy)
            ? sortBy
            : "id";

    query += `
    ORDER BY ${sortField} DESC
    LIMIT $${values.length + 1}
    OFFSET $${values.length + 2}
    `;

    values.push(Number(limit));
    values.push(Number(offset));

    const result =
        await pool.query(
            query,
            values
        );

    return result.rows;
};

const getLeadById = async (id, user) => {

    const result =
    await pool.query(
        `
        SELECT *
        FROM leads
        WHERE id = $1
        `,
        [id]
    );

    const lead = result.rows[0];

    if (!lead) return null;

    if (
        user.role === "AGENT" &&
        lead.assigned_to !== user.id
    ) {
        throw new Error("Access Denied");
    }

    return lead;
};

const updateLead = async (
    id,
    data,
    userId
) => {

    const oldLead =
    await pool.query(
        `
        SELECT *
        FROM leads
        WHERE id=$1
        `,
        [id]
    );

    const existingLead =
    oldLead.rows[0];

    const {
        name,
        email,
        phone,
        source,
        status,
        notes
    } = data;

    const result =
    await pool.query(
        `
        UPDATE leads
        SET
        name=$1,
        email=$2,
        phone=$3,
        source=$4,
        status=$5,
        notes=$6
        WHERE id=$7
        RETURNING *
        `,
        [
            name,
            email,
            phone,
            source,
            status,
            notes,
            id
        ]
    );

    await createLog(
        id,
        "LEAD_UPDATED",
        userId
    );

    if (
        existingLead.status
        !==
        status
    ) {

        await createLog(
            id,
            "STATUS_CHANGED",
            userId
        );

    }

    return result.rows[0];
};

const deleteLead = async (id) => {

    await pool.query(
        `
        DELETE FROM leads
        WHERE id=$1
        `,
        [id]
    );

};

module.exports = {
    createLead,
    getAllLeads,
    getLeadById,
    updateLead,
    deleteLead
};
