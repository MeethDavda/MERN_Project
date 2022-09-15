import React from "react";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar";
import Posts from "../../components/Posts/Posts";

function Home() {
  return (
    <div className="flex flex-col justify-center content-around">
      <Navbar />
      <div className="flex flex-row ">
        <Posts />
        <Form />
      </div>
    </div>
  );
}

export default Home;
