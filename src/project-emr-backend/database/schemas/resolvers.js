const { AuthenticationError } = require('apollo-server-express');

const { User, PatientData } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getUsers: async () => {
            return (
                User.find()
                .select('-__v -password')
                .populate('patientData')
        );
    },
    getUser: async (parent, { email }) => {
        return User.findOne({ email })
            .select('-__v -password')
            .populate('patientData')
    },
    me: async (parent, args, context) => {
        //if request contains valid user object inside the context
        if(context.user) {
            const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('patientData')
            return userData;
        }

        //else throw an auth error
        throw new AuthenticationError('Not Logged In');
    },

    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email }).populate('patientData');

            //if user is not found
            if (!user) {
				throw new AuthenticationError('Email or Password incorrect!');
			}

            //match provided password to password from database
			const correctPw = await user.isCorrectPassword(password);

            //if password is not correct
			if (!correctPw) {
				throw new AuthenticationError('Email or Password incorrect!');
			}

            //sign and return token
			const token = signToken(user);
			return { token, user };
        },

        //adds a new user to db
        addUser: async (parent, args) => {
            const user = await User.create(args);

            //sign and return token
			const token = signToken(user);
			return { token, user };
        },
    
        createPatientData: async (parent, args, context) => {

        console.log('create patientData args: ', args);

        if (context.user) {
            const patientData = await PatientData.create({
                ...args,
                user: context.user.username
            });

            await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { patientData: patientData._id } },
                { new: true }
            );

            console.log("patientData ", patientData);

            return team;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
},
};
module.exports = resolvers;