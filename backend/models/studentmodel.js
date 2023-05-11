const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');

const students = sequelize.define('students', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  roll: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  registrationNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  //ML attributes

  department: { type: Sequelize.STRING, defaultValue: 'N/A' },
  semester: { type: Sequelize.INTEGER, defaultValue: 0 },
  gender: { type: Sequelize.STRING, defaultValue: '' },
  sscResult: { type: Sequelize.FLOAT, defaultValue: 0 },
  hscResult: { type: Sequelize.FLOAT, defaultValue: 0 },
  fatherEducation: { type: Sequelize.INTEGER, defaultValue: 0 },
  fatherJob: { type: Sequelize.STRING, defaultValue: '' },
  motherEducation: { type: Sequelize.INTEGER, defaultValue: 0 },
  motherJob: { type: Sequelize.STRING, defaultValue: 'N/A' },
  majorIllness: { type: Sequelize.STRING, defaultValue: 'N/A' },
  attendance: { type: Sequelize.STRING, defaultValue: 'N/A' },
  studyHour: { type: Sequelize.STRING, defaultValue: 'N/A' },
  internetFacilities: { type: Sequelize.STRING, defaultValue: 'N/A' },
  groupStudy: { type: Sequelize.STRING, defaultValue: 'N/A' },
  culturalInvolvement: { type: Sequelize.STRING, defaultValue: 'N/A' },
  politicalInvolvement: { type: Sequelize.STRING, defaultValue: 'N/A' },
  hostelStaying: { type: Sequelize.STRING, defaultValue: 'N/A' },
  gettingScholarship: { type: Sequelize.STRING, defaultValue: 'N/A' },
  selfIncome: { type: Sequelize.STRING, defaultValue: 'N/A' },
  relationalStatus: { type: Sequelize.STRING, defaultValue: 'N/A' },
  communicationSkill: { type: Sequelize.STRING, defaultValue: 'N/A' },
  confidence: { type: Sequelize.STRING, defaultValue: 'N/A' },
  previousSemesterResult: { type: Sequelize.FLOAT, defaultValue: 0 },
});

module.exports = students;
