import React from 'react';
import { AutoProvider } from './context/AutoContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedVehicles from './components/FeaturedVehicles';
import SearchFilters from './components/SearchFilters';
import VehicleGrid from './components/VehicleGrid';
import ComparePanel from './components/ComparePanel';
import Footer from './components/Footer';

function App() {
  return (
    <AutoProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <FeaturedVehicles />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <SearchFilters />
            </aside>
            <main className="lg:w-3/4">
              <VehicleGrid />
            </main>
          </div>
        </div>
        <ComparePanel />
        <Footer />
      </div>
    </AutoProvider>
  );
}

export default App;