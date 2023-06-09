import React from "react";
import RegisterPop from "./Components/RegisterPop";
import { useState } from "react";
import { createUser } from "./Services/userService";



export default function App() {
  const [buttonPop, setButtonPop] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>CHILDREN'S STORIES</h1>
        <p>Create Stories</p>
        <br></br>
        <button onClick={() => setButtonPop(true)}>Create Stories</button>
        <br></br>
        <button onClick={createUser}>Register</button>

      </main>

      <RegisterPop trigger={buttonPop} setTrigger={setButtonPop}>
        <h3>Log in</h3>
      </RegisterPop>

    </div>
  );
}
