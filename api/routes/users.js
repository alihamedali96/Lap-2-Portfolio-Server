const express = require("express");
const router = express.Router()
const userControllers = require('../controllers/User')


router.get('/', userControllers.index);
router.get('/:id', userControllers.show);

module.exports = router;