import React from "react";
import { useSelector } from "react-redux";
import "../styles/all.css";
import "../styles/KorzinkaBtn.css";
function KorzinkaBtn(props) {
  const { orderServer } = useSelector((state) => state);

  return (
    <>
      <i
        className="fa-solid fa-cart-shopping Navbar_Component_btn"
       
      ></i>
      {orderServer.length}
    </>
  );
}

export default KorzinkaBtn;
