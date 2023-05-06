import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Context} from '../contexts/Context';
import classes from './../styles/Account.module.css';

export default function Account() {
    const {user, dispatch} = useContext(Context);
    console.log(user);
    const logout = () => {
        dispatch({type: 'LOGOUT'});

        navigate('/');
    };

    const navigate = useNavigate();

    const handlePostLoan = () => {
        navigate('/edit-information/');
    };
    const handleGetLoans = () => {
        navigate('/loans/');
    };
    const showLoanStatus = () => {
        navigate('/students/' + user.data.user.id);
    };
    const foundEmployee = () => {
        return (
            <>
                <div className={classes.accountClickable}>
          <span title="See all applications" onClick={handleGetLoans}>
            Applications
          </span>
                </div>
                <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
                <div className={classes.accountClickable}>
          <span title="You're a great employee!">
            {user.data.user.name}
              {/* bug */}
          </span>
                </div>
                <span className="material-icons-outlined" title="Logout" onClick={logout}>
          exit_to_app
          Logout
        </span>
            </>
        );
    };
    const foundCustomer = () => {
        return (
            <>
                <div className={classes.accountClickable}>
                      <span title="Edit your information" onClick={handlePostLoan}>
                        Edit
                      </span>
                </div>
                {/*<span className="material-icons-outlined" title="Account">*/}
                {/*  account_circle*/}
                {/*</span>*/}
                <div className={classes.accountClickable}>
                      <span title="Click to see your profile" onClick={showLoanStatus}>
                          Profile
                      </span>
                </div>
                        <span className="material-icons-outlined" title="Logout" onClick={logout}>
                          Logout
                        </span>
            </>
        );
    };
    return (
        <div className={classes.account}>
            {user ? (
                user.data.user.isEmployee ? (
                    <>{foundEmployee()}</>
                ) : (
                    <> {foundCustomer()} </>
                )
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}