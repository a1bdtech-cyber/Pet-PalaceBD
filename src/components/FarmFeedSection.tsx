import React from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { FARM_FEED_IMAGE } from '../data/products';
import { Truck, Scale, ShieldCheck, ChevronRight, MessageSquareQuote } from 'lucide-react';

export const FarmFeedSection: React.FC = () => {
  const { products, t, setIsBulkModalOpen, setActiveView, setFilterAnimal, resetAllFilters } = useApp();

  const farmProducts = products.filter(p => p.animalCategory === 'farm-animals').slice(0, 4);

  const handleExploreAllFarm = () => {
    resetAllFilters();
    setFilterAnimal('farm-animals');
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#F5F5F7] border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple Pro Style Commercial Agriculture Banner */}
        <div className="bg-[#1D1D1F] text-white rounded-3xl p-7 sm:p-10 mb-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-300 font-semibold text-xs tracking-wider uppercase">
              Pet Palace Commercial Pro
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mt-2 tracking-tight">
              {t('farmSectionTitle')}
            </h2>
            <p className="text-sm text-stone-300 mt-2 leading-relaxed">
              {t('farmSectionSubtitle')}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => setIsBulkModalOpen(true)}
                className="px-5 py-2.5 bg-amber-400 text-stone-950 font-bold text-xs rounded-full hover:bg-amber-300 transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>{t('bulkInquiryBtn')}</span>
              </button>

              <button
                onClick={handleExploreAllFarm}
                className="px-5 py-2.5 bg-white/10 text-white font-semibold text-xs rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-1.5 border border-white/20"
              >
                <span>{t('viewAll')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Farm Features Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t('farmFeature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t('farmFeature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t('farmFeature3')}</span>
              </div>
            </div>
          </div>

          {/* Decorative image background */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-25 pointer-events-none hidden md:block">
            <img
              src={FARM_FEED_IMAGE}
              alt="Farm feed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Farm Feeds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {farmProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
