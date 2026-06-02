const pool = require("../db/db");

const createLog = async (
    leadId,
    action,
    performedBy
) => {

    await pool.query(
        `
        INSERT INTO activity_logs
        (
            lead_id,
            action,
            performed_by
        )
        VALUES
        ($1,$2,$3)
        `,
        [
            leadId,
            action,
            performedBy
        ]
    );

};

module.exports = {
    createLog
};