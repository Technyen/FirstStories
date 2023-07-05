import React, { useState } from 'react';
import './LoginForm.css';
import CreateStoriesModal from './CreateStoriesModal';
import { loginUser } from '../Services/userService';

function LoginForm(props) {
  const [showCreateStoryModal, setShowCreateStoryModal] = useState(false);
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleOk=()=>{
    loginUser(email,password);
    props.setIsUserIdendified(true);
  }

  return (
    <div className="login-form">
      <h1>Log In</h1>
      <input type='email'  value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email'/><br></br>
        <input type= 'password'   value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password'/> 
      <button className='register-btn' onClick={handleOk}>Ok</button>
      <p>Create account?</p> <a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Signup</a>
     

    </div>


  );
}

export default LoginForm
