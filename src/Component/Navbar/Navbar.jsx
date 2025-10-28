import React from 'react';
import logo from '../../assets/Netflix_Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (<>
  

    <nav className="navbar">
      <div className="navbar-header">
        <img src={logo} alt="Netflix logo" className="navbar-img" />
      </div>
      <div className="navbar-container">
        <ul>
          <li>Movie Picker</li>
          <li>Top Genre</li>
          <li>Top Actor</li>
        </ul>
      </div>
    </nav>
    
     </>
  );
};

export default Navbar;
