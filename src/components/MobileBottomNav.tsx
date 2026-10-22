import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Compass, Heart, ShoppingBag, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    cartCount, 
    wishlist, 
    setIsCartOpen,
    resetAllFilters,
    t
  } = useApp();

  const handleNav = (view: 'home' | 'shop' | 'account') => {
    if (view === 'shop') resetAllFilters();
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-xl border-t border-black/[0.08] h-16 flex items-center justify-around px-2 shadow-lg"
    >
      <button
        onClick={() => handleNav('home')}
        className={`flex flex-col items-center justify-center min-h-[48px] min-w-[56px] px-2 py-1 transition-colors ${
          activeView === 'home' ? 'text-[#1D1D1F] font-bold' : 'text-[#86868B] hover:text-[#1D1D1F]'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight">{t('navHome')}</span>
      </button>

      <button
        onClick={() => handleNav('shop')}
        className={`flex flex-col items-center justify-center min-h-[48px] min-w-[56px] px-2 py-1 transition-colors ${
          activeView === 'shop' ? 'text-[#1D1D1F] font-bold' : 'text-[#86868B] hover:text-[#1D1D1F]'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight">{t('navShop')}</span>
      </button>

      <button
        onClick={() => handleNav('account')}
        className={`relative flex flex-col items-center justify-center min-h-[48px] min-w-[56px] px-2 py-1 transition-colors ${
          activeView === 'account' ? 'text-[#1D1D1F] font-bold' : 'text-[#86868B] hover:text-[#1D1D1F]'
        }`}
      >
        <Heart className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight">{t('navWishlist')}</span>
        {wishlist.length > 0 && (
          <span className="absolute top-1 right-2.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
            {wishlist.length}
          </span>
        )}
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center justify-center min-h-[48px] min-w-[56px] px-2 py-1 text-[#86868B] hover:text-[#1D1D1F] transition-colors"
      >
        <ShoppingBag className="w-5 h-5 mb-0.5 text-[#1D1D1F]" />
        <span className="text-[11px] leading-tight font-medium text-[#1D1D1F]">{t('navCart')}</span>
        {cartCount > 0 && (
          <span className="absolute top-1 right-2.5 w-4.5 h-4.5 bg-[#1D1D1F] text-white rounded-full text-[10px] font-bold flex items-center justify-center font-mono shadow-xs">
            {cartCount}
          </span>
        )}
      </button>

      <button
        onClick={() => handleNav('account')}
        className={`flex flex-col items-center justify-center min-h-[48px] min-w-[56px] px-2 py-1 transition-colors ${
          activeView === 'account' ? 'text-[#1D1D1F] font-bold' : 'text-[#86868B] hover:text-[#1D1D1F]'
        }`}
      >
        <User className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight">{t('navAccount')}</span>
      </button>
    </nav>
  );
};
