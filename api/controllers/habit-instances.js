const db = require ('../dbConfig')

const HabitInstance = require('../models/habit-instances');

async function index(req, res) {
    try {
        const habitIns = await HabitInstance.all;
        res.status(200).json(habitIns);
    } catch (err) {
        res.status(500).json({ err });
    }
}

async function show(req, res) {
    try {
        const habit = await HabitInstance.findById(req.params.id);
        res.status(200).json({ ...habit,});
    } catch (err) {
        res.status(500).json({ err });
    };
}

async function destroy (req, res) {
    try {
        const habit = await HabitInstance.findById(req.params.id);
        const res = habit.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

async function create (req, res) {
    try {
        const habit = await HabitInstance.create(req.body);
        res.status(201).json(habit)
    } catch (err) {
        res.status(422).json({err})
    }
}



async function findAllHabitsByUserId (req, res) {
    try {
        const habit = await HabitInstance.findAllHabitsByUserId(req.body);
        res.status(201).json(habit)
    } catch (err) {
        res.status(422).json({err})
    }
} 




module.exports = { index, show, destroy , create , findAllHabitsByUserId} 
