const mongoose = require('mongoose');

const StakeholderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    influence: { type: Number, required: true },
    interest: { type: Number, required: true }
});

module.exports = mongoose.model('Stakeholder', StakeholderSchema);
