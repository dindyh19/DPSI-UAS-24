const express = require('express');
const router = express.Router();
const { prioritizeRequirements } = require('../controllers/priorityController');

router.post('/prioritize', prioritizeRequirements);

module.exports = router;
