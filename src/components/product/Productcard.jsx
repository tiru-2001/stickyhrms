import React from "react";
import arrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";

const Productcard = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="w-[99%]">
      <div className="mb-8">
        <div className="flex justify-center items-center mt-10 px-4 md:px-0">
          <div className="flex flex-col md:flex-row rounded-xl product-container w-full md:w-[85%] shadow-inner bg-customGray">
            <div className="w-full md:w-[44%] h-auto p-6 md:p-14 flex flex-col justify-center">
              <div className="relative mb-6 md:mb-10 mx-auto">
                <img
                  className="w-[80%] h-[50%] md:w-[277px] md:h-[217px] "
                  src={data.image}
                  alt="Product"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-center md:ml-10 mt-2 text-black">
                {data.title}
              </h2>
              <p className="text-base md:text-xl text-black font-lato text-center font-medium mb-4 w-full md:ml-8">
                {data.description}
              </p>
              <button
                onClick={handleClick}
                className="flex items-center ml-3 md:ml-40 justify-center rounded-full py-2 px-4 md:px-8 bg-yellow text-black font-bold font-roboto text-lg md:text-md mb-4 md:mb-10 mt-2 md:mt-0 md:w-[50%] h-12 md:h-14"
              >
                <span className="flex items-center md:w-[80%]">
                  {data.buttonText}
                  <img
                    src={arrow}
                    alt="arrow"
                    className="ml-2 md:inline-block"
                  />{" "}
                </span>
              </button>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="text-black mx-auto">
                <p className="text-base md:text-xl font-lato  font-medium">
                  {data.additionalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
