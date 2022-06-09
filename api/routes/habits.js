const express = require("express");
const router = express.Router();
const habitsControllers = require("../controllers/Habits");

router.get("/", habitsControllers.index);
router.get("/:id", habitsControllers.show);
router.get("/user/:id", habitsControllers.findAllHabitsByUserId);
router.post("/", habitsControllers.create);
module.exports = router;
