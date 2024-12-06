// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Users, Award, Calendar, Building } from 'lucide-react';

const AboutHero = () => {
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
            backgroundImage: `url('/about.jpg')`, 
            backgroundPosition: 'center'
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
              stiffness: 100 
            }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            About Alshari
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4, 
              type: "spring", 
              stiffness: 100 
            }}
            className="text-xl max-w-2xl opacity-90"
          >
            Leading the way in premium car rental services since 2008
          </motion.p>
        </div>
      </div>

      {/* Subtle Animated Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.6, 0.4, 0.6], 
          scale: [0.9, 1.05, 0.95] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "loop" 
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
      />
    </motion.section>
  );
};


const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '10,000+', label: 'Happy Customers' },
    { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Years Experience' },
    { icon: <Building className="w-6 h-6" />, value: '50+', label: 'Locations' },
    { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Satisfaction Rate' },
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      description: 'Leading our vision of premium car rental services.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      description: 'Ensuring smooth operations across all locations.',
    },
    {
      name: 'Michael Chen',
      position: 'Fleet Manager',
      description: 'Maintaining our premium vehicle collection.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AboutHero />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Alshari has grown from a small local car rental service to a 
              nationwide premium mobility solutions provider. Our commitment to excellence and 
              customer satisfaction has made us the preferred choice for both business and 
              leisure travelers.
            </p>
            <p className="text-gray-600">
              We take pride in our meticulously maintained fleet of vehicles and our 
              dedicated team of professionals who work tirelessly to ensure your journey 
              is nothing short of exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;