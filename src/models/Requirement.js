const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
    source: { type: String, required: true },
    content: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    priority: { type: Number, default: 0 }
});

module.exports = mongoose.model('Requirement', RequirementSchema);
