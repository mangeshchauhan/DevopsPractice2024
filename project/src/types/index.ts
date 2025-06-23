export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  description: string;
  features: string[];
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}

export type SortOption = 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc' | 'mileage-asc';