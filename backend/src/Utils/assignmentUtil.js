const pool = require("../db/db");

let lastAssignedAgentIndex = -1;

const getNextAgent = async () => {

    const result = await pool.query(
        `SELECT id
         FROM users
         WHERE role='AGENT'
         ORDER BY id`
    );

    const agents = result.rows;

    if (agents.length === 0) {
        throw new Error("No agents available");
    }

    lastAssignedAgentIndex =
        (lastAssignedAgentIndex + 1) %
        agents.length;

    return agents[lastAssignedAgentIndex].id;
};

module.exports = {
    getNextAgent
};