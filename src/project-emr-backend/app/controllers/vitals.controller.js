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

exports.getByUserId = async (req, res) => {
    try {

        const vital = await db.vitals.findOne({
            where: {
                userId: req.params.userId
            }
        });
        
        return res.status(200).json(vital?.get({ plain: true }));
        
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

const createVital = async (vital) => {
    return await db.vitals.create({
        userId: vital.userId,
        bloodPressure: vital.bloodPressure,
        bloodSugar: vital.bloodSugar,
        pulse: vital.pulse,
        oxygenSaturation: vital.oxygenSaturation,
        temperature: vital.temperature
    });
}

const updateVital = async (vital) => {
    return await db.vitals.update({
        bloodPressure: vital.bloodPressure,
        bloodSugar: vital.bloodSugar,
        pulse: vital.pulse,
        oxygenSaturation: vital.oxygenSaturation,
        temperature: vital.temperature
    }, {
        where: {
            userId: vital.userId
        }
    });;
}

exports.create = async (req, res) => {
    try {
        
        const vital = await db.vitals.findOne({
            where: {
                userId: req.body.userId
            }
        });

        let ret = {};
        if (!vital) ret = createVital(req.body);
        else ret = updateVital(req.body);

        return res.status(200).json(ret);

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
