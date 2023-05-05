import React from 'react';
import classes from '../styles/Illustration.module.css';

export default function Illustration({ image }) {
  // console.log('checking');
  // console.log(props);

  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}
