const express = require("express");
const router = express.Router()
const habitInstanceControllers = require('../controllers/habit-instances')


router.get('/', habitInstanceControllers.index);
router.get('/:id', habitInstanceControllers.show);
router.put('/:id', habitInstanceControllers.update);
router.get('/habit/:id', habitInstanceControllers.findAllInstancesByHabitId);

module.exports = router;
