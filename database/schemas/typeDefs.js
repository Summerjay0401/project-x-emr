const { gql } = require('apollo-server-express');
const typeDefs = gql

type User {
    name: String
    email:String
    password: String
    patientId: Integer

}

type PatientData {
    firstName: String
    lastName: String
    age: Integer
    birthday: Date
    gender: String
    weight: Integer 
    height: Integer
    address: String 
    email: String 
    primaryPhone: Integer
    alternativePhone: Integer
    currentMedications: String
    notes: String
    icd10Code: String
    diagnosis: String
    dateofDiagnosis: Date
    providerName: String
    providerPhoneNumber: Integer
    insurancePlan: String
    memberId: Integer
    groupId: Integer
    providerServicesNumber: Integer
}

