const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { employeeId } = req.body;

  if (!employeeId) {
    return res.status(400).json({ message: "Employee ID required" });
  }

  // Simple dummy login check
  if (employeeId === "EMP001") {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ message: "Invalid Employee ID" });
  }
});

module.exports = router;