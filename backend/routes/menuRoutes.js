const express = require("express");
const router = express.Router();

// GET Today Menu API
router.get("/today-menu", (req, res) => {

    // Detect today's day name
    const today = new Date().toLocaleString("en-US", { weekday: "long" });

    // Dummy menu data
    const menu = {
        day: today,
        sessions: [
            {
                sessionName: "Morning",
                startTime: "09:00",
                endTime: "10:00",
                foods: ["Idli", "Dosa", "Upma"]
            },
            {
                sessionName: "Afternoon",
                startTime: "01:00",
                endTime: "02:00",
                foods: ["Rice", "Sambar", "Curd"]
            },
            {
                sessionName: "Snacks",
                startTime: "04:00",
                endTime: "05:00",
                foods: ["Tea", "Biscuits"]
            }
        ]
    };

    res.json(menu);
});

module.exports = router;