import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { useDispatch } from "react-redux";
import { removecart } from "../../Reducers/postSlice";

function CartItem(props) {
  const dispatch = new useDispatch();
  const handleRemove = async () => {
    dispatch(removecart(props.id));
  };

  return (
    <div className="flex flex-col justify-center content-center items-center">
      <div className="w-[60%] bg-slate-100 h-fit m-10 flex flex-row p-4 rounded-xl drop-shadow-lg ">
        <div className="max-w-xl ">
          <img
            src={props.image}
            alt="img"
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col ml-9 w-full justify-between mt-7">
          <div>
            <p className="text-5xl ">{props.title}</p>
            <p className="text-xl mt-3">{props.message}</p>
          </div>

          <div className="m-2 flex flex-row justify-between  text-[#091540] w-full ">
            <div>
              <CurrencyBitcoinIcon className="scale-[2.2] align-middle text-yellow-500" />
              <span className="text-5xl align-middle m-3">99</span>
            </div>

            <button
              className="hover:bg-slate-300 transition-colors text-4xl m-4 mr-6 duration-100 ease-linear text-[#091540] w-fit rounded-md"
              onClick={handleRemove}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
