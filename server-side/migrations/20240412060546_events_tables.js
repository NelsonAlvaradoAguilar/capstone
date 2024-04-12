/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("events", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description", 1000).notNullable();
      table.string("location").notNullable();
      table.string("entrance").notNullable();

      table.string("price").notNullable();
      table.string("date").notNullable();
      table.string("images").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
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
        .references("events.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("event_comments").dropTable("events");
};
