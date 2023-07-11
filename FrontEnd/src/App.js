import React from "react";
import Header from './Components/Header';
import { useState } from "react";
import CreateStoriesModal from "./Components/CreateStoriesModal";
import IdentificationModal from "./Components/IdentificationModal";
import MyImage from "./Images/Caperucita-Roja.webp" 
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [isUserIndentified, setIsUserIdendified] = useState(false);

  return (
    <div className="Header">
      <Header />
      <div className="App">
        <main>
          <h1>CHILDREN'S STORIES</h1>
          <p>Make you own stories and share with your kids</p>
          <br></br>
          <img src={MyImage} className="img-main" />
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShowModal(true)}>
            Create stories
          </button>
          {
            isUserIndentified ?
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <CreateStoriesModal showModal={showModal} setShowModal={setShowModal} />
                </div>
              </div>
              :
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <IdentificationModal showModal={showModal} setShowModal={setShowModal} setIsUserIdendified={setIsUserIdendified} />
                </div>
              </div>
          }
        </main>
      </div>
    </div>
  );

}
