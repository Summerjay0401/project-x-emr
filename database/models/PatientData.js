const { Schema, model } = require('mongoose');

const patientDataSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
    age: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Number,
      required: true,
      
    },
    weight: {
      type: Number,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    address: {

    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    phoneNumber: {

    },

    alternativeNumber: {

    },
    
    currentMedications: {

    },
    notes: {
      type: String,
      required: true,
      trim: true,
    },


})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;