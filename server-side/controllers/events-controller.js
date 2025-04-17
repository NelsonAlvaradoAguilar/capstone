const knex = require("knex")(require("../knexfile"));

const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

// GET all events
const getEvents = async (req, res) => {
  try {
    const events = await knex("events").select("*");

    const updatedEvents = events.map((event) => {
      const imagePath = event.images.replace("public/", "");
      return {
        ...event,
        images: `${BASE_URL}/${imagePath}`,
      };
    });

    res.status(200).json(updatedEvents);
  } catch (err) {
    res.status(400).send(`Error retrieving events: ${err.message}`);
  }
};

// GET single event
const getSingleEvent = async (req, res) => {
  try {
    const event = await knex("events").where({ id: req.params.id }).first();

    if (!event) {
      return res.status(404).json({
        message: `Event with ID ${req.params.id} not found`,
      });
    }

    const imagePath = event.images.replace("public/", "");

    const EventData = {
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      price: event.price,
      entrance: event.entrance,
      location: event.location,
      images: `${BASE_URL}/${imagePath}`,
    };

    res.status(200).json(EventData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for event with ID ${req.params.id}`,
    });
  }
};

// POST a new event
const postEvents = async (req, res) => {
  const { title, description, date, price, entrance, location } = req.body;
  const userId = req.params.id;

  const parsedUserId = parseInt(userId, 10);
  if (
    !title ||
    !description ||
    !date ||
    !price ||
    !entrance ||
    !location ||
    isNaN(parsedUserId)
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  const imagePath = req.file
    ? `images/${req.file.filename}`
    : "images/default_image.jpg";

  try {
    const newEvent = {
      title: title.trim(),
      description: description.trim(),
      date,
      price,
      entrance,
      location: location.trim(),
      user_id: parsedUserId,
      images: `public/${imagePath}`,
    };

    const [newEventId] = await knex("events").insert(newEvent);
    const createdEvent = await knex("events").where({ id: newEventId }).first();

    const formattedEvent = {
      ...createdEvent,
      images: `${BASE_URL}/${imagePath}`,
    };

    res.status(201).json(formattedEvent);
  } catch (error) {
    console.error("Error posting event:", error);
    res.status(500).json({
      message: `Unable to create new event: ${error.message}`,
    });
  }
};

// GET comments for a specific event
const getEventsComments = async (req, res) => {
  try {
    const { id } = req.params;

    const eventsComments = await knex("events_comments as ec")
      .where("ec.event_id", id)
      .join("events as e", "ec.event_id", "=", "e.id")
      .select("ec.*", "e.title as event_title");

    res.status(200).json(eventsComments);
  } catch (err) {
    res.status(400).send(`Error retrieving comments: ${err.message}`);
  }
};

// POST a comment on an event
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
      message: `Unable to post new comment: ${error.message}`,
    });
  }
};

const getEventsByUserId = async (req, res) => {
  const { user_id } = req.params;

  // Validate that user_id is a number
  if (!user_id || isNaN(Number(user_id))) {
    return res.status(400).json({ error: "Invalid or missing user_id" });
  }

  try {
    const events = await knex("events").where("user_id", user_id).select("*");

    const updatedEvents = events.map((event) => {
      const imagePath = event.images.replace("public/", "");
      return {
        ...event,
        images: `${BASE_URL}/${imagePath}`,
      };
    });

    res.status(200).json(updatedEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getEvents,
  getSingleEvent,
  postEvents,
  getEventsComments,
  postComment,
  getEventsByUserId,
};
