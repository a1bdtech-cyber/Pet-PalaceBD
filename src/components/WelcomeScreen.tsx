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
    // 850ms silky smooth transition matching header logo landing
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
      className={`fixed inset-0 z-[100] w-full h-[100dvh] min-h-screen select-none overflow-hidden cursor-pointer outline-none bg-black/45 backdrop-blur-md ${
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
      {/* Translucent ambient overlay allowing the underlying homepage to softly peek through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 pointer-events-none" />

      {/* Main Artwork Stage: Extra large royal emblem with smooth flight transition into header logo */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-6">
        
        {/* Emblem Hero Container - Much larger sizing to fill the viewport majestically */}
        <div
          className="relative max-w-6xl w-[96vw] sm:w-[92vw] flex items-center justify-center transition-all"
          style={{
            transform: isDismissing
              ? 'translate3d(-36vw, -44vh, 0) scale(0.06)'
              : 'translate3d(0, 0, 0) scale(1)',
            opacity: isDismissing ? 0.35 : 1,
            transition: prefersReducedMotion
              ? 'opacity 200ms ease'
              : 'transform 820ms cubic-bezier(0.76, 0, 0.24, 1), opacity 780ms ease-in',
            willChange: 'transform, opacity',
          }}
        >
          {/* Subtle golden halo glow behind the huge emblem */}
          <div 
            className="absolute -inset-4 sm:-inset-10 rounded-3xl bg-amber-500/20 blur-3xl pointer-events-none transition-opacity duration-500"
            style={{ opacity: isDismissing ? 0 : 1 }}
          />

          {/* The Masterpiece Royal Emblem Image - Extra Large Display */}
          <img
            src={royalEmblemImg || '/images/pet-palace-welcome.jpg'}
            alt="Pet-Palace BD Royal Emblem - Happy Pets Healthier Lives"
            className="w-full max-h-[75vh] sm:max-h-[82vh] md:max-h-[85vh] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.05] brightness-[1.03] pointer-events-none"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </div>

        {/* Top Subtle Royal Crest / Badge */}
        <div 
          className="absolute top-4 sm:top-6 inset-x-0 flex justify-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: isDismissing ? 0 : 1 }}
        >
          <div className="px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-amber-500/40 text-amber-200 text-[11px] sm:text-xs tracking-wider uppercase font-medium shadow-2xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Pet-Palace BD • প্রিমিয়াম পেট কেয়ার</span>
          </div>
        </div>

        {/* Bottom Interactive Prompt Banner */}
        <div 
          className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none z-10 transition-opacity duration-300"
          style={{ opacity: isDismissing ? 0 : 1 }}
        >
          {/* Animated Tap/Click Pill Button with Translucent Glass */}
          <div className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black/70 hover:bg-black/85 active:scale-95 backdrop-blur-2xl border border-amber-400/40 text-white shadow-[0_12px_45px_rgba(0,0,0,0.85)] transition-all duration-300">
            {/* Animated Upward Wave Indicator */}
            <div className="flex flex-col items-center justify-center -space-y-1.5 animate-bounce">
              <svg
                className="w-4 h-4 text-amber-300 transform -rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              <svg
                className="w-4 h-4 text-amber-100/70 transform -rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white drop-shadow-md">
                টাচ করুন অথবা ক্লিক করুন
              </span>
              <span className="text-[11px] sm:text-xs text-amber-300/90 font-medium">
                ওয়েবসাইটে প্রবেশ করতে ট্যাপ করুন • Tap anywhere to enter
              </span>
            </div>

            <span className="ml-1 px-3 py-1 text-[11px] font-bold bg-amber-400 text-neutral-950 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span>Enter</span>
              <span>→</span>
            </span>
          </div>

          {/* Footnote reassurance */}
          <p className="mt-2 text-xs text-white/80 drop-shadow-md font-medium">
            বাংলাদেশে বিশ্বস্ততম পোষা প্রাণী ও খামার খাদ্য সরবরাহকারী
          </p>
        </div>

      </div>
    </aside>
  );
};
