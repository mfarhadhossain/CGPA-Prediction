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
});

module.exports = students;
