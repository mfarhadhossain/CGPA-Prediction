import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../contexts/Context';
import '../../styles/SingleLoan.module.css';
import Button from '../Button';
import Illustration from '../Illustration';
import img from './../../assets/images/appform.jpg';

export default function SingleLoan() {
  console.log(`single loan page a ashchi`);

  const location = useLocation();
  console.log(`pathname ` + location.pathname);
  const path = location.pathname.split('/')[2];

  console.log(path);

  const [post, setPost] = useState({});
  const [loading, setloading] = useState(false);
  const [USER, setUser] = useState({});

  const { user } = useContext(Context);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [predictionMode, setPredictionMode] = useState(false);
  const [approveMode, setApproveMode] = useState(false);
  const [declineMode, setDeclineMode] = useState(false);

  const [predictionValue, setPredictionValue] = useState(0);

  let authorName, token;
  if (user) {
    authorName = user.data.user.name;
    token = user.data.token;
  }
  console.log(`authorName ` + authorName);
  console.log(`token ` + token);

  useEffect(() => {
    const fetchLoanApplication = async () => {
      console.log(`fetchloan app er vitore`);
      setloading(true);
      const instance = axios.create({
        headers: {
          'Acess-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`axios er age`);
      const res = await instance.get('http://127.0.0.1:3005/api/v1/employees/loan/' + path);
      console.log('axios er por');
      console.log(`loan status `);
      //console.log(res.data);
      console.log(res.data.data);
      setPost(res.data.data);
      setloading(false);
    };
    fetchLoanApplication();
  }, []);

  useEffect(() => {
    const fetchUsername = async () => {
      console.log(`fetch usernmae er vitore`);
      const res = await axios.get('http://127.0.0.1:3005/api/v1/customers/' + path);
      console.log(`fetching user name `);
      console.log(res.data.data);
      setUser(res.data.data);
    };
    fetchUsername();
  }, []);

  // need to update
  const navigate = useNavigate();
  const showAllStory = () => {
    navigate('/stories/user/' + post.authorID);
  };
  const handleDelete = async () => {
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      await instance.delete(`http://127.0.0.1:3005/api/v1/stories/${post.id}`);
      window.location.replace('/');
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    const token = user.data.token;
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      const res = await instance.put(
        `http://127.0.0.1:3005/api/v1/employees/loan/${post.id}/predict`
      );
      console.log(`after prediction` + res);
      setUpdateMode(false);
      setPredictionValue(res.data.score);
      window.location.reload();
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };

  const handlePrediction = async () => {
    setPredictionMode(true);
    const token = user.data.token;
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      console.log(`try er vitore`);
      console.log(USER.id);
      const res = await instance.put(
        `http://127.0.0.1:3005/api/v1/employees/loan/${USER.id}/predict`
      );
      console.log(`after prediction`);
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      setPredictionMode(false);
      setPredictionValue(res.data.data.score * 1.0);
      window.location.reload();
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };

  const handleApprove = async () => {
    setApproveMode(true);
    const token = user.data.token;
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      console.log(`try er vitore`);
      console.log(USER.id);
      const res = await instance.put(
        `http://127.0.0.1:3005/api/v1/employees/loan/${USER.id}/approve`
      );
      console.log(`after approve`);
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      setApproveMode(false);
      window.location.reload();
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };

  const handleDecline = async () => {
    setDeclineMode(true);
    const token = user.data.token;
    console.log(token);
    const instance = axios.create({
      headers: {
        'Acess-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });
    try {
      console.log(`try er vitore`);
      console.log(USER.id);
      const res = await instance.put(
        `http://127.0.0.1:3005/api/v1/employees/loan/${USER.id}/decline`
      );
      console.log(`after decline`);
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      setDeclineMode(false);
      window.location.reload();
    } catch (err) {
      console.log(`err`);
      console.log(err);
    }
  };
  // handling delete popup

  const [openModal, setModalOpen] = useState(false);
  return (
    <>
      <div className="column">
        <Illustration image={img} />
        <body>
          <div className="table-title">
            <h3>Application Information</h3>
          </div>
          <table className="table-fill">
            <thead>
              <tr>
                <th className="text-left">Attributes</th>
                <th className="text-left" colspan="2">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <td className="text-left">Name</td>
                <td className="text-left" colspan="2">
                  {USER.name}
                </td>
              </tr>
              <tr>
                <td className="text-left">Customer ID</td>
                <td className="text-left" colspan="2">
                  {USER.id}
                </td>
              </tr>
              <tr>
                <td className="text-left">Email</td>
                <td className="text-left" colspan="2">
                  {USER.email}
                </td>
              </tr>
              <tr>
                <td className="text-left">Bank Account No.</td>
                <td className="text-left" colspan="2">
                  {USER.bankAccountNo}
                </td>
              </tr>
              <tr>
                <td className="text-left">Annual Income</td>
                <td className="text-left" colspan="2">
                  {post.annualIncome}
                </td>
              </tr>
              <tr>
                <td className="text-left">Bankruptcies</td>
                <td className="text-left" colspan="2">
                  {post.bankruptcies}
                </td>
              </tr>
              <tr>
                <td className="text-left">Credit Balance</td>
                <td className="text-left" colspan="2">
                  {post.creditBalance}
                </td>
              </tr>
              <tr>
                <td className="text-left">Credit Score</td>
                <td className="text-left" colspan="2">
                  {post.creditScore}
                </td>
              </tr>
              <tr>
                <td className="text-left">Last Delinquent</td>
                <td className="text-left" colspan="2">
                  {post.lastDelinquent}
                </td>
              </tr>
              <tr>
                <td className="text-left">Max Open Credit</td>
                <td className="text-left" colspan="2">
                  {post.maxOpenCredit}
                </td>
              </tr>
              <tr>
                <td className="text-left">Monthly Debt</td>
                <td className="text-left" colspan="2">
                  {post.monthlyDebt}
                </td>
              </tr>
              <tr>
                <td className="text-left">Open Accounts</td>
                <td className="text-left" colspan="2">
                  {post.openAccounts}
                </td>
              </tr>
              <tr>
                <td className="text-left">Purpose</td>
                <td className="text-left" colspan="2">
                  {post.purpose}
                </td>
              </tr>
              <tr>
                <td className="text-left">Term</td>
                <td className="text-left" colspan="2">
                  {post.term}
                </td>
              </tr>
              <tr>
                <td className="text-left">Years in Current Job</td>
                <td className="text-left" colspan="2">
                  {post.yearsInCurrentJob}
                </td>
              </tr>
              <tr>
                <td className="text-left">Years of Credit History</td>
                <td className="text-left" colspan="2">
                  {post.yearsofCreditHistory}
                </td>
              </tr>
              <tr>
                <td className="text-left">Account Created</td>
                <td className="text-left" colspan="2">
                  {new Date(USER.createdAt).toDateString()}
                </td>
              </tr>
              <tr>
                <td className="text-left">Application date</td>
                <td className="text-left" colspan="2">
                  {new Date(post.createdAt).toDateString()}
                </td>
              </tr>

              <tr>
                <td className="text-left">Prediction Score</td>
                <td className="text-left" colspan="2">
                  {post.score} %
                </td>
              </tr>
              <tr>
                <td className="text-left">Application Status</td>
                <td className="text-left" colspan="2">
                  {post.status}
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tr className="xd">
              <td>
                <Button onClick={handlePrediction}>Predict</Button>
              </td>
              <td>
                <Button onClick={handleApprove}>Approve</Button>
              </td>
              <td>
                <Button color="#f44336" onClick={handleDecline}>
                  Decline
                </Button>
              </td>
            </tr>
          </table>
        </body>
      </div>
    </>
  );
}
