import React, { useState } from 'react';
import { GitCompare, X, ChevronUp, ChevronDown } from 'lucide-react';
import { useAuto } from '../context/AutoContext';

const ComparePanel: React.FC = () => {
  const { compareVehicles, removeFromCompare } = useAuto();
  const [isExpanded, setIsExpanded] = useState(false);

  if (compareVehicles.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <GitCompare className="text-blue-600" size={20} />
            <span className="font-semibold text-gray-900">
              Compare Vehicles ({compareVehicles.length}/3)
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {compareVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-gray-50 rounded-lg p-4 relative">
                  <button
                    onClick={() => removeFromCompare(vehicle.id)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  
                  <img
                    src={vehicle.images[0]}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-24 object-cover rounded mb-3"
                  />
                  
                  <h4 className="font-semibold text-sm mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h4>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-semibold">${vehicle.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mileage:</span>
                      <span>{vehicle.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel:</span>
                      <span>{vehicle.fuelType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Compare Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePanel;