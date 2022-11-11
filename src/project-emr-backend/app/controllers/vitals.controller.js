const db = require("../models");

const Op = db.Sequelize.Op;

exports.getAllByUser = async (req, res) => {
    try {
        
        const data = await db.vitals.findAll({
            where: {
                userId: req.params.userId
            }
        });

        const vitals = data.map((vital) => vital.get({ plain: true }));
        
        return res.status(200).json(vitals);
        
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

exports.getById = (req, res) => {
    const vital = db.vitals.findOne({
        where: {
            id: req.params.id
        }
    });

    return vital.get({ plain: true });
}

exports.create = async (req, res) => {
    try {

        const vital = await db.vitals.create({
            userId: req.body.userId,
            bloodPressure: req.body.bloodPressure,
            bloodSugar: req.body.bloodSugar,
            pulse: req.body.pulse
        });

        return res.status(200).json(vital);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const vital = await db.vitals.update({
            bloodPressure: req.body.bloodPressure,
            bloodSugar: req.body.bloodSugar,
            pulse: req.body.pulse
        }, {
            where: {
                id: req.params.id
            }
        });

        return res.status(200).json(vital);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} 

exports.delete = async (req, res) => {
    try {

        await db.vitals.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.status(404).json("Deleted");

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} 
