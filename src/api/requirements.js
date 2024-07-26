const express = require('express');
const router = express.Router();
const { collectRequirements } = require('../controllers/requirementController');
const auth = require('../middleware/auth');

router.post('/collect', auth, collectRequirements);

module.exports = router;
