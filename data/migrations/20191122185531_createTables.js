exports.up = function(knex) {
  return (
    knex.schema

      //first table

      .createTable("projects", tbl => {
        tbl.increments();

        tbl
          .string("name", 128)
          .unique()
          .notNullable();

        tbl.string("description", 128);

        tbl.boolean("completed").defaultTo(false);
      })

      //second table

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

      // third table

      .createTable("resources", tbl => {
        tbl.increments();

        tbl
          .string("name", 128)
          .unique()
          .notNullable();

        tbl.string("description", 128);
      })

      //bridge table (fourth)

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
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists("projects_resources")
    .dropIfTableExists("resources")
    .dropIfTableExists("tasks")
    .dropIfTableExists("projects");
};
