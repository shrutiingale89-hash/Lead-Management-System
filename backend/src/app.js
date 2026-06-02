const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/authRoute");
const externalApiRoutes =require("./Routes/externalApiRoutes");

const leadRoutes =require("./Routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(
    "/api/leads",
    leadRoutes
);

app.use(
    "/api/external",
    externalApiRoutes
);


module.exports = app;