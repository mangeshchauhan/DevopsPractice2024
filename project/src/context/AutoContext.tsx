import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Vehicle, SortOption } from '../types';
import { vehicles as initialVehicles } from '../data/vehicles';

type FilterParams = {
  make?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  fuelType?: string;
};

interface AutoContextType {
  vehicles: Vehicle[];
  filteredVehicles: Vehicle[];
  compareVehicles: Vehicle[];
  favorites: string[];
  filterParams: FilterParams;
  sortOption: SortOption;
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  toggleFavorite: (id: string) => void;
  updateFilters: (filters: FilterParams) => void;
  updateSort: (sort: SortOption) => void;
  clearFilters: () => void;
}

const AutoContext = createContext<AutoContextType | undefined>(undefined);

export const AutoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vehicles] = useState<Vehicle[]>(initialVehicles);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(initialVehicles);
  const [compareVehicles, setCompareVehicles] = useState<Vehicle[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterParams, setFilterParams] = useState<FilterParams>({});
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');

  const addToCompare = (id: string) => {
    if (compareVehicles.length < 3) {
      const vehicle = vehicles.find(v => v.id === id);
      if (vehicle && !compareVehicles.some(v => v.id === id)) {
        setCompareVehicles([...compareVehicles, vehicle]);
      }
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareVehicles(compareVehicles.filter(v => v.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fid => fid !== id) 
        : [...prev, id]
    );
  };

  const updateFilters = (filters: FilterParams) => {
    setFilterParams({ ...filterParams, ...filters });
    applyFilters({ ...filterParams, ...filters }, sortOption);
  };

  const updateSort = (sort: SortOption) => {
    setSortOption(sort);
    applyFilters(filterParams, sort);
  };

  const clearFilters = () => {
    setFilterParams({});
    applyFilters({}, sortOption);
  };

  const applyFilters = (filters: FilterParams, sort: SortOption) => {
    let filtered = [...vehicles];

    // Apply filters
    if (filters.make) {
      filtered = filtered.filter(v => v.make === filters.make);
    }
    if (filters.minPrice) {
      filtered = filtered.filter(v => v.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(v => v.price <= filters.maxPrice!);
    }
    if (filters.minYear) {
      filtered = filtered.filter(v => v.year >= filters.minYear!);
    }
    if (filters.maxYear) {
      filtered = filtered.filter(v => v.year <= filters.maxYear!);
    }
    if (filters.fuelType) {
      filtered = filtered.filter(v => v.fuelType === filters.fuelType);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        case 'mileage-asc':
          return a.mileage - b.mileage;
        default:
          return a.price - b.price;
      }
    });

    setFilteredVehicles(filtered);
  };

  const value = {
    vehicles,
    filteredVehicles,
    compareVehicles,
    favorites,
    filterParams,
    sortOption,
    addToCompare,
    removeFromCompare,
    toggleFavorite,
    updateFilters,
    updateSort,
    clearFilters
  };

  return <AutoContext.Provider value={value}>{children}</AutoContext.Provider>;
};

export const useAuto = (): AutoContextType => {
  const context = useContext(AutoContext);
  if (context === undefined) {
    throw new Error('useAuto must be used within an AutoProvider');
  }
  return context;
};