const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../Middleware/authMiddleware");

const externalApiController =
require("../Controllers/externalApiController");

router.get(
    "/random-user",
    authMiddleware,
    externalApiController.getRandomUser
);

module.exports = router;