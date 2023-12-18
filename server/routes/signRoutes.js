// signRoutes.js

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');

router.post('/signUp', signController.signUp);
router.post('/signIn', signController.signIn);

// Експорт об'єкту роутера для використання в інших частинах програми
module.exports = router;
