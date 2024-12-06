// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Booking',
      description: 'Your safety is our priority with fully insured vehicles',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your needs',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Best Prices',
      description: 'Competitive rates and transparent pricing',
    },
  ];

  const featuredCars = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      price: 150,
      image: 'tesla-model-3.jpg',
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      price: 200,
      image: 'bmw-x5.jpg',
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: 180,
      image: 'mercedes-c.jpg',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-700"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Your Journey Begins<br />With Perfect Ride
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-2xl"
            >
              Experience luxury and comfort with our premium car rental service
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/fleet"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-colors"
              >
                Browse Fleet <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Alshari</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{car.name}</h3>
                      <p className="text-gray-600">{car.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${car.price}</p>
                      <p className="text-sm text-gray-600">per day</p>
                    </div>
                  </div>
                  <Link
                    to={`/booking?car=${car.id}`}
                    className="block w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;