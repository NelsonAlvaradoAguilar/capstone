const knex = require("knex")(require("../knexfile"));

const getEventsComments = async (req, res) => {
  try {
    const { id } = req.params;
    const eventsComments = await knex("events_comments")
      .where("events_comments.event_id", id)
      .join("events", "events_comments.event_id", "=", "events.id")
      .select("events_comments.*", "events.title");
    res.status(200).json(eventsComments);
  } catch (err) {
    res.status(400).send(`Error retrieving comments: ${err}`);
  }
};

const postComment = async (req, res) => {
  const eventId = req.params.id;
  if (!req.body.name || !req.body.comment || !eventId) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const result = await knex("events_comments").insert({
      ...req.body,
      event_id: eventId,
    });

    const newCommentId = result[0];
    const newComment = await knex("events_comments").where({
      id: newCommentId,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({
      message: `Unable to post new comment: ${error}`,
    });
  }
};
const getEvents = async (req, res) => {
  try {
    const events = await knex("events");

    res.status(200).json(events);
  } catch (err) {
    res.status(400).send(`Error retrieving events: ${err}`);
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const foundEvent = await knex("events").where({
      id: req.params.id,
    });

    if (foundEvent.length === 0) {
      return res.status(404).json({
        message: `Event with ID ${req.params.id} not found`,
      });
    }

    const EventData = foundEvent[0];
    res.status(200).json(EventData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for event with ID ${req.params.id}`,
    });
  }
};

const postEvents = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.location ||
    !req.body.entrance ||
    !req.body.date ||
    !req.body.price ||
    !req.body.images
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
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
  getSingleEvent,
  getEvents,
  getEventsComments,
  postComment,
};
