const db = require("../data/dbConfig.js");

module.exports = {
  find,
  insert
};

function find() {
  return db("tasks");
}

function insert(newTask) {
  return db("tasks")
    .insert(newTask)
    .then(ids => {
      return getById(ids[0]);
    });
}
