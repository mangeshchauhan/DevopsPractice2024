import React from 'react';
import { Filter, X } from 'lucide-react';
import { useAuto } from '../context/AutoContext';

const SearchFilters: React.FC = () => {
  const { filterParams, updateFilters, clearFilters, vehicles } = useAuto();

  const makes = [...new Set(vehicles.map(v => v.make))].sort();
  const fuelTypes = [...new Set(vehicles.map(v => v.fuelType))].sort();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const handleFilterChange = (key: string, value: string | number) => {
    updateFilters({ [key]: value === '' ? undefined : value });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Filter className="mr-2" size={20} />
          Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
        >
          <X size={16} className="mr-1" />
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Make
          </label>
          <select
            value={filterParams.make || ''}
            onChange={(e) => handleFilterChange('make', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Makes</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={filterParams.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value) || '')}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filterParams.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value) || '')}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Year Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={filterParams.minYear || ''}
              onChange={(e) => handleFilterChange('minYear', parseInt(e.target.value) || '')}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Min Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={filterParams.maxYear || ''}
              onChange={(e) => handleFilterChange('maxYear', parseInt(e.target.value) || '')}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Max Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Fuel Type
          </label>
          <select
            value={filterParams.fuelType || ''}
            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;