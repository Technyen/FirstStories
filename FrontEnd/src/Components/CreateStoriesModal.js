import React, { useState } from 'react'
import IdentificationModal from './IdentificationModal';
import './CreateStoriesModal.css';
function CreateStoriesModal(props) {
  return (props.showModal)?(
    <div className='createStoriesWindow'>
      <div className='createStories-inner'>
        <button className='btn btn-secondary' onClick={()=>props.setShowModal(false)}>Close</button>
          <form>
            <h2>Create Your Story</h2>
            <label>Title:</label>
            <input /><br></br>
            <label>Category:</label>
            <input /><br></br>
            <label>Story:</label>
            <textarea /><br></br>
            <button type="submit"className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
  ) :null;
}

export default CreateStoriesModal
