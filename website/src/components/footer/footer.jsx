import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
} from 'lucide-react';

import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaTiktok 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links - replace with actual URLs
  const socialLinks = [
    { 
      icon: FaWhatsapp, 
      href: "https://wa.me/1234567890",
      color: "#25D366" // WhatsApp green
    },
    { 
      icon: FaInstagram, 
      href: "https://instagram.com/alshari_official",
      color: "#E1306C" // Instagram gradient-like color
    },
    { 
      icon: FaFacebook, 
      href: "https://facebook.com/alshari",
      color: "#1877F2" // Facebook blue
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/company/alshari",
      color: "#0A66C2" // LinkedIn blue
    },
    { 
      icon: FaTiktok, 
      href: "https://tiktok.com/@alshari",
      color: "#000000" // TikTok black
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Alshari</h3>
            <p className="text-gray-400">
              Premium car rental services with a wide range of vehicles to choose from.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/fleet" className="text-gray-400 hover:text-white transition-colors">
                  Fleet
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="text-blue-500" size={20} />
                <span>22 Kurrichane Way, Harare</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-green-500" size={20} />
                <span>+263 77 392 4222</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-red-500" size={20} />
                <span>info@alshari.co.zw</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 items-center">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${social.name} Profile`}
                className="group relative"
              >
                <social.icon 
                  size={24} 
                  className="transition-all duration-300 
                    text-gray-400 
                    group-hover:text-white 
                    group-hover:scale-110"
                  style={{ color: social.color }}
                />
                {/* Optional: Tooltip */}
                <span className="
                  absolute 
                  -bottom-6 
                  left-1/2 
                  transform 
                  -translate-x-1/2 
                  bg-gray-800 
                  text-white 
                  text-xs 
                  px-2 
                  py-1 
                  rounded 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-300
                ">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
 
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Alshari Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;