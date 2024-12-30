import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";
import NewsletterSection from "./NewsletterSection";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import link from "../link";
const PropertyListing = () => {
  const location = useLocation();
  const filters = location.state?.filters || {};
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${link}/api/property`);
        setProperties(res.data);
        setFilteredProperties(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const filtered = properties.filter((property) => {
      const price = parsePrice(property.price);
      return (
        property.status?.toLowerCase() === "active" && // Ensure status is active
        (!filters.type || property.type.toLowerCase() === filters.type.toLowerCase()) &&
        (!filters.city || property.city?.toLowerCase() === filters.city.toLowerCase()) &&
        (!filters.minPrice || price >= filters.minPrice) &&
        (!filters.maxPrice || price <= filters.maxPrice)
      );
    });
    setFilteredProperties(filtered);
  }, [filters, properties]);

  const parsePrice = (price) => {
    const cleanPrice = price.replace(/[^\d]/g, "");
    return cleanPrice ? parseInt(cleanPrice) : 0;
  };

  const sliderSettings = {
    dots: true,
    infinite: filteredProperties.length > 4,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <SecondHeader />
      <ThirdHeader />

      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-12">
        <h1 className="text-center text-4xl font-bold text-white mb-6">
          Dream Properties
        </h1>
        <p className="text-center text-white text-lg">
          Explore the best properties tailored to your preferences.
        </p>
      </div>

      <div className="relative bg-gradient-to-r from-blue-100 via-white to-orange-100 p-6">
        {filteredProperties.length > 0 ? (
          <div className="max-w-7xl mx-auto">
            <Slider {...sliderSettings}>
              {filteredProperties.map((property) => (
                <div key={property._id} className="px-2">
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      navigate(`/property/${property._id}`, { state: property })
                    }
                  >
                    <div className="relative h-48">
                      <img
                        src={property.image || "https://via.placeholder.com/400x300"}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded">
                        {property.type}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold truncate text-gray-800">
                        {property.title}
                      </h3>
                      <p className="text-orange-500 font-bold mt-1 text-lg">
                        {property.price}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {property.city}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {property.bedrooms} Beds • {property.bathrooms} Baths
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No properties match your filters.
            </p>
          </div>
        )}
      </div>

      <NewsletterSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default PropertyListing;
