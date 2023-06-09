import React from "react";
import RegisterPop from "./Components/RegisterPop";
import { useState } from "react";
import { createUser } from "./Services/userService";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";




export default function App() {
  const [buttonPop, setButtonPop] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(true);


  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <div className="App">
      <main>
        <h1>CHILDREN'S STORIES</h1>
        <p>Make you own stories and share with your kids</p>
        <br></br>
        <button onClick={() => setButtonPop(true)}>Create Stories</button>
      </main>

      <RegisterPop trigger={buttonPop} setTrigger={setButtonPop}/>
              
      
     
     
      

    </div>
  );
}
