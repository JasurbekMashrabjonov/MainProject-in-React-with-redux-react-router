import React from "react";
import KorzinkaBtn from "./KorzinkaBtn";
import OldOrderBtn from "./OldOrderBtn";
import LikeBtn from "./LikeBtn";
import "../styles/Navbar2.css";
import { useDispatch } from "react-redux";

import {
    changeStateOldOrderBox,
    changeState,
    changeStateLikeBox,
  } from "../redux/actions/actions";
function LeftPanel(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="leftPanel">
        <a href="#!" className="leftPanel_item"
          onClick={() => {
            dispatch(changeStateOldOrderBox());
          }}
        >
          <OldOrderBtn />
        </a>
        <a href="#!" className="leftPanel_item"
        onClick={() => dispatch(changeState())}
        >
          <KorzinkaBtn />
        </a>
        <a href="#!" className="leftPanel_item"
        onClick={() => {
            dispatch(changeStateLikeBox());
          }}
        >
          <LikeBtn />
        </a>
      </div>
    </>
  );
}

export default LeftPanel;
