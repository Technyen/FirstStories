import React, { useState } from 'react';
import './RegisterPop.css';
import SignUpForm from './SignUpForm';




function RegisterPop(props) {
  const [signPop,setSignPop]= useState(false);

  return (props.trigger) ? (
    
    <div className="login-form">
      <div className='registerPop'>
      <div className='registerPop-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
          {props.children}
          <div className="form-box solid">
            <form>
              
              <h1 className="login-text">Sign In</h1>
              <label>UserName</label><br></br>
              <input type=" text"
                name="username"
                className="login-box" /><br></br>
              <label>Password</label><br></br>
              <input type="password"
                name="password"
                className="login-box" /><br></br>
              <input type="submit" value="LOGIN" className="login-btn" /><br></br>
              <button className="register-btn" onClick={() => setSignPop(true)}>REGISTER</button>
              
            </form>
          </div>
        </div>

      </div>
    </div>
  ) : "";
}

export default RegisterPop
