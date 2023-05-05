const Employee = require('../models/teachermodel');
const EmployeeService = require('../services/employeeServices');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const contentNegotiate = require('../utils/sendResponse');
const studentprofile = require('../models/studentprofilemodel');
const Customer = require('../models/studentmodel');

const employeeService = new EmployeeService(Employee, studentprofile, Customer);

exports.getEmployee = catchAsync(async (req, res, next) => {
  const employeeData = await employeeService.getEmployee(req.params.id);
  if (!employeeData) {
    return next(new AppError('No Employee was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, employeeData, 'Employee Fetched Successfully!');
});
exports.getAllEmployee = catchAsync(async (req, res, next) => {
  const employeesData = await employeeService.getAllEmployee();
  contentNegotiate.sendResponse(req, res, 200, employeesData, 'Employees Fetched Successfully!');
});

exports.updateEmployee = catchAsync(async (req, res, next) => {
  const employeeData = await employeeService.updateEmployee(req.params.id, req.body);
  if (!employeeData[0]) {
    return next(new AppError('No employee was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, {}, 'Employee is Updated!');
});
exports.deleteEmployee = catchAsync(async (req, res, next) => {
  const employeeData = await employeeService.deleteEmployee(req.params.id);
  if (!employeeData) {
    return next(new AppError('No user was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 204, {}, 'Employee is Deleted!');
});
exports.employeeService = employeeService;
