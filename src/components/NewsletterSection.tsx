import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, ArrowRight, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { t, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast(t('newsletterSuccess'), 'success');
  };

  return (
    <section className="py-16 bg-white border-t border-black/[0.04]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
          {t('newsletterTitle')}
        </h2>

        <p className="text-sm text-[#86868B] mt-2 max-w-md mx-auto">
          {t('newsletterSubtitle')}
        </p>

        {isSubscribed ? (
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl inline-flex items-center gap-2 text-emerald-800 text-xs font-semibold">
            <Check className="w-4 h-4" />
            <span>{t('newsletterSuccess')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="flex-1 px-4 py-3 rounded-full bg-[#F5F5F7] border-none text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#1D1D1F] text-white hover:bg-black active:scale-98 font-semibold rounded-full text-xs inline-flex items-center justify-center gap-1.5 transition-all shadow-xs shrink-0"
            >
              <span>{t('subscribeBtn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#86868B] mt-3">
          {t('newsletterConsent')}
        </p>

      </div>
    </section>
  );
};
