import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  ArrowLeft,
  Calendar,
  Check
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const { 
    selectedProductId, 
    products, 
    formatBDT, 
    addToCart, 
    isWishlisted, 
    toggleWishlist, 
    setActiveView, 
    setIsCartOpen,
    t, 
    language 
  } = useApp();

  const product = products.find(p => p.id === selectedProductId) || products[0];

  const [selectedSize, setSelectedSize] = useState<string>(product.defaultSize);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'feeding' | 'storage'>('ingredients');

  const currentSizeOption = product.packageSizes.find(s => s.size === selectedSize) || product.packageSizes[0];
  const price = currentSizeOption ? currentSizeOption.price : product.price;
  const originalPrice = currentSizeOption?.originalPrice || product.originalPrice;
  const stockCount = currentSizeOption ? currentSizeOption.stockCount : product.stockCount;
  const isOutOfStock = stockCount <= 0;

  const discountPercent = originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.animalCategory === product.animalCategory)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    addToCart(product, selectedSize, quantity);
    setIsCartOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-8 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style subtle breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#86868B] mb-6">
          <button
            onClick={() => setActiveView('shop')}
            className="hover:text-[#1D1D1F] inline-flex items-center gap-1 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'সকল পণ্য' : 'All Products'}</span>
          </button>
          <span>/</span>
          <span className="capitalize">{product.animalCategory}</span>
          <span>/</span>
          <span className="text-[#1D1D1F] font-semibold truncate max-w-xs">
            {language === 'bn' ? product.nameBn : product.name}
          </span>
        </div>

        {/* Apple Store Buy Architecture */}
        <div className="bg-white rounded-3xl border border-black/[0.04] shadow-xs p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* LEFT: Floating Product Showcase Image */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-[#F5F5F7]">
                <img
                  src={product.image}
                  alt={language === 'bn' ? product.nameBn : product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full transition-all ${
                    isWishlisted(product.id)
                      ? 'bg-rose-50 text-rose-600 scale-105'
                      : 'bg-white/90 text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className="w-4 h-4" fill={isWishlisted(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Minimal Gallery Strip */}
              <div className="flex gap-3">
                <div className="w-18 h-18 rounded-2xl overflow-hidden border-2 border-[#1D1D1F] p-0.5 bg-white">
                  <img src={product.image} alt="Thumb 1" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-18 h-18 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[10px] text-[#86868B] font-medium p-2 text-center">
                  Nutrition Specs
                </div>
                <div className="w-18 h-18 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[10px] text-[#86868B] font-medium p-2 text-center">
                  Feeding Guide
                </div>
              </div>
            </div>

            {/* RIGHT: Apple Configuration Module */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                
                {/* Eyebrow & Brand */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#86868B] mb-2 uppercase tracking-wider">
                  <span>{product.brand}</span>
                  <div className="flex items-center gap-1 text-amber-600 font-mono text-xs normal-case">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-[#86868B]">({product.reviewCount} Reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#1D1D1F] tracking-tight leading-snug mb-3">
                  {language === 'bn' ? product.nameBn : product.name}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-black/[0.04]">
                  <span className="text-3xl font-extrabold font-mono text-[#1D1D1F] tabular-nums">
                    {formatBDT(price)}
                  </span>
                  {originalPrice && originalPrice > price && (
                    <span className="text-base text-[#86868B] line-through font-mono tabular-nums">
                      {formatBDT(originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-[#86868B]">Includes all Bangladesh VAT</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                  {language === 'bn' ? product.descriptionBn : product.description}
                </p>

                {/* Step 1: Package Size Selector (Apple Storage Card Style) */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-[#1D1D1F] mb-2.5">
                    1. {t('packageSize')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {product.packageSizes.map((sizeOpt) => (
                      <button
                        key={sizeOpt.size}
                        onClick={() => {
                          setSelectedSize(sizeOpt.size);
                          setQuantity(1);
                        }}
                        className={`p-3 rounded-2xl text-left border transition-all ${
                          selectedSize === sizeOpt.size
                            ? 'border-[#0071E3] bg-[#F5F5F7] ring-1 ring-[#0071E3]'
                            : 'border-black/[0.08] bg-white hover:border-black/[0.2]'
                        }`}
                      >
                        <span className="block font-semibold text-xs text-[#1D1D1F]">{sizeOpt.size}</span>
                        <span className="block text-xs font-mono font-medium text-[#86868B] mt-1 tabular-nums">
                          {formatBDT(sizeOpt.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Quantity & Stock */}
                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-2">
                      2. {t('quantity')}
                    </label>
                    <div className="flex items-center border border-black/[0.1] rounded-full bg-[#F5F5F7] overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1 || isOutOfStock}
                        className="px-3.5 py-1.5 text-[#1D1D1F] hover:bg-[#E8E8ED] disabled:opacity-30 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 py-1.5 font-mono font-bold text-xs text-[#1D1D1F] tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                        disabled={quantity >= stockCount || isOutOfStock}
                        className="px-3.5 py-1.5 text-[#1D1D1F] hover:bg-[#E8E8ED] disabled:opacity-30 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-[#1D1D1F] mb-2">
                      Availability
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      isOutOfStock ? 'text-rose-600' : 'text-emerald-700'
                    }`}>
                      <span>{isOutOfStock ? t('outOfStock') : `${t('inStock')} (${stockCount} units available)`}</span>
                    </span>
                  </div>
                </div>

                {/* Primary Buy CTAs (Apple Rounded-Full Pills) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className="py-3.5 px-6 rounded-full bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-98 font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t('addToCart')}</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    disabled={isOutOfStock}
                    className="py-3.5 px-6 rounded-full bg-[#1D1D1F] text-white hover:bg-black active:scale-98 font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{t('buyNow')}</span>
                  </button>
                </div>

                {/* Delivery Timeline Strip */}
                <div className="bg-[#F5F5F7] rounded-2xl p-4 space-y-2 text-xs text-[#1D1D1F]">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                    <span>{t('deliveryTimeline')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                    <span className="font-mono text-[#86868B]">{product.batchExpiry}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Technical Specs & Details Accordion / Tabs */}
          <div className="mt-12 pt-8 border-t border-black/[0.04]">
            <div className="flex border-b border-black/[0.06] gap-6 text-xs font-semibold mb-6">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-3 transition-colors ${
                  activeTab === 'ingredients'
                    ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {t('ingredients')}
              </button>
              <button
                onClick={() => setActiveTab('feeding')}
                className={`pb-3 transition-colors ${
                  activeTab === 'feeding'
                    ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {t('feedingGuide')}
              </button>
              <button
                onClick={() => setActiveTab('storage')}
                className={`pb-3 transition-colors ${
                  activeTab === 'storage'
                    ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {t('storageGuide')}
              </button>
            </div>

            {/* Tab 1: Ingredients */}
            {activeTab === 'ingredients' && (
              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-[#1D1D1F] mb-1">Formulation Breakdown:</h4>
                  <p className="text-[#86868B] leading-relaxed">
                    {language === 'bn' ? product.ingredientsDemoBn : product.ingredientsDemo}
                  </p>
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-[#1D1D1F] mb-2">Guaranteed Analysis:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#F5F5F7] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#86868B] block">Crude Protein</span>
                      <span className="font-mono font-bold text-[#1D1D1F]">{product.nutritionDemo.protein}</span>
                    </div>
                    <div className="bg-[#F5F5F7] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#86868B] block">Crude Fat</span>
                      <span className="font-mono font-bold text-[#1D1D1F]">{product.nutritionDemo.fat}</span>
                    </div>
                    <div className="bg-[#F5F5F7] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#86868B] block">Crude Fiber</span>
                      <span className="font-mono font-bold text-[#1D1D1F]">{product.nutritionDemo.fiber}</span>
                    </div>
                    <div className="bg-[#F5F5F7] p-3 rounded-2xl">
                      <span className="text-[10px] text-[#86868B] block">Moisture / Spec</span>
                      <span className="font-mono font-bold text-[#1D1D1F]">{product.nutritionDemo.moisture}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Feeding */}
            {activeTab === 'feeding' && (
              <div className="space-y-3 text-xs text-[#1D1D1F] leading-relaxed">
                <p>{language === 'bn' ? product.feedingGuidanceDemoBn : product.feedingGuidanceDemo}</p>
              </div>
            )}

            {/* Tab 3: Storage */}
            {activeTab === 'storage' && (
              <div className="space-y-3 text-xs text-[#1D1D1F] leading-relaxed">
                <p>{language === 'bn' ? product.storageGuidanceBn : product.storageGuidance}</p>
                <p className="font-mono text-[#86868B] text-[11px]">{product.batchExpiry}</p>
              </div>
            )}

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1D1D1F] mb-6">
              {t('relatedProducts')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
