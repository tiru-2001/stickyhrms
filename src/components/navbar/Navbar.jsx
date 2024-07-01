import React, { useState } from "react";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";

const navArray = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/resources", title: "Resources" },
  { path: "/pricing", title: "Pricing" },
  { path: "/about", title: "About" },
];

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div className="w-100 p-10 lg:p-16 pb-0 pt-10 flex justify-between items-center mb-8">
      <Link  to="/">
        <img src={"/images/logo.png"} alt="logo" />
      </Link>
      <div className="gap-10 hidden lg:flex">
        {navArray.map((each, ind) => (
          <Link  className="hover:underline font-semibold text-lg" to={each.path} key={ind}>
            {each.title}
          </Link>
        ))}
      </div>
      <div className="gap-8 items-center hidden lg:flex">
        <Link  className="hover:underline" to="/login">
          Login
        </Link>
        <button className="bg-yellow ring-0 p-1.5 rounded-lg">
          <Link  to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="lg:hidden">
        <button className="" onClick={closeModal}>
          <RxHamburgerMenu />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="h-2/5 bg-[#90b3b3] relative top-10 w-64 left-24 p-10 rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <button className="self-end" onClick={closeModal}>
              <RxCross2 className="text-2xl" />
            </button>
            {navArray.map((each, ind) => (
              <button
                onClick={closeModal}
                key={ind}
                className="hover:underline pl-0 w-10"
              >
                <Link  to={each.path}>{each.title}</Link>
              </button>
            ))}
            <Link  to="/login" className="hover:underline">
              Login
            </Link>
            <button className="bg-yellow-400 ring-0 p-1 rounded-lg w-32">
              <Link  to="/contact">Contact Us</Link>
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}