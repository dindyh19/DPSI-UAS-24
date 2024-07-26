const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
    description: String,
    source: String,
    priority: Number
});

module.exports = mongoose.model('Requirement', RequirementSchema);
