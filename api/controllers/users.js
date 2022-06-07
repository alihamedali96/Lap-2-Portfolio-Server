const db = require ('../dbConfig')

const User = require('../models/User');

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
        res.status(200).json({ ...user,});
    } catch (err) {
        res.status(500).send(err);
    };
}
async function create(req, res) {
    try {
        console.log("req.body",req.body)
        const user = await User.create(req.body);
        res.status(201).json({ ...user,});
    } catch (err) {
        res.status(500).send(err);
    };
}
async function destroy(req, res) {
    try {
        const user = await User.findById(parseInt(req.params.id));
        await user.destroy()
        res.status(204).json('User Deleted')
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = { index, show, create , destroy}
