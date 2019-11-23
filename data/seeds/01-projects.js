exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Back End API",
          description: "Build a back end server with knex",
          completed: false
        }
      ]);
    });
};
