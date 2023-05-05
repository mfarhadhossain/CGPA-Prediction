const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');

const studentprofile = sequelize.define('studentprofile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  studentID: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  semester: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sscResult: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  hscResult: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  fatherEducation: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  fatherJob: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  motherEducation: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  motherJob: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  majorIllness: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  attendanceInClass: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  studyHour: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  internetFacilities: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  groupStudy: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  culturalInvolvement: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  politicalInvolvement: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  hostelStaying: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  gettingAnyScholarship: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  selfIncome: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  relationalStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  communicationSkill: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  confidence: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  previousSemesterResult: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = studentprofile;
