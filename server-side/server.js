const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
require("dotenv").config();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const PORT = process.env.PORT || 5050;
const userRoutes = require("./routes/users");
app.use("/api/capstone", upload.single("profile_image"), userRoutes);

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
