const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to our habits library"));
const postRoutes = require("./routes/Post");
server.use("/post", postRoutes);

module.exports = server;
