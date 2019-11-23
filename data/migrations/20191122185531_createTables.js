exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.string("completed", 128);
    tbl.boolean("completed").defaultTo(flase);
  });
  // .createTable("");
};

exports.down = function(knex) {};
