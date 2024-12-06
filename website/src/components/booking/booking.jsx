// src/components/Booking.jsx
import { useState } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Booking = ({ car, isOpen, onClose }) => {
  const [bookingData, setBookingData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', { car, ...bookingData });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Book {car?.name}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="pickupLocation"
                      value={bookingData.pickupLocation}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Dropoff Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dropoff Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={bookingData.dropoffLocation}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={bookingData.pickupDate}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Dropoff Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dropoff Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="dropoffDate"
                      value={bookingData.dropoffDate}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      name="pickupTime"
                      value={bookingData.pickupTime}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Dropoff Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dropoff Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      name="dropoffTime"
                      value={bookingData.dropoffTime}
                      onChange={handleChange}
                      className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Daily Rate</span>
                  <span className="font-semibold">${car?.price}/day</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-blue-600">${car?.price}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Booking;