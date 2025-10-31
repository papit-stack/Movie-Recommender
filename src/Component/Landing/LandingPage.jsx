import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase.js'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';           
import './LandingPage.css';

const LandingPage = () => {
  // form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('🎉 Signup successful!!!!', {
        position: 'top-center',
        autoClose: 3000,
         style: {
        top: '150px',          // distance from the top of the viewport
        left: '50%',           // center horizontally
        transform: 'translateX(-50%)', // properly center
        backgroundColor: '#e7ebe7ff',    // optional custom color
        color: '#222020ff',                 // text color
      }
      });
      setEmail('');
      setPassword('');
      setTimeout(()=>navigate('/signin'),1500)
    }catch (error) {
      if(error.code==='auth/email-already-in-use'){
        toast.error('This email is already registered.Please sign in instead.',{position:'top-center',autoClose:3000,  style: {
        top: '150px',          // distance from the top of the viewport
        left: '50%',           // center horizontally
        transform: 'translateX(-50%)', // properly center
        backgroundColor: '#e7ebe7ff',    // optional custom color
        color: '#222020ff',                 // text color
      }
    })
      }
      else {
        toast.error(error.message, {position:'top-center',autoClose:3000,  style: {
        top: '150px',          // distance from the top of the viewport
        left: '50%',           // center horizontally
        transform: 'translateX(-50%)', // properly center
        backgroundColor: '#e7ebe7ff',    // optional custom color
        color: '#222020ff',                 // text color
      }
    });
      }
    }

  };

  return (
    <div className="body-container">
      <div className="content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p className="subtext">
          Ready to watch? Enter your details to create or restart your membership.
        </p>

        {/* signup form */}
        <form className="input-container" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Get Started</button>
        </form>

        <p className="signin-text">
          Already have an account?{' '}
          <Link to="/signin" className="link">
            <span>Sign in now</span>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LandingPage;
