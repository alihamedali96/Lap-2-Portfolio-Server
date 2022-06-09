const db = require ('../dbConfig')

const HabitInstance = require('../models/HabitInstance');

async function index(req, res) {
    try {
        const instance = await HabitInstance.all;
        res.status(200).json(instance);
    } catch (err) {
        res.status(500).json({ err });
    }
}

async function show(req, res) {
    try {
        const instance = await HabitInstance.findById(req.params.id);
        res.status(200).json({ ...instance,});
    } catch (err) {
        res.status(500).json({ err });
    };
}

async function destroy (req, res) {
    try {
        const instance = await HabitInstance.findById(req.params.id);
        await instance.destroy();
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

async function findAllInstancesByHabitId (req, res) {
    try {
        const instance = await HabitInstance.findAllInstancesByHabitId(req.params.id);
        res.status(201).json(instance)
    } catch (err) {
        res.status(422).json({err})
    }
} 

async function update(req, res) {
    try {
        // console.log("req",req)
        const instance = await HabitInstance.findById(req.params.id);
        await instance.update(req.body.completed)
        res.status(204).end();
    } catch (err) {
        res.status(404).json(err.message);
    };
}


module.exports = { index, show, destroy , create , update, findAllInstancesByHabitId } 
