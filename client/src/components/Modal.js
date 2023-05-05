import React from 'react';
import classes from '../styles/Modal.module.css';
import Button from './Button';

export default function Modal({ setOpenModal }) {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>
        <div className={classes.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className={classes.title}>
          <h3>Are you sure you wanna delete this?</h3>
        </div>
        <div className={classes.body}>Image</div>
        <div className={classes.footer}>
          <Button onClick={() => setOpenModal(false)} id={classes.cancelBtn}>
            Cancel
          </Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
}
