/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("articles_news", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description", 1000).notNullable();
    table.string("location").notNullable();
    table.string("status").notNullable();
    table.string("contact_name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
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
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("articles_news");
};
