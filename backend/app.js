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

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/announcement", announcementRoutes);

// Catch-all route (SPA fix)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on port ${PORT}`)
);
