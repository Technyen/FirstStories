import React, { useState } from 'react';
import './LoginForm.css';
import { loginUser } from '../Services/userService';

function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginResult, setLoginResult] = useState('')


  async function handleOk() {
    var result = await loginUser(email, password);
    setLoginResult(result);
    if (result === null) {
      props.setIsUserIdendified(true);
    }

  }

  return (
    <div className="login-form">
      <h1>Log In</h1>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email' /><br></br>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password' />
      <button className='register-btn' onClick={() => handleOk()}>Ok</button>
      <p>Create account?</p> <a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Signup</a>
      <p className="text-danger">{loginResult}</p>
    </div>


  );
}

export default LoginForm
