import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../../assets/images/Group57.png";
import { sendEmail } from "../../utilities";

const columns = [
  {
    title: "Resources",
    items: ["Blog", "Case Studies", "HR Webinar"],
    marginLeft: "md:ml-40",
    path: "/resources",
  },
  {
    title: "Products",
    items: [
      "Complete HR",
      "Payroll Management",
      "Attendance & Time Management",
      "Performance Management",
      "Compensation Management",
      "Workflow Management",
      "Recruitment",
      "Travel & Expense Management",
    ],
    marginLeft: "md:ml-20",
    path: "/products",
  },
  {
    title: "Company",
    items: ["Pricing", "About Us", "Contact Us"],
    marginLeft: "md:ml-40",
  },
  {
    title: "",
    items: ["Privacy Policy", "Terms of Condition"],
    marginLeft: "md:ml-40",
  },
];

const Footer = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isTyping, setIsTyping] = useState(false); // State to track input focus
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await sendEmail({
        ...formData,
        message: `You got a message from  the ${formData.company} and the name is  ${formData.name} and the phone number is  ${formData.phone}`,
      });
      console.log(response);
      if (response) {
        toast.success("Form submitted successfully");
        setLoading(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
        });
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <div className="bg-customGreen w-full text-center">
      {/* InfoContainer */}
      <div className="bg-white  py-10 w-full text-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:ml-8 mt-4 mb-10">
          <div className="w-full md:w-1/2 text-black p-5">
            <h3 className="text-3xl font-semibold  max-w-[400px] md:max-w-[600px] align-left text-left lg:ml-20 lg:mt-5">
              Join Us on Our Journey
            </h3>
            <p className="text-xl  font-medium text-black max-w-[350px] md:max-w-[600px]  align-baseline mt-6 md:ml-20 text-left leading-relaxed">
              "Join Us on Our Journey: Elevating HR Management through
              Innovative, AI-Driven Solutions. Together, let's simplify
              processes, enhance productivity, and shape the future of work.
              Experience the transformative power of Sticky HR today."
            </p>
          </div>
          <div className="bg-customGreen text-black p-10 rounded-3xl w-full md:w-2/4 md:mr-20 mt-10 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-black font-lato font-semibold w-full ${
                      isTyping ? "bg-lightGray" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-black font-lato font-semibold w-full ${
                      isTyping ? "bg-lightGray" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-black font-lato font-semibold w-full ${
                      isTyping ? "bg-lightGray" : ""
                    }`}
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    required
                    type="text"
                    name="company"
                    placeholder="Company Name*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-black font-lato font-semibold w-full ${
                      isTyping ? "bg-lightGray" : ""
                    }`}
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow p-4 rounded-lg border border-black w-full md:w-2/4 text-black font-lato font-semibold"
                  >
                    {loading ? "loading" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>

      <div className="flex  flex-col lg:flex-row justify-between items-center ">
        <div className="w-full  text-white flex flex-col items-center p-10">
          <img src={logo} alt="Logo" className="h-14  max-w-[520px]" />
          <p className="text-xl  text-gray-200 w-[90%] mt-8 ml-10 mb-0 text-center leading-relaxed">
            We are committed to helping you transform your HR processes and
            create a better workplace for your employees. Our HRMS is designed
            to save you time, reduce costs, and enhance the overall employee
            experience.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-full text-white p-5 rounded-3xl mr-0 lg:mr-20">
        <div className="h-px bg-customGray my-4 mx-4"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
          <div className="flex flex-col justify text-lg">
            <p className="bg-yellow  text-black rounded w-max px-2 py-1 font-bold  lg:text-lg lg:ml-20 text-start ml-20">
              <FaPhone className="inline-block mr-4" />
              Contact Us{" "}
            </p>
            <p className="font-lato font-extralight lg:ml-20 text-lg mt-2 text-start ml-20">
              +919033244538
            </p>
          </div>
          <div className="flex flex-col justify">
            <p className=" bg-yellow text-black rounded w-max px-2 py-1 font-bold ml-20 text-left text-lg ">
              <FaMapMarkerAlt className="inline-block ml-2" /> Reach Us
            </p>
            <p className="font-lato font-extralight text-lg mt-2 leading-8 text-left ml-20">
              Garuda Bhive Workspace,kuvempu bus station,Bengalore
              Karnataka-574369
            </p>
          </div>
          <div className="flex flex-col justify">
            <p className=" lg:ml-40 text-black bg-yellow rounded w-max px-2 py-1 font-bold text-lg text-left  ml-20">
              {" "}
              <FaEnvelope className="inline-block mr-4" />
              Mail Us
            </p>
            <p className="font-lato font-extralight lg:ml-40 text-lg mt-2 text-left ml-20">
              stickyhr@gmail.com
            </p>
          </div>
          <div className="flex lg:flex-wrap justify-end lg:justify-end gap-1 lg:mr-20 mt-8">
            <FaXTwitter className="text-white text-3xl mx-4" />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-3xl mx-4"
            />

            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl mx-4"
            />
            <a href="https://www.linkedin.com/company/stickyhr/jobs/?viewAsMember=true">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-3xl mx-4"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-customGray my-4 mx-4"></div>

      {/* TertiaryContainer */}
      <div className="bg-customGreen p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column, index) => (
            <div key={index} className="p-4">
              {column.title && (
                <h4
                  className={`text-xl bg-yellow text-black  px-2 py-1  text-left w-max font-bold  rounded ${column.marginLeft}`}
                >
                  {column.title}
                </h4>
              )}
              <ul
                className={`list-inside mt-2 text-gray-200 font-lato text-xl font-extrathin text-left leading-relaxed ${column.marginLeft}`}
              >
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="my-8 mb-0">
        <FooterContent />
      </div>
    </div>
  );
};

const FooterContent = () => {
  return (
    <p className="text-lg text-white font-thin mt-28 p-10">
      ©2024 | Stickyhr Pvt. Ltd. Developed by{" "}
      <a
        href="https://www.thewebsort.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        Websort
      </a>
    </p>
  );
};

export default Footer;
