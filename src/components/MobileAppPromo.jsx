import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";

const MobileAppPromo = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 lg:py-20"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Find your property by your{" "}
            <span className="text-orange-500">finger tip</span>
          </h2>
          <p className="text-white text-lg mt-4 drop-shadow-sm">
            Our mobile apps are available now
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {/* Android Market Button */}
            <a
              href="#"
              className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            >
              <FaAndroid className="text-2xl mr-3" />
              <div>
                <p className="text-xs">Available on the</p>
                <p className="font-semibold">ANDROID MARKET</p>
              </div>
            </a>
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            >
              <FaApple className="text-2xl mr-3" />
              <div>
                <p className="text-xs">Available on the</p>
                <p className="font-semibold">APP STORE</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 lg:mt-0 flex items-center space-x-10 lg:space-x-20">
          {/* Phone 1 */}
          <img
            src="https://beyot.g5plus.net/main/wp-content/uploads/2016/12/iphone-white.png"
            alt="Phone 1"
            className="relative z-10 transform translate-y-8 w-[140px] lg:w-[200px] shadow-xl transition-transform duration-500 hover:scale-105"
          />
          {/* Phone 2 */}
          <img
            src="https://beyot.g5plus.net/main/wp-content/uploads/2016/12/iphone-black-207x545.png"
            alt="Phone 2"
            className="relative transform translate-y-8 w-[160px] lg:w-[220px] shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromo;
