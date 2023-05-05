import React from 'react';
import classes from '../styles/Stories.module.css';
import Story from './Story';

export default function Stories({ posts }) {
  return (
    <div className={classes.stories}>
      {posts.map((st) => (
        <Story post={st} />
      ))}
    </div>
  );
}
