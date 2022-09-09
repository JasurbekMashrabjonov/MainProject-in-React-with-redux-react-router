import React from 'react';
import "../styles/UI.css"
import img1 from "../img/shopping-bag.gif"
function Logo(props) {
    return (
        <>
            <div className='Logo'>
                {/* <p className='the'>The</p>
                <p className='store'>Store</p> */}
                <p className='store'>Market.uz</p>
                <img src={img1} alt="logo" />
            </div>   
        </>
    );
}

export default Logo;