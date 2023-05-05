import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/loanCard.jpg';
import classes from '../styles/Story.module.css';

export default function Story({ post }) {
  console.log(typeof post);
  let path = window.location.pathname;
  //console.log(path);
  if (path === '/') {
    path = path + 'loan/' + post.id;
  } else {
    path = '/loan/' + post.id;
  }
  return (
    //<Link to={`stories/${post.id}`}>
    <Link to={path}>
      <div className={classes.story}>
        <img src={image} alt="" />
        <p>Loan ID: {post.id}</p>
        <div className={classes.qmeta}>
          <p>
            Application Status: <b>{post.status}</b>
          </p>
        </div>
        <div className={classes.qmeta}>
          <p> Amount : {post.currentLoanAmount}</p>
        </div>
        <div></div>
        <div>Applied at: {new Date(post.createdAt).toDateString()}</div>
        <div className={classes.p}>
          <b>
            <i>Click to see more. . .</i>
          </b>
        </div>
      </div>
    </Link>
  );
}
