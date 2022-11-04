const { gql } = require('apollo-server-express');
const typeDefs = gql`

type User {
    _id: ID
    name: String
    email:String
    password: String
    patientData: [PatientData]

}

type PatientData {
    _id: ID
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
    createPatientData: (_id: ID, age: Number, birthday: Date, gender: String, weight: Number, height: Number, address: String ,
        email: String ,primaryPhone: Number, alternativePhone: Number, currentMedications: String, notes: String, icd10Code: String, diagnosis: String, 
        dateofDiagnosis: Date, providerName: String, providerPhoneNumber: Number, insurancePlan: String, memberId: Number, groupId: Number, 
        providerServicesNumber: Number)
}
`
module.exports = typeDefs

