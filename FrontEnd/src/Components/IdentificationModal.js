import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IdentificationModal.css";
import { useState } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default function IdentificationModal(props) {
  const [isUserRegistered,setIsUserRegistered]=useState(true);

  return (props.showModal) ? (
      <div className="popup">
          <div className="popup-inner">
              <button className="close-btn" onClick={()=>props.setShowModal(false)}>Close</button>
              {
                  isUserRegistered?
                  <LoginForm setIsUserRegistered={setIsUserRegistered} setIsUserIdendified={props.setIsUserIdendified}/>
                : <RegisterForm setIsUserRegistered ={setIsUserRegistered} setIsUserIdendified={props.setIsUserIdendified}/>
              }
          </div>
      </div>
  ) :null;
}
