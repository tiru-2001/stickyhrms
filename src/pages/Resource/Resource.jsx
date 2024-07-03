import React from "react";
import image from "../../assets/images/resource.png";
import res1 from "../../assets/images/resource1.png";
import res2 from "../../assets/images/resource2.png";
import res3 from "../../assets/images/resource3.png";
import ress1 from "../../assets/images/resource4.png";
import ress2 from "../../assets/images/resource5.png";
import ress3 from "../../assets/images/resource6.png";
import ress4 from "../../assets/images/resource7.png";

const Resource = () => {
  const description =
    "Welcome to our Blogs and Case Studies section, where we dive deep into the latest trends, insights, and success stories in HR management and business operations.";

  const resources = [
    {
      image: res1,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
    {
      image: res2,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
    {
      image: res3,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
    {
      image: res1,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
    {
      image: res2,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
    {
      image: res3,
      description1:
        "The Future of Remote Work: How to Adapt Your HR Strategies",
      description:
        "Our Complete HR module is designed to be a comprehensive solution for all your HR management needs. It includes a wide range of features to help streamline HR processes, enhance productivity, and improve the employee experience. This includes everything from talent acquisition and onboarding to performance management and succession planning.",
    },
  ];

  const additionalResources = [
    {
      image: ress1,
      description: "Automating Payroll Efficiency",
      description1:
        "How a mid-sized company streamlined payroll processes with automation. Discover the impact on accuracy and employee satisfaction.",
    },
    {
      image: ress2,
      description: "Automating Payroll Efficiency",
      description1:
        "How a mid-sized company streamlined payroll processes with automation. Discover the impact on accuracy and employee satisfaction.",
    },
    {
      image: ress3,
      description: "Automating Payroll Efficiency",
      description1:
        "How a mid-sized company streamlined payroll processes with automation. Discover the impact on accuracy and employee satisfaction.",
    },
    {
      image: ress4,
      description: "Automating Payroll Efficiency",
      description1:
        "How a mid-sized company streamlined payroll processes with automation. Discover the impact on accuracy and employee satisfaction.",
    },
  ];

  return (
    <div>
      {/* Original container */}
      <div className="bg-blue-400 p-4 md:p-10 shadow-lg text-center mb-8 mt-10 flex flex-col md:flex-row min-w-screen">
        <div className="md:w-2/5 p-2 md:ml-40">
          <h3 className="font-roboto text-3xl font-semibold text-left mb-2">
            Blogs and Case Studies
          </h3>
          <p className="text-gray-800 font-lato font-normal text-left leading-8 text-xl">
            {description}
          </p>
        </div>
        <div className="md:w-2/3 flex justify-center items-center">
          <img
            src={image}
            alt="Descriptive"
            className="w-full md:w-3/5 h-auto rounded-lg"
          />
        </div>
      </div>

      {/* New containers */}
      <div className="bg-white p-4 md:p-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-20 lg:px-32">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg flex flex-col items-center"
            >
              <div className="mb-4 flex justify-center w-full">
                <img
                  src={resource.image}
                  alt={`Resource ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mb-4 text-center">
                <p className="text-black font-roboto text-xl font-bold text-left leading-8">
                  {resource.description1}
                </p>
                <p className="text-black font-lato text-xl text-left font-normal leading-8">
                  {resource.description}
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-white text-black px-4 py-2 rounded-lg mb-10">
                  Read More{" >"}{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional containers */}
      <div className="bg-white p-4 md:p-10 lg:p-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-10 lg:px-16">
          {additionalResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg flex flex-col items-center"
            >
              <div className="mb-4 flex justify-center w-full">
                <img
                  src={resource.image}
                  alt={`Additional Resource ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mb-4 text-center">
                <p className="text-black font-roboto text-lg text-left font-bold leading-8">
                  {resource.description}
                </p>
                <p className="text-black font-lato text-lg text-left font-normal leading-8">
                  {resource.description1}
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-white text-black px-4 py-2 rounded-lg mb-10">
                  Read More{" >"}{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
