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
            src="https://beyot.g5plus.net/main/wp-content/uploads/2016/11/Logo.png"
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
  <div
    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-4 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
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
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Home Five
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Home Six
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Home Seven
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Home Map V1
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Home Map V2
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Demo Single Property Landing
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Demo Single Agent
    </a>
  </div>
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
      {isMenuOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-[700px] z-50">
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* Group 01 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 01</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Listing Properties
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Single Property V1
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Single Property V2
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Advanced Search
              </a>
            </div>

            {/* Group 02 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 02</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Carousel
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Grid 2 Columns
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Grid 3 Columns
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property List
              </a>
            </div>

            {/* Group 03 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 03</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Zigzag
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Single Carousel
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Sync Carousel
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property City Filter
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="relative group">
  <a
    href="#"
    className="text-black hover:text-orange-500 font-medium flex items-center"
  >
    AGENTS
    <span className="ml-1 text-orange-500">▼</span>
  </a>
  {/* Dropdown */}
  <div
    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-4 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      List Agencies
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Single Agency
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Listing Agents
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Single Agent
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Properties of Agent
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Agent Grid
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Agent List
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Agent Carousel
    </a>
    
    
   
  </div>
</div>
<div className="relative group">
  <a
    href="#"
    className="text-black hover:text-orange-500 font-medium flex items-center"
  >
    Pages
    <span className="ml-1 text-orange-500">▼</span>
  </a>
  {/* Dropdown */}
  <div
    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-4 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Packages
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Property Status
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Property Type
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Property City
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      County/State
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Property Features
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      About Us
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Contact
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
     Coming Soon
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      FAQs
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      404
    </a>
    
    
   
  </div>
</div>
<div className="relative group">
  <a
    href="#"
    className="text-black hover:text-orange-500 font-medium flex items-center"
  >
    BLOGS
    <span className="ml-1 text-orange-500">▼</span>
  </a>
  {/* Dropdown */}
  <div
    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-4 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
  >
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Blog Large Image
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Blog Grid
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Blog Masonry
    </a>
    <a
      href="#"
      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
    >
      Single Post
    </a>
   
    
    
   
  </div>
</div>
<div
      className="relative group"
      onMouseEnter={() => setIsMenuOpen2(true)}
      onMouseLeave={() => setIsMenuOpen2(false)}
    >
      {/* Trigger */}
      <a
        href="#"
        className="text-black hover:text-orange-500 font-medium flex items-center"
      >
        ELEMENTS
        <span className="ml-1 text-orange-500">▼</span>
      </a>

      {/* Dropdown */}
      {isMenuOpen2 && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-[700px] z-50">
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* Group 01 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 01</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Properties
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Types
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Slider
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Gallery
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Featured
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Property Carousel
              </a>
            </div>

            {/* Group 02 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 02</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Agents
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Agency
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Charts
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
               Clients
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
               Count Down
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
               Counter
              </a>
            </div>

            {/* Group 03 */}
            <div>
              <h4 className="font-bold text-black mb-2">GROUP 03</h4>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                FAQs
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Google Maps
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Icon Boxes
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Pricing Table
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Video
              </a>
            </div>
          </div>
        </div>
      )}
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
