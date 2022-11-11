module.exports = (sequelize, Sequelize) => {
  const patientData = sequelize.define("patients", {
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      primaryPhone: {
        type: Sequelize.STRING
      },
      alternativePhone: {
        type: Sequelize.STRING
      },
      currentMedications: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      providerName: {
        type: Sequelize.STRING
      },
      providerPhoneNumber: {
        type: Sequelize.STRING
      },
      insruancePlan: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.STRING
      },
      groupId: {
        type: Sequelize.STRING
      },
      providerServicesNumber: {
        type: Sequelize.STRING
      }
    });
  
    return patientData;
};
  