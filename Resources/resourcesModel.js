const db = require("../data/dbConfig.js");

module.exports = {
  find,
  insert
};

function find() {
  return db("resources");
}

function insert(newResource) {
  return db("resources")
    .insert(newResource)
    .then(ids => {
      return getById(ids[0]);
    });
}
