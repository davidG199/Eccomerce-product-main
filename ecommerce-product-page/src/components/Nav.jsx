import { useContext } from "react";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../public/images/image-avatar.png";
import "../styles/index.css"
import { GeneralContext } from "../context";

function Nav() {
  const {cartProduct, openCartProduct, closeCartProduct,count, cartCount, product} = useContext(GeneralContext)

  const toggleCart = () => {
    if (cartProduct) {
      closeCartProduct();
    } else {
      openCartProduct();
    }
  };

  return (
    <nav className=" flex py-7 items-center border-b w-full justify-between z-10">
      <div className=" flex">
        <li>
          <img src={Logo} alt="logo-main" className="text-white" />
        </li>
        <div className="nav-items">
          <ul className="flex gap-8 ml-16">
            <li className=" text-[var(--Dark-grayish-blue)] cursor-pointer hover:text-[var(--Very-dark-blue)] hover:font-normal">
              Collection
            </li>
            <li className=" text-[var(--Dark-grayish-blue)] cursor-pointer hover:text-[var(--Very-dark-blue)] hover:font-normal">
              Man
            </li>
            <li className=" text-[var(--Dark-grayish-blue)] cursor-pointer hover:text-[var(--Very-dark-blue)] hover:font-normal">
              Women
            </li>
            <li className=" text-[var(--Dark-grayish-blue)] cursor-pointer hover:text-[var(--Very-dark-blue)] hover:font-normal">
              About
            </li>
            <li className=" text-[var(--Dark-grayish-blue)] cursor-pointer hover:text-[var(--Very-dark-blue)] hover:font-normal">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>

        <a onClick={() => toggleCart()} className="cursor-pointer">
          <img 
          src={Cart} 
          alt="icon-cart" 
          
          
          />
        </a>
        {product && <span className=" bg-[var(--Orange)] text-white w-5 text-center rounded-xl text-[10px] absolute top-9 right-[275px]" >
          {count}
        </span>}
          </div>
        <a className="h-[50px] w-[50px] transition duration-300">
          <img
            src={Avatar}
            alt="avatar-nav"
            className=" w-full hover:outline-2 hover:border-2 border-[var(--Orange)] rounded-full cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
}

export { Nav };
