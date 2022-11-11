var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  },
  {
    hooks: {
      beforeCreate(newUserData) {
        newUserData.password = bcrypt.hashSync(
          newUserData.password,
          8
        );
        return newUserData;
      },
    }
  });

  return User;
};
