import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import MyKorzinka from "../components/MyKorzinka";
import OldOrderBox from "../components/OldOrderBox";
import "../styles/ListProducts.css";
import MyLikeBox from "../components/MyLikeBox";
import Navigate from "../components/Navigate";
import { getCategory } from "../redux/actions/actions";
function ListCategory() {
  const { isOpen, category, isOpenLike, isOpenOldOrder } = useSelector(
    (state) => state
  );
  const { categoryName } = useParams();
  // const [categoryState,setCategoryState] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((data) => data.json())
      .then((data) => {
        // setCategoryState(data)
        dispatch(getCategory(data));
      });
    // eslint-disable-next-line
  }, [categoryName]);
  return (
    <>
      <div className="ListProducts ">
        <Navbar2 />
        <Navigate />
        {isOpen ? <MyKorzinka /> : null}
        {isOpenLike ? <MyLikeBox /> : null}
        {isOpenOldOrder ? <OldOrderBox /> : null}
        {category.length ? (
          category.map((item, idx) => {
            return <Card item={item} idx={idx} key={idx} />;
          })
        ) : (
          <Loader />
        )}
        <Footer />
      </div>
    </>
  );
}

export default ListCategory;
