import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalCreateStories.css";

export default function ModalCreateStories(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>

    ) :null;
        
       

}
