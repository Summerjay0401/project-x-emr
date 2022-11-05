const { Schema, model } = require('mongoose');

const patientDataSchema = new Schema({
    _id: {
      type: Schema.types.ObjectId
    },

    age: {
      type: Number,
     
    },
    birthday: {
      type: Date,
     
    }, 
    gender: { 
      type: String,
        enum: ["male"||"female" ],
        
    }, 
    
    weight: {
      type: Number,
     
    },

    height: {
      type: Number,
      
    },

    address: {
      type: String,
      
      trim: true,
     

    },
    email: {
      type: String,
     
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    primaryPhone: {
      type: Number

    },

    alternativePhone: {
      type: Number
    },
    
    currentMedications: {
      type: String

    },
    notes: {
      type: String,
      
      trim: true,
    },
      vitals: { 
        type: String,
          enum: ["male"||"female" ],
          
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
      type: Number,

    },
  insurancePlan: {
      type: String, 

  },
  memberId: {
    type: Number,
    
    unique: true,

  },
  groupId: {
    type: Number,
    
    unique: true,

  },
  providerServicesNumber: {
    type: Number

  },

})

const PatientData = model ('PatientData', patientDataSchema);
module.exports = PatientData;