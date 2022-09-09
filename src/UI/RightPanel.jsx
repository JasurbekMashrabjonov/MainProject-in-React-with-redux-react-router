import React, { useState } from "react";
import "../styles/RightPanel.css";
function RightPanel(props) {
    const [class4,setClass4] = useState('');
    const [class5,setClass5] = useState('');
    const [isClick,setIsClick] = useState(false)
    
  return (
    <>
      <div className={`RightPanel ${class4}`}>
        <i className="fa-solid fa-headset"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-location-dot"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className={`fa-solid fa-circle-chevron-up ${class5}`}
        onClick={()=>{
            setIsClick(!isClick);
            if (isClick) {
                setClass4('RightPanel_show')
                setClass5('RightPanel_up')
            } else {
                setClass4('RightPanel_hide')
                setClass5('RightPanel_down')
            }
    
        }}
        ></i>
      </div>
    </>
  );
}

export default RightPanel;
