const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.patientData = (req, res) => {
    patientData.create({
        _id: req.body._id,
        age: req.body.age,
        birthday: req.body.birthday,
        gender: req.body.gender,
        weight: req.body.weight,
        height: req.body.height,
        address: req.body.address,
        email: req.body.email,
        primaryPhone: req.body.primaryPhone,
        alternativePhone: req.body.alternativePhone,
        currentMedications: req.body.currentMedications,
        notes: req.body.notes,
        vitals: req.body.vitals,
        icd10Code: req.body.icd10Code,
        diagnosis: req.body.diagnosis,
        dateOfDiagnosis: req.body.dateOfDiagnosis,
        providerName: req.body.providerName,
        providerPhoneNumber: req.body.providerPhoneNumber,
        insurancePlan: req.body.insurancePlan,
        memberId: req.body.memberId,
        groupId: req.body.groupId,
        providerServiceNumber: req.body.providerServiceNumber
})





}







