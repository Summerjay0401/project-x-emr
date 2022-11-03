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
      type: Integer,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    }, 
    gender: { 
      type: String,
        enum: "male"||"female" 
    }, 
    
    weight: {
      type: Integer,
      required: true,
    },

    height: {
      type: Integer,
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,

    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    primaryPhone: {
      type: Integer

    },

    alternativePhone: {
      type: Integer
    },
    
    currentMedications: {
      type: String

    },
    notes: {
      type: String,
      required: true,
      trim: true,
    },
    icd10Code: {

    },
    diagnosis: {

    },
    dateOfDiagnosis: {

    },
    providerName: {

    },
    providerPhoneNumber: {

    },
  insurancePlan: {

  },
  memberId: {

  },
  groupId: {

  },
  providerServicesNumber: {

  },

})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;