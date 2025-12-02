require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const announcementRoutes = require("./routes/announcementRoutes");

const app = express();

// STATIC FRONTEND  <<<<<<<<<<<<<<<< THIS FIXES YOUR ISSUE
app.use(express.static(path.join(__dirname, "../frontend")));

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/announcement", announcementRoutes);

// Test route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
