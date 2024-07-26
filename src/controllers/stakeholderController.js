const Stakeholder = require('../models/Stakeholder');

exports.getStakeholders = async (req, res) => {
    const stakeholders = await Stakeholder.find();
    res.render('dashboard', { stakeholders });
};

exports.prioritizeStakeholders = async (req, res) => {
    const { influence_weight, interest_weight } = req.body;
    let stakeholders = await Stakeholder.find();

    stakeholders = stakeholders.map(stakeholder => {
        stakeholder.priority = (stakeholder.influence * influence_weight) + (stakeholder.interest * interest_weight);
        return stakeholder;
    });

    stakeholders.sort((a, b) => b.priority - a.priority);
    res.render('prioritize', { stakeholders });
};
