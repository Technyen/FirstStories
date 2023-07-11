import React, { useState } from 'react';
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


    <div className="modal-content">
      <div className="modal-header">
        <h1>Log In</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type='email' className='form-label' value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email' /><br></br>
        <input type='password' className='form-label' value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password' />
        <br></br><button className="btn btn-primary" onClick={() => handleOk()}>Ok</button>
      </div>
      <div className="modal-footer">
        <p className="text-danger">{loginResult}</p>
        <p>Create account?</p><a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Signup</a>
      </div>
    </div>



    // <div className="modal-dialog modal-dialog-centered">
    //   <button className="close-btn" onClick={()=>props.setShowModal(false)}>Close</button>
    //   <h1>Log In</h1>
    //   <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email' /><br></br>
    //   <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password' />
    //   <button className="btn btn-primary" onClick={() => handleOk()}>Ok</button>
    //   <p className="text-danger">{loginResult}</p>
    //   <p>Create account?</p><a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Signup</a>
    // </div>
  );
}

export default LoginForm
