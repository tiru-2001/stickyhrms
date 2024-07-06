import React from "react";

const ResponsiveBox = () => {
  return (
    <div>
      <div className="bg-white mt-10  p-4 m-4 lg:w-[90%] text-center  xl:ml-28 ">
        <h2 className="text-3xl  ml-10 font-bold mb-5 mt-4  lg:text-4xl lg:ml-0 ">
          " At <span className=" bg-yellow rounded-md p-1">Sticky HR</span> , we
          are passionate about revolutionizing the way businesses manage their
          most valuable asset: their people. "{" "}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:gap-10  ">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:ml-[89px] pl-3 pr-3 text-[14px]">
          <h2 className="text-3xl bg-yellow px-2 p-1 rounded  font-semibold mt-10 text-center lg:ml-4">
            Our Mission
          </h2>
          <h3 className="text-xl font-bold  mt-4 text-justify p-2 lg:ml-3">
            “StickyHR: Empowering businesses through AI-driven automation. Our
            mission is to streamline workflows, enhance productivity, and free
            up valuable time for innovation."
          </h3>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:p-8 lg:mr-[69px] pl-3 pr-3 text-[14px] ">
          <h2 className="text-3xl bg-yellow px-2 p-1 rounded font-semibold mt-10 lg:mt-5 text-center ">
            Our Vision
          </h2>
          <h3 className="text-xl font-bold mt-4 text-justify  p-2  ">
            “StickyHR envisions a future where AI and automation seamlessly
            empower businesses. We strive to be the catalyst for workplace
            transformation, where routine tasks are automated, freeing up human
            potential for strategic innovation.”
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBox;
