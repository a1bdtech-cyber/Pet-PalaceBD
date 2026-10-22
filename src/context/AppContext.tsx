import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  AnimalCategory, 
  ProductType, 
  Product, 
  CartItem, 
  Order, 
  CustomerDetails, 
  PaymentMethod, 
  OrderStatus, 
  Coupon, 
  BulkInquiry,
  StoreSettings
} from '../types';
import { translations } from '../data/translations';
import { INITIAL_PRODUCTS, INITIAL_COUPONS, STORE_SETTINGS } from '../data/products';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'error';
}

interface AppContextType {
  // Localization
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
  formatBDT: (amount: number) => string;
  storeSettings: StoreSettings;

  // Navigation & Views
  activeView: 'home' | 'shop' | 'product_detail' | 'checkout' | 'order_confirmation' | 'account' | 'admin';
  setActiveView: (view: 'home' | 'shop' | 'product_detail' | 'checkout' | 'order_confirmation' | 'account' | 'admin') => void;
  selectedProductId: string | null;
  openProductDetail: (productId: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isBulkModalOpen: boolean;
  setIsBulkModalOpen: (open: boolean) => void;

  // Catalog filters & Search
  filterAnimal: AnimalCategory;
  setFilterAnimal: (cat: AnimalCategory) => void;
  filterProductType: ProductType;
  setFilterProductType: (type: ProductType) => void;
  filterBrand: string;
  setFilterBrand: (brand: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetAllFilters: () => void;

  // Products
  products: Product[];
  updateProductStock: (productId: string, newStock: number) => void;
  addNewProduct: (product: Product) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, selectedSize?: string, qty?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartQuantity: (productId: string, size: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  deliveryLocation: 'dhaka' | 'outside_dhaka';
  setDeliveryLocation: (loc: 'dhaka' | 'outside_dhaka') => void;
  deliveryCharge: number;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  discountAmount: number;
  cartTotal: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Orders
  orders: Order[];
  currentOrder: Order | null;
  placeOrder: (customer: CustomerDetails, paymentMethod: PaymentMethod) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  reorderItems: (orderItems: CartItem[]) => void;

  // Farm Bulk Inquiries
  bulkInquiries: BulkInquiry[];
  submitBulkInquiry: (inquiry: Omit<BulkInquiry, 'id' | 'date' | 'status'>) => void;

  // Toasts
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  CART: 'petpalace_cart_v1',
  WISHLIST: 'petpalace_wishlist_v1',
  ORDERS: 'petpalace_orders_v1',
  LANGUAGE: 'petpalace_lang_v1',
  INQUIRIES: 'petpalace_inquiries_v1'
};

const INITIAL_DEMO_ORDERS: Order[] = [
  {
    id: 'PP-BD-89021',
    date: '2026-10-18',
    customer: {
      fullName: 'Tahmid Al-Mamun',
      phone: '01711223344',
      division: 'Dhaka',
      district: 'Dhaka',
      area: 'Uttara Sector 7',
      address: 'House 14, Road 3/B, Sector 7',
      deliveryNotes: 'Call upon arrival'
    },
    items: [
      {
        product: INITIAL_PRODUCTS[0],
        selectedSize: 'Box of 12 (12x100g)',
        unitPrice: 1750,
        quantity: 1
      },
      {
        product: INITIAL_PRODUCTS[2],
        selectedSize: '5kg Bag',
        unitPrice: 480,
        quantity: 2
      }
    ],
    subtotal: 2710,
    deliveryCharge: 0,
    discount: 150,
    couponCode: 'PETPALACE',
    total: 2560,
    paymentMethod: 'cod',
    paymentStatus: 'Cash on Delivery',
    orderStatus: 'Shipped'
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language (Bengali default as requested)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, lang);
  };

  const t = (key: keyof typeof translations['en']): string => {
    return translations[language][key] || translations['en'][key] || String(key);
  };

  const formatBDT = (amount: number): string => {
    const formatted = Math.round(amount).toLocaleString('en-IN');
    return `৳${formatted}`;
  };

  // Views & navigation
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'product_detail' | 'checkout' | 'order_confirmation' | 'account' | 'admin'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  // Filters
  const [filterAnimal, setFilterAnimal] = useState<AnimalCategory>('all');
  const [filterProductType, setFilterProductType] = useState<ProductType>('all');
  const [filterBrand, setFilterBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resetAllFilters = () => {
    setFilterAnimal('all');
    setFilterProductType('all');
    setFilterBrand('all');
    setSearchQuery('');
  };

  const openProductDetail = (productId: string) => {
    setSelectedProductId(productId);
    setActiveView('product_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Products
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const updateProductStock = (productId: string, newStock: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          stockCount: newStock,
          packageSizes: p.packageSizes.map(ps => ({ ...ps, stockCount: newStock }))
        };
      }
      return p;
    }));
    showToast(language === 'bn' ? 'স্টক তথ্য হালনাগাদ করা হয়েছে' : 'Product stock updated', 'success');
  };

  const addNewProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
    showToast(language === 'bn' ? 'নতুন পণ্য তালিকায় যুক্ত হয়েছে' : 'New product created', 'success');
  };

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const [deliveryLocation, setDeliveryLocation] = useState<'dhaka' | 'outside_dhaka'>('dhaka');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const addToCart = (product: Product, selectedSize?: string, qty = 1) => {
    const sizeName = selectedSize || product.defaultSize;
    const sizeOption = product.packageSizes.find(s => s.size === sizeName) || product.packageSizes[0];
    const unitPrice = sizeOption ? sizeOption.price : product.price;
    const maxStock = sizeOption ? sizeOption.stockCount : product.stockCount;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.selectedSize === sizeName);
      if (existingIndex > -1) {
        const currentQty = prev[existingIndex].quantity;
        const newQty = Math.min(currentQty + qty, maxStock);
        if (newQty === currentQty) {
          showToast(language === 'bn' ? 'সর্বোচ্চ স্টকের সীমা ছুঁয়েছে' : 'Maximum available stock reached', 'info');
          return prev;
        }
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: newQty };
        return updated;
      } else {
        const initialQty = Math.min(qty, maxStock);
        return [...prev, { product, selectedSize: sizeName, unitPrice, quantity: initialQty }];
      }
    });

    showToast(
      language === 'bn' 
        ? `${product.nameBn} কার্টে যোগ করা হয়েছে` 
        : `Added ${product.name} to cart`, 
      'success'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size)));
    showToast(language === 'bn' ? 'কার্ট থেকে পণ্য সরানো হয়েছে' : 'Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === size) {
        const sizeOption = item.product.packageSizes.find(s => s.size === size);
        const maxStock = sizeOption ? sizeOption.stockCount : item.product.stockCount;
        const finalQty = Math.min(qty, maxStock);
        return { ...item, quantity: finalQty };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  // Delivery charge rule: Configurable from STORE_SETTINGS
  const isFreeDelivery = cartSubtotal >= STORE_SETTINGS.freeShippingThreshold;
  const deliveryCharge = isFreeDelivery ? 0 : (deliveryLocation === 'dhaka' ? STORE_SETTINGS.shippingInsideDhaka : STORE_SETTINGS.shippingOutsideDhaka);

  // Coupon calculation
  let discountAmount = 0;
  if (appliedCoupon) {
    if (cartSubtotal >= appliedCoupon.minSpend) {
      if (appliedCoupon.discountType === 'percentage') {
        discountAmount = Math.round((cartSubtotal * appliedCoupon.value) / 100);
      } else {
        discountAmount = appliedCoupon.value;
      }
    }
  }

  const cartTotal = Math.max(0, cartSubtotal + deliveryCharge - discountAmount);

  const applyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const coupon = INITIAL_COUPONS.find(c => c.code.toUpperCase() === trimmed);
    if (!coupon) {
      return { 
        success: false, 
        message: language === 'bn' ? 'অবৈধ কুপন কোড' : 'Invalid coupon code' 
      };
    }
    if (cartSubtotal < coupon.minSpend) {
      return { 
        success: false, 
        message: language === 'bn' 
          ? `এই কুপনের জন্য সর্বনিম্ন ${formatBDT(coupon.minSpend)} এর অর্ডার প্রয়োজন` 
          : `Minimum order ${formatBDT(coupon.minSpend)} required for this coupon` 
      };
    }
    setAppliedCoupon(coupon);
    showToast(
      language === 'bn' ? `কুপন ${coupon.code} সফলভাবে প্রয়োগ করা হয়েছে!` : `Coupon ${coupon.code} applied!`,
      'success'
    );
    return { 
      success: true, 
      message: language === 'bn' ? 'কুপন প্রযোজ্য হয়েছে!' : 'Coupon applied successfully!' 
    };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast(language === 'bn' ? 'কুপন অপসারণ করা হয়েছে' : 'Coupon removed', 'info');
  };

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(language === 'bn' ? 'পছন্দের তালিকা থেকে সরানো হয়েছে' : 'Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast(language === 'bn' ? 'পছন্দের তালিকায় যোগ করা হয়েছে' : 'Saved to wishlist', 'success');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.ORDERS);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ORDERS;
    } catch {
      return INITIAL_DEMO_ORDERS;
    }
  });

  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (customer: CustomerDetails, paymentMethod: PaymentMethod): Order => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newOrder: Order = {
      id: `PP-BD-${randomSuffix}`,
      date: new Date().toISOString().split('T')[0],
      customer,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryCharge,
      discount: discountAmount,
      couponCode: appliedCoupon?.code,
      total: cartTotal,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid (Demo)',
      orderStatus: 'Confirmed'
    };

    setOrders(prev => [newOrder, ...prev]);
    setCurrentOrder(newOrder);
    clearCart();
    setAppliedCoupon(null);
    setActiveView('order_confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    showToast(
      language === 'bn' ? 'ডেমো অর্ডার সফলভাবে নিশ্চিত হয়েছে!' : 'Demo order placed successfully!',
      'success'
    );

    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, orderStatus: status } : o));
    showToast(
      language === 'bn' ? `অর্ডার #${orderId} এর স্ট্যাটাস আপডেট হয়েছে` : `Order #${orderId} status updated`,
      'info'
    );
  };

  const reorderItems = (orderItems: CartItem[]) => {
    orderItems.forEach(item => {
      addToCart(item.product, item.selectedSize, item.quantity);
    });
    showToast(language === 'bn' ? 'পূর্বের আইটেমগুলো কার্টে যুক্ত করা হয়েছে' : 'Items added back to your cart', 'success');
  };

  // Bulk Inquiries
  const [bulkInquiries, setBulkInquiries] = useState<BulkInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : [
        {
          id: 'INQ-101',
          date: '2026-10-15',
          fullName: 'Kabir Ahmed',
          phone: '01819283746',
          district: 'Mymensingh',
          feedType: 'Broiler Starter Super Feed Crumbs',
          tonnageOrBags: '100 Bags (5 Tons)',
          notes: 'Need weekly supply schedule for 5,000 birds poultry shed.',
          status: 'Received'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.INQUIRIES, JSON.stringify(bulkInquiries));
  }, [bulkInquiries]);

  const submitBulkInquiry = (inquiry: Omit<BulkInquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: BulkInquiry = {
      ...inquiry,
      id: `INQ-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Received'
    };
    setBulkInquiries(prev => [newInquiry, ...prev]);
    setIsBulkModalOpen(false);
    showToast(
      language === 'bn' ? 'আপনার বাল্ক কোটেশন রিকোয়েস্ট সফলভাবে জমা হয়েছে!' : 'Wholesale inquiry submitted successfully!',
      'success'
    );
  };

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev.slice(-3), { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        formatBDT,
        storeSettings: STORE_SETTINGS,
        activeView,
        setActiveView,
        selectedProductId,
        openProductDetail,
        isCartOpen,
        setIsCartOpen,
        isBulkModalOpen,
        setIsBulkModalOpen,
        filterAnimal,
        setFilterAnimal,
        filterProductType,
        setFilterProductType,
        filterBrand,
        setFilterBrand,
        searchQuery,
        setSearchQuery,
        resetAllFilters,
        products,
        updateProductStock,
        addNewProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryLocation,
        setDeliveryLocation,
        deliveryCharge,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discountAmount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isWishlisted,
        orders,
        currentOrder,
        placeOrder,
        updateOrderStatus,
        reorderItems,
        bulkInquiries,
        submitBulkInquiry,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
