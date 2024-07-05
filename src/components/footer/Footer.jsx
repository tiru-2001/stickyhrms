import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import logo from "../../assets/images/Group57.png";

const columns = [
  {
    title: "Resources Blog",
    items: ["Blog", "Case Studies", "HR Webinar", "HR Tank", "HR Innovation"],
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8csfy9e",
        "template_02dvmih",
        form.current,
        "SUDClEa8dJErqojnl"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Demo scheduled successfully!");
          setFormData(initialFormData);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to schedule demo. Please try again.");
        }
      );
  };

  return (
    <div className="bg-customGreen w-full text-center">
      {/* InfoContainer */}
      <div className="bg-white p-10 w-full text-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:ml-8 mt-4 mb-10">
          <div className="w-full md:w-1/2 text-black p-5">
            <h3 className="text-3xl font-semibold font-roboto max-w-[400px] md:max-w-[600px] align-left text-left lg:ml-20 lg:mt-5">
              Join Us on Our Journey
            </h3>
            <p className="text-xl text-black max-w-[350px] md:max-w-[600px] font-lato align-baseline mt-6 md:ml-20 text-left leading-relaxed">
              Whether you are a small startup or a large enterprise, Sticky HR
              has the solutions to help you manage your workforce more
              effectively. Join us on our journey to transform HR management and
              create a brighter future for your organization.
            </p>
          </div>
          <div className="bg-customGreen text-black p-10 rounded-3xl w-full md:w-2/4 md:mr-20 mt-10 md:mt-0">
            <form onSubmit={handleSubmit} ref={form}>
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
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:ml-8">
        <div className="w-full lg:w-1/2 text-white p-10">
          <img
            src={logo}
            alt="Logo"
            className="h-14 max-w-[520px] mb-4 ml-7  mt-1"
          />
          <p className="text-xl text-gray-200 max-w-[690px] font-lato mt-8 ml-10 mb-0 text-left leading-relaxed">
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
            <p className="lg:font-roboto lg:text-lg lg:ml-20 lg:font-medium text-start ml-20">
              <FaPhone className="inline-block mr-4" />
              Contact Us{" "}
            </p>
            <p className="font-lato font-extralight lg:ml-20 text-lg mt-2 text-start ml-20">
              +91852741963
            </p>
          </div>
          <div className="flex flex-col justify">
            <p className="font-roboto ml-20 text-left text-lg font-medium">
              Reach Us <FaMapMarkerAlt className="inline-block ml-2" />
            </p>
            <p className="font-lato font-extralight text-lg mt-2 leading-8 text-left ml-20">
              Garuda Bhive Workspace,kuvempu bus station,Bengalore
              Karnataka-574369
            </p>
          </div>
          <div className="flex flex-col justify">
            <p className="font-roboto lg:ml-40 text-lg text-left font-medium ml-20">
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
              icon={faFacebook}
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
                  className={`text-xl font-normal font-roboto text-left text-white ${column.marginLeft}`}
                >
                  {column.title}
                </h4>
              )}
              <ul
                className={`list-inside text-gray-200 font-lato text-xl font-extrathin text-left leading-relaxed ${column.marginLeft}`}
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
