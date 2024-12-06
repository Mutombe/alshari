// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[60vh] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 blur-[2px] brightness-50"
          style={{
            backgroundImage: `url('/contact.jpg')`,
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white space-y-4 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="text-xl max-w-2xl opacity-90"
          >
            Get in touch with our team for any inquiries or support
          </motion.p>
        </div>
      </div>

      {/* Subtle Animated Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.6, 0.4, 0.6],
          scale: [0.9, 1.05, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
      />
    </motion.section>
  );
};

// Custom marker icon

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordinates for the company location
  const companyLocation = [-17.8062465, 31.1487578, 15]; // New York coordinates

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+263 77 392 4222",
      subdetails: "Mon-Fri from 8am to 8pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@alshari.co.zw",
      subdetails: "Online support 24/7",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "22",
      details: "Kurrichane Way",
      subdetails: "Harare",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 8am - 8pm",
      subdetails: "Sunday: 10am - 6pm",
    },
  ];

  useEffect(() => {
    // Dynamically load Leaflet CSS to avoid SSR issues
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-900 mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Find Us on the Map
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <MapContainer
              center={companyLocation}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full z-10"
              style={{
                zIndex: 10,
                borderRadius: "0.75rem",
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                className="filter brightness-90 contrast-125"
              />
              <Marker position={companyLocation} icon={DefaultIcon}>
                <Popup>
                  <div className="text-center">
                    <strong>Alshari Car Rentals</strong>
                    <p>22 Kurrichane Way</p>
                    <p>Harare</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
