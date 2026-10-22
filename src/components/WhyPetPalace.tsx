import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ThermometerSnowflake, Truck, Headphones } from 'lucide-react';

export const WhyPetPalace: React.FC = () => {
  const { t } = useApp();

  const pillars = [
    {
      icon: ShieldCheck,
      title: t('whyPillar1Title'),
      desc: t('whyPillar1Desc')
    },
    {
      icon: ThermometerSnowflake,
      title: t('whyPillar2Title'),
      desc: t('whyPillar2Desc')
    },
    {
      icon: Truck,
      title: t('whyPillar3Title'),
      desc: t('whyPillar3Desc')
    },
    {
      icon: Headphones,
      title: t('whyPillar4Title'),
      desc: t('whyPillar4Desc')
    }
  ];

  return (
    <section className="py-16 bg-[#F5F5F7] border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-sm text-[#86868B] mt-1.5">
            {t('whySubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-black/[0.04] shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#143D2B]" />
                  </div>
                  <h3 className="font-semibold text-[#1D1D1F] text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.04] text-[10px] text-[#86868B] font-mono">
                  Pet Palace Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
