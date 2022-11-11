const db = require("../app/models");

const users = require("./users.json");
const roles = require("./roles.json");
const patients = require("./patients.json");
const vitalsigns = require("./vitals.json");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

async function initial() {
    
    const User = db.user;
    const Role = db.role;
    const Patient = db.patient;
    const Vitals = db.vitals;

    await Role.bulkCreate(roles, {
        individualHooks: true,
        returning: true,
    });

    await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });

    await Patient.bulkCreate(patients, {
        individualHooks: true,
        returning: true,
    });

    await Vitals.bulkCreate(vitalsigns, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);

}
