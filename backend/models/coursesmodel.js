const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');

const Courses = sequelize.define('courses', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  courseName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  attendanceInClass: {
    type: Sequelize.STRING,
    defaultValue: 'N/A',
  },
  studyHourPerWeek: {
    type: Sequelize.STRING,
    defaultValue: 'N/A',
  },
  groupStudy: {
    type: Sequelize.STRING,
    defaultValue: 'N/A',
  },
  confidence: {
    type: Sequelize.STRING,
    defaultValue: 'N/A',
  },
  classTestNumber: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  // ,
  // studentId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Student,
  //     key: 'id',
  //   },
  // },
});

module.exports = Courses;
