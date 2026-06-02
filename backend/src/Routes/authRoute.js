const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

const authController = require("../Controllers/authController");

router.post("/register", authController.register);
router.post(
    "/login",
    authController.login
);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;