import React from 'react';
import StarLine from '../StarLine/StarLine';
import { TextField } from '@mui/material';
import './style.css';

const Contact = () => {
  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-center contact-section ">
      <h1 className="fw-bold "> Contact COMPONENT</h1>
      <StarLine color="black" />
      <div className="form-section w-50 d-flex flex-column gap-5 mt-4">
        <TextField
          id="standard-name-input"
          label="User Name"
          type="text"
          variant="standard"
        />
        <TextField
          id="standard-age-input"
          label="User Age"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-email-input"
          label="User Email"
          type="email"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
        />
        <div className="btn-section mt-3">
          <button type="sumbmit" className='btn-form'>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
