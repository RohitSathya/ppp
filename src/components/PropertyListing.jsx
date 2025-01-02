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

const categories = ["1BHK", "2BHK", "3BHK", "4BHK", "4+ BHK", "Studio Apartment", "Annexy"];
const tenants = [
  "All",
  "Boys",
  "Girls",
  "Boys & Girls",
  "Family",
  "Family & Boys",
  "Family & Girls",
  "Company",
];
const furnishedTypes = ["Fully Furnished", "Semi Furnished", "Unfurnished"];
const ITEMS_PER_PAGE = 20;

const PropertyListing = () => {
  const location = useLocation();
  const filters2 = location.state?.filters || {};
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    preferredTenant: "",
    furnishedType: "",
    minPrice: 0,
    maxPrice: 500000,
  });
  const [currentPage, setCurrentPage] = useState(1);
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
        property.status?.toLowerCase() === "active" &&
        (!filters2.type || property.type.toLowerCase() === filters2.type.toLowerCase()) &&
        (!filters2.city || property.city?.toLowerCase() === filters2.city.toLowerCase()) &&
        (!filters2.minPrice || price >= filters2.minPrice) &&
        (!filters2.maxPrice || price <= filters2.maxPrice) &&
        (!filters.category || property.category === filters.category) &&
        (!filters.preferredTenant || property.preferredTenant === filters.preferredTenant) &&
        (!filters.furnishedType || property.furnishedType === filters.furnishedType) &&
        price >= filters.minPrice &&
        price <= filters.maxPrice
      );
    });
    setFilteredProperties(filtered);
  }, [filters, properties]);

  const parsePrice = (price) => {
    const cleanPrice = price.replace(/[^\d]/g, "");
    return cleanPrice ? parseInt(cleanPrice) : 0;
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: prev[name] === value ? "" : value, // Toggle filter off if clicked again
    }));
  };

  const handlePriceChange = (e, bound) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    setFilters((prev) => ({ ...prev, [bound]: value }));
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

  return (
    <>

      <ThirdHeader />

      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-12">
        <h1 className="text-center text-4xl font-bold text-white mb-6">Dream Room</h1>
        <p className="text-center text-white text-lg">Explore the best rooms tailored to your preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-4">
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Category</label>
            {categories.map((category) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                <label className="text-sm">{category}</label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Price Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={(e) => handlePriceChange(e, "minPrice")}
                placeholder="Min"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange(e, "maxPrice")}
                placeholder="Max"
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Preferred Tenant</label>
            {tenants.map((tenant) => (
              <div key={tenant} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="preferredTenant"
                  value={tenant}
                  checked={filters.preferredTenant === tenant}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                <label className="text-sm">{tenant}</label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Furnished Type</label>
            {furnishedTypes.map((type) => (
              <div key={type} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="furnishedType"
                  value={type}
                  checked={filters.furnishedType === type}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                <label className="text-sm">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Properties Listing */}
        <div className="w-full md:w-3/4">
          {paginatedProperties.length > 0 ? (
            <div>
              <Slider {...sliderSettings}>
                {paginatedProperties.map((property) => (
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
                          {property.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-6">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 mx-1 rounded border ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 border-blue-500"
                  }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No rooms match your filters.</p>
            </div>
          )}
        </div>
      </div>

      <NewsletterSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default PropertyListing;
