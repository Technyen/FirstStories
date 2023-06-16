import React, { useState } from 'react';
import './LoginForm.css';
import CreateStoriesModal from './CreateStoriesModal';

function LoginForm(props) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSignIn=()=>{
    setShowCreateModal(true);
  }
  return (
    <div className="login-form">
      <h1>Log In</h1>
      <input type="text" placeholder='enter you email' /><br></br>
      <input type="text" placeholder='enter you password' />
      <button className='register-btn' onClick={handleSignIn} >SignIn</button>
      <p>Create account?</p> <a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Signup</a>
     <CreateStoriesModal setShowModal={setShowCreateModal} />
     

    </div>


  );
}

export default LoginForm
