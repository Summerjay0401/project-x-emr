const { gql } = require('apollo-server-express');
const typeDefs = gql

type User {

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
    notes: String
}

type Appointments {

}