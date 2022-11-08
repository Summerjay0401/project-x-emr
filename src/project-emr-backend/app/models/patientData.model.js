module.exports = (sequelize, Sequelize) => {
    const patientData = sequelize.define("patientData", {
      username: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      primaryPhone: {
        type: Sequelize.INTEGER
      },
      alternativePhone: {
        type: Sequelize.INTEGER
      },
      currentMedications: {
        type: Sequelize.INTEGER
      },
      vitals: {
        type: Sequelize.STRING
      },
      icd10Code: {
        type: Sequelize.STRING
      },
      daignosis: {
        type: Sequelize.STRING
      },
      dateofDiagnosis: {
        type: Sequelize.DATE
      },
      providerName: {
        type: Sequelize.STRING
      },
      providerPhoneNumber: {
        type: Sequelize.INTEGER
      },
      insruancePlan: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.INTEGER
      },
      groupId: {
        type: Sequelize.INTEGER
      },
      providerServicesNumber: {
        type: Sequelize.INTEGER
      }
    });
  
  
  
    return patientData;
  };
  