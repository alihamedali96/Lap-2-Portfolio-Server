const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to our habits library"));

const userRoutes = require("./routes/User");
server.use("/user", userRoutes);

module.exports = server;

