import React, { useState } from 'react';
import { createUser } from '../Services/userService';



function RegisterForm(props) {
  const [name,setName] = useState('')
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleOk=()=>{
    createUser(name,email,password);
    props.setIsUserIdendified(true);
  }
   
    return (
      <form  className="register-form">
        <h1>Sign Up</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='enter your Name' name='name'/><br></br>
        <input type='email'  value={email} onChange={e => setEmail(e.target.value)} placeholder='enter your email' name='email'/><br></br>
        <input type= 'password'   value={password} onChange={e => setPassword(e.target.value)} placeholder=' enter your password' name='password'/> 
        <button onClick={handleOk}>Ok</button>
        
        <p>Already have an Account ? <a style={{color:"red",cursor:'pointer'}} onClick={()=>{props.setIsUserRegistered(true)}}>SignIn</a></p>
      </form>
    ) 
  }

  export default RegisterForm
  