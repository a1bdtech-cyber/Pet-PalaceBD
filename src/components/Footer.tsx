import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, setActiveView, setFilterAnimal, resetAllFilters } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: language === 'bn' ? 'ঢাকার ভেতরে ডেলিভারি হতে কতক্ষণ সময় লাগে?' : 'How long does delivery take inside Dhaka?',
      a: language === 'bn' ? 'ঢাকার যেকোনো এরিয়ায় সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে অর্ডার ডেলিভারি সম্পন্ন হয়।' : 'Inside Dhaka metropolitan areas, delivery typically arrives within 24 to 48 hours.'
    },
    {
      q: language === 'bn' ? 'ঢাকার বাইরে কি ক্যাশ অন ডেলিভারি পাওয়া যায়?' : 'Is Cash on Delivery (COD) available outside Dhaka?',
      a: language === 'bn' ? 'হ্যাঁ, বাংলাদেশের ৬৪ জেলার যেকোনো থানা বা উপজেলায় ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।' : 'Yes, Cash on Delivery is supported across all 64 districts in Bangladesh through partner courier networks.'
    },
    {
      q: language === 'bn' ? 'পণ্যের মেয়াদ ও মান কীভাবে যাচাই করব?' : 'How can I verify the expiry and batch authenticity?',
      a: language === 'bn' ? 'প্রতিটি পণ্যের গায়ে প্রস্তুতকারক ব্যাচ নম্বর ও মেয়াদের তারিখ স্পষ্ট ছাপা থাকে।' : 'Every item comes sealed with clear batch codes, manufacturer seals, and verifiable expiration dates.'
    }
  ];

  const handleNav = (animal?: any) => {
    resetAllFilters();
    if (animal) setFilterAnimal(animal);
    setActiveView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] text-[#86868B] pt-12 pb-8 border-t border-black/[0.08] text-[11px] leading-relaxed">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Footnotes Section (Apple Store signature) */}
        <div className="space-y-2 pb-8 border-b border-black/[0.08] text-[11px]">
          <p>
            1. Free delivery is valid on qualifying orders with a merchandise subtotal of ৳2,500 or more within Dhaka metropolitan delivery zones.
          </p>
          <p>
            2. Payment simulations for bKash and Nagad are provided for client demonstration purposes only. Live production requires official MFS merchant gateway compliance.
          </p>
          <p>
            3. Nutritional and feeding claims presented across products are sample demo descriptions. Always consult a licensed veterinarian for medical pet advice.
          </p>
        </div>

        {/* Apple Store Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8 border-b border-black/[0.08]">
          
          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('cats')} className="hover:text-[#1D1D1F] transition-colors">{t('cats')}</button></li>
              <li><button onClick={() => handleNav('dogs')} className="hover:text-[#1D1D1F] transition-colors">{t('dogs')}</button></li>
              <li><button onClick={() => handleNav('birds')} className="hover:text-[#1D1D1F] transition-colors">{t('birds')}</button></li>
              <li><button onClick={() => handleNav('fish')} className="hover:text-[#1D1D1F] transition-colors">{t('fish')}</button></li>
              <li><button onClick={() => handleNav('small-pets')} className="hover:text-[#1D1D1F] transition-colors">{t('smallPets')}</button></li>
              <li><button onClick={() => handleNav('farm-animals')} className="hover:text-[#1D1D1F] transition-colors">{t('farmAnimals')}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3">Pet Palace Store</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveView('shop')} className="hover:text-[#1D1D1F] transition-colors">{t('navShop')}</button></li>
              <li><button onClick={() => setActiveView('account')} className="hover:text-[#1D1D1F] transition-colors">{t('navBuyAgain')}</button></li>
              <li><button onClick={() => setActiveView('account')} className="hover:text-[#1D1D1F] transition-colors">{t('ordersTab')}</button></li>
              <li><button onClick={() => setActiveView('account')} className="hover:text-[#1D1D1F] transition-colors">{t('wishlistTab')}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3">For Commercial Farms</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('farm-animals')} className="hover:text-[#1D1D1F] transition-colors">Dairy Cattle Nutrition</button></li>
              <li><button onClick={() => handleNav('farm-animals')} className="hover:text-[#1D1D1F] transition-colors">Broiler & Layer Feeds</button></li>
              <li><button onClick={() => handleNav('farm-animals')} className="hover:text-[#1D1D1F] transition-colors">Commercial Aqua Pellets</button></li>
              <li><button onClick={() => handleNav('farm-animals')} className="hover:text-[#1D1D1F] transition-colors">Bulk Wholesale Quotes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1D1D1F] mb-3">Pet Palace Values</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#1D1D1F] transition-colors">Batch Expiry Guarantee</a></li>
              <li><a href="#about" className="hover:text-[#1D1D1F] transition-colors">Climate Controlled Logistics</a></li>
              <li><a href="#about" className="hover:text-[#1D1D1F] transition-colors">Nutritionist Verification</a></li>
              <li><button onClick={() => setActiveView('admin')} className="text-[#0071E3] hover:underline">Admin Console Demo</button></li>
            </ul>
          </div>

          {/* FAQ Accordion Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold text-[#1D1D1F] mb-3">FAQ Highlights</h4>
            <div className="space-y-2">
              {faqs.map((item, i) => (
                <div key={i} className="border border-black/[0.04] rounded-xl p-2.5 bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left font-medium text-[#1D1D1F] flex items-center justify-between gap-1 text-[11px]"
                  >
                    <span>{item.q}</span>
                    {openFaq === i ? <ChevronUp className="w-3 h-3 shrink-0" /> : <ChevronDown className="w-3 h-3 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <p className="text-[10px] text-[#86868B] mt-1.5 pt-1.5 border-t border-black/[0.04]">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Row */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px]">
          <div>
            <p>{t('copyright')}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="hover:text-[#1D1D1F] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Terms of Sale</span>
            <span>·</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Sales Policy</span>
            <span>·</span>
            <span className="hover:text-[#1D1D1F] cursor-pointer">Legal</span>
            <span>·</span>
            <span className="font-medium text-[#1D1D1F]">Bangladesh (BDT ৳)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
