module.exports = (sequelize, Sequelize) => {
  const vitals = sequelize.define("vitals", {
    userId: {
      type: Sequelize.INTEGER
    },
    bloodPressure: {
      type: Sequelize.STRING
    },
    bloodSugar: {
      type: Sequelize.STRING
    },
    pulse: {
      type: Sequelize.STRING
    },
    oxygenSaturation: {
      type: Sequelize.STRING
    },
    temperature: {
      type: Sequelize.STRING
    },
  });
  
  return vitals;
};
  