const eventsData = require("../seedInfo/events");
const classesData = require("../seedInfo/classes");
const articlesNewsData = require("../seedInfo/articles_news");
const eventsCommentsData = require("../seedInfo/events_comments");

exports.seed = async function (knex) {
  await knex("events").del();
  await knex("classes").del();
  await knex("articles_news").del();
  await knex("events_comments").del();
  await knex("events").insert(eventsData);
  await knex("classes").insert(classesData);
  await knex("articles_news").insert(articlesNewsData);
  await knex("events_comments").insert(eventsCommentsData);
};
