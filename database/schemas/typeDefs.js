const { gql } = require('apollo-server-express');
const typeDefs = gql

type User {

}

type PatientData {
    firstName: String
    lastName: String
    age: Number
    birthday: Number
    weight: Number 
    height: Number
    address: String 
    email: String 
    notes: String
}

type Appointments {

}