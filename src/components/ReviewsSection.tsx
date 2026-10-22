import React from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_REVIEWS } from '../data/products';
import { Star, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t, language } = useApp();

  return (
    <section className="py-16 bg-[#F5F5F7] border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight">
            {t('reviewsTitle')}
          </h2>
          <p className="text-sm text-[#86868B] mt-1.5">
            {t('reviewsSubtitle')}
          </p>
        </div>

        {/* Reviews 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INITIAL_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white border border-black/[0.04] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'
                      }`}
                    />
                  ))}
                  <span className="text-[11px] font-mono font-semibold text-[#86868B] ml-1">
                    5.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs text-[#1D1D1F] leading-relaxed">
                  "{language === 'bn' ? review.commentBn : review.comment}"
                </p>
              </div>

              {/* Author & Pet Info */}
              <div className="pt-4 mt-4 border-t border-black/[0.04]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#1D1D1F] text-xs">
                      {review.author}
                    </h4>
                    <p className="text-[11px] text-[#86868B]">
                      {review.petName} · {review.petType}
                    </p>
                    <p className="text-[10px] text-[#86868B]">
                      {review.location}
                    </p>
                  </div>
                  {review.verifiedBuyer && (
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
