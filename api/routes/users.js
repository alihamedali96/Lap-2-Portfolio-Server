const express = require("express");
const router = express.Router()
const userControllers = require('../controllers/users')


router.get('/', userControllers.index);
router.get('/:id', userControllers.show);
router.post('/', userControllers.create);

module.exports = router;
