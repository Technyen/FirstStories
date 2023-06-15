import React from 'react'

function CreateStoriesModal() {
  return (
    <div className='createStoriesWindow'>
      <form>
      <h2>Create Your Story</h2>

      <label>Title:</label>
      <input /><br></br>

      <label>Category:</label>
      <input /><br></br>

      <label>Story:</label>
      <textarea /><br></br>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CreateStoriesModal
