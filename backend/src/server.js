require("dotenv").config();
const cors = require("cors");

const app = require("./app");
const pool = require("./db/db");

const PORT = process.env.PORT || 5000;



app.use(cors());

pool.query("SELECT NOW()")
    .then((res) => {
        console.log("Database Connected");
        console.log(res.rows[0]);
    })
    .catch((err) => {
        console.log(err.message);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});