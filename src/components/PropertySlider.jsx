import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Building2, MapPin, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import link from "../link";

const PropertySlider = ({ filters, setFilters }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/properties", { state: { filters } });
  };

const cities = [
  "Chandigarh",
  "Mohali",
  "Kharar",
  "Zirakpur",
  "Sahibzada Ajit Singh Nagar",
  "Chandigarh University, Mohali",
  "Chandigarh University South Campus, Mohali",
  "Chitkara University, Chandigarh",
  "Panjab University, Chandigarh",
  "Lovely Professional University, Phagwara",
];


  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${link}/api/property`);
        const data = await res.json();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "minPrice" || name === "maxPrice" ? parseInt(value) || 0 : value,
    }));
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500/40 to-purple-600/40 p-4">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          opacity: '0.2'
        }}
      />
      
      <Card className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-md shadow-2xl border-0">
        <CardHeader className="space-y-1 text-center pb-2">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Dream Property
          </CardTitle>
          <p className="text-gray-500">Search through thousands of listings</p>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Label className="text-sm font-medium text-gray-700">City</Label>
              <select
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 mt-1 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Cities</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Label className="text-sm font-medium text-gray-700">Property Type</Label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-3 mt-1 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">KOTHI</option>
                <option value="Villa">SHARING PG</option>
                <option value="Store">SINGLE ROOMS</option>
                <option value="Apartment">PG</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Coins className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                <Label className="text-sm font-medium text-gray-700">Min Price</Label>
                <Input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice || ""}
                  onChange={handleFilterChange}
                  className="pl-10 mt-1"
                  placeholder="Min Price"
                />
              </div>

              <div className="relative">
                <Coins className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                <Label className="text-sm font-medium text-gray-700">Max Price</Label>
                <Input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice === Infinity ? "" : filters.maxPrice}
                  onChange={handleFilterChange}
                  className="pl-10 mt-1"
                  placeholder="Max Price"
                />
              </div>
            </div>
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5" />
            Search Properties
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertySlider;
