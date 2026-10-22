import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  Tag, 
  Truck 
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    cartSubtotal, 
    deliveryLocation, 
    setDeliveryLocation, 
    deliveryCharge, 
    appliedCoupon, 
    applyCoupon, 
    removeCoupon, 
    discountAmount, 
    cartTotal, 
    formatBDT, 
    setActiveView, 
    t, 
    language,
    storeSettings
  } = useApp();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1D1D1F]/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Apple Bag Header */}
        <div className="p-6 border-b border-black/[0.04] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <h2 className="font-serif font-bold text-xl text-[#1D1D1F]">
              {t('cartTitle')}
            </h2>
            <span className="text-xs text-[#86868B] font-mono">
              ({cart.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-full transition-colors"
            aria-label="Close bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bag Items List or Empty State */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#86868B] text-2xl">
                🛍️
              </div>
              <h3 className="font-serif font-bold text-[#1D1D1F] text-base">
                {t('emptyCartTitle')}
              </h3>
              <p className="text-xs text-[#86868B] max-w-xs leading-relaxed">
                {t('emptyCartDesc')}
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActiveView('shop');
                }}
                className="mt-2 px-6 py-2.5 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
              >
                {t('startShopping')}
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const sizeOption = item.product.packageSizes.find(s => s.size === item.selectedSize);
              const maxStock = sizeOption ? sizeOption.stockCount : item.product.stockCount;

              return (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 p-4 rounded-3xl bg-[#F5F5F7] items-center justify-between"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-2xl bg-white border border-black/[0.04] shrink-0"
                  />

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="font-semibold text-[#1D1D1F] text-xs truncate">
                      {language === 'bn' ? item.product.nameBn : item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#86868B] mt-0.5">
                      {item.selectedSize} · <span className="font-mono text-[#1D1D1F] font-medium">{formatBDT(item.unitPrice)}</span>
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-black/[0.08] rounded-full bg-white overflow-hidden shadow-2xs">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-[#1D1D1F] hover:bg-[#F5F5F7] text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-mono font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          disabled={item.quantity >= maxStock}
                          className="px-2.5 py-0.5 text-[#1D1D1F] hover:bg-[#F5F5F7] text-xs font-bold disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>

                      {item.quantity >= maxStock && (
                        <span className="text-[10px] text-amber-700 font-medium">
                          Max
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-mono font-bold text-[#1D1D1F] text-xs tabular-nums mb-2">
                      {formatBDT(item.unitPrice * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="text-[#86868B] hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Apple Bag Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-black/[0.04] bg-white space-y-4">
            
            {/* Delivery Location Selector */}
            <div className="text-xs space-y-2">
              <label className="font-semibold text-[#1D1D1F] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#1D1D1F]" />
                  <span>{t('deliveryFee')}</span>
                </span>
                {cartSubtotal >= storeSettings.freeShippingThreshold && (
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {language === 'bn' ? 'ফ্রি ডেলিভারি প্রযোজ্য' : 'Free Shipping'}
                  </span>
                )}
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryLocation('dhaka')}
                  className={`min-h-[40px] py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                    deliveryLocation === 'dhaka'
                      ? 'bg-[#1D1D1F] text-white shadow-xs'
                      : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]'
                  }`}
                >
                  {t('insideDhaka')} ({formatBDT(storeSettings.shippingInsideDhaka)})
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryLocation('outside_dhaka')}
                  className={`min-h-[40px] py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                    deliveryLocation === 'outside_dhaka'
                      ? 'bg-[#1D1D1F] text-white shadow-xs'
                      : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]'
                  }`}
                >
                  {t('outsideDhaka')} ({formatBDT(storeSettings.shippingOutsideDhaka)})
                </button>
              </div>
            </div>

            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-emerald-800" />
                    <span className="font-mono font-bold text-emerald-900">{appliedCoupon.code}</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-[#86868B] hover:text-[#1D1D1F] text-xs font-semibold"
                  >
                    {language === 'bn' ? 'বাতিল' : 'Remove'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => {
                      setCouponInput(e.target.value);
                      setCouponError('');
                    }}
                    placeholder={language === 'bn' ? 'প্রোমো কোড (যেমন: ROYAL10)' : 'Promo code (e.g. ROYAL10)'}
                    className="flex-1 px-3.5 py-2 text-xs bg-[#F5F5F7] rounded-full border-none font-mono focus:outline-none focus:ring-1 focus:ring-[#1D1D1F]"
                  />
                  <button
                    type="submit"
                    className="min-h-[38px] px-4 py-2 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
                  >
                    {t('applyCoupon')}
                  </button>
                </form>
              )}
              {couponError && <p className="text-[11px] text-rose-600 mt-1">{couponError}</p>}
            </div>

            {/* Totals Breakdown */}
            <div className="space-y-1.5 text-xs text-[#86868B] pt-2 border-t border-black/[0.04]">
              <div className="flex justify-between">
                <span>{t('subtotal')}</span>
                <span className="font-mono tabular-nums text-[#1D1D1F] font-medium">{formatBDT(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('deliveryFee')}</span>
                <span className="font-mono tabular-nums text-[#1D1D1F] font-medium">
                  {deliveryCharge === 0 ? <span className="text-emerald-700 font-bold">{language === 'bn' ? 'বিনামূল্যে' : 'FREE'}</span> : formatBDT(deliveryCharge)}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>{t('discount')}</span>
                  <span className="font-mono tabular-nums">-{formatBDT(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#1D1D1F] pt-2 border-t border-black/[0.04]">
                <span>{t('totalAmount')}</span>
                <span className="font-mono tabular-nums text-lg text-[#1D1D1F]">{formatBDT(cartTotal)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full min-h-[48px] py-3.5 bg-[#1D1D1F] text-white hover:bg-black active:scale-98 font-bold rounded-full text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('proceedCheckout')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
