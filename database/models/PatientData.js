const { Schema, model } = require('mongoose');

const patientDataSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    age: {
      type: Integer,
      required: true,
    }

})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;