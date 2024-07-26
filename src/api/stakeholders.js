const express = require('express');
const router = express.Router();
const Stakeholder = require('../models/Stakeholder');

// Get all stakeholders
router.get('/', async (req, res) => {
    try {
        const stakeholders = await Stakeholder.find();
        res.json(stakeholders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new stakeholder
router.post('/', async (req, res) => {
    const stakeholder = new Stakeholder({
        name: req.body.name,
        influence: req.body.influence,
        importance: req.body.importance,
        rank: req.body.rank
    });

    try {
        const newStakeholder = await stakeholder.save();
        res.status(201).json(newStakeholder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
