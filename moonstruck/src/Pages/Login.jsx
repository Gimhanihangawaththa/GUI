import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css'; 

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="loginsignup-login">
          Don't have an account? <Link to="/signup"><span>Sign Up</span></Link>
        </p>
        <div className="loginsignup-agree">
          <p>Forgot your password? <span>Reset here</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
