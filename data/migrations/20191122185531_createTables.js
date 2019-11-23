exports.up = function(knex) {
  return knex.schema

    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .unique()
        .notNullable();

      tbl.string("description", 128);

      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("tasks", tbl => {
      tbl.increments();

      tbl
        .string("name")
        .unique()
        .notNullable();

      tbl.string("description", 128);

      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .unique()
        .notNullable();

      tbl.string("description", 128);
    })

    .createTable("projects_resources", tbl => {
      tbl
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("projects.id");

      tbl
        .integer("resources_id")
        .unsigned()
        .notNullable()
        .references("resources.id");

      tbl.primary(["projects_id", "resources_id"]);
    });
};

exports.down = function(knex) {};
