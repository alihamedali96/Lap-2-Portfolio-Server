const express = require("express");
const router = express.Router()
const habitInstanceControllers = require('../controllers/habit-instances')


router.get('/', habitInstanceControllers.index);
router.get('/:id', habitInstanceControllers.show);
router.get('/user/:id', habitInstanceControllers.findAllHabitsByUserId);

module.exports = router;