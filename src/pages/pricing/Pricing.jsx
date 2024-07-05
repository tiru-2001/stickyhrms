import React from "react";
import image from "../../assets/images/resouce1[1].png";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  const description =
    "Explore our flexible pricing plans designed to meet the diverse needs of businesses of all sizes, ensuring you get the best value for your investment.";

  const plans = [
    {
      title: "Basic",
      price: "₹9,999/month",
      employees: "(Upto 100 Employees)",
      additionalEmployee: "₹90 per additional employee",
      features: {
        coreHR: [
          "Org Structure Management",
          "Document Storage & Generation",
          "Employee Onboarding - Basic",
        ],
        timeAttendance: [
          "Leave Management",
          "Gamified Attendance Tracking",
          "Overtime Automation",
        ],
        payrollExpense: [
          "Payroll Automation",
          "Statutory Compliance",
          "Direct Salary Payout",
        ],
        employeeSelfService: [
          "Signup using Email",
          "Mobile App",
          "Inbox (Notification Centre)",
        ],
      },
    },
    {
      title: "Pro",
      price: "₹15,000/month",
      employees: "(Upto 100 Employees)",
      additionalEmployee: "₹90 per additional employee",
      features: {
        coreHR: [
          "Org Structure Management",
          "Document Storage & Generation",
          "Employee Onboarding - Basic",
        ],
        timeAttendance: [
          "Leave Management",
          "Gamified Attendance Tracking",
          "Overtime Automation",
        ],
        payrollExpense: [
          "Payroll Automation",
          "Statutory Compliance",
          "Direct Salary Payout",
        ],
        employeeSelfService: [
          "Signup using Email",
          "Mobile App",
          "Inbox (Notification Centre)",
        ],
      },
    },
    {
      title: "Advanced",
      price: "₹20,000/month",
      employees: "(Upto 100 Employees)",
      additionalEmployee: "₹90 per additional employee",
      features: {
        coreHR: [
          "Org Structure Management",
          "Document Storage & Generation",
          "Employee Onboarding - Basic",
        ],
        timeAttendance: [
          "Leave Management",
          "Gamified Attendance Tracking",
          "Overtime Automation",
        ],
        payrollExpense: [
          "Payroll Automation",
          "Statutory Compliance",
          "Direct Salary Payout",
        ],
        employeeSelfService: [
          "Signup using Email",
          "Mobile App",
          "Inbox (Notification Centre)",
        ],
      },
    },
  ];

  return (
    <div>
      <div className="bg-blue p-4 md:p-8 text-center mt-10 flex flex-col md:flex-row min-w-screen">
        <div className="md:w-2/5 p-2 md:ml-10 lg:ml-40">
          <h3 className="font-roboto text-3xl font-semibold text-left mb-2">
            Pricing
          </h3>
          <p className="text-gray-800 font-lato font-normal text-left leading-8 text-xl">
            {description}
          </p>
        </div>
        <div className="md:w-3/5 flex justify-center items-center">
          <img
            src={image}
            alt="Descriptive"
            className="w-1/2 md:w-1/3 h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-16 p-4 md:p-10 lg:p-36">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col md:w-auto sm:w-auto p-4 bg-blue rounded-lg shadow-md lg:w-1/3"
          >
            <h2 className="text-3xl font-semibold font-roboto mb-2 ml-6 md:ml-12 mt-8">
              {plan.title}
            </h2>
            <h2 className="text-3xl font-semibold font-roboto mb-2 ml-6 md:ml-12 mt-2">
              {plan.price}
            </h2>
            <p className="text-xl font-lato mb-2 ml-6 md:ml-12 mt-2">
              {plan.employees}
            </p>
            <p className="text-xl font-lato ml-6 md:ml-12">
              {plan.additionalEmployee}
            </p>
            <h4 className="text-2xl font-roboto ml-6 md:ml-12 font-semibold mt-8">
              CORE HR
            </h4>
            {plan.features.coreHR.map((feature, i) => (
              <p key={i} className="text-xl font-lato ml-6 md:ml-12">
                {feature}
              </p>
            ))}
            <h4 className="text-2xl font-roboto ml-6 md:ml-12 font-semibold mt-8">
              TIME & ATTENDANCE
            </h4>
            {plan.features.timeAttendance.map((feature, i) => (
              <p key={i} className="text-xl font-lato ml-6 md:ml-12">
                {feature}
              </p>
            ))}
            <h4 className="text-2xl font-roboto ml-6 md:ml-12 font-semibold mt-8">
              PAYROLL AND EXPENSE
            </h4>
            {plan.features.payrollExpense.map((feature, i) => (
              <p key={i} className="text-xl font-lato ml-6 md:ml-12">
                {feature}
              </p>
            ))}
            <h4 className="text-2xl font-roboto ml-6 md:ml-12 font-semibold mt-8">
              EMPLOYEE SELF SERVICE
            </h4>
            {plan.features.employeeSelfService.map((feature, i) => (
              <p key={i} className="text-xl font-lato ml-6 md:ml-12">
                {feature}
              </p>
            ))}
            <button
              onClick={handleClick}
              className="self-center mt-10 mb-10 w-3/4 h-14 text-xl bg-yellow text-black font-roboto font-semibold rounded"
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
