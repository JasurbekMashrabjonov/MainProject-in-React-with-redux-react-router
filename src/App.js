import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import IdItem from "./components/IdItem";
// import MyKorzinka from "./components/MyKorzinka";
import Home from "./layouts/Home";
import ListCategory from "./layouts/ListCategory";
import { fetched, getLike, getOrderServer } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        dispatch(fetched(data));
      });
    // ---------------//
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => {
        
          dispatch(getOrderServer(data));
   
      });
      fetch("http://localhost:3000/likes")
      .then((data) => data.json())
      .then((data) => {
        dispatch(getLike(data));
        console.log(data)
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/category/:categoryName" element={<ListCategory />} />
        <Route path="/id/:idName" element={<IdItem />} />
      </Routes>
    </div>
  );
}

export default App;
