import React from 'react';
import "../styles/KorzinkaBtn.css"
import { useSelector} from "react-redux"
function LikeBtn(props) {
    const {orderLike} = useSelector(state=>state)
    return (
        <>
         <i className="fa-regular fa-heart Navbar_Component_btn"
      
         ></i>{orderLike.length}  
        </>
    );
}

export default LikeBtn;