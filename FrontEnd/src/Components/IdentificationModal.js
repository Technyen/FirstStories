import React from "react";
import { useState } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default function IdentificationModal(props) {
  const [isUserRegistered,setIsUserRegistered]=useState(true);

  return (props.showModal) ? (
    <div>
      {
        isUserRegistered ?
          <LoginForm setIsUserRegistered={setIsUserRegistered} setIsUserIdendified={props.setIsUserIdendified}/> :
          <RegisterForm setIsUserRegistered ={setIsUserRegistered} setIsUserIdendified={props.setIsUserIdendified}/>
      }
    </div>
  ) :null;
}
