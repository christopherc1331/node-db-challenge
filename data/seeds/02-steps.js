exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          name: "doThisThing",
          description: "do this thing",
          project_id: 1
        },
        {
          id: 2,
          name: "doThisOtherThing",
          description: "do this other thing",
          project_id: 1
        },
        {
          id: 3,
          name: "doThisLastThing",
          description: "do this last thing",
          project_id: 1
        }
      ]);
    });
};
