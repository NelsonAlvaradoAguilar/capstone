// Update with your config settings.
require("dotenv").config();

/**module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
}; */
module.exports = {
  client: "pg", // Adjust to your database client
  connection: process.env.DATABASE_URL, // Use the DATABASE_URL environment variable for the database connection
  pool: { min: 2, max: 10 },
};
