import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase';
const Signin = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
  }))  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,formData.email,formData.password);
      toast.success('🎉 Logged in successfully!', {
        position: 'top-center',
        autoClose: 3000,
        style: {
          top: '150px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4BB543',
          color: '#fff',
        },
      });
      setFormData({email:'',password:''});
      setTimeout(()=>navigate('/'),2000);
    }catch(error){
     if(error.code==='auth/invalid-credential'){
        toast.error('Either email or password is incorrect.',{position:'top-center',autoClose:3000,  style: {
        top: '150px',          // distance from the top of the viewport
        left: '50%',           // center horizontally
        transform: 'translateX(-50%)', // properly center
        backgroundColor: '#e7ebe7ff',    // optional custom color
        color: '#222020ff',                 // text color
      }
    })
      }
      setFormData({email:'',password:''});
    }

    
  }
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>

        <form className="signin-form" onSubmit={handleSubmit}>
          <input type="email" name='email' placeholder="Enter email or phone number" value={formData.email} onChange={handleChange} />
          <input type="password" name='password'  placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
          <button type='submit'>Sign In</button>

          <div className="options">
            <label>
              <input type="checkbox" className='checkbox'/> Remember me
            </label>
            <p className="forgot">Forgot Password?</p>
          </div>
        </form>

        <div className="signuptext">
          <p>
            New to our platform? <Link to='/signup'><span>Sign up now.</span></Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signin;
