import React from 'react';

import { Link } from 'react-router-dom';
import classes from '../styles/Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        <Link to="/">&laquo;</Link>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.pagination}>
            <Link onClick={() => paginate(number)} to="/" className="page-link">
              {number}
            </Link>
          </li>
        ))}

        <Link to="/">&raquo;</Link>
      </ul>
    </nav>
  );
};
export default Pagination;
