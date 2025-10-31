import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="body-container">
      <div className="content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p className="subtext">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="input-container">
          <input type="email" placeholder="Enter your email here" required/>
          <button>Get Started</button>
        </div>

        <p className="signin-text">
          Already have an account? <Link to='/signin' className='link'><span>Sign in now</span></Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
