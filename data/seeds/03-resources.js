exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "computer", description: "An amazing tool" },
        { id: 2, name: "brain", description: "An even more important tool" },
        { id: 3, name: "granolaBar", description: "Don't forget to fuel up" }
      ]);
    });
};
