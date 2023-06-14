import React from "react";
import { useState } from "react";
import { createUser } from "./Services/userService";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

export default function App() {
  const [buttonPop, setButtonPop] = useState(false);
  const [loginForm, setLoginForm] = useState(true);

  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin);
  // };


  return (
    <div className="Header">
      <Header />
      <div className="App">

        <main>

          <h1>CHILDREN'S STORIES</h1>
          <p>Make you own stories and share with your kids</p>
          <br></br>
          <button onClick={() => setButtonPop(true)}>Create Stories</button>
          {
            loginForm ?
              <LoginForm setLoginForm={setLoginForm}/>
              : <RegisterForm setLoginForm ={setLoginForm} />
          }
        </main>

      </div>
    </div>
  )
}
