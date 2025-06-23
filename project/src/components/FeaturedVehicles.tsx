import React from 'react';
import { useAuto } from '../context/AutoContext';
import VehicleCard from './VehicleCard';

const FeaturedVehicles: React.FC = () => {
  const { vehicles } = useAuto();
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles, each offering exceptional value and quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} featured />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;