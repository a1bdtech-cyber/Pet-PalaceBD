import React from 'react';
import { useApp } from '../context/AppContext';
import { RotateCw, ShoppingBag, Check } from 'lucide-react';

export const RepeatPurchaseSection: React.FC = () => {
  const { products, addToCart, formatBDT, t, language } = useApp();

  const bundleCatKibble = products.find(p => p.id === 'prod-cat-02') || products[0];
  const bundleWetFood = products.find(p => p.id === 'prod-cat-01') || products[1];
  const bundleLitter = products.find(p => p.id === 'prod-cat-03') || products[2];

  const bundleTotal = (bundleCatKibble.price) + (bundleWetFood.price * 4) + (bundleLitter.price);

  const handleAddBundle = () => {
    addToCart(bundleCatKibble, bundleCatKibble.defaultSize, 1);
    addToCart(bundleWetFood, '100g Pouch', 4);
    addToCart(bundleLitter, bundleLitter.defaultSize, 1);
  };

  return (
    <section className="py-14 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.04] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">
                Smart Restock · No Recurring Fees
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
                {t('repeatTitle')}
              </h2>

              <p className="text-sm text-[#86868B] leading-relaxed">
                {t('repeatSubtitle')}
              </p>

              <div className="pt-2">
                <button
                  onClick={handleAddBundle}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white hover:bg-black active:scale-98 rounded-full font-semibold text-xs transition-all shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-300" />
                  <span>{t('addBundleToCart')}</span>
                </button>
              </div>
            </div>

            {/* Right: Suggested Monthly Routine Card */}
            <div className="lg:col-span-7 bg-[#F5F5F7] rounded-3xl p-5 sm:p-6 border border-black/[0.03]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.04]">
                <div>
                  <h3 className="font-semibold text-[#1D1D1F] text-sm sm:text-base">
                    {t('suggestedBundle')}
                  </h3>
                  <p className="text-xs text-[#86868B]">
                    {t('bundleDesc')}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold font-mono text-[#1D1D1F] tabular-nums">
                    {formatBDT(bundleTotal)}
                  </span>
                  <span className="block text-[10px] text-emerald-700 font-semibold">
                    Free Dhaka Delivery
                  </span>
                </div>
              </div>

              {/* 3 items in the bundle */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs bg-white p-3 rounded-2xl border border-black/[0.03]">
                  <div className="flex items-center gap-3">
                    <img src={bundleCatKibble.image} alt="Kibble" className="w-10 h-10 object-cover rounded-xl" />
                    <div>
                      <p className="font-semibold text-[#1D1D1F]">{bundleCatKibble.name}</p>
                      <p className="text-[#86868B] text-[11px]">1.5kg Dry Kibble · 1 Bag</p>
                    </div>
                  </div>
                  <span className="font-mono font-medium">{formatBDT(bundleCatKibble.price)}</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-3 rounded-2xl border border-black/[0.03]">
                  <div className="flex items-center gap-3">
                    <img src={bundleWetFood.image} alt="Wet food" className="w-10 h-10 object-cover rounded-xl" />
                    <div>
                      <p className="font-semibold text-[#1D1D1F]">{bundleWetFood.name}</p>
                      <p className="text-[#86868B] text-[11px]">100g Ocean Salmon Pouch · Pack of 4</p>
                    </div>
                  </div>
                  <span className="font-mono font-medium">{formatBDT(bundleWetFood.price * 4)}</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-3 rounded-2xl border border-black/[0.03]">
                  <div className="flex items-center gap-3">
                    <img src={bundleLitter.image} alt="Litter" className="w-10 h-10 object-cover rounded-xl" />
                    <div>
                      <p className="font-semibold text-[#1D1D1F]">{bundleLitter.name}</p>
                      <p className="text-[#86868B] text-[11px]">5kg Carbon Bentonite · 1 Bag</p>
                    </div>
                  </div>
                  <span className="font-mono font-medium">{formatBDT(bundleLitter.price)}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
