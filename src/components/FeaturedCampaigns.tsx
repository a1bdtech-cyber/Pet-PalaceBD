import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  CAT_SALMON_IMAGE, 
  DOG_KIBBLE_IMAGE, 
  FARM_FEED_IMAGE 
} from '../data/products';
import { ArrowRight } from 'lucide-react';

export const FeaturedCampaigns: React.FC = () => {
  const { t, setFilterAnimal, resetAllFilters, setActiveView } = useApp();

  const handleCampaignClick = (animal: any) => {
    resetAllFilters();
    setFilterAnimal(animal);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            {t('campaignTitle')}
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            Curated nutritional spotlights and special supplies across Bangladesh
          </p>
        </div>

        {/* 3 Prominent Campaign Cards Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Campaign 1: Cat Food Essentials */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img
                src={CAT_SALMON_IMAGE}
                alt="Cat Food Essentials"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Feline Gourmet
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#143D2B] transition-colors">
                  {t('catFoodCampTitle')}
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  {t('catFoodCampDesc')}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">From ৳160</span>
                <button
                  onClick={() => handleCampaignClick('cats')}
                  className="text-xs font-bold text-[#143D2B] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>{t('viewCollection')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Campaign 2: Dog Nutrition */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img
                src={DOG_KIBBLE_IMAGE}
                alt="Dog Nutrition & Vitality"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Canine Health
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#143D2B] transition-colors">
                  {t('dogFoodCampTitle')}
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  {t('dogFoodCampDesc')}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">From ৳420</span>
                <button
                  onClick={() => handleCampaignClick('dogs')}
                  className="text-xs font-bold text-[#143D2B] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>{t('viewCollection')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Campaign 3: Farm Livestock Feed Solutions */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img
                src={FARM_FEED_IMAGE}
                alt="Commercial Farm Feed Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#143D2B] text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Commercial Farm
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#143D2B] transition-colors">
                  {t('farmFeedCampTitle')}
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  {t('farmFeedCampDesc')}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">Wholesale Sacks</span>
                <button
                  onClick={() => handleCampaignClick('farm-animals')}
                  className="text-xs font-bold text-[#143D2B] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>{t('viewCollection')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
