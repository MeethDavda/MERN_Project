import React, { useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { addcart, deletepost } from "../../Reducers/postSlice";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

function Post(props) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deletepost(props.id));
  };
  // console.log("cartttt", props.cart);

  const handleAdd = async () => {
    dispatch(addcart(props.id));
  };
  return (
    <div className="m-10 mx-10 drop-shadow-xl bg-slate-100 h-fit rounded-lg hover:scale-105 transition-all duration-100 ease-linear">
      <div className="w-[35em]  font-extralight flex flex-col relative">
        <div className=" min-h-fit h-[20em]">
          <img
            src={props.image}
            alt="img"
            className="rounded-t-lg  object-fit h-full brightness-60"
          />
          <div className="h-12  p-5 absolute top-0 text-white text-5xl ">
            {props.creator}
          </div>
          <div className="h-12  p-5 absolute top-6 text-white text-md">
            {props.createdAt}
          </div>
          <MoreHorizIcon className="text-white absolute top-4 right-4 scale-150 cursor-pointer" />
        </div>
        <div className="p-4 h-28 text-2xl">{props.message}</div>
        <div className="m-2 flex flex-row justify-between mx-5 text-[#091540]">
          <div>
            <CurrencyBitcoinIcon className="scale-[2.2] align-middle text-yellow-500" />
            <span className="text-4xl align-middle m-2">99</span>
            <button
              className="hover:bg-slate-300 transition-colors text-3xl m-4 duration-100 ease-linear text-[#091540] w-fit rounded-md"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </div>

          <button
            className="hover:bg-slate-300 transition-colors text-3xl m-4 mr-6 duration-100 ease-linear text-[#091540] w-fit rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
