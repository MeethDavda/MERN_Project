import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

function Posts() {
  const data = useSelector((state) => state.post);

  // console.log("data", data);

  return (
    <div className=" w-[60%] mx-20 m-4 flex flex-row flex-wrap">
      {!data.posts.length ? (
        <CircularProgress size={90} />
      ) : (
        data.posts.map((posts) => {
          return (
            <Post
              image={posts.selectedFile}
              title={posts.title}
              message={posts.message}
              key={posts._id}
              id={posts._id}
              cart={posts.addCart}
              createdAt={posts.createdAt}
              creator={posts.creator}
            />
          );
        })
      )}
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
