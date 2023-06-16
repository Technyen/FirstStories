import React, { useState } from 'react';

function RegisterForm(props) {
    return (
      <div className="register-form">
        <h1>Sign Up</h1>
        <input type='text' placeholder='enter your Name'/><br></br>
        <input type='text' placeholder='enter your email'/><br></br>
        <input type= 'text' placeholder=' enter your password'/> 
        <button onClick={()=>{props.setIsUserRegistered(true)}}>Sign Up</button>
        <p>Already have an Account ? <a style={{color:"red",cursor:'pointer'}} onClick={()=>{props.setIsUserRegistered(true)}}>SignIn</a></p>
      </div>
    ) 
  }
  
  export default RegisterForm
  