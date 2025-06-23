import React, { useState } from 'react';
import { Car, Heart, GitCompare, Menu, X, Phone, Mail } from 'lucide-react';
import { useAuto } from '../context/AutoContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites, compareVehicles } = useAuto();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@premiumautos.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon-Sat: 9AM-8PM | Sun: 11AM-6PM</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Premium Autos</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#inventory" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Inventory</a>
            <a href="#financing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Financing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <GitCompare size={20} />
              {compareVehicles.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {compareVehicles.length}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#inventory" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Inventory</a>
              <a href="#financing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Financing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;