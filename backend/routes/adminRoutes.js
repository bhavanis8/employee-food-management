const express = require("express");
const router = express.Router();

const { selections } = require("../data/storage");

router.get("/admin-report", (req, res) => {

    const report = {
        Morning: 0,
        Afternoon: 0,
        Snacks: 0,
        NotEating: 0,
        foodCount: {}
    };

    const today = new Date().toDateString();

    const todaySelections = selections.filter(s => s.date === today);

    todaySelections.forEach(selection => {

        if (selection.status === "Not Eating") {
            report.NotEating++;
        } else {
            report[selection.session]++;

            if (!report.foodCount[selection.selectedFood]) {
                report.foodCount[selection.selectedFood] = 0;
            }

            report.foodCount[selection.selectedFood]++;
        }

    });

    res.json(report);
});

module.exports = router;