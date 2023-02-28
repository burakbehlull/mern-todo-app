const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pageController');

router.route('/getTodos').get(pagesController.getTodos)
router.route('/createTodo').post(pagesController.createTodo)

module.exports = router
