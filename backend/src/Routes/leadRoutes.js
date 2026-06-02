const express = require("express");

const router = express.Router();

const authMiddleware =
require("../Middleware/authMiddleware");

const authorizeRoles =
require("../Middleware/roleMiddleware");

const leadController =
require("../Controllers/leadController");

router.post(
    "/",
    authMiddleware,
    authorizeRoles(
        "MANAGER",
        "ADMIN"
    ),
    leadController.createLead
);

router.get(
    "/",
    authMiddleware,
    leadController.getAllLeads
);

router.get(
    "/:id",
    authMiddleware,
    leadController.getLeadById
);

router.put(
    "/:id",
    authMiddleware,
    authorizeRoles(
        "MANAGER",
        "ADMIN"
    ),
    leadController.updateLead
);

router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles(
        "ADMIN",
        "MANAGER"
    ),
    leadController.deleteLead
);

module.exports = router;