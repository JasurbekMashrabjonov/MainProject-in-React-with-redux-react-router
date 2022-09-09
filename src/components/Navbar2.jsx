import React from "react";
import "../styles/Navbar2.css";
import "../styles/all.css";
import Logo from "../UI/Logo";
// import { Link } from "react-router-dom";
import KorzinkaBtn from "./KorzinkaBtn";
import LikeBtn from "./LikeBtn";
import OldOrderBtn from "./OldOrderBtn";
import MobileMenu from "./MobileMenu";
import {
  changeStateOldOrderBox,
  changeState,
  changeStateLikeBox,
} from "../redux/actions/actions";

import { useDispatch } from "react-redux";
import LeftPanel from "./LeftPanel";

function Navbar2(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="Navabar2">
        <nav className="menu10">
          <a href="#!" className="logo">
            <Logo />
          </a>
          <ol>
            <li className="menu__item2">
              <a
                href="#!"
                onClick={() => {
                  dispatch(changeStateOldOrderBox());
                }}
              >
                <span className="Navbar2_item_span">Xaridlarim tarixi</span>
                <OldOrderBtn />
              </a>
            </li>

            <li className="menu__item2">
              <a href="#!" onClick={() => dispatch(changeState())}>
                <span className="Navbar2_item_span">Mening savatcham</span>

                <KorzinkaBtn />
              </a>
            </li>
            <li className="menu__item2">
              <a
                href="#0"
                onClick={() => {
                  dispatch(changeStateLikeBox());
                }}
              >
                <span className="Navbar2_item_span">Men uchun</span>

                <LikeBtn />
              </a>
            </li>
            <MobileMenu />
          </ol>
        </nav>
        <LeftPanel />
      </div>
    </>
  );
}

export default Navbar2;
