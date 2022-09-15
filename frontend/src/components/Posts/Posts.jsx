import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

function Posts() {
  const data = useSelector((state) => state.posts);
  console.log("data", data);
  return (
    <div className=" w-[60%] mx-20 m-4 flex flex-row flex-wrap">
      {/* {!data.length ? (
        <CircularProgress size={90} />
      ) : (
        data.map((post) => {
          return (
            <Post
              image={post.selectedFile}
              title={post.title}
              message={post.message}
              key={post._id}
              id={post._id}
              createdAt={post.createdAt}
              creator={post.creator}
            />
          );
        })
      )} */}
      {/* {data.map((post) => {
        return (
          <Post
            image={post.selectedFile}
            title={post.title}
            message={post.message}
          />
        );
      })} */}
    </div>
  );
}

export default Posts;
