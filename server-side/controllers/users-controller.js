const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const users = {};

const getUsers = async (req, res) => {
  try {
    const users = await knex("users");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(`Error retrieving user: ${err}`);
  }
};

function authorize(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.sendStatus("We can find a token", 401);
  }
  try {
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();

    console.log(token, "found it");
  } catch (error) {
    return res.sendStatus(401);
  }
}

const signup = async (req, res) => {
  const { name, password, country, email, lastname, profile_image } = req.body;

  if (!name || !password || !country || !email || !lastname || !profile_image) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const result = await knex("users").insert(req.body);

    const newUserId = result[0];
    const createdUser = await knex("users").where({
      id: newUserId,
    });

    res.status(201).json(`user:${createdUser}has been created`);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new user becouse ${error}`,
    });
  }
  if (users[email]) {
    res.status(400).json({ error: "User already exists" });
  }
  // return res.status(400).json({ success: "true" });
};

const login = async (req, res) => {
  const { name, password, email } = req.body;

  const user = await knex("users").where({ name: name });
  if (!user) {
    return res.status(500)("Invalid username or password");
  }

  const findPassword = await knex("users").where({ password: password });
  if (!findPassword) {
    return res.status(500)("Invalid username or password");
  }

  const token = jwt.sign({ username: user.name, name: user.name }, secretKey);
  res.json({ token: token });
  console.log(token);
};
const getProfile = async (req, res) => {
  authorize();
  res.json(req.decoded);
  console.log("is working");
};

module.exports = {
  signup,
  login,
  getUsers,
  authorize,
  getProfile,
};
