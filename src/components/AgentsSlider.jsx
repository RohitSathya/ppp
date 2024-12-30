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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-white text-center relative">
      {/* Custom styles for slider arrows */}
      <style>{`
        .slick-prev, .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background-color: rgb(249 115 22);
          border-radius: 50%;
        }
        .slick-prev {
          left: 25px;
        }
        .slick-next {
          right: 25px;
        }
        .slick-prev:hover, .slick-next:hover {
          background-color: rgb(249 115 22);
        }
        .slick-prev:before, .slick-next:before {
          font-size: 24px;
          line-height: 1;
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
      <div className="px-8">
        <Slider {...settings}>
          {agents.map((agent, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg hover:shadow-xl rounded-lg">
                {/* Agent Image */}
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-40 h-40 mx-auto mt-4 rounded-full object-cover"
                />
                {/* Agent Details */}
                <div className="mt-4 bg-black text-white rounded-b-lg py-4">
                  <h3 className="text-lg font-bold">{agent.name}</h3>
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
      </div>
    </div>
  );
};

export default AgentsSlider;
