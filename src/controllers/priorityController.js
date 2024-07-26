const Requirement = require('../models/Requirement');

// Dummy function to simulate hybrid recommendation technique
const hybridRecommendation = (requirements, criteria) => {
    return requirements.map(req => {
        req.priority = Math.random(); // Replace with actual hybrid recommendation logic
        return req;
    }).sort((a, b) => b.priority - a.priority);
};

exports.prioritizeRequirements = async (req, res) => {
    const { criteria } = req.body;

    if (!criteria || Object.keys(criteria).length === 0) {
        return res.status(400).send('Invalid criteria input');
    }

    let requirements = await Requirement.find({ confirmed: true });
    requirements = hybridRecommendation(requirements, criteria);

    for (let req of requirements) {
        await Requirement.findByIdAndUpdate(req._id, { priority: req.priority });
    }

    res.render('prioritizedRequirements', { requirements });
};
