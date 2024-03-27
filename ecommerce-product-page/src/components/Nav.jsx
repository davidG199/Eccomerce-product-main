import React from "react";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../public/images/image-avatar.png";

function Nav() {
  return (
    <nav className=" flex py-7 items-center border-b w-full justify-between">
      <div className=" flex">
        <li>
          <img src={Logo} alt="logo-main" className="text-white"/>
        </li>
        <div className="flex gap-8 ml-16">
          <li className=" text-[var(--Dark-grayish-blue)]">Collection</li>
          <li className=" text-[var(--Dark-grayish-blue)]">Man</li>
          <li className=" text-[var(--Dark-grayish-blue)]">Women</li>
          <li className=" text-[var(--Dark-grayish-blue)]">About</li>
          <li className=" text-[var(--Dark-grayish-blue)]">Contact</li>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <a>
          <img src={Cart} alt="icon-cart" />
        </a>
        <a>
          <img src={Avatar} alt="avatar-nav" className=" w-11 h-11" />
        </a>
      </div>
    </nav>
  );
}

export { Nav };
