import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm(props) {
  return (
     <div className="login-form">
      <h1>Log In</h1>
      <input type="text" placeholder='enter you email'/><br></br>
      <input type="text" placeholder='enter you password'/>
      <button>Register</button>
      <p>Create account?</p> <a style={{color:"red",cursor:'pointer'}} onClick={()=>props.setLoginForm(false)}>Signup</a>
    </div>


  ) 
}

export default LoginForm
