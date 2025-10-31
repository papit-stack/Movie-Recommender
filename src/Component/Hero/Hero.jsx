import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <h1>MOVIE RECOMMENDATION ENGINE</h1>
        </div>
        <div className="hero-sub-content">
          <p>You can't decide between thousands of movies available for streaming?</p>
          <p>Answer 6 questions and let us do the work!</p>
        </div>
     <Link to='/quiz'><button className="hero-btn"> Start Work</button></Link>
      </div>
    </div>
  );
};

export default Hero;
