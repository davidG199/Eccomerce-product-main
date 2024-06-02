import { useContext, useState } from "react";
import Logo from "../../assets/logo.svg";
import Avatar from "../../public/images/image-avatar.png";
import "../styles/index.css";
import { GeneralContext } from "../context";
import CartIcon from "./icons/CartIcon";
import IconClose from "./icons/IconClose";
import IconMenu from "../../assets/icon-menu.svg"

function Nav() {
  const { cartProduct, openCartProduct, closeCartProduct, count, product } =
    useContext(GeneralContext);

  const toggleCart = () => {
    if (cartProduct) {
      closeCartProduct();
    } else {
      openCartProduct();
    }
  };

  // navbar state
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <nav
      className="
    flex flex-row md:justify-between items-center justify-between  
    md:relative top-0 sticky 
    border-b 
    w-full 
    md:py-5 py-4 px-5 md:px-0 z-10
  bg-white"
    >
      <div className=" flex">
        <li className="flex gap-4">
          <img src={IconMenu} alt="icon-menu"  className={``}/>
          <img src={Logo} alt="logo-main" className="text-white" />
        </li>
        <ul
          className={`nav-items gap-8 ml-16 hidden md:flex${
            openNav ? "top-[60px]" : "top-[440px]"
          }`}
        >
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
      <div className="flex items-center md:gap-10 gap-5">
        <div>
          <a onClick={() => toggleCart()} className="cursor-pointer">
            <CartIcon fill="#68707d" />
          </a>
          {product && (
            <span className=" bg-[var(--Orange)] text-white w-5 text-center rounded-xl text-[10px] absolute top-9 right-[275px]">
              {count}
            </span>
          )}
        </div>
        <a className="md:h-[50px] md:w-[50px] h-8 w-8 transition duration-300">
          <img
            src={Avatar}
            alt="avatar-nav"
            className=" w-full hover:border-2 border-[var(--Orange)] rounded-full cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
}

export { Nav };
