/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("classes", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description", 1000).notNullable();
      table.string("date").notNullable();
      table.string("location").notNullable();
      table.string("instructor").notNullable();
      table.string("images");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("register", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("class_rating", (table) => {
      table.increments("id").primary();
      table.string("rating").notNullable();
      table.string("comments").notNullable();
      table
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("class_rating")
    .dropTable("register")
    .dropTable("classes");
};
