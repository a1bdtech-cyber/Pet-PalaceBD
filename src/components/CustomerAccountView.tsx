import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  RotateCw, 
  ShieldAlert, 
  ChevronRight
} from 'lucide-react';

export const CustomerAccountView: React.FC = () => {
  const { 
    orders, 
    products, 
    wishlist, 
    reorderItems, 
    formatBDT, 
    setActiveView, 
    t, 
    language 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'wishlist'>('orders');

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="py-10 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Apple ID Style Account Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs mb-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#1D1D1F] text-white font-bold font-serif text-xl flex items-center justify-center shadow-xs">
              TP
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#1D1D1F]">
                Tahmid Al-Mamun
              </h1>
              <p className="text-xs text-[#86868B] mt-0.5">
                +880 1711-223344 · Uttara, Dhaka
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-medium text-[#1D1D1F] bg-[#F5F5F7] px-2.5 py-0.5 rounded-full">
                  Royal Member (Demo)
                </span>
                <span className="text-[11px] text-[#86868B]">·</span>
                <span className="text-[11px] text-[#86868B] font-mono">
                  {orders.length} Orders Placed
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setActiveView('shop')}
              className="px-5 py-2.5 bg-[#1D1D1F] text-white font-semibold rounded-full hover:bg-black transition-colors"
            >
              Browse Store
            </button>
          </div>
        </div>

        {/* Account Tabs */}
        <div className="flex border-b border-black/[0.06] gap-6 text-xs font-semibold mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'orders'
                ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                : 'text-[#86868B] hover:text-[#1D1D1F]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{t('ordersTab')} ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`pb-3 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'wishlist'
                ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                : 'text-[#86868B] hover:text-[#1D1D1F]'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>{t('wishlistTab')} ({wishlist.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`pb-3 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'addresses'
                ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                : 'text-[#86868B] hover:text-[#1D1D1F]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{t('savedAddressTab')}</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-b-2 border-[#1D1D1F] text-[#1D1D1F]'
                : 'text-[#86868B] hover:text-[#1D1D1F]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{t('profileTab')}</span>
          </button>
        </div>

        {/* TAB 1: ORDER HISTORY */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-3xl border border-black/[0.04]">
                <p className="text-[#86868B] text-xs mb-3">{t('noOrdersYet')}</p>
                <button
                  onClick={() => setActiveView('shop')}
                  className="px-5 py-2 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold"
                >
                  {t('startShopping')}
                </button>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl p-6 border border-black/[0.04] shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/[0.04] gap-2">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif font-bold text-base text-[#1D1D1F] font-mono">
                          {order.id}
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                          {order.orderStatus}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#86868B] mt-0.5">
                        Placed on: {order.date} · Payment: {order.paymentStatus}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-[#1D1D1F] text-sm tabular-nums">
                        {formatBDT(order.total)}
                      </span>
                      <button
                        onClick={() => reorderItems(order.items)}
                        className="px-3.5 py-1.5 bg-[#F5F5F7] hover:bg-[#E8E8ED] rounded-full text-xs font-semibold text-[#1D1D1F] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>{t('repeatOrderBtn')}</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-10 h-10 object-cover rounded-xl bg-[#F5F5F7]"
                          />
                          <div>
                            <p className="font-semibold text-[#1D1D1F]">
                              {language === 'bn' ? item.product.nameBn : item.product.name}
                            </p>
                            <p className="text-[#86868B] text-[11px]">
                              Size: {item.selectedSize} · Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono font-medium text-[#1D1D1F] tabular-nums">
                          {formatBDT(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-black/[0.04] text-[11px] text-[#86868B] flex items-center justify-between">
                    <p>
                      Shipping: {order.customer.fullName}, {order.customer.area}, {order.customer.district}
                    </p>
                    <span className="font-mono">Express Delivery</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: WISHLIST */}
        {activeTab === 'wishlist' && (
          <div>
            {wishlistedProducts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-3xl border border-black/[0.04]">
                <p className="text-[#86868B] text-xs mb-3">Your saved list is empty.</p>
                <button
                  onClick={() => setActiveView('shop')}
                  className="px-5 py-2 bg-[#1D1D1F] text-white rounded-full text-xs font-semibold"
                >
                  Explore Store
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {wishlistedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SAVED ADDRESSES */}
        {activeTab === 'addresses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Primary Residence
              </span>
              <h3 className="font-serif font-bold text-base text-[#1D1D1F] mt-3">
                Tahmid Al-Mamun
              </h3>
              <p className="text-xs text-[#86868B] mt-1 leading-relaxed">
                House 14, Road 3/B, Sector 7, Uttara<br />
                Dhaka-1230, Bangladesh
              </p>
              <p className="text-xs text-[#1D1D1F] font-mono mt-2">+880 1711-223344</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                Commercial Farm Site
              </span>
              <h3 className="font-serif font-bold text-base text-[#1D1D1F] mt-3">
                Green Meadows Dairy Project
              </h3>
              <p className="text-xs text-[#86868B] mt-1 leading-relaxed">
                Plot 48, Bhabanipur Agro Road, Sreepur<br />
                Gazipur-1740, Bangladesh
              </p>
              <p className="text-xs text-[#1D1D1F] font-mono mt-2">+880 1819-998877</p>
            </div>
          </div>
        )}

        {/* TAB 4: PROFILE SETTINGS */}
        {activeTab === 'profile' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs max-w-xl text-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#1D1D1F] mb-2">
              Apple ID & Customer Profile
            </h3>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Tahmid Al-Mamun"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Mobile Number</label>
              <input
                type="text"
                defaultValue="+880 1711-223344"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F] font-mono"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Email</label>
              <input
                type="email"
                defaultValue="tahmid.mamun@example.com"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border-none text-[#1D1D1F]"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
