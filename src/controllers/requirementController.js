const Requirement = require('../models/Requirement');

// Dummy function to simulate data extraction from surveys and feedback forms
const extractRequirementsFromSources = async () => {
    return [
        { source: 'Survey A', content: 'Requirement 1 from Survey A' },
        { source: 'Feedback Form B', content: 'Requirement 2 from Feedback Form B' },
    ];
};

exports.collectRequirements = async (req, res) => {
    let requirements = await extractRequirementsFromSources();
    
    for (let req of requirements) {
        let requirement = new Requirement(req);
        await requirement.save();
    }
    
    requirements = await Requirement.find();
    res.render('requirements', { requirements });
};

exports.confirmRequirement = async (req, res) => {
    const { id } = req.params;
    let requirement = await Requirement.findById(id);
    requirement.confirmed = true;
    await requirement.save();
    
    requirements = await Requirement.find();
    res.render('requirements', { requirements });
};
