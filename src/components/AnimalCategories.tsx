import React from 'react';
import { useApp } from '../context/AppContext';
import { AnimalCategory } from '../types';
import { 
  CAT_AVATAR_IMAGE, 
  DOG_AVATAR_IMAGE, 
  BIRD_AVATAR_IMAGE, 
  FISH_AVATAR_IMAGE, 
  RABBIT_AVATAR_IMAGE, 
  FARM_COW_AVATAR_IMAGE 
} from '../data/products';

interface CategoryItem {
  id: AnimalCategory;
  nameKey: 'cats' | 'dogs' | 'birds' | 'fish' | 'smallPets' | 'farmAnimals';
  image: string;
  badge?: string;
  itemCount: string;
}

export const AnimalCategories: React.FC = () => {
  const { t, setFilterAnimal, resetAllFilters, setActiveView } = useApp();

  const categories: CategoryItem[] = [
    {
      id: 'cats',
      nameKey: 'cats',
      image: CAT_AVATAR_IMAGE,
      itemCount: '12+ Items'
    },
    {
      id: 'dogs',
      nameKey: 'dogs',
      image: DOG_AVATAR_IMAGE,
      itemCount: '10+ Items'
    },
    {
      id: 'birds',
      nameKey: 'birds',
      image: BIRD_AVATAR_IMAGE,
      itemCount: '6+ Items'
    },
    {
      id: 'fish',
      nameKey: 'fish',
      image: FISH_AVATAR_IMAGE,
      itemCount: '8+ Items'
    },
    {
      id: 'small-pets',
      nameKey: 'smallPets',
      image: RABBIT_AVATAR_IMAGE,
      itemCount: '5+ Items'
    },
    {
      id: 'farm-animals',
      nameKey: 'farmAnimals',
      image: FARM_COW_AVATAR_IMAGE,
      badge: 'Commercial',
      itemCount: '8+ Feeds'
    }
  ];

  const handleSelect = (category: AnimalCategory) => {
    resetAllFilters();
    setFilterAnimal(category);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="animal-categories-section" className="py-12 bg-white border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
              {t('shopByAnimalTitle')}
            </h2>
            <p className="text-sm text-[#86868B] mt-1 max-w-xl">
              {t('shopByAnimalSubtitle')}
            </p>
          </div>
          <button
            onClick={() => {
              resetAllFilters();
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#1D1D1F] hover:underline transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>{t('viewAll')}</span>
            <span>→</span>
          </button>
        </div>

        {/* 6 Category Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
              className="group flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-[#E8E8ED] hover:shadow-xs transition-all duration-200 text-center relative focus-visible:outline-none"
            >
              {/* Cute Photo Avatar */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden p-0.5 bg-white border border-black/[0.06] shadow-2xs group-hover:scale-106 transition-transform duration-200 mb-3">
                <img
                  src={cat.image}
                  alt={t(cat.nameKey)}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <span className="font-semibold text-[#1D1D1F] text-sm group-hover:text-black transition-colors line-clamp-1">
                {t(cat.nameKey)}
              </span>

              {/* Subtitle */}
              <span className="text-[11px] text-[#86868B] mt-1 font-mono">
                {cat.itemCount}
              </span>

              {cat.badge && (
                <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-amber-800 bg-amber-100/90 px-1.5 py-0.5 rounded-full">
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
