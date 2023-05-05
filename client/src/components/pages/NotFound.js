import React from 'react';
import img from '../../assets/images/404.jpg';
import Illustration from '../Illustration';

export default function NotFound() {
  return (
    <>
      <center>
        <h1>Please Enter right URL!</h1>
        <Illustration image={img} />
      </center>
    </>
  );
}
