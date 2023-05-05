import React from 'react';
import classes from '../styles/Form.module.css';
export default function Form({ children, className, ...rest }) {
  //console.log('testing form');
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
}
