import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import link from "../link";
const ThirdHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const nav=useNavigate()

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="flex justify-between items-center px-6 py-4 relative z-50">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img
            src="https://media-hosting.imagekit.io//f537332828db4150/Untitled%20design%20(6).png?Expires=1735836349&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vqdXjCW5C1xv~AV2l6unmr6o-M-9ujOe8qn~g6sioFFfsA5j6pRggb4CN08He3faq4vmAFkSNPNIl8VQcMydM97J3kpXWq4oGG7rhxqvn5ayJ3vP4myan4sDyuIrzhnsd4cPFR~6k3BoYjgoOlhcoW5nNJEy6qgFL~1g1rhRRP9QwG4tYAS1CyH5N9KerOBgoHBuuBPIKPGMvCDopFroVyczPz4vV-e1KMXN3aWk5~Fqp~WOSzRom7LmVhn-i9yS0wA~9khpFiYFkR9e4AKiXtyt7iNgmXgda6qeG7nrPon9MSo-Yu8oAAXYvpk5skSnFLjoBFohzR2IQRds5pFQEA__"
            alt="Beyot Real Estates Logo"
            className="h-12"
            onClick={()=>nav('/')}
          />
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:flex space-x-8">
          {/* Demo Dropdown */}
          <div className="relative group">
 <a
  onClick={() => nav('/')}
  className="text-black hover:text-orange-500 font-medium flex items-center cursor-pointer"
>
  HOME
  <span className="ml-1 text-orange-500"></span>
</a>

  {/* Dropdown */}
 
</div>

<div
      className="relative group"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      {/* Trigger */}
      <a
        href="#"
        className="text-black hover:text-orange-500 font-medium flex items-center"
      >
        PROPERTIES
        <span className="ml-1 text-orange-500">▼</span>
      </a>

      {/* Dropdown */}
      
    </div>




    <div className="relative group">
  <a
    href="#"
    className="text-black hover:text-orange-500 font-medium flex items-center"
  >
    MY ACCOUNT
    <span className="ml-1 text-orange-500">▼</span>
  </a>
  {/* Dropdown */}
  <div
    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-4 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
      onClick={()=>nav('/login')}
    >
      Login
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
      onClick={()=>nav('/register')}
    >
      Register
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      My Profile
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      My Properties
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      My Invoices
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
      onClick={()=>nav('/favouriteproperty')}
    >
      My Favourites
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
     My Saved Searches
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
     Submit New Property
    </a>
   
    
    
   
  </div>
</div>
        </nav>

        {/* Right Section: Phone Number with Curvy Orange Background */}
        <div
          className="hidden md:flex items-center justify-center relative"
          style={{ width: "250px", height: "60px" }}
        >
          <div
            className="absolute inset-0 bg-orange-500"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>
          <div className="relative z-10 flex items-center space-x-2 text-white">
            <FaPhoneAlt />
            <span className="font-bold text-lg">19854</span>
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Devices */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col bg-white shadow-md px-6 py-4 md:hidden">
          <div className="relative">
            <a
              href="#"
              className="text-black hover:text-orange-500 font-medium py-2 flex justify-between items-center"
            >
              DEMO
              <span className="text-orange-500">▼</span>
            </a>
            <div className="bg-white shadow-lg rounded-lg mt-2 p-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Home One
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Home Two
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Home Three
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Home Four
              </a>
              
              
            </div>
          </div>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            PROPERTIES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            AGENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            PAGES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            BLOGS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            ELEMENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            MY ACCOUNT
          </a>
          <div
            className="bg-orange-500 text-white flex items-center justify-center px-6 py-2 rounded-full mt-4"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)" }}
          >
            <FaPhoneAlt className="text-white mr-2" />
            <span className="font-bold text-lg">19854</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default ThirdHeader;
