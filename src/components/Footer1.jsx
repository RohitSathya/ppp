import React from "react";
import { FaFacebookF, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiEarthFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer1 = () => {
  return (
    <div className="bg-black text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <img
            src="https://beyot.g5plus.net/main/wp-content/uploads/2016/12/Logo-beyot-white.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-gray-400 mb-6">
            Pellentesque habitant morbi tristique senetus et netus et malesuada fames ac turpis. tortor quam, feugiat vitae.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaBehance />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>G5 Technology JSC, Room 1201, Tecco Tower C</span>
            </li>
            <li>Apartment, Quang Trung Ward, Vinh City, Nghe An Province, VietNam (46000)</li>
            <li className="flex items-center space-x-2">
              <FiPhoneCall className="text-orange-500" />
              <span>(+84) 388-969-888</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail className="text-orange-500" />
              <span>g5plus@outlook.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <RiEarthFill className="text-orange-500" />
              <span>www.g5plus.net</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Property Cities</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-400">
            <li className="hover:text-orange-500 cursor-pointer">Austin</li>
            <li className="hover:text-orange-500 cursor-pointer">Los Angeles</li>
            <li className="hover:text-orange-500 cursor-pointer">Atlanta</li>
            <li className="hover:text-orange-500 cursor-pointer">San Diego</li>
            <li className="hover:text-orange-500 cursor-pointer">San Francisco</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer1;