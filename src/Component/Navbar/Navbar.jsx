import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Netflix_Logo.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { ToastContainer,toast } from 'react-toastify';
import useAuth from '../Hook/useAuth';
import './Navbar.css';

const Navbar = () => {
  const currentUser=useAuth();
  const handleLogout=async()=>{
    try{
      await signOut(auth);
      toast.success('Logged out successfully!', {
      position: 'top-center',
      autoClose: 2000,
    });

    }catch(error){
       console.error('Logout error:', error);
      toast.error('Failed to logout', { autoClose: 2000 });
    }
  }
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
        {currentUser&&<button onClick={handleLogout}>Logout</button>}
        <ToastContainer/>
      </div>
    </nav>
    
     </>
  );
};

export default Navbar;
