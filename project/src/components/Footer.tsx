import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">Premium Autos</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect vehicle. We offer premium quality cars with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inventory" className="hover:text-white transition-colors">View Inventory</a></li>
              <li><a href="#financing" className="hover:text-white transition-colors">Financing Options</a></li>
              <li><a href="#trade-in" className="hover:text-white transition-colors">Trade-In Value</a></li>
              <li><a href="#warranty" className="hover:text-white transition-colors">Warranty Info</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#sales" className="hover:text-white transition-colors">Vehicle Sales</a></li>
              <li><a href="#financing" className="hover:text-white transition-colors">Auto Financing</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Service Center</a></li>
              <li><a href="#parts" className="hover:text-white transition-colors">Parts Department</a></li>
              <li><a href="#insurance" className="hover:text-white transition-colors">Insurance Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Auto Plaza Drive<br />City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@premiumautos.com</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon-Fri: 9:00 AM - 8:00 PM</div>
                <div>Saturday: 9:00 AM - 6:00 PM</div>
                <div>Sunday: 11:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Premium Autos. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;