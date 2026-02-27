const express = require("express");
const router = express.Router();

// Dummy Login API
router.post("/login", (req, res) => {
    const { employeeId } = req.body;

    if (employeeId === "EMP001") {
        return res.json({
            success: true,
            message: "Login successful",
            employeeId
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid Employee ID"
        });
    }
});

module.exports = router;