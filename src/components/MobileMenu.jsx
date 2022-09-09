import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function MobileMenu(props) {
  const [clickMenu, setClickMenu] = useState(false);
  const [classMenu1, setClassMenu1] = useState("hide2");
  const [barClass, setBarClass] = useState("white1");
  const [barCon, setBarCon] = useState("menu");
  // ---------- //
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  // ---------------//
  const [li1, setLi1] = useState("hideLi");
  const [li2, setLi2] = useState("hideLi");
  const [li3, setLi3] = useState("hideLi");
  // -----------//
  const [iClass1, setIClass1] = useState("");
  const [iClass2, setIClass2] = useState("");
  const [iClass3, setIClass3] = useState("");
  useEffect(() => {
    if (clickMenu) {
      setClassMenu1("show2");
      setBarClass("black1");
      setBarCon("clear");
    } else {
      setClassMenu1("hide2");
      setBarClass("white1");
      setBarCon("menu");
    }
  }, [clickMenu]);
  useEffect(() => {
    if (a1) {
      setLi1("showLi");
      setIClass1("i1");
      setA2(false);
      setA3(false);
    } else {
      setIClass1("i2");
      setLi1("hideLi");
    }
  }, [a1]);
  useEffect(() => {
    if (a2) {
      setLi2("showLi");
      setIClass2("i1");
    } else {
      setLi2("hideLi");
      setIClass2("i2");
    }
  }, [a2]);
  useEffect(() => {
    if (a3) {
      setLi3("showLi");
      setIClass3("i1");
      setA1(false);
      setA2(false);
    } else {
      setLi3("hideLi");
      setIClass3("i2");
    }
  }, [a3]);
  // Clock //
  let day;
  let clock;
  const date = new Date();
  let dayLocal;
  let month;
  let hours;
  let minustes;
  let seconds;

  date.getDate() < 10
    ? (dayLocal = "0" + (date.getDate() + 1))
    : (dayLocal = date.getDate() + 1);
  date.getMonth() < 10
    ? (month = "0" + (date.getMonth() + 1))
    : (month = date.getMonth() + 1);
  date.getHours() < 10
    ? (hours = "0" + (date.getHours()))
    : (hours = date.getHours());
  date.getMinutes() < 10
    ? (minustes = "0" + date.getMinutes())
    : (minustes = date.getMinutes());
  date.getSeconds() < 10
    ? (seconds = "0" + date.getSeconds())
    : (seconds = date.getSeconds());

  day = dayLocal + "." + month + "." + date.getFullYear();
  clock = hours + ":" + minustes + ":" + seconds;
  const [stateClock, setStateClock] = useState("");
  const [stateDay, setStateDay] = useState("");
  setTimeout(() => {
    setStateClock(clock);
    setStateDay(day);
  }, 1000);
  // Setting_menu //
  const [settingsMenuClass1,setSettingsMenuClass1] = useState('Settings_menu_hide');
  setTimeout(() => {
    setSettingsMenuClass1('Settings_menu_show')
  }, 3000);
  return (
    <>
      <div className="MobileMenu">
        <a href="#!">
          <i
            className={`material-icons menu_bar ${barClass}`}
            onClick={() => {
              setClickMenu(!clickMenu);
            }}
          >
            {barCon}
          </i>
        </a>
        <div className={`menu_mobile_place ${classMenu1}`}>
          <div className="menu_mobile3">
            <ul className="ul0">
              <li className="nav__item">
                <a href="#!">Asosiy sahifa</a>
              </li>
              <li className="nav__item">
                <a
                  href="#!"
                  className="nav__link"
                  onClick={() => {
                    setA1(!a1);
                  }}
                >
                  Mahsulotlarimiz
                  <i className={`material-icons ${iClass1}`}>
                    keyboard_arrow_down
                  </i>
                </a>
                <ul className={`${li1}`}>
                  <li>
                    <a href="#!">Kiyimlar</a>
                  </li>
                  <li>
                    <a href="#!">Kiyimlar</a>
                  </li>
                  <li>
                    <a href="#!">Kiyimlar</a>
                  </li>
                  <li>
                    <a href="#!">Kiyimlar</a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Filiallarimiz
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#!"
                  className="nav__link"
                  onClick={() => {
                    setA2(!a2);
                  }}
                >
                  Abaut
                  <i className={`material-icons ${iClass2}`}>
                    keyboard_arrow_down
                  </i>
                </a>
                <ul className={li2}>
                  <li>
                    <a href="#!">Web-site</a>
                  </li>
                  <li>
                    <a href="#!">Developer</a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a
                  href="#!"
                  className="nav__link"
                  onClick={() => {
                    setA3(!a3);
                  }}
                >
                  Bog'lanish
                  <i className={`material-icons ${iClass3}`}>
                    keyboard_arrow_down
                  </i>
                </a>
                <ul className={li3}>
                  <li>
                    <a href="#!">Tell</a>
                  </li>
                  <li>
                    <a href="#!">Xabar</a>
                  </li>
                  <li>
                    <a href="#!">Operator</a>
                  </li>
                </ul>
              </li>
            </ul>
            
          
          </div>
          <div className={`Settings_menu ${settingsMenuClass1}`}>
          <div className="Clock">
                <h5>Time: {stateClock}</h5>
                <h5>Date: {stateDay}</h5>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
