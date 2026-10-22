import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Printer, ArrowRight } from 'lucide-react';

export const OrderConfirmationView: React.FC = () => {
  const { currentOrder, formatBDT, setActiveView, t, language } = useApp();

  if (!currentOrder) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <h2 className="text-xl font-bold font-serif text-[#1D1D1F] mb-2">No active order session</h2>
        <button
          onClick={() => setActiveView('shop')}
          className="mt-4 px-6 py-2.5 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold"
        >
          {t('startShopping')}
        </button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Apple Order Confirmed Card */}
        <div className="bg-white rounded-3xl border border-black/[0.04] shadow-xs p-6 sm:p-10 text-center mb-8">
          
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            {t('orderConfirmedTitle')}
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#1D1D1F] mt-1 mb-2">
            {t('orderIdText')}: <span className="font-mono text-[#0071E3]">{currentOrder.id}</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#86868B] max-w-lg mx-auto leading-relaxed">
            {t('orderThanks')}
          </p>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-xs text-left bg-[#F5F5F7] p-5 rounded-2xl">
            <div>
              <span className="text-[11px] text-[#86868B] block">{t('estimatedDelivery')}</span>
              <span className="font-semibold text-[#1D1D1F]">2-3 Business Days</span>
            </div>
            <div>
              <span className="text-[11px] text-[#86868B] block">Payment Method</span>
              <span className="font-semibold text-emerald-800">{currentOrder.paymentStatus}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#86868B] block">Destination</span>
              <span className="font-semibold text-[#1D1D1F]">{currentOrder.customer.district}, {currentOrder.customer.division}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>{t('printReceipt')}</span>
            </button>

            <button
              onClick={() => setActiveView('account')}
              className="px-6 py-2.5 bg-[#1D1D1F] hover:bg-black text-white rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors shadow-xs"
            >
              <span>{t('trackInAccount')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Printable Receipt Breakdown */}
        <div className="bg-white rounded-3xl border border-black/[0.04] shadow-xs p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.04]">
            <div>
              <h2 className="font-serif font-bold text-lg text-[#1D1D1F]">
                Order Receipt
              </h2>
              <p className="text-[11px] text-[#86868B]">
                {currentOrder.date} · Pet Palace Bangladesh Demo
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1 rounded-full">
              {currentOrder.id}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 mb-4 border-b border-black/[0.04] text-xs">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#86868B] block mb-1">Delivering To:</span>
              <p className="font-semibold text-[#1D1D1F]">{currentOrder.customer.fullName}</p>
              <p className="text-[#86868B]">{currentOrder.customer.address}</p>
              <p className="text-[#86868B]">{currentOrder.customer.area}, {currentOrder.customer.district}</p>
              <p className="text-[#86868B] font-mono mt-1">{currentOrder.customer.phone}</p>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase text-[#86868B] block mb-1">Payment:</span>
              <p className="text-[#1D1D1F] capitalize font-medium">{currentOrder.paymentMethod.toUpperCase()}</p>
              {currentOrder.customer.deliveryNotes && (
                <p className="text-[#86868B] italic mt-1">"{currentOrder.customer.deliveryNotes}"</p>
              )}
            </div>
          </div>

          {/* Itemized list */}
          <div className="space-y-3 pb-4 mb-4 border-b border-black/[0.04]">
            {currentOrder.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-[#1D1D1F]">
                    {language === 'bn' ? item.product.nameBn : item.product.name}
                  </span>
                  <span className="text-[#86868B] block text-[11px]">
                    Size: {item.selectedSize} · Qty: {item.quantity} × {formatBDT(item.unitPrice)}
                  </span>
                </div>
                <span className="font-mono font-medium text-[#1D1D1F] tabular-nums">
                  {formatBDT(item.unitPrice * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Financial summary */}
          <div className="space-y-1.5 text-xs text-[#86868B]">
            <div className="flex justify-between">
              <span>{t('subtotal')}</span>
              <span className="font-mono tabular-nums text-[#1D1D1F]">{formatBDT(currentOrder.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('deliveryFee')}</span>
              <span className="font-mono tabular-nums text-[#1D1D1F]">
                {currentOrder.deliveryCharge === 0 ? 'FREE' : formatBDT(currentOrder.deliveryCharge)}
              </span>
            </div>
            {currentOrder.discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>{t('discount')} ({currentOrder.couponCode})</span>
                <span className="font-mono tabular-nums">-{formatBDT(currentOrder.discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-[#1D1D1F] pt-2 border-t border-black/[0.04]">
              <span>{t('totalAmount')}</span>
              <span className="font-mono text-base text-[#1D1D1F] tabular-nums">{formatBDT(currentOrder.total)}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
