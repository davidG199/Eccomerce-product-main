import { useContext } from "react";
import { GeneralContext } from "../context";
import ImgShoes from "../../public/images/image-product-1-thumbnail.jpg";
import IconDelete from "../../assets/icon-delete.svg";

function Product() {
    return (
        
        <div className="flex flex-col w-full h-full">
        <div className="flex flex-col p-2 py-2">
          <div className="flex items-center my-1">
            <img
              src={ImgShoes}
              alt="imgShoes"
              className=" w-10 h-10 rounded-md"
            />
            <span className=" text-[var(--Dark-grayish-blue)] mx-3 my-1">
              <p>Fall Limited Edition Sneakers</p>
              <span className="flex">
                <p>$125.00 x 3 <span className="font-bold">$375.00</span> </p>
              </span>
            </span>
            <img src={IconDelete} alt="deleteIcon" className="h-3 w-3" />
          </div>
          <button className="bg-[var(--Orange)] text-white font-bold py-3 rounded-lg my-4">
            Checkout
          </button>
        </div>
      </div>
     );
}

export default Product;