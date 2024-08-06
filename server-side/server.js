const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const { Pool } = require("pg"); // Import Pool from 'pg'
require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the environment variable for connection string
  ssl: {
    rejectUnauthorized: false,
  },
});
// Import Routes
const articlesNewsRoutes = require("./routes/articles_news");
const eventsRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const classesRoutes = require("./routes/classes");

// Use Routes
app.use("/api/capstone/events/", eventsRoutes);
app.use("/api/capstone/", userRoutes);
app.use("/api/capstone/classes/", classesRoutes);
app.use("/api/capstone/news/", articlesNewsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database connection error");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
