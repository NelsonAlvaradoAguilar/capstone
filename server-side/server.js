const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/users");

app.use("/api/capstone", userRoutes);

const eventsRoutes = require("./routes/events");
app.use("/api/capstone", eventsRoutes);

const classesRoutes = require("./routes/classes");
app.use("/api/capstone", classesRoutes);

const ArticlesNewsRoutes = require("./routes/articles_news");
app.use("/api/capstone", ArticlesNewsRoutes);

app.get("/api/capstone", (req, res) => {
  res.send("welcome to my api");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
