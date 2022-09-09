import React, { useEffect } from "react";
import "../styles/MyKorzinka.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStateOldOrderBox, getOrderServer } from "../redux/actions/actions";
function OldOrderBox(props) {
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => {
        dispatch(getOrderServer(data));
      });
    // eslint-disable-next-line
  }, []);
  const { orderServer } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart">
        <i
          onClick={() => dispatch(changeStateOldOrderBox())}
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
                  <th scope="col">Full Price</th>
                  <th scope="col">Date</th>
                  {/* <th>
                    <button className="btn btn-success">Buy All</button>
                  </th> */}
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
                      <td>
                        <i className="fa-solid fa-dollar-sign"></i>
                        {item.price}
                      </td>
                      <td>
                        <i className="fa-solid fa-dollar-sign"></i>
                        {item.quantity * item.price}
                      </td>
                      <td>{item.date}</td>
                      {/* <td className="add_remove">
                        <button
                          onClick={() => {
                            dispatch(plus(item))
                          }}
                          className="btn btn-primary"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            dispatch(minus(item))

                          }}
                          className="btn btn-danger"
                        >
                          -
                        </button>
                      </td> */}
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

export default OldOrderBox;
