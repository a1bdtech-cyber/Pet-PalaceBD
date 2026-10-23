import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Search, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { AnimalCategory } from '../types';
import { 
  CAT_AVATAR_IMAGE, 
  DOG_AVATAR_IMAGE, 
  BIRD_AVATAR_IMAGE, 
  FISH_AVATAR_IMAGE, 
  RABBIT_AVATAR_IMAGE, 
  FARM_COW_AVATAR_IMAGE,
  PET_PALACE_EMBLEM
} from '../data/products';

export const Header: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    t, 
    cartCount, 
    wishlist, 
    setIsCartOpen, 
    activeView, 
    setActiveView, 
    searchQuery, 
    setSearchQuery, 
    setFilterAnimal,
    resetAllFilters 
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (view: 'home' | 'shop' | 'account' | 'admin', animal?: AnimalCategory) => {
    if (animal) {
      resetAllFilters();
      setFilterAnimal(animal);
      setActiveView('shop');
    } else {
      setActiveView(view);
    }
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveView('shop');
      setShowSearchInput(false);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const animalRibbon: { id: AnimalCategory; label: string; image: string }[] = [
    { id: 'cats', label: t('cats'), image: CAT_AVATAR_IMAGE },
    { id: 'dogs', label: t('dogs'), image: DOG_AVATAR_IMAGE },
    { id: 'birds', label: t('birds'), image: BIRD_AVATAR_IMAGE },
    { id: 'fish', label: t('fish'), image: FISH_AVATAR_IMAGE },
    { id: 'small-pets', label: t('smallPets'), image: RABBIT_AVATAR_IMAGE },
    { id: 'farm-animals', label: t('farmAnimals'), image: FARM_COW_AVATAR_IMAGE },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Apple-style Frosted Glass Global Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-black/[0.08] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 text-[12px] font-normal tracking-tight text-[#1D1D1F]">
            
            {/* Brand Logo with Royal Pet-Palace Emblem */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Pet Palace Home"
              id="header-brand-logo"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-sm flex items-center justify-center group-hover:scale-108 group-hover:border-amber-500 transition-all duration-300 bg-[#0D0B14] shrink-0">
                <img 
                  src={PET_PALACE_EMBLEM} 
                  alt="Pet-Palace BD Logo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-bold text-sm tracking-tight text-[#1D1D1F] group-hover:opacity-80 transition-opacity font-serif">
                {t('brandName')}
              </span>
            </button>

            {/* Nav links (Clean Apple-style single-line text links) */}
            <nav className="hidden md:flex items-center gap-7 text-[#1D1D1F]/80">
              <button
                onClick={() => handleNavClick('home')}
                className={`hover:text-[#1D1D1F] transition-colors whitespace-nowrap ${
                  activeView === 'home' ? 'text-[#1D1D1F] font-semibold' : ''
                }`}
              >
                {t('navHome')}
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className={`hover:text-[#1D1D1F] transition-colors whitespace-nowrap ${
                  activeView === 'shop' && !searchQuery ? 'text-[#1D1D1F] font-semibold' : ''
                }`}
              >
                {t('navShop')}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'cats')}
                className="hover:text-[#1D1D1F] transition-colors whitespace-nowrap"
              >
                {t('cats')}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'dogs')}
                className="hover:text-[#1D1D1F] transition-colors whitespace-nowrap"
              >
                {t('dogs')}
              </button>
              <button
                onClick={() => handleNavClick('shop', 'farm-animals')}
                className="hover:text-[#1D1D1F] transition-colors whitespace-nowrap"
              >
                {t('navFarmFeed')}
              </button>
              <button
                onClick={() => handleNavClick('account')}
                className="hover:text-[#1D1D1F] transition-colors whitespace-nowrap"
              >
                {t('navBuyAgain')}
              </button>
            </nav>

            {/* Right Action Icons: Search, Wishlist, Bag, Language */}
            <div className="flex items-center gap-3">
              
              {/* Language Switcher (Sleek Apple pill) */}
              <div className="flex items-center bg-[#E8E8ED] p-0.5 rounded-full text-[11px] font-medium">
                <button
                  onClick={() => setLanguage('bn')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    language === 'bn' ? 'bg-white text-[#1D1D1F] shadow-xs' : 'text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                >
                  বাং
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    language === 'en' ? 'bg-white text-[#1D1D1F] shadow-xs' : 'text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Search Toggle */}
              <button
                onClick={() => setShowSearchInput(!showSearchInput)}
                className="p-1.5 text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Wishlist */}
              <button
                onClick={() => handleNavClick('account')}
                className="hidden sm:flex relative p-1.5 text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button (Apple Store style) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 text-[#1D1D1F]/80 hover:text-[#1D1D1F] transition-colors flex items-center gap-1"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="w-4 h-4 bg-[#1D1D1F] text-white rounded-full text-[10px] font-bold flex items-center justify-center font-mono">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Admin Console Shortcut */}
              <button
                onClick={() => handleNavClick('admin')}
                className="hidden xl:flex items-center gap-1 text-[11px] text-[#86868B] hover:text-[#1D1D1F] transition-colors ml-1"
                title="Management Console"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-[#1D1D1F] hover:opacity-70 transition-opacity"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Collapsible Search Input Field */}
          {showSearchInput && (
            <form onSubmit={handleSearchSubmit} className="py-2.5 pb-3 animate-in fade-in duration-200">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  autoFocus
                  className="w-full pl-9 pr-8 py-2 text-xs bg-[#E8E8ED]/70 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 text-[#1D1D1F] placeholder:text-[#86868B]"
                />
                <Search className="w-3.5 h-3.5 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-[#1D1D1F]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          )}

        </div>
      </div>

      {/* 2. Apple Store Iconic Category Shelf / Ribbon with Real Cute Animal Photos */}
      <div className="bg-[#FFFFFF]/95 backdrop-blur-md border-b border-black/[0.04] overflow-x-auto py-2.5 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between sm:justify-center gap-4 sm:gap-8">
          {animalRibbon.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick('shop', item.id)}
              className="flex flex-col items-center group shrink-0 focus:outline-none cursor-pointer"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full p-0.5 bg-gradient-to-b from-stone-200 to-stone-100 group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-300 shadow-2xs group-hover:scale-108">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover rounded-full border border-white"
                  loading="lazy"
                />
              </div>
              <span className="text-[12px] font-semibold text-[#1D1D1F]/90 group-hover:text-black mt-1.5 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-24 z-50 bg-[#1D1D1F]/30 backdrop-blur-sm flex">
          <div className="w-3/4 max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-black/[0.08]">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500/70 shadow-sm bg-[#0D0B14] shrink-0">
                  <img 
                    src={PET_PALACE_EMBLEM} 
                    alt="Pet-Palace BD Emblem" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1D1D1F] font-serif leading-tight">{t('brandName')}</h3>
                  <p className="text-[10px] text-amber-700 font-medium">Happy Pets • Healthier Lives</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                Navigation
              </span>
              <div className="flex flex-col gap-2 text-sm font-medium text-[#1D1D1F]">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('navHome')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('navShop')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop', 'cats')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('cats')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop', 'dogs')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('dogs')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop', 'farm-animals')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('navFarmFeed')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('account')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between"
                >
                  <span>{t('navAccount')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
                <button
                  onClick={() => handleNavClick('admin')}
                  className="text-left py-2 px-3 rounded-xl hover:bg-[#F5F5F7] flex items-center justify-between text-[#86868B]"
                >
                  <span>{t('navAdmin')}</span>
                  <ChevronRight className="w-4 h-4 text-[#86868B]" />
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] text-xs text-[#86868B]">
              <p>{t('tagline')}</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
