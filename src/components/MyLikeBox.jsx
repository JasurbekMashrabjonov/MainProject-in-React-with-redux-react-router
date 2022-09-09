import "../styles/MyKorzinka.css";
import { useDispatch, useSelector } from "react-redux";
// import KorzinkaBtn2 from "../UI/KorzinkaBtn2";
import { changeStateLikeBox, removeLike } from "../redux/actions/actions";
function MyLikeBox(props) {
  const { orderLike } = useSelector((state) => state);
  const dispatch = useDispatch();
  function f4(item) {
    fetch(`http://localhost:3000/likes/${item.id}`, {
      method: "DELETE",
    });
  }
  return (
    <>
      <div className="cart">
        <i
          onClick={() => dispatch(changeStateLikeBox())}
          className="fa-solid fa-xmark close2"
        ></i>
        <div className="content_cart">
          <table className="table table-striped table-hover">
            {orderLike.length ? (
              <thead>
                <tr>
                  <th scope="col">Nr</th>
                  <th scope="col">Img</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  {/* <th scope="col">Rating:</th> */}
                  <th>Remove</th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {orderLike.length ? (
                orderLike.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>
                        <img src={item.image} alt="rasm" />
                      </td>
                      <td>
                        <h5>{item.title.slice(0, 10)}</h5>
                      </td>
                      <td>{item.price}$</td>
                      {/* <td>
                        <span className="rating_in_like_box">
                          {Math.round(item.rating.rate) ? (
                            <>
                              <i className="fa-regular fa-star"
                              
                              ></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                            </>
                          ) : null}
                        </span>
                      </td> */}
                      <td className="add_remove">
                        <button
                          onClick={() => {
                            dispatch(removeLike(item));
                            f4(item);
                          }}
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-xmark btn-danger"></i>
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

export default MyLikeBox;
