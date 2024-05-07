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

const usersStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    let filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  },
});

const uploadUsers = multer({ storage: usersStorage });

const PORT = process.env.PORT || 5050;

const eventsRoutes = require("./routes/events");
app.use("/api/capstone", eventsRoutes);
const userRoutes = require("./routes/users");
app.use("/api/capstone", uploadUsers.single("profile_image"), userRoutes);

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
