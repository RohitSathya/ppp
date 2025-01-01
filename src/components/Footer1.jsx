import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiEarthFill } from "react-icons/ri";

const Footer1 = () => {
  return (
    <div className="bg-black text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <img
            src="https://media-hosting.imagekit.io//f537332828db4150/Untitled%20design%20(6).png?Expires=1735836349&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vqdXjCW5C1xv~AV2l6unmr6o-M-9ujOe8qn~g6sioFFfsA5j6pRggb4CN08He3faq4vmAFkSNPNIl8VQcMydM97J3kpXWq4oGG7rhxqvn5ayJ3vP4myan4sDyuIrzhnsd4cPFR~6k3BoYjgoOlhcoW5nNJEy6qgFL~1g1rhRRP9QwG4tYAS1CyH5N9KerOBgoHBuuBPIKPGMvCDopFroVyczPz4vV-e1KMXN3aWk5~Fqp~WOSzRom7LmVhn-i9yS0wA~9khpFiYFkR9e4AKiXtyt7iNgmXgda6qeG7nrPon9MSo-Yu8oAAXYvpk5skSnFLjoBFohzR2IQRds5pFQEA__"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-gray-400 mb-6">
            Pellentesque habitant morbi tristique senetus et netus et malesuada
            fames ac turpis. tortor quam, feugiat vitae.
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
              <span>Chandigarh</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhoneCall className="text-orange-500" />
              <span>+91 1234567890</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail className="text-orange-500" />
              <span>hi@brorooms.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <RiEarthFill className="text-orange-500" />
              <span>www.brorooms.com</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Property Locations</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-400">
            <li className="hover:text-orange-500 cursor-pointer">Chandigarh</li>
            <li className="hover:text-orange-500 cursor-pointer">Mohali</li>
            <li className="hover:text-orange-500 cursor-pointer">Kharar</li>
            <li className="hover:text-orange-500 cursor-pointer">Zirakpur</li>
            <li className="hover:text-orange-500 cursor-pointer">Sahibzada Ajit Singh Nagar</li>
            <li className="hover:text-orange-500 cursor-pointer">Chandigarh University, Mohali</li>
            <li className="hover:text-orange-500 cursor-pointer">Chandigarh University South Campus, Mohali</li>
            <li className="hover:text-orange-500 cursor-pointer">Chitkara University, Chandigarh</li>
            <li className="hover:text-orange-500 cursor-pointer">Panjab University, Chandigarh</li>
            <li className="hover:text-orange-500 cursor-pointer">Lovely Professional University, Phagwara</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
