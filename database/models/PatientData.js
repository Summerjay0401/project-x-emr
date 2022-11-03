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
        enum: ["male"||"female" ],
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
      type: String,

    },
    diagnosis: {
      type: String,
    },
    dateOfDiagnosis: {
      Type: Date,

    },
    providerName: {
      type: String,

    },
    providerPhoneNumber: {
      type: Integer,

    },
  insurancePlan: {
      type: String, 

  },
  memberId: {
    type: Integer,
    required: true,
    unique: true,

  },
  groupId: {
    type: Integer,
    required: true,
    unique: true,

  },
  providerServicesNumber: {
    type: Integer

  },

})

const PatientData = model ('PatientData', patientDataSchema) ;
module.exports = PatientData;