const mongoose = require('mongoose');

const StakeholderSchema = new mongoose.Schema({
    name: String,
    influence: Number,
    importance: Number,
    rank: Number
});

module.exports = mongoose.model('Stakeholder', StakeholderSchema);
