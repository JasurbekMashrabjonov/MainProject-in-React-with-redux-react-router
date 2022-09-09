import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ListProducts.css";
function Navigate(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigate">
        /
        <a
          href="#!"
          style={{ color: "#fff" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          ..go back
        </a>
        /
      </div>
    </>
  );
}

export default Navigate;
