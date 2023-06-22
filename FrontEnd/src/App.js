import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { useState} from "react";
import CreateStoriesModal from "./Components/CreateStoriesModal";
import IdentificationModal from "./Components/IdentificationModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [isUserIndentified, setIsUserIdendified]=useState(false);
 


  return (
    <div className="Header">
      <Header />
            <div className="App">
        <main>
          <h1>CHILDREN'S STORIES</h1>
          <p>Make you own stories and share with your kids</p>
          <br></br>
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" onClick={()=>setShowModal(true)}>Create Stories</button>
        
        {
        isUserIndentified?
         <CreateStoriesModal showModal={showModal} setShowModal={setShowModal}/>:
         <IdentificationModal showModal={showModal} setShowModal={setShowModal} setIsUserIdendified={setIsUserIdendified}/>

        }
         
        </main>
       
      </div>
    </div>
  );
}
