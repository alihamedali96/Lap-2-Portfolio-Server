const express = require("express");
const router = express.Router()
const habitsControllers = require('../controllers/habits')


router.get('/', habitsControllers.index);
router.get('/:id', habitsControllers.show);
router.get('/user/:id', habitsControllers.findAllHabitsByUserId);

module.exports = router;