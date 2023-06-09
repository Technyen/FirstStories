import React from 'react';
import './RegisterPop.css';





function RegisterPop(props) {
  return (props.trigger)?(
    <div className='registerPop'>
      <div className='registerPop-inner'>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>Close</button>
        {props.children}


      </div>
    </div>
  ) : "";
}

export default RegisterPop
