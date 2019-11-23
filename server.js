const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./Projects/projectsRouter.js");
const resourcesRouter = require("./Projects/resourcesRouter.js");
const tasksRouter = require("./Projects/projectsRouter.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
