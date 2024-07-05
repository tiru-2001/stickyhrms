import React from "react";
import Welcome from "../components/welcome/Welcome.jsx";
import { BoxContainer } from "../components/features/feature.jsx";
import ResponsiveBox from "../components/features/ResponsiveBox.jsx";
import image from "../assets/images/arrow.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import logoo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="min-w-screen overflow-x-hidden">
      <div className="bg-gradient-to-b from-white to-teal-700 h-auto">
        <div className="flex flex-col items-center text-center gap-4 mt-8 px-4">
          <h1 className="text-2xl font-bold">
            Experience the Future of HR Management
          </h1>
          <p className="text-lg w-full sm:w-5/6">
            We are committed to helping you transform your HR processes and
            create a better workplace for your employees. Our HRMS is designed
            to save you time, reduce costs, and enhance the overall employee
            experience.
          </p>
          <button
            onClick={handleClick}
            className="bg-yellow p-4 rounded-3xl flex hover:scale-105 duration-300 gap-2"
          >
            Schedule A Demo <img src={image} alt="arrow" />
          </button>
        </div>

        <div className="px-4">
          <div className="flex justify-between mt-10">
            <div className="flex flex-col items-center text-white">
              <img src={image1} alt="" className="w-12 md:w-auto" />
              <p className="text-sm md:text-md">Employee Self Service Ports</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <img src={image2} alt="" className="w-12 md:w-auto" />
              <p className="text-sm md:text-md">Payroll Management</p>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col items-center text-white">
              <img src={image3} alt="" className="w-12 md:w-auto" />
              <p className="text-sm md:text-md">Automated Recruitment</p>
            </div>
            <div>
              <img src={image4} alt="" className="w-12 md:w-auto" />
            </div>
            <div className="flex flex-col items-center text-white">
              <img src={image5} alt="" className="w-12 md:w-auto" />
              <p className="text-sm md:text-md">Performance Management</p>
            </div>
          </div>
        </div>
      </div>
      <Welcome />
      <div className="min-h-screen bg-custom-gray-100 flex flex-col items-center justify-center">
        <div className="bg-customGreen p-10 md:p-20 shadow-lg w-full text-center mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-200 mr-0 md:mr-4 text-shadow font-roboto text-shadow-md">
              Key Features of
            </h1>
            <img
              src={logoo}
              alt="Logo"
              className="h-12 md:h-14 w-auto"
              style={{ maxWidth: "158px", maxHeight: "47px" }}
            />
          </div>
          <p className="text-gray-200 mb-6 md:mb-20 mx-auto text-lg md:text-xl max-w-lg md:max-w-3xl font-extralight font-latotext">
            Discover the key functionalities that make Sticky HR a standout
            solution for managing your human resources efficiently and
            effectively.
          </p>
          <BoxContainer />
        </div>
        <ResponsiveBox />
      </div>
    </div>
  );
}
