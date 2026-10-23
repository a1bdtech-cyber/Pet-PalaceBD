import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BestSellers } from './components/BestSellers';
import { ShopByBrand } from './components/ShopByBrand';
import { WhyPetPalace } from './components/WhyPetPalace';
import { RepeatPurchaseSection } from './components/RepeatPurchaseSection';
import { FarmFeedSection } from './components/FarmFeedSection';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailView } from './components/ProductDetailView';
import { CheckoutView } from './components/CheckoutView';
import { OrderConfirmationView } from './components/OrderConfirmationView';
import { CustomerAccountView } from './components/CustomerAccountView';
import { AdminDashboard } from './components/AdminDashboard';
import { CartDrawer } from './components/CartDrawer';
import { BulkFarmInquiryModal } from './components/BulkFarmInquiryModal';
import { ToastContainer } from './components/ToastContainer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';

import { WelcomeScreen } from './components/WelcomeScreen';

const AppContent: React.FC = () => {
  const { activeView } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] pb-24 sm:pb-28 lg:pb-0 overflow-x-hidden text-[#1D1D1F]">
      {/* Fullscreen Animated Welcome Screen Intro */}
      <WelcomeScreen />

      {/* Top Header with Apple Store Navigation & Category Ribbon */}
      {activeView !== 'admin' && <Header />}

      {/* Main Content Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <BestSellers />
            <WhyPetPalace />
            <FarmFeedSection />
            <RepeatPurchaseSection />
            <ShopByBrand />
            <ReviewsSection />
            <NewsletterSection />
          </>
        )}

        {activeView === 'shop' && <ProductCatalog />}
        {activeView === 'product_detail' && <ProductDetailView />}
        {activeView === 'checkout' && <CheckoutView />}
        {activeView === 'order_confirmation' && <OrderConfirmationView />}
        {activeView === 'account' && <CustomerAccountView />}
        {activeView === 'admin' && <AdminDashboard />}
      </main>

      {/* Apple-style Footer */}
      {activeView !== 'admin' && <Footer />}

      {/* Drawers, Modals & Floating Components */}
      <CartDrawer />
      <BulkFarmInquiryModal />
      <ToastContainer />
      <MobileBottomNav />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
