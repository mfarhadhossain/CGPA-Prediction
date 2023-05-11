import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from '../contexts/Context';
import Layout from './Layout';
import EmployeeLogin from './pages/EmployeeLogin';
import Home from './pages/Home';
import StudentForm from './pages/StudentForm';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/SignUp';
import TeacherSignup from "./pages/TeacherSignup";

import '../styles/App.css'
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import StudentProfile from "./pages/StudentProfile";
const App = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Layout>
        <div className="layout-main-container">
          <div className="layout-main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/employee/login" element={<EmployeeLogin />} />
          <Route exact path="/employee/signup" element={<TeacherSignup />} />

          <Route exact path="/edit-information/" element={<StudentForm />} />
          <Route exact path="/students/:id" element={<StudentProfile />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
          </div>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
