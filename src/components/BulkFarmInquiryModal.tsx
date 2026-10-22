import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BANGLADESH_DISTRICTS } from '../data/products';
import { X, FileText } from 'lucide-react';

export const BulkFarmInquiryModal: React.FC = () => {
  const { isBulkModalOpen, setIsBulkModalOpen, submitBulkInquiry, t, language } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Dhaka');
  const [feedType, setFeedType] = useState('Verdant Fields Ultra-Yield Dairy Pellets');
  const [tonnageOrBags, setTonnageOrBags] = useState('50 Sacks (2.5 Tons)');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isBulkModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = language === 'bn' ? 'নাম প্রদান করুন' : 'Full name is required';
    if (!phone.trim() || phone.length < 10) {
      newErrors.phone = language === 'bn' ? 'সঠিক মোবাইল নম্বর প্রদান করুন' : 'Valid phone number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    submitBulkInquiry({
      fullName,
      phone,
      district,
      feedType,
      tonnageOrBags,
      notes
    });

    setFullName('');
    setPhone('');
    setNotes('');
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1D1F]/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/[0.04] relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={() => setIsBulkModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#86868B] hover:text-[#1D1D1F] rounded-full hover:bg-[#F5F5F7] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 pr-8">
          <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center mb-3">
            <FileText className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold font-serif text-[#1D1D1F]">
            {t('bulkModalTitle')}
          </h3>
          <p className="text-xs text-[#86868B] mt-1 leading-relaxed">
            {t('bulkModalDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#1D1D1F] mb-1">
              {t('fullName')} *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Md. Shahidul Islam"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
            />
            {errors.fullName && <p className="text-rose-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block font-semibold text-[#1D1D1F] mb-1">
              {t('phone')} *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="017XXXXXXXX"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] font-mono focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
            />
            {errors.phone && <p className="text-rose-600 mt-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">
                {t('feedTypeSelect')}
              </label>
              <select
                value={feedType}
                onChange={(e) => setFeedType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
              >
                <option value="Verdant Fields Ultra-Yield Dairy Pellets">Dairy Cattle Pellets (20% CP)</option>
                <option value="Bengal Agro Broiler Starter Super Crumbs">Broiler Starter Super Crumbs</option>
                <option value="Verdant Fields Black Bengal & Boer Goat">Goat Fattening Feed</option>
                <option value="AquaVital Floating Fish Farming Feed">Aqua/Carp Floating Feed (28% CP)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">
                {t('district')}
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
              >
                {BANGLADESH_DISTRICTS.map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1D1D1F] mb-1">
              {t('estimatedQuantity')}
            </label>
            <input
              type="text"
              value={tonnageOrBags}
              onChange={(e) => setTonnageOrBags(e.target.value)}
              placeholder="e.g. 100 Sacks or 5 Metric Tons"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1D1D1F] mb-1">
              {t('orderNotes')}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Farm delivery location or specific instructions"
              className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#1D1D1F] text-white hover:bg-black font-semibold rounded-full text-xs transition-colors shadow-xs"
            >
              {t('requestQuoteBtn')}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
