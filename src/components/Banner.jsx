import React from 'react';
import Navbar from './Navbar';
import "../styles/Banner.css"
import MyButton1 from '../UI/MyButton1';
function Banner(props) {
    return (
        <>
            <div className='Banner'>
                <Navbar/>
                <div className='banner_content'>
                    <h2>Salom,</h2>
                    <h1>
                        Tashrifingizdan minnatdormiz!
                    </h1>
                    <hr />

                    <p>Ushbu platforma sizdek qimmatli mijozlarimizga yanada qulaylik yaratish uchun ishlamoqda. Ishanmizki bu sizni quvontirmasdan qolmaydi! </p> 
                    <h4>Agar tayyor bo'lsangiz.?</h4>
                    <br />
                    <MyButton1/>
                </div>
            </div>
        </>
    );
}

export default Banner;