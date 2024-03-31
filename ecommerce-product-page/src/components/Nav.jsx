import React from "react";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../public/images/image-avatar.png";
import "../styles/index.css"

function Nav() {
  return (
    <nav className=" flex py-7 items-center border-b w-full justify-between">
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
        <a>
          <img src={Cart} alt="icon-cart" />
        </a>
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
