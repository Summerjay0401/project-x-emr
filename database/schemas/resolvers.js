const { AuthenticationError } = require('apollo-server-express');

const { User, PatientData } = require('../models');

const { signToken } = require('../utils/auth');