import React from 'react';
import { useApp } from '../context/AppContext';

interface BrandCard {
  name: string;
  specialty: string;
  specialtyBn: string;
  isOwnBrand?: boolean;
}

export const ShopByBrand: React.FC = () => {
  const { t, language, setFilterBrand, resetAllFilters, setActiveView } = useApp();

  const brands: BrandCard[] = [
    {
      name: 'Pet Palace Signature',
      specialty: 'Handcrafted Pet Food & Grooming',
      specialtyBn: 'ইন-হাউস নিজস্ব প্রিমিয়াম ফুড ও কেয়ার',
      isOwnBrand: true
    },
    {
      name: 'Royal Paws',
      specialty: 'Feline Nutrition & Kitten Care',
      specialtyBn: 'বিড়ালের প্রিমিয়াম শুকনো খাবার ও কেয়ার'
    },
    {
      name: 'NutraCanine',
      specialty: 'High-Protein Dog Kibble & Dental Chews',
      specialtyBn: 'কুকুরের জন্য হাই-প্রোটিন কিবল ও ডেন্টাল চিউ'
    },
    {
      name: 'Verdant Fields Agro',
      specialty: 'Dairy Cattle & Goat Fattening Pellets',
      specialtyBn: 'উন্নত ডেইরি গাভী ও ছাগল মোটাতাজাকরণ ফিড'
    },
    {
      name: 'Bengal Agro Pure',
      specialty: 'Commercial Broiler & Layer Poultry Feed',
      specialtyBn: 'ব্রয়লার ও লেয়ার মুরগির ব্যালেন্সড ফিড'
    },
    {
      name: 'AquaVital Commercial',
      specialty: 'Aquaculture Pellets & Water Conditioners',
      specialtyBn: 'বাণিজ্যিক মাছের ভাসমান ফিড ও অ্যাকোয়ারিয়াম কেয়ার'
    }
  ];

  const handleBrandClick = (brandName: string) => {
    resetAllFilters();
    setFilterBrand(brandName);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
            {t('shopByBrandTitle')}
          </h2>
          <p className="text-sm text-[#86868B] mt-1">
            {t('shopByBrandSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => handleBrandClick(b.name)}
              className="p-5 rounded-3xl bg-white border border-black/[0.04] hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center text-xs font-bold font-mono text-[#1D1D1F] group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors">
                    {b.name.slice(0, 2).toUpperCase()}
                  </span>
                  {b.isOwnBrand && (
                    <span className="text-[9px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded-full">
                      Signature
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[#1D1D1F] text-xs group-hover:text-black transition-colors line-clamp-1">
                  {b.name}
                </h3>
              </div>
              <p className="text-[11px] text-[#86868B] mt-2 line-clamp-2 leading-relaxed">
                {language === 'bn' ? b.specialtyBn : b.specialty}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
