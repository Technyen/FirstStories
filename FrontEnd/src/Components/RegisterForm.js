import React, { useState } from 'react';
import { registerUser } from '../Services/userService';

function RegisterForm(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerResult, setRegisterResult] = useState('')

  async function handleOk() {
    var result = await registerUser(name, email, password);
    setRegisterResult(result);
    if (result === null) {
      props.setIsUserIdendified(true);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='enter your name' name='name' /><br></br>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email' /><br></br>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password' />
      <button onClick={() => handleOk()}>Ok</button>
      <p className="text-danger">{registerResult}</p>
      <p>Already have an Account?</p><a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(true)}>Signin</a>
    </div>
  )
}

export default RegisterForm
