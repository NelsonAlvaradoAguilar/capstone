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
    const events = await knex("events").select("*");

    const updatedEvents = events.map((event) => {
      const imagePath = event.images.replace("public/", "");
      return {
        ...event,
        images: `http://localhost:8080/${imagePath}`, // Update to your server URL if different
      };
    });

    res.status(200).json(updatedEvents);
  } catch (err) {
    res.status(400).send(`Error retrieving events: ${err}`);
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const event = await knex("events")
      .where({
        id: req.params.id,
      })
      .first();

    if (!event) {
      return res.status(404).json({
        message: `Event with ID ${req.params.id} not found`,
      });
    }
    const imagePath = event.images.replace("public/", "");
    console.log(imagePath);
    const EventData = {
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      price: event.price,
      entrance: event.entrance,
      location: event.location,
      images: `http://localhost:8080/${imagePath}`,
    };
    res.status(200).json(EventData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for event with ID ${req.params.id}`,
    });
  }
};
const postEvents = async (req, res) => {
  const { title, description, date, price, entrance, location } = req.body;
  const userId = req.params.id;
  const images = req.file ? req.file.path : "/default_profile_image.jpg";

  // Validate required fields
  if (
    !title ||
    !description ||
    !date ||
    !price ||
    !entrance ||
    !location ||
    !images ||
    !userId
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }
  /*
  // Validate and format date
  const formattedDate = new Date(date);
  if (isNaN(formattedDate.getTime())) {
    return res.status(400).json({
      message: `Invalid date format`,
    });
  }

  // Convert price to a number
  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice)) {
    return res.status(400).json({
      message: `Invalid price format`,
    });
  }*/

  try {
    const newEvent = await knex("events").insert({
      title,
      description,
      date,
      price,
      entrance,
      location,
      images,
      user_id: userId,
    });

    const neweventId = newEvent[0];
    const createdEvent = await knex("events")
      .where({
        id: neweventId,
      })
      .first(); // Use .first() to get a single event object

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
