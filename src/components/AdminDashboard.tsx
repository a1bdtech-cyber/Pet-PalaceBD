import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OrderStatus, Product } from '../types';
import { INITIAL_COUPONS } from '../data/products';
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Edit3, 
  ArrowLeft, 
  Tag, 
  FileText,
  Settings
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    orders, 
    products, 
    updateProductStock, 
    updateOrderStatus, 
    bulkInquiries, 
    formatBDT, 
    setActiveView, 
    t 
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'orders' | 'inventory' | 'coupons' | 'inquiries' | 'settings'>('overview');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editingStockVal, setEditingStockVal] = useState<number>(0);

  const totalDemoSales = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrdersCount = orders.length;
  const lowStockItems = products.filter(p => p.stockCount < 20);
  const demoCustomersCount = 142;

  const salesHistory = [
    { day: 'Sat', amount: 14200 },
    { day: 'Sun', amount: 22800 },
    { day: 'Mon', amount: 19500 },
    { day: 'Tue', amount: 31200 },
    { day: 'Wed', amount: 27400 },
    { day: 'Thu', amount: 38900 },
    { day: 'Fri', amount: 44500 }
  ];
  const maxSales = Math.max(...salesHistory.map(s => s.amount));

  const handleStockSave = (productId: string) => {
    updateProductStock(productId, editingStockVal);
    setEditingProductId(null);
  };

  return (
    <div className="py-8 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-black/[0.06] gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView('home')}
              className="p-2 rounded-full bg-white border border-black/[0.08] text-[#1D1D1F] hover:bg-stone-50 transition-colors shadow-2xs"
              title="Return to Store"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#1D1D1F]">
                {t('adminTitle')}
              </h1>
              <p className="text-xs text-[#86868B] mt-0.5">
                {t('adminNotice')} · Local Client Storage Mode
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('shop')}
              className="px-4 py-2 bg-white border border-black/[0.08] rounded-full text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors shadow-2xs"
            >
              Preview Store
            </button>
          </div>
        </div>

        {/* Apple-style Admin Navigation Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 text-xs font-semibold scrollbar-none">
          <button
            onClick={() => setActiveAdminTab('overview')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'overview'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('orders')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'orders'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('inventory')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'inventory'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Inventory ({products.length})</span>
            {lowStockItems.length > 0 && (
              <span className="w-4 h-4 bg-amber-500 text-stone-950 font-bold rounded-full text-[10px] flex items-center justify-center">
                {lowStockItems.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveAdminTab('inquiries')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'inquiries'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Farm Inquiries ({bulkInquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('coupons')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'coupons'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Coupons</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('settings')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
              activeAdminTab === 'settings'
                ? 'bg-[#1D1D1F] text-white shadow-xs'
                : 'bg-white text-[#86868B] hover:text-[#1D1D1F] border border-black/[0.04]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeAdminTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
                <span className="text-xs text-[#86868B] font-medium">{t('totalSales')}</span>
                <p className="text-2xl font-bold font-mono text-[#1D1D1F] mt-1 tabular-nums">
                  {formatBDT(totalDemoSales + 128450)}
                </p>
                <span className="text-[11px] text-emerald-700 font-medium mt-2 block">
                  ↑ +18.4% vs last week
                </span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
                <span className="text-xs text-[#86868B] font-medium">{t('totalOrders')}</span>
                <p className="text-2xl font-bold font-mono text-[#1D1D1F] mt-1 tabular-nums">
                  {totalOrdersCount + 68}
                </p>
                <span className="text-[11px] text-emerald-700 font-medium mt-2 block">
                  98% On-time dispatch
                </span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
                <span className="text-xs text-[#86868B] font-medium">{t('lowStockItems')}</span>
                <p className="text-2xl font-bold font-mono text-amber-700 mt-1 tabular-nums">
                  {lowStockItems.length}
                </p>
                <span className="text-[11px] text-amber-800 font-medium mt-2 block">
                  Restock replenishment suggested
                </span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs">
                <span className="text-xs text-[#86868B] font-medium">{t('customersCount')}</span>
                <p className="text-2xl font-bold font-mono text-[#1D1D1F] mt-1 tabular-nums">
                  {demoCustomersCount}
                </p>
                <span className="text-[11px] text-[#86868B] font-medium mt-2 block">
                  Active across 64 Districts
                </span>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-black/[0.04] gap-2">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#1D1D1F]">
                    {t('salesTrend')}
                  </h3>
                  <p className="text-xs text-[#86868B]">
                    Gross revenue across express logistics channels in Bangladesh
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1 rounded-full self-start sm:self-auto">
                  Week Total: ৳198,900
                </span>
              </div>

              <div className="grid grid-cols-7 gap-3 sm:gap-6 items-end h-48 pt-6">
                {salesHistory.map((item) => {
                  const barHeight = Math.round((item.amount / maxSales) * 100);
                  return (
                    <div key={item.day} className="flex flex-col items-center gap-2 group h-full justify-end">
                      <div className="text-[10px] font-mono font-semibold text-[#86868B] opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
                        ৳{(item.amount / 1000).toFixed(1)}k
                      </div>
                      <div
                        style={{ height: `${barHeight}%` }}
                        className="w-full max-w-[40px] bg-[#1D1D1F] group-hover:bg-[#0071E3] rounded-t-xl transition-all duration-300"
                      />
                      <span className="text-xs font-medium text-[#86868B] mt-1">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Orders Feed */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs">
              <h3 className="font-serif font-bold text-base text-[#1D1D1F] mb-4">
                Recent Orders
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-black/[0.06] text-[#86868B] font-semibold">
                      <th className="pb-3">Order ID</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Total</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.03]">
                    {orders.slice(0, 5).map(o => (
                      <tr key={o.id} className="hover:bg-[#F5F5F7]">
                        <td className="py-3 font-mono font-bold text-[#1D1D1F]">{o.id}</td>
                        <td className="py-3 font-medium text-[#1D1D1F]">{o.customer.fullName}</td>
                        <td className="py-3 text-[#86868B]">{o.customer.district}</td>
                        <td className="py-3 font-mono font-bold tabular-nums">{formatBDT(o.total)}</td>
                        <td className="py-3">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                            {o.orderStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ORDERS */}
        {activeAdminTab === 'orders' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-[#1D1D1F] mb-4">
              {t('orderManagement')}
            </h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="p-5 rounded-2xl bg-[#F5F5F7] text-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/[0.04] gap-2">
                    <div>
                      <span className="font-mono font-bold text-[#1D1D1F] text-sm">{order.id}</span>
                      <span className="text-[#86868B] ml-2">{order.date}</span>
                    </div>
                    <select
                      value={order.orderStatus}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                      className="px-3 py-1 bg-white border border-black/[0.08] rounded-full font-semibold text-[#1D1D1F] focus:outline-none"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-[#1D1D1F]">Customer:</p>
                      <p className="text-[#86868B]">{order.customer.fullName} · {order.customer.phone}</p>
                      <p className="text-[#86868B]">{order.customer.address}, {order.customer.area}, {order.customer.district}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D1D1F]">Items:</p>
                      {order.items.map((it, i) => (
                        <p key={i} className="text-[#86868B]">
                          {it.product.name} ({it.selectedSize}) × {it.quantity}
                        </p>
                      ))}
                      <p className="font-mono font-bold text-[#1D1D1F] mt-1">
                        Total: {formatBDT(order.total)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INVENTORY */}
        {activeAdminTab === 'inventory' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs space-y-6">
            <h2 className="font-serif font-bold text-lg text-[#1D1D1F]">
              {t('inventoryManagement')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-black/[0.06] text-[#86868B] font-semibold">
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Brand</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Stock Units</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.03]">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-[#F5F5F7]">
                      <td className="py-3 font-semibold text-[#1D1D1F] max-w-xs truncate pr-3">{p.name}</td>
                      <td className="py-3 capitalize text-[#86868B]">{p.animalCategory}</td>
                      <td className="py-3 text-[#86868B]">{p.brand}</td>
                      <td className="py-3 font-mono font-bold tabular-nums">{formatBDT(p.price)}</td>
                      <td className="py-3">
                        {editingProductId === p.id ? (
                          <input
                            type="number"
                            value={editingStockVal}
                            onChange={(e) => setEditingStockVal(Number(e.target.value))}
                            className="w-18 px-2 py-1 text-xs border border-black/[0.1] rounded font-mono"
                          />
                        ) : (
                          <span className={`font-mono font-bold ${p.stockCount < 20 ? 'text-amber-700' : 'text-[#1D1D1F]'}`}>
                            {p.stockCount} units
                          </span>
                        )}
                      </td>
                      <td className="py-3">
                        {editingProductId === p.id ? (
                          <button
                            onClick={() => handleStockSave(p.id)}
                            className="px-3 py-1 bg-[#1D1D1F] text-white rounded-full text-[11px] font-semibold"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditingProductId(p.id);
                              setEditingStockVal(p.stockCount);
                            }}
                            className="p-1 text-[#86868B] hover:text-[#1D1D1F]"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: FARM INQUIRIES */}
        {activeAdminTab === 'inquiries' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-[#1D1D1F] mb-4">
              Wholesale Farm Inquiries
            </h2>
            <div className="space-y-3">
              {bulkInquiries.map((inq) => (
                <div key={inq.id} className="p-4 rounded-2xl bg-[#F5F5F7] text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.04]">
                    <span className="font-bold text-[#1D1D1F]">{inq.fullName} · {inq.phone}</span>
                    <span className="font-mono text-[#86868B]">{inq.date}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[#86868B]">
                    <div>District: <strong className="text-[#1D1D1F]">{inq.district}</strong></div>
                    <div>Feed: <strong className="text-[#1D1D1F]">{inq.feedType}</strong></div>
                    <div>Quantity: <strong className="text-[#1D1D1F]">{inq.tonnageOrBags}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COUPONS */}
        {activeAdminTab === 'coupons' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs space-y-6">
            <h2 className="font-serif font-bold text-lg text-[#1D1D1F] mb-2">
              Active Promo Coupons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {INITIAL_COUPONS.map(c => (
                <div key={c.code} className="p-5 rounded-2xl bg-[#F5F5F7]">
                  <span className="font-mono font-bold text-[#1D1D1F] text-sm block mb-1">
                    {c.code}
                  </span>
                  <p className="text-[#86868B] mb-2">{c.description}</p>
                  <span className="text-[11px] font-mono text-[#86868B] block">
                    Min Spend: {formatBDT(c.minSpend)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS */}
        {activeAdminTab === 'settings' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.04] shadow-xs max-w-xl text-xs space-y-4">
            <h2 className="font-serif font-bold text-lg text-[#1D1D1F] mb-2">
              Logistics & Currency
            </h2>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Currency</label>
              <input type="text" readOnly value="BDT (৳) - Bangladeshi Taka" className="w-full px-4 py-2.5 bg-[#F5F5F7] rounded-2xl text-[#1D1D1F] border-none" />
            </div>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Inside Dhaka Shipping</label>
              <input type="text" readOnly value="৳70 (Free above ৳2,500)" className="w-full px-4 py-2.5 bg-[#F5F5F7] rounded-2xl text-[#1D1D1F] border-none font-mono" />
            </div>
            <div>
              <label className="block font-semibold text-[#1D1D1F] mb-1">Outside Dhaka Shipping</label>
              <input type="text" readOnly value="৳130 (Courier COD delivery)" className="w-full px-4 py-2.5 bg-[#F5F5F7] rounded-2xl text-[#1D1D1F] border-none font-mono" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
