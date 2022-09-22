import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "./Reducers/postSlice";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { fetchusers } from "./Reducers/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchposts());
    // dispatch(fetchusers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  const data = useSelector((state) => state.post);
  // console.log("vbibvibvie", data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Auth /> */}

      {/* <Home /> */}
    </div>
  );
}

export default App;
