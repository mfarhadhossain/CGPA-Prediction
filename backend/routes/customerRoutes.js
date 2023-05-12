const express = require('express');
const customers = require('../controllers/customerController');
const authController = require('../controllers/authController');
const customerMiddleware = require('../middleware/customerProtect');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/:id/courses').get(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.getAllCourse);
router.route('/').get(customers.getAllCustomer);
router
  .route('/:id')
  .get(customers.getCustomer)
  .patch(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.updateCustomer)
  .delete(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.deleteCustomer);
router
  .route('/course/:id')
  .get(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.getCourse)
  .post(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.postCourse)
  .patch(customerMiddleware.Protect, customerMiddleware.isAuthorized, customers.updateCourse);
module.exports = router;
