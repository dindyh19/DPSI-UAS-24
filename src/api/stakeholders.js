const express = require('express');
const router = express.Router();
const { getStakeholders, prioritizeStakeholders } = require('../controllers/stakeholderController');

router.get('/dashboard', getStakeholders);
router.post('/prioritize', prioritizeStakeholders);

module.exports = router;
