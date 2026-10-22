import React from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { ChevronRight } from 'lucide-react';

export const BestSellers: React.FC = () => {
  const { products, t, setActiveView, resetAllFilters } = useApp();

  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  const handleViewAll = () => {
    resetAllFilters();
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
              {t('bestSellersTitle')}
            </h2>
            <p className="text-sm text-[#86868B] mt-1">
              {t('bestSellersSubtitle')}
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="text-xs font-semibold text-[#143D2B] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>{t('viewAll')}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
