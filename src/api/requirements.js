const express = require('express');
const router = express.Router();
const Requirement = require('../models/Requirement');

router.get('/', async (req, res) => {
    const requirements = await Requirement.find();
    res.json(requirements);
});

router.post('/', async (req, res) => {
    const newRequirement = new Requirement(req.body);
    await newRequirement.save();
    res.json(newRequirement);
});

module.exports = router;
