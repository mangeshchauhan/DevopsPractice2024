import React from 'react';
import { Heart, GitCompare, Eye, Fuel, Calendar, Gauge } from 'lucide-react';
import { Vehicle } from '../types';
import { useAuto } from '../context/AutoContext';

interface VehicleCardProps {
  vehicle: Vehicle;
  featured?: boolean;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, featured = false }) => {
  const { favorites, compareVehicles, toggleFavorite, addToCompare, removeFromCompare } = useAuto();
  const isFavorite = favorites.includes(vehicle.id);
  const isInCompare = compareVehicles.some(v => v.id === vehicle.id);

  const handleCompareToggle = () => {
    if (isInCompare) {
      removeFromCompare(vehicle.id);
    } else {
      addToCompare(vehicle.id);
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {featured && (
        <div className="bg-yellow-400 text-black text-center py-2 font-semibold">
          FEATURED
        </div>
      )}
      
      <div className="relative">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => toggleFavorite(vehicle.id)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white bg-opacity-80 text-gray-700 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleCompareToggle}
            className={`p-2 rounded-full transition-colors ${
              isInCompare 
                ? 'bg-blue-500 text-white' 
                : 'bg-white bg-opacity-80 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <GitCompare size={16} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {vehicle.fuelType}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <span className="text-2xl font-bold text-blue-600">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Gauge size={14} />
            <span>{vehicle.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel size={14} />
            <span>{vehicle.fuelType}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {vehicle.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {vehicle.features.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{vehicle.features.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-1">
            <Eye size={16} />
            <span>View Details</span>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;