import React, { useState } from 'react'
import './CreateStoriesModal.css';
function CreateStoriesModal(props) {
  return (props.showModal)?(
    <div className='createStoriesWindow'>
      <div className='createStories-inner'>
        <button className='btn-secondary-create' onClick={()=>props.setShowModal(false)}>Close</button>
          <div>
            <h2>Create Your Story</h2>
            <label>Title:</label>
            <input className='input-create'/><br></br>
            <label>Category:</label>
            <input className='input-create'/><br></br>
            <label>Story:</label>
            <textarea className='form-floating'/><br></br>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </div>
  ) :null;
}

export default CreateStoriesModal
