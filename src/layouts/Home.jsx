import React, { useState } from "react";
import Footer from "../components/Footer";
import ListProducts from "./ListProducts";
import Aksiya from "../components/Aksiya";
import Navbar2 from "../components/Navbar2";
import RightPanel from "../UI/RightPanel";
import MyKorzinka from "../components/MyKorzinka";
import { useSelector } from "react-redux";
import MyLikeBox from "../components/MyLikeBox";
import OldOrderBox from "../components/OldOrderBox";
import Registration from "../components/Registration";
import Banner from "../components/Banner";
// import Navbar from '../components/Navbar';

function Home(props) {
  const { isOpen, isOpenLike, isOpenOldOrder, isOpenRegistration } =
    useSelector((state) => state);
  // const [isTrue,setIsTrue] = useState(false)
  const [scrollState, setScrollState] = useState(0);
  window.addEventListener("scroll", () => {
  
    setScrollState(window.scrollY);
  });

  return (
    <>
      <div className="Home">
        <Banner />
        <Aksiya />
        {isOpenRegistration ? <Registration /> : null}

        {isOpen ? <MyKorzinka /> : null}
        {isOpenLike ? <MyLikeBox /> : null}
        {isOpenOldOrder ? <OldOrderBox /> : null}

        {scrollState > 580 ? (
          <>
            <Navbar2 />
            <RightPanel />
          </>
        ) : null}
        <ListProducts />
        <Footer />
      </div>
    </>
  );
}

export default Home;
