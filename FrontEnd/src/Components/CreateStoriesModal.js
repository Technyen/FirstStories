import React, { useState } from 'react';

function CreateStoriesModal(props) {
  return (props.showModal)?(
    <div className="modal-content">
      <div className="modal-header">
      <h2>Create Your Story</h2>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label>Title:</label><br></br>
            <input className="form-control" id="floatingInput"/><br></br>
            <label>Category:</label><br></br>
            <input className="form-control" id="floatingInput"/><br></br>
            <label>Story:</label><br></br>
            <textarea className="form-control" placeholder="Write your story here" id="floatingTextarea"/><br></br>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
  ) :null;
}

export default CreateStoriesModal
