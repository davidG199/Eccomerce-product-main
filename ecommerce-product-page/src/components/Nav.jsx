import React from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../public/images/image-avatar.png";

function Nav() {
  return (
    <nav className=" flex py-7 items-center border-b w-full justify-between">
      <div className=" flex">
        <li>
          <img src={logo} alt="logo-main" />
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
          <img src={cart} alt="icon-cart" />
        </a>
        <a>
          <img src={avatar} alt="avatar-nav" className=" w-11 h-11" />
        </a>
      </div>
    </nav>
  );
}

export { Nav };
