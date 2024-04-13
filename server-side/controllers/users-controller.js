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
}; /*
function authorize(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();

    console.log(token);
  } catch (error) {
    return res.sendStatus(401);
  }
}
*/
const signup = async (req, res) => {
  if (
    (!req.body.name ||
      !req.body.password ||
      !req.body.country ||
      !req.body.email ||
      !req.body.lastname,
    !req.body.profile_image)
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }
  if (users[req.body.email]) {
    res.status(400).json({ error: "User already exists" });
  }

  try {
    const result = await knex("users").insert(req.body);

    const newUserId = result[0];
    const createdUser = await knex("users").where({
      id: newUserId,
    });

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new user: ${error}`,
    });
  }

  // return res.status(400).json({ success: "true" });
};
/*
const login = async (req, res) => {
  const { name, password, email } = req.body;
  const user = users[name];
  if (
    user &&
    user.password &&
    user.email === password &&
    user.email === email
  ) {
    // STEP 1: When a user provides a correct username/password,
    // the user can be considered authenticated.
    // Create a JWT token for the user, and add their name to
    // the token. Send the token back to the client.
    const token = jwt.sign({ username: user.name, name: user.name }, secretKey);
    res.json({ token: token });
    console.log(token);
  } else {
    res.sendStatus(401);
  }
};*/
module.exports = {
  signup,

  getUsers,
};
