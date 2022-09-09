import React, { useEffect, useState } from "react";
import "../styles/Area.css";

function Area(props) {
    const [state1,setState1] = useState(false); 
    const [class1,setClass1] = useState('class11')
    useEffect(()=>{
        if(state1){
            setClass1('class1')
        }else{
            setClass1('class11')
        }
    },[state1])
  return (
    <>
      <div className="Area">
        <div className="dropdown__menu">
          <div className="menu__list">
            <div className="menu__item">
              <a href="#!" className="menu__link a1" 
              onClick={()=>{
                setState1(!state1)
              }}
              >
                Home1
              </a>
              <div className={`menu__sub-list ${class1}`}>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
              </div>
            </div>
            <div className="menu__item">
              <a href="#!" className="menu__link">
                Home
              </a>
              <div className="menu__sub-list">
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
              </div>
            </div>
            <div className="menu__item">
              <a href="#!" className="menu__link">
                Home
              </a>
              <div className="menu__sub-list">
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
              </div>
            </div>
            <div className="menu__item">
              <a href="#!" className="menu__link">
                Home
              </a>
              <div className="menu__sub-list">
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
                <a href="#!" className="menu_sub-item">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Area;
