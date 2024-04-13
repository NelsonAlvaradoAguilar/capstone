const knex = require("knex")(require("../knexfile"));

const events = {};

const getEvents = async (req, res) => {
  try {
    const events = await knex("events");
    res.status(200).json(events);
  } catch (err) {
    res.status(400).send(`Error retrieving user: ${err}`);
  }
};
const postEvents = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.location ||
    !req.body.entrance ||
    !req.body.price ||
    !req.body.date ||
    !req.body.images ||
    !req.body.price
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }
  const priceRegex = /^\d+(\.\d{1,2})?$/;

  if (!priceRegex.test(req.body.price)) {
    return res.status(400).json({
      message: `Price must be a valid monetary value`,
    });
  }
  try {
    const result = await knex("events").insert(req.body);

    const neweventId = result[0];
    const createdEvent = await knex("events").where({
      id: neweventId,
    });

    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({
      message: `Unable to post new event: ${error}`,
    });
  }
};

module.exports = {
  postEvents,

  getEvents,
};
