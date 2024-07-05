import React from "react";

const ResponsiveBox = () => {
  return (
    <div>
      <div className="bg-white mt-10 border-yellow border-2 p-4 m-4 lg:w-[950px]  xl:ml-28 ">
        <h2 className="text-3xl  ml-10 font-roboto font-bold mb-5 mt-4  lg:text-4xl lg:ml-0 ">
          At Sticky HR, we are passionate about revolutionizing the way
          businesses manage their most valuable asset: their people.{" "}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:gap-10  ">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:ml-[89px] pl-3 pr-3 text-[14px]">
          <h2 className="text-3xl font-roboto font-semibold mt-10 text-center lg:ml-4">
            Our Mission
          </h2>
          <h3 className="text-xl font-roboto font-medium mt-4 text-justify p-2 lg:ml-3">
            Our mission is to empower companies with the tools they need to
            attract, develop, and retain top talent. We believe that efficient
            HR management is the backbone of any successful business. By
            providing user-friendly, scalable, and customizable HR software, we
            help organizations focus on what matters most their people.{" "}
          </h3>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:p-8 lg:mr-[69px] pl-3 pr-3 text-[14px] ">
          <h2 className="text-3xl font-roboto font-semibold mt-10 lg:mt-5 text-center ">
            Our Vision
          </h2>
          <h3 className="text-xl font-roboto font-medium mt-4 text-justify  p-2  ">
            We envision a world where HR management is effortless and
            user-friendly, empowering companies to flourish with a content and
            efficient workforce. Our aim is to become the premier provider of HR
            solutions that evolve with the changing needs of the workplace.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBox;
