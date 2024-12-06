// src/pages/Fleet.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search } from "lucide-react";
import Booking from "../booking/booking";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Cars" },
    { id: "luxury", name: "Luxury" },
    { id: "suv", name: "SUV" },
    { id: "electric", name: "Electric" },
    { id: "sports", name: "Sports" },
  ];

  const cars = [
    {
      id: 1,
      name: "Tesla Model 3",
      category: "electric",
      price: 150,
      seats: 5,
      transmission: "Automatic",
      features: ["Autopilot", "Premium Sound", "Long Range"],
      imageUrl: "t3.jpg",
    },
    {
      id: 2,
      name: "Honda Fit Hybrid",
      category: "Regular",
      price: 300,
      seats: 5,
      transmission: "Automatic",
      features: ["Leather Interior", "Panoramic Roof", "Massage Seats"],
      imageUrl: "hondafit.JPG",
    },
    {
      id: 3,
      name: "Toyota RAV4",
      category: "suv",
      price: 120,
      seats: 5,
      transmission: "Automatic",
      features: ["All-Wheel Drive", "Apple CarPlay", "Lane Assist"],
      imageUrl: "rav4.webp",
    },
    {
      id: 4,
      name: "Porsche 911",
      category: "sports",
      price: 450,
      seats: 2,
      transmission: "Manual",
      features: ["Sport Mode", "Carbon Fiber", "Launch Control"],
      imageUrl: "porche911.png",
    },
    {
      id: 5,
      name: "Toyota Hilux",
      category: "regular",
      price: 400,
      seats: 5,
      transmission: "Automatic",
      features: ["Hyperscreen", "Air Suspension", "Level 3 Autonomy"],
      imageUrl: "Hilux.webp",
    },
    {
      id: 6,
      name: "Range Rover Sport",
      category: "suv",
      price: 350,
      seats: 7,
      transmission: "Automatic",
      features: ["Off-Road Mode", "Premium Audio", "Air Suspension"],
      imageUrl: "range.webp",
    },
    {
      id: 7,
      name: "Toyota Corolla",
      category: "regular",
      price: 380,
      seats: 4,
      transmission: "Automatic",
      features: ["Quattro Drive", "Fast Charging", "Virtual Cockpit"],
      imageUrl: "corrola.png",
    },
    {
      id: 8,
      name: "Ford Raptor",
      category: "sports",
      price: 500,
      seats: 2,
      transmission: "Automatic",
      features: ["Race Mode", "Carbon Ceramics", "Active Aero"],
      imageUrl: "raptor.jpg",
    },
    {
      id: 9,
      name: "Rolls-Royce Ghost",
      category: "luxury",
      price: 490,
      seats: 5,
      transmission: "Automatic",
      features: ["Starlight Headliner", "Champagne Cooler", "Bespoke Audio"],
      imageUrl: "rolce.avif",
    },
    {
      id: 10,
      name: "McLaren 720S",
      category: "sports",
      price: 475,
      seats: 2,
      transmission: "Automatic",
      features: ["Track Mode", "Dihedral Doors", "Active Dynamics"],
      imageUrl: "mclaren.jpg",
    },
    {
      id: 11,
      name: "Bentley Continental GT",
      category: "luxury",
      price: 460,
      seats: 4,
      transmission: "Automatic",
      features: ["Diamond Quilting", "Rotating Display", "Air Suspension"],
      imageUrl: "bentley.webp",
    },
    {
      id: 12,
      name: "Honda Vezel",
      category: "sports",
      price: 280,
      seats: 7,
      transmission: "Automatic",
      features: ["Adventure Mode", "Tank Turn", "Camp Kitchen"],
      imageUrl: "vezel.jpg",
    },
  ];

  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      selectedCategory === "all" || car.category === selectedCategory;
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      car.price >= priceRange[0] && car.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6 ">
            <div className="bg-white p-6 rounded-xl shadow-sm bg-blue-100">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>

              {/* Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Price Range */}
              <div className="mt-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredCars.map((car) => (
                  <motion.div
                    key={car.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video">
                      <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600 capitalize">
                          {car.category}
                        </span>
                        <span className="text-2xl font-bold text-blue-600">
                          ${car.price}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Seats:</span>{" "}
                          {car.seats}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Transmission:</span>{" "}
                          {car.transmission}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedCar(car);
                          setIsBookingOpen(true);
                        }}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Booking
        car={selectedCar}
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedCar(null);
        }}
      />
    </div>
  );
};

export default Fleet;
