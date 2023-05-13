const bcrypt = require('bcrypt');
const calculateScore = require('../utils/calculateScore');

class customerServices {
  constructor(table, courses) {
    this.customerTable = table;
    this.coursesTable = courses;
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
  // Courses
  getCourse = async (id) => {
    const courseData = await this.coursesTable.findOne({
      where: { id },
    });
    return courseData;
  };

  getAllCourse = async () => {
    const courseData = await this.coursesTable.findAll();
    return courseData;
  };

  updateCourse = async (id, courseBody) => {
    const courseData = await this.coursesTable.update(courseBody, {
      where: { id },
    });
    return courseData;
  };

  postCourse = async (id, courseBody) => {
    const newCourse = {
      ...courseBody,
      studentId: id,
    };

    const courseData = await this.coursesTable.create(newCourse);
    return courseData;
  };
  // predict cgpa
  predictCGPA = async (id) => {
    const customerData = await this.customerTable.findOne({
      where: { id },
    });
    //console.log(`searching for customer with id ${id}`);
    //console.log(customerData);
    if (customerData) {
      // first score using weights

      const {
        currentLoanAmount,
        creditScore,
        annualIncome,
        yearsInCurrentJob,
        monthlyDebt,
        yearsofCreditHistory,
        lastDelinquent,
        openAccounts,
        creditProblems,
        creditBalance,
        maxOpenCredit,
        bankruptcies,
        term,
        homeOwnership,
        purpose,
      } = customerData;
      const weights = [
        currentLoanAmount,
        term,
        creditScore,
        annualIncome,
        yearsInCurrentJob,
        homeOwnership,
        purpose,
        monthlyDebt,
        yearsofCreditHistory,
        lastDelinquent,
        openAccounts,
        creditProblems,
        creditBalance,
        maxOpenCredit,
        bankruptcies,
      ];
      const sc = await calculateScore.calculate(weights);
      customerData.score = sc;
      await customerData.save();
      //console.log(`calculated score: ${sc}`);
      // // update score column
      // const customerData2 = await this.loanTable.update(customerData, {
      //   where: { score: sc },
      // });
      return customerData;
    } else {
      // return error couldn't find error
      return null;
    }
  };
}
module.exports = customerServices;
