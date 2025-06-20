require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Routes here
app.get("/", (req, res) => {
  res.send("API is working");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () =>
      console.log("Server running on http://localhost:4000")
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
