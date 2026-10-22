import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HERO_BANNER_IMAGE, 
  CAT_SALMON_IMAGE, 
  DOG_KIBBLE_IMAGE, 
  FARM_FEED_IMAGE 
} from '../data/products';
import { ChevronRight, ArrowRight, Sparkles, ChevronLeft, ShieldCheck, Truck, Banknote } from 'lucide-react';
import { AnimalCategory } from '../types';

export const Hero: React.FC = () => {
  const { t, setActiveView, setFilterAnimal, resetAllFilters, openProductDetail, formatBDT } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleShopAnimal = (animal: AnimalCategory) => {
    resetAllFilters();
    setFilterAnimal(animal);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToShop = () => {
    resetAllFilters();
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-8 sm:pt-12 pb-14 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 1. Streamlined Editorial Headline & CTA Section */}
        <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0 pb-8 sm:pb-10">
          
          {/* Restrained promotional pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#1D1D1F] shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{t('storeHeroPromo')}</span>
          </div>

          {/* Big Strong Headline */}
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight text-[#1D1D1F] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            {t('storeHeroTitle')}
          </h1>

          {/* Short Supporting Sentence */}
          <p className="text-base sm:text-lg text-[#86868B] max-w-2xl font-normal leading-relaxed mt-4">
            {t('storeHeroSubtitle')}
          </p>

          {/* Prominent Primary CTA (48px height) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 mt-6">
            <button
              onClick={handleGoToShop}
              className="min-h-[48px] px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white hover:bg-black active:scale-98 font-semibold text-sm transition-all shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('heroCtaShop')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. High-Quality Hero Photograph (Clean Apple Hardware/Atmosphere Framing) */}
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 shadow-md mb-12 aspect-[16/9] sm:aspect-[21/9] max-h-[460px]">
          <img
            src={HERO_BANNER_IMAGE}
            alt="Pet Palace Royal Care"
            className="w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient scrim only at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

          {/* Minimal, restrained bottom caption */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-wrap items-center gap-2 text-white">
            <span className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
              Pet Palace Signature
            </span>
            <span className="text-white/60 text-xs hidden sm:inline">•</span>
            <span className="text-white/80 text-xs hidden sm:inline">
              Vet-formulated nutrition in Bangladesh
            </span>
          </div>

          <button
            onClick={handleGoToShop}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md text-[#1D1D1F] hover:bg-white text-xs font-semibold shadow-xs transition-transform active:scale-95"
          >
            {t('buyNowQuick')}
          </button>
        </div>

        {/* 3. Value Props Strip (Apple Clean Badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-14">
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-black/[0.04] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs text-[#1D1D1F]">{t('heroBadge1')}</p>
              <p className="text-[11px] text-[#86868B]">{t('whyPillar1Desc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-black/[0.04] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs text-[#1D1D1F]">{t('heroBadge2')}</p>
              <p className="text-[11px] text-[#86868B]">{t('whyPillar3Desc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-black/[0.04] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs text-[#1D1D1F]">{t('heroBadge3')}</p>
              <p className="text-[11px] text-[#86868B]">bKash, Nagad & Cash on Delivery</p>
            </div>
          </div>
        </div>

        {/* 4. Apple Store "The Latest" Carousel Section */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
              {t('theLatest')}
            </h2>

            {/* Scroll Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-9 h-9 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#1D1D1F] hover:bg-stone-50 transition-colors shadow-2xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-9 h-9 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#1D1D1F] hover:bg-stone-50 transition-colors shadow-2xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Bento Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Card 1: Feline Salmon (Clean Apple Light Card) */}
            <div className="min-w-[280px] sm:min-w-[340px] h-[450px] rounded-3xl overflow-hidden relative shadow-sm snap-start bg-white border border-black/[0.04] flex flex-col justify-between p-6 group">
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#86868B]">
                  FELINE GOURMET
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1D1D1F] tracking-tight">
                  {t('catFoodCampTitle')}
                </h3>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  {t('catFoodCampDesc')}
                </p>
                <p className="text-xs font-mono font-bold text-[#1D1D1F] pt-1">
                  {formatBDT(160)} · 100g Pouch
                </p>
              </div>

              <div className="relative h-52 rounded-2xl overflow-hidden bg-[#F5F5F7] my-3">
                <img
                  src={CAT_SALMON_IMAGE}
                  alt="Cat food"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => openProductDetail('prod-cat-01')}
                  className="min-h-[40px] px-5 py-2 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-xs transition-colors"
                >
                  {t('buyNowQuick')}
                </button>
                <button
                  onClick={() => handleShopAnimal('cats')}
                  className="text-xs font-semibold text-[#143D2B] hover:underline inline-flex items-center"
                >
                  <span>{t('viewCollection')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Canine Kibble (Clean Apple Light Card) */}
            <div className="min-w-[280px] sm:min-w-[340px] h-[450px] rounded-3xl overflow-hidden relative shadow-sm snap-start bg-white border border-black/[0.04] flex flex-col justify-between p-6 group">
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#86868B]">
                  CANINE NUTRITION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1D1D1F] tracking-tight">
                  {t('dogFoodCampTitle')}
                </h3>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  {t('dogFoodCampDesc')}
                </p>
                <p className="text-xs font-mono font-bold text-[#1D1D1F] pt-1">
                  {formatBDT(1350)} · 1.2kg – 10kg
                </p>
              </div>

              <div className="relative h-52 rounded-2xl overflow-hidden bg-[#F5F5F7] my-3">
                <img
                  src={DOG_KIBBLE_IMAGE}
                  alt="Dog food"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => openProductDetail('prod-dog-01')}
                  className="min-h-[40px] px-5 py-2 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-xs transition-colors"
                >
                  {t('buyNowQuick')}
                </button>
                <button
                  onClick={() => handleShopAnimal('dogs')}
                  className="text-xs font-semibold text-[#143D2B] hover:underline inline-flex items-center"
                >
                  <span>{t('viewCollection')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Farm Livestock Feeds (Apple Pro Dark Card) */}
            <div className="min-w-[280px] sm:min-w-[340px] h-[450px] rounded-3xl overflow-hidden relative shadow-sm snap-start bg-[#1D1D1F] text-white flex flex-col justify-between p-6 group">
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                  COMMERCIAL AGRICULTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  {t('farmFeedCampTitle')}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {t('farmFeedCampDesc')}
                </p>
                <p className="text-xs font-mono font-bold text-amber-300 pt-1">
                  Wholesale Sacks (20kg–50kg)
                </p>
              </div>

              <div className="relative h-52 rounded-2xl overflow-hidden bg-stone-900 my-3">
                <img
                  src={FARM_FEED_IMAGE}
                  alt="Farm feeds"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleShopAnimal('farm-animals')}
                  className="min-h-[40px] px-5 py-2 rounded-full bg-white text-[#1D1D1F] hover:bg-stone-100 font-semibold text-xs transition-colors"
                >
                  {t('buyNowQuick')}
                </button>
                <button
                  onClick={() => handleShopAnimal('farm-animals')}
                  className="text-xs font-semibold text-amber-300 hover:underline inline-flex items-center"
                >
                  <span>{t('viewCollection')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
