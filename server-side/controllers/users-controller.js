const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

function authorize(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "No token. Unauthorized." });
  }
  try {
    const payload = jwt.verify(token, secretKey);
    req.decode = payload;
    next();
  } catch (error) {
    res.status(403).json({ error: "Not Authorized." });
  }
}
const getProfile = async (req, res) => {
  try {
    const user = await knex("users")
      .where({ name: req.decode.username })
      .first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const imagePath = user.images.replace("public/", "");

    const userProfile = {
      id: user.id,
      name: user.name,
      password: user.password,
      country: user.country,
      email: user.email,
      lastname: user.lastname,
      images: `http://localhost:8080/${imagePath}`,
    };
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await knex("users");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(`Error retrieving user: ${err}`);
  }
};
const signup = async (req, res) => {
  const { name, password, country, email, lastname } = req.body;
  const images = req.file
    ? `images/${req.file.filename}`
    : "images/default_image.jpg";

  if (!name || !password || !country || !email || !lastname || !images) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    // const usersData = await knex("users").where({ email });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await knex("users").insert({
      name,
      password: hashedPassword,
      country,
      email,
      lastname,
      images,
    });
    const newUserId = newUser[0];
    const createdUser = await knex("users").where({ id: newUserId });

    res.status(201).json({
      message: "User has been successfully created",
      user: createdUser,
    });
  } catch (error) {
    res.status(500).json({ message: `Unable to create new user: ${error}` });
  }
};
const login = async (req, res) => {
  const { name, password, email } = req.body;

  const user = await knex("users").where({ name }).first();
  if (!user || user.email !== email) {
    return res.status(401).send("Invalid username or email");
  }

  const token = jwt.sign({ username: user.name }, secretKey);
  res.json({ token });
};
const logout = (req, res) => {
  res.status(200).send("Logged out successfully");
};

module.exports = { getUsers, signup, login, getProfile, logout, authorize };
