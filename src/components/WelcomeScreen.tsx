import React, { useState, useEffect, useCallback } from 'react';
import royalEmblemImg from '../assets/images/pet_palace_royal_emblem.jpg';

export const WelcomeScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener?.('change', handleChange);
      return () => mediaQuery.removeEventListener?.('change', handleChange);
    }
  }, []);

  // Prevent background scrolling while welcome screen is active
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isVisible]);

  const handleDismiss = useCallback(() => {
    if (isDismissing || !isVisible) return;

    if (prefersReducedMotion) {
      setIsDismissing(true);
      setIsVisible(false);
      return;
    }

    setIsDismissing(true);
    // 850ms silky smooth upward slide transition
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [isDismissing, isVisible, prefersReducedMotion]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      handleDismiss();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      role="button"
      tabIndex={0}
      aria-label="Pet-Palace BD স্বাগতম - ওয়েবসাইটে প্রবেশ করতে টাচ অথবা ক্লিক করুন"
      onClick={handleDismiss}
      onKeyDown={handleKeyDown}
      className={`fixed inset-0 z-[100] w-screen h-[100dvh] max-h-[100dvh] select-none overflow-hidden cursor-pointer outline-none bg-neutral-950 flex flex-col justify-between ${
        isDismissing ? 'pointer-events-none' : ''
      }`}
      style={{
        transform: isDismissing ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isDismissing && prefersReducedMotion ? 0 : 1,
        transition: prefersReducedMotion
          ? 'opacity 200ms ease'
          : 'transform 850ms cubic-bezier(0.76, 0, 0.24, 1), opacity 850ms ease-in-out',
        willChange: 'transform',
      }}
    >
      {/* 1. Full-Screen Royal Image: Fills 100% of the screen on both mobile and desktop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={royalEmblemImg || `${import.meta.env.BASE_URL}images/pet-palace-welcome.jpg`}
          alt="Pet-Palace BD Royal Welcome Screen"
          className="w-full h-full object-cover object-center pointer-events-none"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('pet-palace-welcome.jpg')) {
              target.src = `${import.meta.env.BASE_URL}images/pet-palace-welcome.jpg`;
            }
          }}
        />

        {/* Balanced elegant gradient overlays: guarantees crystal readability for top & bottom text while keeping artwork vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />
      </div>

      {/* 2. Top Royal Branding Badge (flex-shrink-0 to prevent clipping) */}
      <header className="relative z-10 w-full flex-shrink-0 pt-3 sm:pt-5 px-4 flex justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: isDismissing ? 0 : 1 }}
      >
        <div className="px-3.5 sm:px-5 py-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-amber-400/40 text-amber-200 text-[11px] sm:text-xs tracking-wider uppercase font-semibold shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Pet-Palace BD • প্রিমিয়াম পেট কেয়ার</span>
        </div>
      </header>

      {/* 3. Center Space (flex-1 min-h-0 absorbs height dynamically on any screen/zoom level) */}
      <main className="relative z-10 flex-1 min-h-0 w-full pointer-events-none" />

      {/* 4. Bottom Interactive Prompt Banner (flex-shrink-0, safe-area-inset protected, guaranteed never cut off) */}
      <footer 
        className="relative z-10 w-full flex-shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 px-3 sm:px-6 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: isDismissing ? 0 : 1 }}
      >
        {/* Animated Tap/Click Pill Button */}
        <div className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/80 hover:bg-black/90 active:scale-95 backdrop-blur-2xl border border-amber-400/50 text-white shadow-[0_12px_45px_rgba(0,0,0,0.85)] transition-all duration-300 max-w-lg w-auto">
          {/* Animated Upward Wave Indicator */}
          <div className="flex flex-col items-center justify-center -space-y-1 animate-bounce flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100/70 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="flex flex-col items-start text-left min-w-0">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white drop-shadow-md leading-snug">
              টাচ করুন অথবা ক্লিক করুন
            </span>
            <span className="text-[10px] sm:text-xs text-amber-300/90 font-medium leading-snug">
              ওয়েবসাইটে প্রবেশ করতে ট্যাপ করুন • Tap to enter
            </span>
          </div>

          <span className="ml-1 px-3 py-1 text-[11px] sm:text-xs font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1 flex-shrink-0">
            <span>Enter</span>
            <span className="font-extrabold">→</span>
          </span>
        </div>

        {/* Footnote reassurance */}
        <p className="mt-1.5 text-[10px] sm:text-xs text-amber-100/80 drop-shadow-md font-medium text-center leading-tight">
          বাংলাদেশে বিশ্বস্ততম পোষা প্রাণী ও খামার খাদ্য সরবরাহকারী
        </p>
      </footer>
    </aside>
  );
};

