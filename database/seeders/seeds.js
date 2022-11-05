const db = require('../config/connection');
const { User } = require('../models');

const patientData = require('./patientDataSeeds.json');

db.once('open', async () => {
    await patientData.deleteMany({});
    try {
        await User.collection.insertMany(patientData);
        console.log('User Added!');
        //close db connection
        process.exit(0);

    //catch error
    } catch(e) {
        console.log("Something went wrong.");
        console.log(e);
        process.exit();
    }
});



