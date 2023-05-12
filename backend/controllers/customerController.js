const Customer = require('../models/studentmodel');
const CustomerService = require('../services/customerServices');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const contentNegotiate = require('../utils/sendResponse');
const customerService = new CustomerService(Customer);

exports.getCustomer = catchAsync(async (req, res, next) => {
  const customerData = await customerService.getCustomer(req.params.id);
  if (!customerData) {
    return next(new AppError('No customer was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, customerData, 'Customer Fetched Successfully!');
});
exports.getAllCustomer = catchAsync(async (req, res, next) => {
  const customersData = await customerService.getAllCustomer();
  contentNegotiate.sendResponse(req, res, 200, customersData, 'Users Fetched Successfully!');
});
exports.updateCustomer = catchAsync(async (req, res, next) => {
  const customerData = await customerService.updateCustomer(req.params.id, req.body);
  if (!customerData[0]) {
    return next(new AppError('No user was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, {}, 'User is Updated!');
});
exports.deleteCustomer = catchAsync(async (req, res, next) => {
  const customerData = await customerService.deleteCustomer(req.params.id);
  if (!customerData) {
    return next(new AppError('No user was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 204, {}, 'User is Deleted!');
});
exports.getCourse = catchAsync(async (req, res, next) => {
  const courseData = await customerService.getCourse(req.params.id);
  if (!courseData) {
    return next(new AppError('No course was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, courseData, 'Course Fetched Successfully!');
});

exports.getAllCourse = catchAsync(async (req, res, next) => {
  const coursesData = await customerService.getAllCourse();
  contentNegotiate.sendResponse(req, res, 200, coursesData, 'Courses Fetched Successfully!');
});

exports.updateCourse = catchAsync(async (req, res, next) => {
  const courseData = await customerService.updateCourse(req.params.id, req.body);
  if (!courseData[0]) {
    return next(new AppError('No course was found with that ID', 404));
  }
  contentNegotiate.sendResponse(req, res, 200, {}, 'Course is Updated!');
});

exports.postCourse = catchAsync(async (req, res, next) => {
  const courseId = parseInt(req.params.id);
  const courseData = await customerService.postCourse(courseId, req.body);
  contentNegotiate.sendResponse(req, res, 201, courseData, 'Course Created Successfully!');
});
exports.customerService = customerService;
