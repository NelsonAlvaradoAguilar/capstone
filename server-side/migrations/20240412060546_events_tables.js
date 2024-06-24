/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */ exports.up = function (knex) {
  return knex.schema
    .createTable("events", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.string("location").notNullable();
      table.string("entrance").notNullable();
      table.string("images");
      table.decimal("price", 10, 2).nullable();
      table.string("date").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("events_comments", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text("comment").notNullable();
      table
        .integer("event_id")
        .unsigned()
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("events_comments").dropTable("events");
};
