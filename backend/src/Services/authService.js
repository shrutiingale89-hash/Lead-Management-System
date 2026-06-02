const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  const { name, email, password, role } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
      INSERT INTO users(name,email,password,role)
      VALUES($1,$2,$3,$4)
      RETURNING id,name,email,role
  `;

  const values = [name, email, hashedPassword, role];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const loginUser = async (email, password) => {

    const query =
    `
    SELECT *
    FROM users
    WHERE email=$1
    `;

    const result = await pool.query(query,[email]);

    const user = result.rows[0];

    if(!user){
        throw new Error("Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if(!isMatch){
        throw new Error("Invalid Credentials");
    }

    const token = jwt.sign(
        {
            id:user.id,
            role:user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1h"
        }
    );

    return token;
};

module.exports = {
  registerUser,
   loginUser
};

