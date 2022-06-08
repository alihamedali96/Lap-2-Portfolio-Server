const db = require("../dbConfig");

const User = require("../models/User");

async function index(req, res) {
  try {
    const users = await User.all;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ ...user });
  } catch (err) {
    res.status(500).json({ err });
  }
}
async function create(req, res) {
  try {
    console.log("req.body", req.body);
    const user = await User.create(req.body);
    res.status(201).json({ ...user });
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function login(req, res) {
    try {
        console.log("req.body", req.body);
        const user = await User.findByUsername(req.body.username)
        if(!user)
    }
}

module.exports = { index, show, create, login };
