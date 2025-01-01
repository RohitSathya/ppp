import React, { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModernHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const accountMenuItems = [
    { label: "Login", action: () => navigate("/login") },
    { label: "Register", action: () => navigate("/register") },
    { label: "My Profile", action: () => navigate("/profile") },
    { label: "My Properties", action: () => navigate("/my-properties") },
    { label: "My Favorites", action: () => navigate("/favouriteproperty") },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="https://media-hosting.imagekit.io//f537332828db4150/Untitled%20design%20(6).png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              HOME
            </button>
            <button 
              onClick={() => navigate('/properties')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              PROPERTIES
            </button>
            
            {/* Account Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium transition-colors">
                MY ACCOUNT
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                {accountMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Phone Number (Desktop) */}
          <div className="hidden md:flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-bold">19854</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
            >
              HOME
            </button>
            <button
              onClick={() => {
                navigate('/properties');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
            >
              PROPERTIES
            </button>
            
            {/* Mobile Account Menu */}
            <div className="border-t border-gray-200 pt-2">
              {accountMenuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Phone Number */}
            <div className="mt-4 px-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-bold">19854</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ModernHeader;
