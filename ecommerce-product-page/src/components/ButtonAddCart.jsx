import React from "react";
import cart from "../../assets/icon-cart.svg";

function ButtonAddCart() {
  return (
    <div className="flex items-center justify-center bg-[var(--Orange)] grow-[2] text-white rounded-lg">
      <img src={cart} alt="cart-icon" />
      <p className="ml-4 font-bold">
      Add to cart
      </p>
    </div>
  );
}

export { ButtonAddCart };
