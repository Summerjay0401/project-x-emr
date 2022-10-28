const { Schema, model } = require('mongoose');

const patientDataSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },


})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;