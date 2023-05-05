const bcrypt = require('bcrypt');

class customerServices {
  constructor(table, studentprofile) {
    this.customerTable = table;
    this.studentprofileTable = studentprofile;
  }
  createCustomer = async (studentBody) => {
    const password = await bcrypt.hash(studentBody.password, 10);
    const { name, email, roll, registrationNo } = studentBody;
    const newStudent = {
      name,
      email,
      roll,
      registrationNo,
      password,
    };
    const customerData = await this.customerTable.create(newStudent);
    return customerData;
  };
  getCustomer = async (id) => {
    const customerData = await this.customerTable.findOne({
      where: { id },
    });
    return customerData;
  };
  getAllCustomer = async () => {
    const customerData = await this.customerTable.findAll();
    return customerData;
  };
  updateCustomer = async (id, customerBody) => {
    const customerData = await this.customerTable.update(customerBody, {
      where: { id },
    });
    return customerData;
  };
  deleteCustomer = async (id) => {
    const customerData = await this.customerTable.destroy({
      where: { id },
    });
    return customerData;
  };
  getCustomerbyEmail = async (email) => {
    const customerData = await this.customerTable.findOne({
      where: { email },
    });
    return customerData;
  };
}
module.exports = customerServices;
