const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const loginRoutes = require("./routes/loginRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/", loginRoutes);
app.use("/", menuRoutes);

// TEST
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});