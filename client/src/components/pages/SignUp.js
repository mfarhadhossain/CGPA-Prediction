import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/signup.jpg';
import { Context } from '../../contexts/Context';
import authService from '../../services/authService';
import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [roll, setRoll] = useState(0);
  const [registration, setRegistration] = useState(0);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const { user, dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    try {
      setError('');
      setLoading(true);
      console.log(`before authService`);
      const res = await authService.signUp(username, roll, registration, email, password).then(
        () => {
          navigate('/'); // need to login again
          window.location.reload();
        },
        (error) => {
          setError('Failed to create an account!');
          console.log(error);
        }
      );
      console.log(`res ` + res);
      console.log(`res.data ` + res.data);
      console.log(`res.data.data ` + res.data.data);
      dispatch({ type: 'LOGIN_SUCCESSS', payload: res.data.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      console.log(err);
    }
  };
  return (
    <>
      <h1>Create a student account</h1>

      <div className="column">
        <Illustration image={img} />

        <Form onSubmit={handleSignUp} className={`${classes.signup}`}>
          <TextInput
            required
            type="text"
            placeholder="Enter your name"
            icon="person"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
              required
              type="text"
              placeholder="Enter your class Roll"
              icon="person"
              onChange={(e) => setRoll(e.target.value)}
          />
          <TextInput
              required
              type="text"
              placeholder="Enter your registration no"
              icon="person"
              onChange={(e) => setRegistration(e.target.value)}
          />

          <TextInput
            required
            type="text"
            placeholder="Enter your email"
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

          <TextInput
            required
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Checkbox required text="I agree to the Terms &amp; Conditions" />

          {/* <button type="submit">Submit Now</button> */}
          <Button type="submit" disabled={isFetching}>
            Submit Now
          </Button>

          {error && <p className="error">{error}</p>}
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
          <div className="info">
            Are you a teacher? <Link to="/employee/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Signup;
