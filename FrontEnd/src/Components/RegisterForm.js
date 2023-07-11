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
    <div className="modal-content">
      <div className="modal-header">
        <h1>Sign Up</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type='text' className='form-label' value={name} onChange={e => setName(e.target.value)} placeholder='enter your name' name='name'></input><br></br>
        <input type='email' className='form-label' value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email'></input><br></br>
        <input type='password' className='form-label' value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password' />
        <br></br><button className="btn btn-primary" onClick={() => handleOk()}>Ok</button>
      </div>
      <div className="modal-footer">
        <p className="text-danger">{registerResult}</p>
        <p>Already have an Account?</p><a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(true)}>Signin</a>
      </div>
    </div>
    
  )
}

export default RegisterForm
