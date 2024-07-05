import React, { useState } from "react";
import logo from "../../assets/images/Group57.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Modal from "react-modal";

const navArray = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/resources", title: "Resources" },
  { path: "/price", title: "Pricing" },
  { path: "/about", title: "About" },
];

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full  top-0 p-4 lg:p-8 flex justify-between items-center bg-white shadow-md z-50">
      <Link to="/">
        <img className="w-40 lg:w-[200px]" src={logo} alt="logo" />
      </Link>
      <div className="hidden lg:flex gap-10">
        {navArray.map((each, ind) => (
          <Link
            className="hover:underline font-semibold text-lg"
            to={each.path}
            key={ind}
          >
            {each.title}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-8 items-center">
        <button className="bg-yellow text-black py-2 px-4 rounded-lg">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="lg:hidden">
        <button onClick={closeModal}>
          <RxHamburgerMenu size={24} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Menu"
          className={`fixed top-0 right-0 h-full w-64 bg-[#90b3b3] p-8 transition-transform transform ${
            modalIsOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
          closeTimeoutMS={300}
        >
          <div className="flex flex-col justify-center items-center gap-6">
            <button className="self-end" onClick={closeModal}>
              <RxCross2 className="text-2xl" />
            </button>
            {navArray.map((each, ind) => (
              <Link
                to={each.path}
                key={ind}
                className="hover:underline text-lg"
                onClick={closeModal}
              >
                {each.title}
              </Link>
            ))}
            <button className="bg-yellow text-black py-2 px-4 rounded-lg">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
