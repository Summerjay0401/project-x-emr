const db = require("../models");
const { vitals } = require("../models");

const Op = db.Sequelize.Op;

exports.vitals = (req, res) => {
   vitals.create({
    bloodPressure: req.body.bloodPressure,
    bloodSugar: req.body.bloodSugar,
    pulse: req.body.pulse

})
    

}