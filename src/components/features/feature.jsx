import React from 'react';

const boxData = [
  {
    logo: "/images/logo1.png",
    title: 'Employee Self-Service Portal',
    description: 'Empower your employees with easy access  to their personal information, leave requests, and performance reviews.',
  },
  {
    logo: "/images/logo2.png",
    title: 'Automated Recruitment',
    description: 'Streamline your hiring process with automated  job postings, applicant tracking, and interview scheduling.',
  },
  {
    logo: "/images/logo3.png",
    title: 'Performance Management',
    description: 'Set goals, conduct performance reviews, and  provide continuous feedback to help your employees grow and succeed.  ',
  },
  {
    logo: "/images/logo4.png",
    title: 'Time and Attendance Tracking',
    description: ' Simplify time tracking with automated  attendance management and customizable shift schedules.  ',
  },
  {
    logo: "/images/logo5.png",
    title: 'Payroll Management',
    description: 'Ensure accurate and timely payroll processing with  our integrated payroll management system. ',
  },
  {
    logo: "/images/logo6.png",
    title: 'Training and Development',
    description: 'Support employee growth with customizable  training programs and development plans.',
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{data.title}</h3>
        <p className="text-sm font-normal sm:text-base md:text-lg text-center justify-center text-black">{data.description}</p>
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
