const { selections } = require("../data/storage");
const express = require("express");
const router = express.Router();

console.log("Selection Route Loaded");



// Time slots
const sessionTimings = {
    Morning: { start: 9, end: 10 },
    Afternoon: { start: 13, end: 14 },
    Snacks: { start: 16, end: 17 }
};

router.post("/submit-selection", (req, res) => {

    const { employeeId, session, selectedFood, status } = req.body;

    if (!employeeId || !session || !status) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields"
        });
    }

    if (!sessionTimings[session]) {
        return res.status(400).json({
            success: false,
            message: "Invalid session selected"
        });
    }

    const currentHour = new Date().getHours();
    const { start, end } = sessionTimings[session];

    if (currentHour < start || currentHour >= end) {
        return res.status(400).json({
            success: false,
            message: `${session} selection time is closed`
        });
    }

    const today = new Date().toDateString();

    // Check duplicate submission
    const alreadySubmitted = selections.find(
        s => s.employeeId === employeeId &&
             s.session === session &&
             s.date === today
    );

    if (alreadySubmitted) {
        return res.status(400).json({
            success: false,
            message: "You have already submitted for this session today"
        });
    }

    // Store selection
    selections.push({
        employeeId,
        session,
        selectedFood,
        status,
        date: today
    });

    res.json({
        success: true,
        message: "Selection submitted successfully"
    });
});

module.exports = router;