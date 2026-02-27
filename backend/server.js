const adminRoutes = require("./routes/adminRoutes");
const express = require("express");
const cors = require("cors");

const loginRoutes = require("./routes/loginRoutes");
const menuRoutes = require("./routes/menuRoutes");
const selectionRoutes = require("./routes/selectionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", loginRoutes);
app.use("/api", menuRoutes);
app.use("/api", selectionRoutes);
app.use("/api", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});