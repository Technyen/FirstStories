import React from "react";
import { createUser } from "./Services/userService";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { useState} from "react";
import CreateStoriesModal from "./Components/CreateStoriesModal";
import IdentificationModal from "./Components/IdentificationModal";

export default function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isUserIdentified, setIisUserIdentified]=useState(false);


  return (
    <div className="Header">
      <Header />
      <div className="App">
        <main>
          <h1>CHILDREN'S STORIES</h1>
          <p>Make you own stories and share with your kids</p>
          <br></br>
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" onClick={()=>setButtonPopup(true)}>Create Stories</button>
         <IdentificationModal trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </main>
        <CreateStoriesModal/>
      </div>
    </div>
  );
}
