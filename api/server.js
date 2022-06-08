const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to our habits library"));

const userRoutes = require("./routes/users");
const habitRoutes = require("./routes/habits");
// const habitInstancesRoutes = require("./routes/instances");
server.use("/users", userRoutes);
server.use("/habits", habitRoutes);
// server.use("/habit-instances", habitInstancesRoutes);

module.exports = server;

