import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="login-signup">
          Don't have an account? <Link to="/signup"><span>Sign up here</span></Link>
        </p>
        <p className="forgot-password">Forgot Password?</p>
      </div>
    </div>
  );
}

export default Login;

