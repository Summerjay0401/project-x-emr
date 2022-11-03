const { AuthenticationError } = require('apollo-server-express');

const { User, PatientData, Appointments } = require('../models');

const { signToken } = require('../utils/auth');