const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pageController');

router.route('/getTodos', pagesController.getTodos)
router.route('/createTodo', pagesController.createTodo)

module.exports = router
