import React from "react";
import "../styles/Navbar.css";
import "../styles/all.css";
import Logo from "../UI/Logo";
import { useDispatch } from "react-redux";
// import Acaunt from "./Acaunt";
import { changeStateRegistration } from "../redux/actions/actions";
import MobileMenu from "./MobileMenu";

function Navbar(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Navabar " id="Navbar100">
        <nav className="menu">
          <a href="#!" className="logo">
            <Logo />
          </a>
          <ol>
            <li className="menu-item">
              <a href="#0">Mahsulotlarimiz:</a>
              <ol className="sub-menu">
                <li className="menu-item">
                  <a href="#0">Kiyimlar</a>
                </li>
                <li className="menu-item">
                  <a href="#0">Qimmatbaxo buyumlar</a>
                </li>
                <li className="menu-item">
                  <a href="#0">Maishiy texnikalar</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="#0">
                <i className="fa-solid fa-location-dot Navbar_Component_btn"></i>{" "}
                Filialarimiz
              </a>
            </li>
         
            <li className="menu-item">
              <a href="#0">
                <i className="fa-solid fa-phone Navbar_Component_btn"></i> +998
                90 567-55-20
              </a>
            </li>
            <li
              className="menu-item"
              onClick={() => {
                dispatch(changeStateRegistration());
              }}
            >
              <a href="#0">Sighn up/Log in</a>
            </li>
        
          </ol>
          <div className="MobileNavbar">
            <MobileMenu/>
          </div>
        </nav>
      </div>
     
    </>
  );
}

export default Navbar;
