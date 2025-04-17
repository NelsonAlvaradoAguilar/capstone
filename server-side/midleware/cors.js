// middleware/corsMiddleware.js
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000",
  "https://capstone-9hfo.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

module.exports = cors(corsOptions);
