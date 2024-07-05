import React from "react";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
const boxData = [
  {
    logo: logo1,
    title: "Employee Self-Service Portal",
    description:
      "Empower your employees with easy access  to their personal information, leave requests, and performance reviews.",
  },
  {
    logo: logo2,
    title: "Automated Recruitment",
    description:
      "Streamline your hiring process with automated  job postings, applicant tracking, and interview scheduling.",
  },
  {
    logo: logo3,
    title: "Performance Management",
    description:
      "Set goals, conduct performance reviews, and  provide continuous feedback to help your employees grow and succeed.  ",
  },
  {
    logo: logo4,
    title: "Time and Attendance Tracking",
    description:
      " Simplify time tracking with automated  attendance management and customizable shift schedules.  ",
  },
  {
    logo: logo5,
    title: "Payroll Management",
    description:
      "Ensure accurate and timely payroll processing with  our integrated payroll management system. ",
  },
  {
    logo: logo6,
    title: "Training and Development",
    description:
      "Support employee growth with customizable  training programs and development plans.",
  },
];

const InputBox = ({ children }) => {
  return (
    <div className="bg-lightGray p-4 rounded-lg border border-lightBlack30 text-lightBlack30 font-lato font-semibold">
      {children}
    </div>
  );
};

const Box = ({ data }) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-lightGray text-black w-full sm:w-80 md:w-96 h-96 mb-10 md:mr-10">
      <div className="p-8 rounded-t-lg flex items-center justify-center aspect-w-1 aspect-h-1">
        <img src={data.logo} alt="Logo" className=" mt-2 h-20 w-20" />
      </div>
      <div className="p-6 rounded-b-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {data.title}
        </h3>
        <p className="text-sm font-normal sm:text-base md:text-lg text-center justify-center text-black">
          {data.description}
        </p>
      </div>
    </div>
  );
};

const BoxContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-14">
      {boxData.map((item, index) => (
        <Box key={index} data={item} />
      ))}
    </div>
  );
};

export { boxData, InputBox, Box, BoxContainer };
