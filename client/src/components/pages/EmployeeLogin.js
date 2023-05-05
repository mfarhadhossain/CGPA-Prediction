import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.jpg';
import { Context } from '../../contexts/Context';
import authService from '../../services/employeeService';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const userRef = useRef();
  //const passwordRef = useRef();

  const [error, setError] = useState('');

  const { user, dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      setError('');
      //const email = userRef.current.value;
      //const password = passwordRef.current.value;
      const res = await authService.login(email, password).then(
        () => {
          navigate('/');
          window.location.reload();
        },
        (error) => {
          setError('Incorrect email or Password');
          console.log(error);
        }
      );
      dispatch({ type: 'LOGIN_SUCCESSS', payload: res.data.data });
      // localStorage.setItem('user')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      console.log(err);
    }
  };
  //console.log(user);

  return (
    <>
      <h1>Teacher Login</h1>

      <div className="column">
        <Illustration image={img} />
        <Form onSubmit={handleLogin} className={`${classes.login}`}>
          <TextInput
            required
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            required
            type="password"
            placeholder="Enter password"
            icon="lock"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={isFetching}>
            Login
          </Button>

          {error && <p className="error">{error}</p>}
          <div className="info">
            Are you a student? <Link to="/Login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Login;
