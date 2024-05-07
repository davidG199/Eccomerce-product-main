import React, { useContext } from "react";
import cart from "../../assets/icon-cart.svg";
import { GeneralContext } from "../context";
import "../styles/index.css"

function ButtonAddCart() {
  const context = useContext(GeneralContext);

  return (
    <div
      className="flex items-center justify-center bg-[var(--Orange)] grow-[2] text-white rounded-lg cursor-pointer
       hover:bg-[var(--Orange-hover)] btn"
      onClick={() => context.addProduct()}
      
    >
      <img src={cart} alt="cart-icon" className=" invert" />
      <p className="ml-4 font-bold">Add to cart</p>
    </div>
  );
}

export { ButtonAddCart };
