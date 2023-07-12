import React, { useState } from 'react';
import {createStory} from '../Services/storyService';
import MyImage from "../Images/thumbs_up-0klWsZLRO-transformed.png"; 
import "./CreateStoriesModal.css";

function CreateStoriesModal(props) {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('')
  const [ageAppropiate,setAgeAppropiate] = useState('')
  const [description,setDescription] = useState('')
  const [createResult, setCreateResult] = useState('')
  const [isCreateSuccess, setCreateSuccess] = useState(false)

async function handleCreate() {
    var result = await createStory(title, category, ageAppropiate, description);
    setCreateResult(result);
    if (result === null) {
     setCreateResult("Story created!");
     setCreateSuccess(true);
    }
  }

  async function handleGoList() {
    console.log("go to list");
  }

  return (props.showModal)?(
    isCreateSuccess ?
    <div className="modal-content">
    <div className="modal-header">
      <h2>{createResult}</h2>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <img src={MyImage} className="img-thumbs" />
      <div className="modal-footer">
      <button className="btn btn-primary bm-3" onClick={() => handleGoList()}>Go to List</button>
      </div>
    </div>
  </div>
    :
    <div className="modal-content">
    <div className="modal-header">
      <h2>Create Your Story</h2>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <label>Title</label><br></br>
      <input className="form-control" id="floatingInput"  value={title} onChange={e => setTitle(e.target.value)}/><br></br>
      <label>Category</label><br></br>
      <input className="form-control" id="floatingInput"  value={category} onChange={e => setCategory(e.target.value)} /><br></br>
      <label>Age appropiate</label><br></br>
      <input className="form-control" id="floatingInput"  value={ageAppropiate} onChange={e => setAgeAppropiate(e.target.value)}/><br></br>
      <label>Story</label><br></br>
      <textarea className="form-control" placeholder="Write your story here" id="floatingTextarea"  value={description} onChange={e => setDescription(e.target.value)}/><br></br>
      <button className="btn btn-primary bm-3" onClick={() => handleCreate()}>Create</button>
      <div className="modal-footer">
        <p className="text-danger">{createResult}</p>
      </div>
    </div>
  </div>
  ) :null;
}

export default CreateStoriesModal
