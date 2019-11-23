const express = require("express");
const projectsDb = require("./projectsModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  projectsDb
    .get()
    .then(projects => res.status(200).json({ success: true, projects }))
    .catch(err =>
      res
        .status(400)
        .json({ success: false, message: "Could not get projects from server" })
    );
});

router.post("/", (req, res) => {
  const newPost = req.body;

  projectsDb
    .post(newPost)
    .then(newPost => res.status(201).json({ success: true, newPost }))
    .catch(err => res.status(401).json({ success: false, message: err }));
});
