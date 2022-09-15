import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { deletepost } from "../../Reducers/postSlice";

function Post(props) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(deletepost(props.id));
  };
  return (
    <div className="m-10 mx-10 drop-shadow-xl bg-slate-100 h-fit rounded-lg hover:scale-105 transition-all duration-100 ease-linear">
      <div className="w-[20em]  font-extralight flex flex-col relative">
        <div className=" h-48 ">
          <img
            src={props.image}
            alt="img"
            className="rounded-t-lg mt- object-cover h-full brightness-50"
          />
          <div className="h-12  p-5 absolute top-0 text-white text-2xl ">
            {props.creator}
          </div>
          <div className="h-12  p-5 absolute top-6 text-white text-md">
            {props.createdAt}
          </div>
          <MoreHorizIcon className="text-white absolute top-4 right-4 scale-150 cursor-pointer" />
        </div>
        <div className="p-4 h-28 text-lg">{props.message}</div>
        <div className="m-2 flex flex-row justify-between mx-5 text-[#091540]">
          <span>Likes</span>
          <button
            className="hover:bg-slate-300 transition-colors duration-100 ease-linear text-[#091540]  w-12 rounded-md"
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
