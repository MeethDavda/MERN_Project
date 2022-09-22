import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CircularProgress } from "@mui/material";

function CartItems() {
  const data = useSelector((state) => state.post);
  const cartData = data.posts.filter((postss) => postss.addCart === true);
  //   console.log("smtung", cartData);

  return (
    <div>
      {!cartData.length ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={100} />
        </div>
      ) : (
        cartData.map((posts) => {
          return (
            <CartItem
              image={posts.selectedFile}
              title={posts.title}
              message={posts.message}
              key={posts._id}
              id={posts._id}
              Cart={posts.addCart}
              creator={posts.creator}
            />
          );
        })
      )}
    </div>
  );
}

export default CartItems;
