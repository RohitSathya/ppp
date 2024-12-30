import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSlider = () => {
  const clients = [
    "https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-03.png",
    "https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-02.png",
    "https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-01.png",
    "https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-14.png",
    "https://beyot.g5plus.net/main/wp-content/uploads/2016/11/partner-04.png",

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          We Always Have Trust
        </p>
        <h2 className="text-3xl font-bold text-gray-800">
          OUR CLIENTS
        </h2>
        <div className="mt-3 h-1 w-16 bg-orange-500 mx-auto"></div>
      </div>

      {/* Slider Section */}
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center px-2"
            >
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="w-28 h-28 object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsSlider;