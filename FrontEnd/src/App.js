import React from "react";
import { useState } from "react";
import { createUser } from "./Services/userService";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import ModalCreateStories from "./Components/ModalCreateStories";

export default function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loginForm, setLoginForm] = useState(true);


   
  return (
    <div className="Header">
      <Header />
      <div className="App">

        <main>

          <h1>CHILDREN'S STORIES</h1>
          <p>Make you own stories and share with your kids</p>
          <br></br>
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"onClick={()=>setButtonPopup(true)}>Create Stories</button>
         <ModalCreateStories trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Create your own stories</h1>
          <input type="text" class="title"/>
         </ModalCreateStories>

          {
            loginForm ?
              <LoginForm setLoginForm={setLoginForm}/>
              : <RegisterForm setLoginForm ={setLoginForm} />
          }
        </main>
            

      </div>
     

    </div>
  );
}
