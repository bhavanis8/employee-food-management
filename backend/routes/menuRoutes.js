const express = require("express");
const router = express.Router();

router.get("/today-menu", (req, res) => {

  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  const weeklyMenu = {

    Saturday: {
      Morning: [
        { name: "Idli", image: "idli.jpg" },
        { name: "Upma", image: "Upma.jpg" },
        { name: "Poha", image: "Poha.jpg" }
      ],
      Afternoon: [
        { name: "Mutton Curry with Rice", image: "Mutton Curry with Rice.jpg" },
        { name: "Tomato Rice", image: "Tomato Rice.jpg" },
        { name: "Dal Tadka with Jeera Rice", image: "Dal Tadka with Jeera Rice.jpg" }
      ],
      Snacks: [
        { name: "Bonda", image: "Bonda.jpg" },
        { name: "Pav Bhaji", image: "Pav Bhaji.jpg" },
        { name: "Chicken 65", image: "Chicken 65.jpg" }
      ]
    }

  };

  res.json({
    day: today,
    sessions: weeklyMenu[today]
  });

});

module.exports = router;