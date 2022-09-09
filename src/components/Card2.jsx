import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLike,
  setServerPost,
  getOrderServer,
  getItem,
  setServerLike,
} from "../redux/actions/actions";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "../styles/Card2.css";
function Card2(props) {
  const { idx, item } = props;
  const dispatch = useDispatch();
  // const {order} = useSelector(state=>state)
  const [isBuy, setIsBuy] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [card2AddContent, setCard2AddContent] = useState("add_shopping_cart");
  const [card2Like, setCard2Like] = useState("favorite_border");
  const [card2ClassBuy, setCard2ClassBuy] = useState("blue");

  let toasthtmlBuy = "<div>Ok, added to bag</div>";
  let toasthtmlLike = "<div>Ok, marked your favourites</div>";
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => {
        dispatch(getOrderServer(data));
      });
    // if (isBuy) {
    //   setCard2AddContent("check");
    //   setCard2ClassBuy("green");
    //   M.toast({ html: toasthtmlBuy, classes: "rounded green darken-1" });
    // } else {
    //   setCard2AddContent("add_shopping_cart");
    //   setCard2ClassBuy("blue");
    //   dispatch(remove(item));
    // }
    // eslint-disable-next-line
  }, [isBuy]);
  useEffect(() => {
    fetch("http://localhost:3000/likes")
    .then((data) => data.json())
    .then((data) => {
      dispatch(getLike(data));
    });
    // if (isLike) {
    //   setCard2Like("favorite");
    //   dispatch(getLike(item));
    //   M.toast({ html: toasthtmlLike, classes: "rounded red accent-3" });
    // } else {
    //   setCard2Like("favorite_border");
    //   dispatch(removeLike(item));
    // }
    // eslint-disable-next-line
  }, [isLike]);
  
  function likeFun() {
    dispatch(setServerLike(item));
    dispatch(getItem(item))
  }
  function buyFun() {
    dispatch(setServerPost(item));
    dispatch(getItem(item))
  }
  return (
    <>
      <div className="card2" key={idx}>
        <div className="col l4 m8 s12 offset-m2 offset-l4">
          <div className="product-card">
            <div className="card  z-depth-4">
              <div className="card-image">
                <a
                  href="#!"
                  className="btn-floating btn-large price waves-effect waves-light brown darken-3"
                >
                  {item.price}€
                </a>

                <img src={item.image} alt="productImg" />
                <span className="card-title">
                  <span>{item.title.slice(0, 7)}</span>
                </span>
              </div>
              <ul className="card-action-buttons">
                <li>
                  <a
                    href="#!"
                    target="_blank"
                    className="btn-floating waves-effect waves-light white"
                  >
                    <i className="material-icons grey-text text-darken-3">
                      share
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="btn-floating waves-effect waves-light red accent-2"
                    onClick={() => {
                      likeFun()
                      setIsLike(!isLike);
                      setCard2Like("favorite");
                      dispatch(getLike(item));
                      M.toast({ html: toasthtmlLike, classes: "rounded red accent-3" });
                    }}
                  >
                    <i className="material-icons like">{card2Like}</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    id="buy"
                    className={`btn-floating waves-effect waves-light ${card2ClassBuy}`}
                    onClick={() => {
                      setIsBuy(!isBuy);
                      buyFun();
                      setCard2AddContent("check");
                      setCard2ClassBuy("green");
                      M.toast({
                        html: toasthtmlBuy,
                        classes: "rounded green darken-1",
                      });
                    }}
                  >
                    <i className="material-icons buy">{card2AddContent}</i>
                  </a>
                </li>
              </ul>
              <div className="card-content">
                <div className="row">
                  <div className="col s12">
                    <p className="card2_p">
                      <strong>Description:</strong> <br />
                      {item.description.slice(0, 50)}
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                  <div style={{ width: "95%", margin: " auto" }}>
                    <div className="chip">Dessert</div>
                    <div className="chip">French</div>
                    <div className="chip">Sweet</div>
                    <div className="chip">Chocolate</div>
                    <div className="chip">
                      <a href="#!">More...</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <Link
                //  onClick={()=>getCategory(item.category)}
                to={`/category/${item.category}`}
              >
                <button className="card_btn btn btn-primary">Watch more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
