import React from 'react';
import './about.css';
import  StarLine  from '../StarLine/StarLine';

 const About = () => {
  return (
    <div className="about-section">
      <div className="container about-section-container">
        <h1 className="fw-bold text-white text-center">ABOUT COMPONENT</h1>
        <StarLine />
        <div className="row about-content">
          <div className="col-md-6">
            <p className="text-white fw-bold">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-white fw-bold">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;