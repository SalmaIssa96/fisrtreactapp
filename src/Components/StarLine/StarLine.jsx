import React from 'react';
import './style.css';

const StarLine = ({ color = 'white' }) => {
  return (
    <div className="star-icon-wrapper">
      <p className={`star-icon ${color === 'black' ? 'star-icon-black' : ''}`}>
        <i className="fa-solid fa-star" />
      </p>
    </div>
  );
};

export default StarLine;
