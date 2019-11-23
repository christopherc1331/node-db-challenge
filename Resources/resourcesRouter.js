const express = require("express");
const resourcesDb = require("./resourcesModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  resourcesDb
    .get()
    .then(resources => res.status(200).json({ success: true, resources }))
    .catch(err =>
      res.status(400).json({
        success: false,
        message: "Could not get resources from server"
      })
    );
});

router.post("/", (req, res) => {
  const newResource = req.body;

  resourcesDb
    .post(newResource)
    .then(newResource => res.status(201).json({ success: true, newResource }))
    .catch(err => res.status(401).json({ success: false, message: err }));
});
