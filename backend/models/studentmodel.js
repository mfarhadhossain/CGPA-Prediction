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

  department: { type: Sequelize.STRING, defaultValue: '' },
  semester: { type: Sequelize.INTEGER, defaultValue: 0 },
  gender: { type: Sequelize.STRING, defaultValue: '' },
  sscResult: { type: Sequelize.FLOAT, defaultValue: 0 },
  hscResult: { type: Sequelize.FLOAT, defaultValue: 0 },
  fatherEducation: { type: Sequelize.INTEGER, defaultValue: 0 },
  fatherJob: { type: Sequelize.STRING, defaultValue: '' },
  motherEducation: { type: Sequelize.INTEGER, defaultValue: 0 },
  motherJob: { type: Sequelize.STRING, defaultValue: '' },
  majorIllness: { type: Sequelize.STRING, defaultValue: '' },
  attendanceInClass: { type: Sequelize.INTEGER, defaultValue: 0 },
  studyHour: { type: Sequelize.INTEGER, defaultValue: 0 },
  internetFacilities: { type: Sequelize.BOOLEAN, defaultValue: false },
  groupStudy: { type: Sequelize.BOOLEAN, defaultValue: false },
  culturalInvolvement: { type: Sequelize.BOOLEAN, defaultValue: false },
  politicalInvolvement: { type: Sequelize.BOOLEAN, defaultValue: false },
  hostelStaying: { type: Sequelize.BOOLEAN, defaultValue: false },
  gettingAnyScholarship: { type: Sequelize.BOOLEAN, defaultValue: false },
  selfIncome: { type: Sequelize.FLOAT, defaultValue: 0 },
  relationalStatus: { type: Sequelize.STRING, defaultValue: '' },
  communicationSkill: { type: Sequelize.INTEGER, defaultValue: 0 },
  confidence: { type: Sequelize.INTEGER, defaultValue: 0 },
  previousSemesterResult: { type: Sequelize.FLOAT, defaultValue: 0 },
});

module.exports = students;
