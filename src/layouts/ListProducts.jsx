import React from "react";
import "../styles/ListProducts.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
// import { Link } from "react-router-dom";
// import Card2 from "../components/Card2";
// import {Link} from "react-redux";
import "../styles/Card2.css";
import Card2 from "../components/Card2";

function ListProducts(props) {
  const { posts = [] } = useSelector((state) => state);
  return (
    <>
    
      <div className="ListProducts">
        {posts.length ? (
          posts.map((item, idx) => {
            return <Card2  item={item} idx ={idx} key={idx} />
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default ListProducts;
