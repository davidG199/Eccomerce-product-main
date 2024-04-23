import { useContext } from "react";
import { GeneralContext } from "../context";
import ImgShoes from "../../public/images/image-product-1-thumbnail.jpg";
import IconDelete from "../../assets/icon-delete.svg";

function CartProduct() {
  const context = useContext(GeneralContext);

  return (
    <div
      className={`${
        context.CartProduct ? "block" : "hidden"
      } h-52 absolute top-24 right-24 shadow-2xl z-[00] rounded-lg`}
    >
      <div className="flex flex-col w-full h-full">
        <p className=" font-bold px-6 py-4 border-b">Cart</p>
        <div className="flex flex-col p-6 py-3">
          <div className="flex items-center">
            <img
              src={ImgShoes}
              alt="imgShoes"
              className=" w-10 h-10 rounded-md"
            />
            <span className=" text-[var(--Dark-grayish-blue)] mx-3">
              <p>Fall Limited Edition Sneakers</p>
              <span className="flex">
                <p>$125.00</p>
                <p>x 3</p>
                <p>$375.00</p>
              </span>
            </span>
            <img src={IconDelete} alt="deleteIcon" className="h-3 w-3" />
          </div>
          <button className="bg-[var(--Orange)] text-white font-bold py-3 rounded-lg my-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
