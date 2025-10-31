import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
const Signin = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  // const validate=(e)=>{
  //   if(e)
  // }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
  }))  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({email:'',password:''});
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
            New to our platform? <Link to='/  '><span>Sign up now.</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
