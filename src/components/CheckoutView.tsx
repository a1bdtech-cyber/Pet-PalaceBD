import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BANGLADESH_DISTRICTS } from '../data/products';
import { CustomerDetails, PaymentMethod } from '../types';
import { 
  Truck, 
  ArrowLeft, 
  AlertTriangle, 
  Lock 
} from 'lucide-react';

const DIVISIONS = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur', 'Mymensingh'];

export const CheckoutView: React.FC = () => {
  const { 
    cart, 
    cartSubtotal, 
    deliveryCharge, 
    discountAmount, 
    cartTotal, 
    formatBDT, 
    placeOrder, 
    setActiveView, 
    t, 
    language,
    setDeliveryLocation,
    storeSettings
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [division, setDivision] = useState('Dhaka');
  const [district, setDistrict] = useState('Dhaka');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <h2 className="text-xl font-bold font-serif text-[#1D1D1F] mb-2">
          {t('emptyCartTitle')}
        </h2>
        <p className="text-xs text-[#86868B] mb-6">
          Please add items to your bag before proceeding to checkout.
        </p>
        <button
          onClick={() => setActiveView('shop')}
          className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold"
        >
          {t('startShopping')}
        </button>
      </div>
    );
  }

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = language === 'bn' ? 'সম্পূর্ণ নাম আবশ্যক' : 'Full name is required';
    
    const phoneClean = phone.trim().replace(/\D/g, '');
    if (!phoneClean || phoneClean.length !== 11 || !phoneClean.startsWith('01')) {
      err.phone = language === 'bn' 
        ? '১১ ডিজিটের সঠিক মোবাইল নম্বর প্রদান করুন (যেমন: 017XXXXXXXX)' 
        : 'Please enter a valid 11-digit BD mobile number (e.g. 017XXXXXXXX)';
    }

    if (!area.trim()) err.area = language === 'bn' ? 'থানা বা এরিয়া প্রদান করুন' : 'Area or Thana is required';
    if (!address.trim()) err.address = language === 'bn' ? 'বিস্তারিত ঠিকানা আবশ্যক' : 'Full delivery address is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const customerDetails: CustomerDetails = {
      fullName,
      phone,
      division,
      district,
      area,
      address,
      deliveryNotes: notes
    };

    setTimeout(() => {
      placeOrder(customerDetails, paymentMethod);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="py-10 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <button
          onClick={() => setActiveView('shop')}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'কেনাকাটায় ফিরে যান' : 'Back to Store'}</span>
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#1D1D1F] tracking-tight mb-8">
          {t('checkoutTitle')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Checkout Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h2 className="font-bold font-serif text-base text-[#1D1D1F] mb-4 pb-2 border-b border-black/[0.04] flex items-center justify-between">
                  <span>{t('customerInfo')}</span>
                  <span className="text-[11px] text-[#86868B] font-normal">Bangladesh Domestic</span>
                </h2>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Asif Mahmud"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
                    />
                    {errors.fullName && <p className="text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1D1D1F] mb-1.5">
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
                      <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                        {t('division')} *
                      </label>
                      <select
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 cursor-pointer"
                      >
                        {DIVISIONS.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                        {t('district')} *
                      </label>
                      <select
                        value={district}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDistrict(val);
                          setDeliveryLocation(val.toLowerCase() === 'dhaka' ? 'dhaka' : 'outside_dhaka');
                        }}
                        className="w-full px-3.5 py-3 rounded-2xl bg-[#F5F5F7] border-none text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 cursor-pointer"
                      >
                        {BANGLADESH_DISTRICTS.map(dist => (
                          <option key={dist} value={dist}>{dist}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                      {t('areaThana')} *
                    </label>
                    <input
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="e.g. Dhanmondi / Gulshan-1 / Halishahar / Sadar"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
                    />
                    {errors.area && <p className="text-rose-600 mt-1">{errors.area}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                      {t('deliveryAddress')} *
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House number, Road, Building name, Flat / Floor number"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
                    />
                    {errors.address && <p className="text-rose-600 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1D1D1F] mb-1.5">
                      {t('orderNotes')}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special delivery instructions"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t border-black/[0.04]">
                <h2 className="font-bold font-serif text-base text-[#1D1D1F] mb-3">
                  {t('paymentMethod')}
                </h2>

                <div className="space-y-2.5">
                  <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#1D1D1F] bg-[#F5F5F7]'
                      : 'border-black/[0.06] bg-white hover:bg-[#F5F5F7]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-0.5 accent-[#1D1D1F]"
                    />
                    <div>
                      <span className="font-semibold text-[#1D1D1F] text-xs block">
                        {t('cod')}
                      </span>
                      <span className="text-[11px] text-[#86868B]">
                        Pay in cash upon physical package delivery.
                      </span>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'bkash'
                      ? 'border-pink-600 bg-pink-50/50'
                      : 'border-black/[0.06] bg-white hover:bg-[#F5F5F7]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'bkash'}
                      onChange={() => setPaymentMethod('bkash')}
                      className="mt-0.5 accent-pink-600"
                    />
                    <div>
                      <span className="font-semibold text-[#1D1D1F] text-xs block">
                        {t('bkash')}
                      </span>
                      <span className="text-[11px] text-[#86868B]">
                        Demo mobile wallet simulation.
                      </span>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'nagad'
                      ? 'border-orange-600 bg-orange-50/50'
                      : 'border-black/[0.06] bg-white hover:bg-[#F5F5F7]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'nagad'}
                      onChange={() => setPaymentMethod('nagad')}
                      className="mt-0.5 accent-orange-600"
                    />
                    <div>
                      <span className="font-semibold text-[#1D1D1F] text-xs block">
                        {t('nagad')}
                      </span>
                      <span className="text-[11px] text-[#86868B]">
                        Demo postal cash wallet simulation.
                      </span>
                    </div>
                  </label>
                </div>

                <div className="mt-4 p-3.5 bg-[#F5F5F7] rounded-2xl text-[#86868B] text-xs flex gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-[11px]">
                    {t('paymentNotice')}
                  </p>
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] py-4 bg-[#1D1D1F] text-white hover:bg-black active:scale-98 font-bold rounded-full text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? (language === 'bn' ? 'অর্ডার প্রসেস হচ্ছে...' : 'Processing...') : t('placeOrder')}</span>
                </button>
              </div>

            </form>

          </div>

          {/* RIGHT: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 border border-black/[0.04] shadow-xs space-y-4">
              <h2 className="font-bold font-serif text-base text-[#1D1D1F] pb-3 border-b border-black/[0.04]">
                {t('orderSummary')} ({cart.length} items)
              </h2>

              <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center justify-between text-xs py-1 border-b border-black/[0.02]">
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <img src={item.product.image} alt={item.product.name} className="w-10 h-10 object-cover rounded-xl bg-[#F5F5F7] shrink-0" />
                      <div className="truncate">
                        <p className="font-semibold text-[#1D1D1F] truncate">
                          {language === 'bn' ? item.product.nameBn : item.product.name}
                        </p>
                        <p className="text-[10px] text-[#86868B]">
                          Qty: {item.quantity} · {item.selectedSize}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono font-medium text-[#1D1D1F] tabular-nums shrink-0">
                      {formatBDT(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs text-[#86868B] pt-2 border-t border-black/[0.04]">
                <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span className="font-mono tabular-nums text-[#1D1D1F] font-medium">{formatBDT(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('deliveryFee')}</span>
                  <span className="font-mono tabular-nums text-[#1D1D1F] font-medium">
                    {deliveryCharge === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : formatBDT(deliveryCharge)}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>{t('discount')}</span>
                    <span className="font-mono tabular-nums">-{formatBDT(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#1D1D1F] pt-3 border-t border-black/[0.04]">
                  <span>{t('totalAmount')}</span>
                  <span className="font-mono tabular-nums text-lg text-[#1D1D1F]">{formatBDT(cartTotal)}</span>
                </div>
              </div>

            </div>

            <div className="bg-white rounded-3xl p-5 border border-black/[0.04] text-xs space-y-2 text-[#86868B]">
              <div className="flex items-center gap-2 font-semibold text-[#1D1D1F]">
                <Truck className="w-4 h-4 text-[#1D1D1F]" />
                <span>Express Bangladesh Delivery</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Temperature-controlled courier dispatch from Dhaka hub. 24–48 hours delivery within Dhaka metropolitan.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
