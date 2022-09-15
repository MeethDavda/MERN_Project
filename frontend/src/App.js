import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "./Reducers/postSlice";
import Auth from "./pages/Auth/Auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchposts());
  }, [dispatch]);

  const data = useSelector((state) => state);
  console.log(data);

  return (
    <div>
      {/* <Auth /> */}
      <Home />
    </div>
  );
}

export default App;
