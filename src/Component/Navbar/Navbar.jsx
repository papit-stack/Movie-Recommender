import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Netflix_Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (<>
  

    <nav className="navbar">
      <div className="navbar-header">
     <Link to='/'>  <img src={logo} alt="Netflix logo" className="navbar-img" /></Link> 
      </div>
      <div className="navbar-container">
        <ul>
          <li><Link to='/' className='link'> Movie Picker</Link></li>
          <li>Top Genre</li>
          <li>Top Actor</li>
        </ul>
      </div>
    </nav>
    
     </>
  );
};

export default Navbar;
