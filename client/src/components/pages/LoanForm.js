import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import React, { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import '../../styles/write.css';

export default function PostStory() {
  const [currentLoanAmount, setcurrentLoanAmount] = useState('');

  const [creditScore, setcreditScore] = useState('');
  const [annualIncome, setannualIncome] = useState('');
  const [yearsInCurrentJob, setyearsInCurrentJob] = useState('');
  const [monthlyDebt, setmonthlyDebt] = useState('');
  const [yearsofCreditHistory, setyearsofCreditHistory] = useState('');
  const [lastDelinquent, setlastDelinquent] = useState('');
  const [openAccounts, setopenAccounts] = useState('');
  const [creditProblems, setcreditProblems] = useState('');
  const [creditBalance, setcreditBalance] = useState('');
  const [maxOpenCredit, setmaxOpenCredit] = useState('');
  const [bankruptcies, setbankruptcies] = useState('');
  // options
  const [term, setTerm] = useState('');
  const [homeOwnership, sethomeOwnership] = useState('');
  const [purpose, setpurpose] = useState('');

  // options

  const [error, setError] = useState('');

  const { user } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      // authorID: user.data.user.id,
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
    };
    const token = user.data.token;
    try {
      setError('');
      //console.log(`before axios post story`);
      //console.log(newPost);
      const instance = axios.create({
        headers: {
          'Acess-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await instance.post(
        'http://127.0.0.1:3005/api/v1/customers/loan/' + user.data.user.id,
        newPost
      );
      // console.log(`printing ` + res);
      //window.location.replace('http://localhost:3000/customers/loan/' + user.data.customer.id);
      navigate('/customers/loan/' + user.data.user.id); // need to login again
      window.location.reload();
      //console.log(`after axios post story`);
    } catch (err) {
      setError('You cannot apply more than once!');
      //console.log(`something went wrong`);
    }
  };
  return (
    <div className="write">
      {error && <p className="error">{error}</p>}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* <label>Current Loan Amount</label> */}
          <input
            type="number"
            placeholder="Current Loan Amount"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setcurrentLoanAmount(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Type 0(Short Term) or 1(Long Term)"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Credit Score"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setcreditScore(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Annual Income"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setannualIncome(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Years in Current Job"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setyearsInCurrentJob(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Home Ownership: Type 0(Have Mortgage), 1(Home Mortgage) 2(Own Home) 3(Rent)"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => sethomeOwnership(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="number"
            placeholder="Purpose: 
            1.Business Loan 
            2.Buy House 
            3.Buy a Car 
            4. Debt Consolidation
            5. Educational Expenses
            6. Home Improvements 
            7. Medical Bills
            8. Other
            9. Take a Trip
            10. major_purchase
            11. moving
            12. Personal Computer
            13. renewable_energy
            14. small_business
            15. vacation
            16. wedding"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setpurpose(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Monthly Debt"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setmonthlyDebt(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Years of Credit History"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setyearsofCreditHistory(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Months since last delinquent"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setlastDelinquent(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Number of Open Accounts"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setopenAccounts(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Number of Credit Problems"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setcreditProblems(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Current Credit Balance"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setcreditBalance(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Maximum Open Credit"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setmaxOpenCredit(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
          <input
            type="number"
            placeholder="Bankruptcies? Type 1 if yes. 0 otherwise."
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setbankruptcies(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Apply!
        </button>
      </form>
    </div>
  );
}
