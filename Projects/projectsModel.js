const db = require("../data/dbConfig.js");

module.exports = {
  find,
  insert
};

function find() {
  return db("projects");
}

function insert(newProject) {
  return db("projects")
    .insert(newProject)
    .then(ids => {
      return getById(ids[0]);
    });
}
