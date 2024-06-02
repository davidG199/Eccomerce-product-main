import React, { useContext } from "react";
import cart from "../../assets/icon-cart.svg";
import { GeneralContext } from "../context";
import "../styles/index.css"
import CartIcon from "./icons/CartIcon";

function ButtonAddCart() {
  const context = useContext(GeneralContext);

  return (
    <div
      className="flex items-center justify-center bg-[var(--Orange)] grow-[2] text-white rounded-lg cursor-pointer
       hover:bg-[var(--Orange-hover)] btn py-3 mb-10"
      onClick={() => context.addProduct()}
      
    >
      <CartIcon fill="white"/>
      <p className="ml-4 font-bold">Add to cart</p>
    </div>
  );
}

export { ButtonAddCart };
