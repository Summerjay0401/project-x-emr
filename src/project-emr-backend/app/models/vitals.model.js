module.exports = (sequelize, Sequelize) => {
    const vitals = sequelize.define("vitals", {
      bloodPressure: {
        type: Sequelize.INTEGER
      },
      bloodSugar: {
        type: Sequelize.INTEGER
      },
      pulse: {
        type: Sequelize.INTEGER
      }
    });
  
    return vitals;
  };
  