const express = require("express");
const tasksDb = require("./tasksModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  tasksDb
    .find()
    .then(tasks => res.status(200).json({ success: true, tasks }))
    .catch(err =>
      res.status(400).json({
        success: false,
        message: "Could not get resources from server"
      })
    );
});

router.post("/", (req, res) => {
  const newTask = req.body;

  tasksDb
    .insert(newTask)
    .then(newTask => res.status(201).json({ success: true, newTask }))
    .catch(err => res.status(401).json({ success: false, message: err }));
});

module.exports = router;
