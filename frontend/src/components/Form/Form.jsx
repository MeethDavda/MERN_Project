import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createpost } from "../../Reducers/postSlice";

function Form() {
  const d = new Date();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
    createdAt: "",
    addCart: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData({
      ...postData,
      createdAt: d.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    });
    console.log(postData);
    dispatch(createpost(postData));
  };

  return (
    <div className="flex  justify-center ">
      <form
        action="submit"
        className="h-fit border-2 border-gray-400 bg-slate-100 w-[30em] mt-14 rounded-lg flex flex-col justify-around "
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl mx-auto tracking-widest my-6">Post</h1>
        <div className="flex flex-col justify-center items-center ">
          <label htmlFor="" className="text-3xl">
            Creator
          </label>

          <input
            type="text"
            placeholder="Name"
            className="w-[90%] h-20 p-4 text-2xl"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col justify-center items-center my-3">
          <label htmlFor="" className="text-3xl">
            NFT Name
          </label>

          <input
            type="text"
            placeholder="Name"
            className="w-[90%] h-20 p-4 text-2xl"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col justify-center items-center  my-3">
          <label htmlFor="" className="text-3xl">
            Description
          </label>
          <textarea
            name="creator"
            id=""
            cols="45"
            rows="10"
            className="w-[90%] text-2xl p-3 "
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></textarea>
        </div>

        <div className="mx-4 my-4 ">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="flex flex-col  text-white">
          <button
            className="m-4 my-2 bg-[#091540] h-16 rounded-sm text-2xl"
            type="submit"
          >
            SUBMIT
          </button>
          <button className="m-4 my-2 bg-[#091540] h-16 rounded-sm text-2xl">
            CLEAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
