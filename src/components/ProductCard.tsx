import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import { Heart, Star, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    language, 
    formatBDT, 
    addToCart, 
    isWishlisted, 
    toggleWishlist, 
    openProductDetail,
    t 
  } = useApp();

  const [selectedSize, setSelectedSize] = useState<string>(product.defaultSize);
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Active size variant data
  const currentSizeOption = product.packageSizes.find(s => s.size === selectedSize) || product.packageSizes[0];
  const price = currentSizeOption ? currentSizeOption.price : product.price;
  const originalPrice = currentSizeOption?.originalPrice || product.originalPrice;
  const stockCount = currentSizeOption ? currentSizeOption.stockCount : product.stockCount;
  const isOutOfStock = stockCount <= 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product, selectedSize, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => openProductDetail(product.id)}
      className="group relative flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 border border-black/[0.04] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Visual Product Showcase Canvas */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5F5F7] flex items-center justify-center mb-3.5">
        
        {/* Product Image */}
        {!imageFailed ? (
          <img
            src={product.image}
            alt={language === 'bn' ? product.nameBn : product.name}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#F5F5F7] text-stone-400">
            <span className="text-3xl mb-1">🐾</span>
            <span className="text-xs font-medium text-[#86868B]">
              Pet Palace Reserve
            </span>
          </div>
        )}

        {/* Status badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#1D1D1F] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-2xs">
            {language === 'bn' ? 'নতুন' : 'New'}
          </span>
        )}

        {/* Apple Minimal Wishlist Button with accessible min 36px touch target */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full flex items-center justify-center transition-all duration-200 ${
            isWishlisted(product.id)
              ? 'bg-rose-50 text-rose-600 scale-105 shadow-2xs'
              : 'bg-white/85 backdrop-blur-md text-[#86868B] hover:text-[#1D1D1F] hover:scale-105 shadow-2xs'
          }`}
          aria-label="Save item"
        >
          <Heart 
            className="w-4 h-4" 
            fill={isWishlisted(product.id) ? 'currentColor' : 'none'} 
          />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col justify-between">
        
        <div>
          {/* Eyebrow metadata (Brand & Rating) */}
          <div className="flex items-center justify-between text-xs font-medium text-[#86868B] mb-1.5">
            <span className="uppercase tracking-wider truncate max-w-[70%] font-semibold text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-700 font-mono text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title (readable 14-16px) */}
          <h3 className="font-semibold text-[#1D1D1F] text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-black transition-colors mb-2.5">
            {language === 'bn' ? product.nameBn : product.name}
          </h3>

          {/* Apple-style Package Variant Selection Pills (Accessible tap area) */}
          {product.packageSizes.length > 1 && (
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="flex flex-wrap gap-1.5 mb-3.5"
            >
              {product.packageSizes.map((sizeOpt) => (
                <button
                  key={sizeOpt.size}
                  onClick={() => setSelectedSize(sizeOpt.size)}
                  className={`text-xs px-2.5 py-1 min-h-[30px] rounded-full transition-all font-medium inline-flex items-center justify-center ${
                    selectedSize === sizeOpt.size
                      ? 'bg-[#1D1D1F] text-white shadow-2xs'
                      : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]'
                  }`}
                >
                  {sizeOpt.size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Rounded Pill Action Button */}
        <div className="pt-3 border-t border-black/[0.04] mt-auto">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-[#1D1D1F] font-mono tabular-nums">
                {formatBDT(price)}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-xs text-[#86868B] line-through font-mono tabular-nums">
                  {formatBDT(originalPrice)}
                </span>
              )}
            </div>

            <span className={`text-xs font-medium ${
              isOutOfStock 
                ? 'text-rose-600 font-semibold' 
                : stockCount < 15 
                  ? 'text-amber-700 font-semibold' 
                  : 'text-emerald-700'
            }`}>
              {isOutOfStock 
                ? t('outOfStock') 
                : stockCount < 15 
                  ? (language === 'bn' ? `বাকি ${stockCount}টি` : `${stockCount} left`) 
                  : t('inStock')}
            </span>
          </div>

          {/* Accessible Touch Target Add-to-Bag Button (min 44px height) */}
          <button
            onClick={handleAdd}
            disabled={isOutOfStock}
            className={`w-full min-h-[44px] py-3 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs ${
              isOutOfStock
                ? 'bg-[#F5F5F7] text-[#86868B] cursor-not-allowed'
                : isAddedRecently
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#1D1D1F] text-white hover:bg-black active:scale-98'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('addedToBag')}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>{isOutOfStock ? t('outOfStock') : t('addToCart')}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
