import React, { useEffect, useState } from "react";
import "../styles/MyKorzinka.css";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../redux/actions/actions";
function MyKorzinka(props) {
  const { orderServer } = useSelector((state) => state);
  const [s, setS] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let s1 = 0;
    orderServer.map((item, idx) => {
      return (s1 = s1 + item.quantity * item.price);
    });
    setS(s1);
  }, [orderServer]);
  function f2(payload) {
    fetch(`http://localhost:3000/posts/${payload.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, quantity: payload.quantity + 1 }),
    });
  }
  function f3(payload) {
    if (payload.quantity > 1) {
      fetch(`http://localhost:3000/posts/${payload.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, quantity: payload.quantity - 1 }),
      });
    } else {
      fetch(`http://localhost:3000/posts/${payload.id}`, {
        method: "DELETE",
      });
    }
  }
  return (
    <>
      <div className="cart">
        <i
          onClick={() => dispatch("CHANGE_STATE")}
          className="fa-solid fa-xmark close2"
        ></i>
        <div className="content_cart">
          <table className="table table-striped table-hover">
            {orderServer.length ? (
              <thead>
                <tr>
                  <th scope="col">Nr</th>
                  <th scope="col">Img</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Full Price:{s}$</th>
                  <th>
                    <button className="btn btn-success" onClick={() => {}}>
                      Buy All
                    </button>
                  </th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {orderServer.length ? (
                orderServer.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope="row">{item.quantity}</th>
                      <td>
                        <img src={item.image} alt="rasm" />
                      </td>
                      <td>
                        <h3>{item.title.slice(0, 10)}</h3>
                      </td>
                      <td>{item.price}$</td>
                      <td>{item.quantity * item.price}$</td>
                      <td className="add_remove">
                        <button
                          style={{ marginRight: "5px" }}
                          onClick={() => {
                            dispatch(plus(item));
                            f2(item);
                          }}
                          className="btn btn-primary"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            dispatch(minus(item));
                            f3(item);
                          }}
                          className="btn btn-danger red"
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="bush">
                  <i className="fa-solid fa-box-open"></i>
                  <h2>No Item!</h2>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyKorzinka;
