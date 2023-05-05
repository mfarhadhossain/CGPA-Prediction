const bcrypt = require('bcrypt');

class employeeServices {
  constructor(table, loanTable, customerTable) {
    this.employeeTable = table;
    this.loanTable = loanTable;
    this.customerTable = customerTable;
  }
  createEmployee = async (employeeBody) => {
    const password = await bcrypt.hash(employeeBody.password, 10);
    const { name, email, designation } = employeeBody;
    const newEmployee = {
      name,
      email,
      designation,
      password,
    };
    const employeeData = await this.employeeTable.create(newEmployee);
    return employeeData;
  };
  getEmployee = async (id) => {
    const employeeData = await this.employeeTable.findOne({
      where: { id },
    });
    return employeeData;
  };
  // without password
  getAllEmployee = async () => {
    const employeeData = await this.employeeTable.findAll();
    return employeeData;
  };
  updateEmployee = async (id, employeeBody) => {
    const employeeData = await this.employeeTable.update(employeeBody, {
      where: { id },
    });
    return employeeData;
  };
  deleteEmployee = async (id) => {
    const employeeData = await this.employeeTable.destroy({
      where: { id },
    });
    return employeeData;
  };
  getEmployeebyEmail = async (email) => {
    const employeeData = await this.employeeTable.findOne({
      where: { email },
    });
    return employeeData;
  };
}
module.exports = employeeServices;
