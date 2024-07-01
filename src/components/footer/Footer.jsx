import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/logo.png';

const columns = [
  {
    title: 'Resources Blog',
    items: ['Blog', 'Case Studies', 'HR Webinar', 'HR Tank', 'HR Innovation'],
    marginLeft: 'md:ml-40',
  },
  {
    title: 'Products',
    items: ['Complete HR', 'Payroll Management', 'Attendance & Time Management', 'Performance Management', 'Compensation Management', 'Workflow Management', 'Recruitment', 'Travel & Expense Management'],
    marginLeft: 'md:ml-20',
  },
  {
    title: 'Company',
    items: ['Pricing', 'About Us', 'Contact Us'],
    marginLeft: 'md:ml-40',
  },
  {
    title: '',
    items: ['Privacy Policy', 'Terms of Condition'],
    marginLeft: 'md:ml-40',
  },
];


const Footer = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    company: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isTyping, setIsTyping] = useState(false); // State to track input focus

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="bg-customGreen w-full text-center">
      {/* InfoContainer */}
      <div className="bg-customGreen p-6 w-full text-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:ml-8 mt-6">
          <div className="w-full md:w-1/2 text-white p-5">
            <h3 className="text-3xl font-semibold font-roboto max-w-[400px] md:max-w-[600px] align-left text-left ml-20 mt-10">
              Join Us on Our Journey
            </h3>
            <p className="text-xl text-gray-200 max-w-[350px] md:max-w-[600px] font-lato align-baseline mt-6 md:ml-20 text-left leading-relaxed">
              Whether you are a small startup or a large enterprise, Sticky HR has the solutions to help you manage your workforce more effectively. Join us on our journey to transform HR management and create a brighter future for your organization.
            </p>
          </div>
          <div className="bg-customGray text-black p-10 rounded-3xl w-full md:w-2/4 md:mr-20 mt-10 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-lightBlack30 font-lato font-semibold w-full ${isTyping ? 'bg-lightGray' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-lightBlack30 font-lato font-semibold w-full ${isTyping ? 'bg-lightGray' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-lightBlack30 font-lato font-semibold w-full ${isTyping ? 'bg-lightGray' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name*"
                    className={`bg-lightGray p-4 rounded-lg border border-lightBlack30 text-lightBlack30 font-lato font-semibold w-full ${isTyping ? 'bg-lightGray' : ''}`}
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center">
                  <button
                    type="submit" 
                    className="bg-yellow p-4 rounded-lg border border-lightBlack30 w-full md:w-2/4 text-black font-lato font-semibold"
                  >
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

  
      <div className="flex flex-col lg:flex-row justify-between items-start lg:ml-8">
        <div className="w-full lg:w-1/2 text-white p-10">
          <img src={logo} alt="Logo" className="h-14 max-w-[520px] mb-4 ml-10 mt-20" />
          <p className="text-xl text-gray-200 max-w-[690px] font-lato mt-8 ml-10 mb-0 text-left leading-relaxed">
            We are committed to helping you transform your HR processes and create a better workplace for your employees. Our HRMS is designed to save you time, reduce costs, and enhance the overall employee experience.
          </p>
        </div>
        <div className="w-full lg:w-2/4 text-black p-10 rounded-3xl mr-0 lg:mr-20">
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-4 lg:mt-20">
            <FaXTwitter className="text-white text-4xl mx-4" />
            <FontAwesomeIcon icon={faYoutube} className="text-white text-4xl mx-4" />
            <FontAwesomeIcon icon={faFacebook} className="text-white text-4xl mx-4" />
            <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl mx-4" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl mx-4" />
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
                <h4 className={`text-xl font-normal font-roboto text-left text-white ${column.marginLeft}`}>
                  {column.title}
                </h4>
              )}
              <ul className={`list-inside text-gray-200 font-lato text-xl font-extrathin text-left leading-relaxed ${column.marginLeft}`}>
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-customGray my-4 mx-4"></div>

      {/* Footer */}
      <div className="my-8">
        <FooterContent />
      </div>
    </div>
  );
};

const FooterContent = () => {
  return (
    <p className="text-lg text-white font-normal">
      ©2024 | Stickyhr Pvt. Ltd. Developed by{' '}
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
