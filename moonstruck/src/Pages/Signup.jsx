import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';  
const Signup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
