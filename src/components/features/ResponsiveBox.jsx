import React from "react";

const ResponsiveBox = () => {
  return (
    <div>
      <div className="w-[49%] bg-white mt-20  border-2 p-4 m-4 ml-40">
        <h2 className="text-4xl ml-10 font-roboto font-bold mb-5 mt-4">
          At Sticky HR, we are passionate about revolutionizing the way
          businesses manage their most valuable asset: their people.{" "}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 ml-40">
        <div className="flex-1">
          <h3 className="text-lg font-roboto font-medium mb-40 mt-10 w-[85%]">
            Our mission is to empower companies with the tools they need to
            attract, develop, and retain top talent. We believe that efficient
            HR management is the backbone of any successful business. By
            providing user-friendly, scalable, and customizable HR software, we
            help organizations focus on what matters most – their people.{" "}
          </h3>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-roboto font-medium mb-40 mt-10 w-[85%]">
            We envision a world where HR management is seamless and intuitive,
            allowing companies to thrive through a happy and productive
            workforce. Our goal is to be the leading provider of HR solutions
            that adapt to the evolving demands of the workplace.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBox;
