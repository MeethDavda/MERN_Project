import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#091540]  text-7xl m-5 rounded-lg flex flex-row p-4 mx-10 text-[#F8F7F9] drop-shadow-2xl">
      <div>NFT Marketplace</div>
      <Link to="/cart">
        <div className="scale-150 absolute right-20 top-10 flex flex-row cursor-pointer">
          <div className="text-lg mx-2">Your cart</div>
          <ShoppingCartIcon />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
