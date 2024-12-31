import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Facebook, Twitter, Mail, Phone } from "lucide-react";
import axios from "axios";
import link from "../link";

const AgentsSlider = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch agents from the API
    const fetchAgents = async () => {
      try {
        const response = await axios.get(`${link}/api/owner`);
        const data = response.data.map((agent) => ({
          image: agent.profileImage || "https://via.placeholder.com/150", // Use the profileImage or a placeholder
          name: agent.username,
          social: {
            facebook: agent.facebook || "#",
            twitter: agent.twitter || "#",
            email: `mailto:${agent.email}` || "#",
            phone: `tel:${agent.phone}` || "#",
          },
        }));
        setAgents(data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: agents.length > 1,
    speed: 500,
    slidesToShow: Math.min(agents.length, 4), // Up to 4 agents per view
    slidesToScroll: 1,
    arrows: agents.length > 1,
    autoplay: agents.length > 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: Math.min(agents.length, 3),
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: Math.min(agents.length, 2),
        },
      },
      {
        breakpoint: 480, // Smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-white text-center relative">
      {/* Custom styles for slider arrows and card sizing */}
      <style>{`
        .slick-prev, .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background-color: rgb(249 115 22);
          border-radius: 50%;
        }
        .slick-prev {
          left: -15px;
        }
        .slick-next {
          right: -15px;
        }
        .slick-prev:hover, .slick-next:hover {
          background-color: rgb(249 115 22);
        }
        .slick-prev:before, .slick-next:before {
          font-size: 24px;
          line-height: 1;
          color: white;
        }
      `}</style>

      {/* Section Header */}
      <div className="mb-12">
        <p className="text-sm text-orange-500 uppercase font-medium">
          We Have Professional Agents
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Agents</h2>
        <div className="mt-2 h-1 w-12 bg-orange-500 mx-auto"></div>
      </div>

      {/* Agents Slider */}
      <div className="px-4 md:px-8 lg:px-12">
        {agents.length > 0 ? (
          <Slider {...settings}>
            {agents.map((agent, index) => (
              <div key={index} className="px-2">
                <div className="bg-white shadow-md hover:shadow-lg rounded-lg">
                  {/* Agent Image */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-24 h-24 mx-auto mt-4 rounded-full object-cover"
                  />
                  {/* Agent Details */}
                  <div className="mt-4 bg-black text-white rounded-b-lg py-4">
                    <h3 className="text-sm md:text-base font-bold">{agent.name}</h3>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href={agent.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href={agent.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={agent.social.email}
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <Mail size={20} />
                      </a>
                      <a
                        href={agent.social.phone}
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <Phone size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500">No agents available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AgentsSlider;
