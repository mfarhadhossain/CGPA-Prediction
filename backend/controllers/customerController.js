const Customer = require('../models/studentmodel');
const studentprofile = require('../models/studentprofilemodel');
const CustomerService = require('../services/customerServices');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const contentNegotiate = require('../utils/sendResponse');
const customerService = new CustomerService(Customer, studentprofile);

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
exports.customerService = customerService;
