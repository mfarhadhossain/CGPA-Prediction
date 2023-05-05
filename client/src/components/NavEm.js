import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/mylogo.png';
import classes from '../styles/Nav.module.css';
import Account from './AccountEm';
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="ABC bank logo" />
            <h3>ABC Bank: Employee</h3>
          </Link>
        </li>
        <div className={classes.topCenter}>
          <ul className={classes.topList}>
            {/* <li className={classes.topListItem}>
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className={classes.topListItem}>
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className={classes.topListItem}>
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li> */}
          </ul>
        </div>
      </ul>
      <Account />
    </nav>
  );
}
