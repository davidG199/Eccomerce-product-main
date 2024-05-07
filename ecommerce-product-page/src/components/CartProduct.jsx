import { useContext } from "react";
import { GeneralContext } from "../context";
import Product from "./Product";

function CartProduct() {
  const context = useContext(GeneralContext);

  const CartContent = () => {
    if (!context.product) {
      return (
        <p className=" text-[var(--Dark-grayish-blue)] font-bold">
          Your cart is empty
        </p>
      );
    } else {
      return <Product />;
    }
  };

  return (
    <div
      className={`${
        context.cartProduct ? "block" : "hidden"
      } absolute top-24 right-32 shadow-2xl rounded-lg z-[1000] bg-[var(--White-transparent)]`}
    >
      <div className="  h-[225px] w-[337px] flex justify-center items-center flex-col">
        <div className="w-full">
          <p className=" font-bold px-6 py-5 border-b">Cart</p>
        </div>
        <div className="h-full flex justify-center items-center">
          <CartContent />
          {/* <Product/> */}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
