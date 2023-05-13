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
                      </span>
                </div>
                <div>
                  <span className="material-icons-outlined" title="Logout" onClick={logout}>
                    logout
                  </span>
                </div>
            </>
        );
    };
    const foundCustomer = () => {
        return (
            <>
                <div className={classes.accountClickable}>
                      <span title="Edit your information" onClick={handlePostLoan}>
                        Predict Your CGPA
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
                    <div>
                          <span className="material-icons-outlined" title="Logout" onClick={logout}>
                            logout
                          </span>
                    </div>
            </>
        );
    };
    return (
        <div className={classes.account}>
            {user ? (
                user.data.user.isAdmin ? (
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