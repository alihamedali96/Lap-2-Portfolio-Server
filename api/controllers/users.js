const db = require("../dbConfig");

<<<<<<< HEAD:api/controllers/User.js
const User = require("../models/User");
=======

const User = require('../models/User');
>>>>>>> ca609ff353e6a6a0ca6c4fdb0af79baebc8dc7bb:api/controllers/users.js

async function index(req, res) {
  try {
    const users = await User.all;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ ...user });
  } catch (err) {
    res.status(500).send(err);
  }
}
async function create(req, res) {
    try {
        const user = await User.create(req.body.name,req.body.password);
        res.status(201).json({ ...user,});
    } catch (err) {
        res.status(500).send(err);
    };
}

<<<<<<< HEAD:api/controllers/User.js
module.exports = { index, show };
=======
module.exports = { index, show, create }
>>>>>>> ca609ff353e6a6a0ca6c4fdb0af79baebc8dc7bb:api/controllers/users.js
