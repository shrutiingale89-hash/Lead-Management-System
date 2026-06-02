const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const externalApiController =
require("../Controllers/externalApiController");

router.get(
    "/random-user",
    authMiddleware,
    externalApiController.getRandomUser
);

module.exports = router;