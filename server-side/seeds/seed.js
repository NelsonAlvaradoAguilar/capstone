const eventsData = require("../seedInfo/events");
const classesData = require("../seedInfo/classes");
const articlesNewsData = require("../seedInfo/articles_news");

exports.seed = async function (knex) {
  // Clear existing data from all tables
  await knex("events").del();
  await knex("classes").del();
  await knex("articles_news").del();
  await knex("events_comments").del();
  // Insert events data
  await knex("events").insert(
    eventsData.map((event) => {
      // remove comments from each event
      const { comments, ...eventWithoutComments } = event;
      return eventWithoutComments;
    })
  );
  // Insert classes and articles_news data
  await knex("classes").insert(classesData);
  await knex("articles_news").insert(articlesNewsData);
  //Extract comments from each event and insert it in event_comments tables
  const commentsData = eventsData.flatMap((event) => {
    const eventId = event.id;
    return event.comments.map((comment) => ({
      event_id: eventId,
      name: comment.name,
      comment: comment.comment,
    }));
  });

  await knex("events_comments").insert(commentsData);
};
