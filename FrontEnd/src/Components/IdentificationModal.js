import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IdentificationModal.css";
import { useState } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default function IdentificationModal(props) {
  const [isLoginForm, setIsLoginForm] = useState(true);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button>
                {
                    isLoginForm?
                    <LoginForm setLoginForm={setIsLoginForm}/>
                  : <RegisterForm setLoginForm ={setIsLoginForm} />

                }
                
            </div>
        </div>

    ) :null;
        
       

}
