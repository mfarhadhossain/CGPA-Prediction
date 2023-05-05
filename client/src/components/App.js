import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from '../contexts/Context';
import '../styles/App.css';
import Layout from './Layout';
import EmployeeLogin from './pages/EmployeeLogin';
import Home from './pages/Home';
import LoanApplications from './pages/LoanApplications';
import LoanForm from './pages/LoanForm';
import LoanStatus from './pages/LoanStatus';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/SignUp';
import SingleLoan from './pages/SingleLoan';
import TeacherSignup from "./pages/TeacherSignup";
const App = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/employee/login" element={<EmployeeLogin />} />
          <Route exact path="/employee/signup" element={<TeacherSignup />} />

          <Route exact path="/loan/:id" element={<SingleLoan />} />
          <Route exact path="/loans/" element={<LoanApplications />} />
          <Route exact path="/applyForLoan/" element={<LoanForm />} />
          <Route exact path="/customers/loan/:id" element={<LoanStatus />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
