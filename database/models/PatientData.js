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
    },
    birthday: {
      type: Integer,
      required: true,
      
    },
    weight: {
      type: Integer,
      required: true,
    }
    notes: {
      type: String,
      required: true,
    }

})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;