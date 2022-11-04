const { gql } = require('apollo-server-express');
const typeDefs = gql`

type User {
    name: String
    email:String
    password: String
    patientId: Integer

}

type PatientData {
    firstName: String
    lastName: String
    age: Number
    birthday: Date
    gender: String
    weight: Number 
    height: Number
    address: String 
    email: String 
    primaryPhone: Number
    alternativePhone: Number
    currentMedications: String
    notes: String
    icd10Code: String
    diagnosis: String
    dateofDiagnosis: Date
    providerName: String
    providerPhoneNumber: Number
    insurancePlan: String
    memberId: Number
    groupId: Number
    providerServicesNumber: Number
}
type Auth {
    token: ID!
    user: User
}
typeQuery {
    getUsers: [User]
    getUser:(email: String!): User
    getPatientData: [PatientData]
}
typeMutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstName: String!, lastName: String!, password: String!): Auth
    createPatientData: (firstName: String, lastName: String, age: Number, birthday: Date, gender: String, weight: Number, height: Number, address: String ,
        email: String ,primaryPhone: Number, alternativePhone: Number, currentMedications: String, notes: String, icd10Code: String, diagnosis: String, 
        dateofDiagnosis: Date, providerName: String, providerPhoneNumber: Number, insurancePlan: String, memberId: Number, groupId: Number, 
        providerServicesNumber: Number
}
`
module.exports = typeDefs

