import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import "../styles/ListProducts.css";
import { useDispatch, useSelector } from "react-redux";
import MyKorzinka from "./MyKorzinka";
import MyLikeBox from "./MyLikeBox";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Navigate from "./Navigate";
import { getIdItem, getItem, remove } from "../redux/actions/actions";

function IdItem(props) {
  const { idName } = useParams();
  const dispatch = useDispatch();
  const { isOpen, isOpenLike, idState } = useSelector((state) => state);
  const [card2ClassBuy, setCard2ClassBuy] = useState("blue");
  const [isBuy, setIsBuy] = useState(false);
  const [card2AddContent, setCard2AddContent] = useState("add_shopping_cart");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idName}`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(getIdItem(data));
      });
    // eslint-disable-next-line
  }, [idName]);
  useEffect(() => {
    if (isBuy) {
      setCard2AddContent("check");
      setCard2ClassBuy("green");
      dispatch(getItem(idState));
    } else {
      setCard2AddContent("add_shopping_cart");
      setCard2ClassBuy("blue");
      dispatch(remove(idState));
    }
    // eslint-disable-next-line
  }, [isBuy]);
  return (
    <>
      <Navbar2 />
      {isOpen ? <MyKorzinka /> : null}
      {isOpenLike ? <MyLikeBox /> : null}
      <Navigate />
      {idState ? (
        <div className="IdItem_content">
          <div className="img">
            <img src={idState.image} alt="Rasm" />
          </div>
          <div className="context">
            <h4>{idState.title}</h4>
            <br />
            <h5>$ {idState.price}</h5>
            <p>{idState.description}</p>
            <a
              href="#!"
              id="buy"
              className={`btn-floating waves-effect waves-light ${card2ClassBuy}`}
              onClick={() => {
                setIsBuy(!isBuy);
              }}
            >
              <i className="material-icons buy">{card2AddContent}</i>
            </a>
            <div className="rate_product">
              <h6>Rate our product:</h6>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
}

export default IdItem;
