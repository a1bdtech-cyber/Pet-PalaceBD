import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { AnimalCategory, ProductType } from '../types';
import { 
  Filter, 
  X, 
  RotateCcw, 
  SlidersHorizontal, 
  ArrowUpDown 
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    filterAnimal, 
    setFilterAnimal, 
    filterProductType, 
    setFilterProductType, 
    filterBrand, 
    setFilterBrand, 
    searchQuery, 
    setSearchQuery, 
    resetAllFilters, 
    t, 
    formatBDT, 
    language 
  } = useApp();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest' | 'best-selling'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const uniqueBrands = useMemo(() => {
    return Array.from(new Set(products.map(p => p.brand)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filterAnimal !== 'all' && product.animalCategory !== filterAnimal) return false;
      if (filterProductType !== 'all' && product.productType !== filterProductType) return false;
      if (filterBrand !== 'all' && product.brand !== filterBrand) return false;
      if (product.price > maxPrice) return false;
      if (onlyInStock && product.stockCount <= 0) return false;
      if (selectedAgeGroup !== 'all' && product.ageGroup !== selectedAgeGroup) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query) || product.nameBn.includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.animalCategory.toLowerCase().includes(query);
        const matchesType = product.productType.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesType) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'best-selling') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [products, filterAnimal, filterProductType, filterBrand, maxPrice, onlyInStock, selectedAgeGroup, searchQuery, sortBy]);

  const animalOptions: { label: string; value: AnimalCategory }[] = [
    { label: language === 'bn' ? 'সকল' : 'All Animals', value: 'all' },
    { label: t('cats'), value: 'cats' },
    { label: t('dogs'), value: 'dogs' },
    { label: t('birds'), value: 'birds' },
    { label: t('fish'), value: 'fish' },
    { label: t('smallPets'), value: 'small-pets' },
    { label: t('farmAnimals'), value: 'farm-animals' }
  ];

  const handleReset = () => {
    resetAllFilters();
    setMaxPrice(10000);
    setOnlyInStock(false);
    setSelectedAgeGroup('all');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    filterAnimal !== 'all' || 
    filterProductType !== 'all' || 
    filterBrand !== 'all' || 
    maxPrice < 10000 || 
    onlyInStock || 
    selectedAgeGroup !== 'all' || 
    searchQuery !== '';

  return (
    <div className="py-8 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Catalog Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-6 border-b border-black/[0.04] gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#1D1D1F] tracking-tight">
              {t('catalogTitle')}
            </h1>
            <p className="text-xs text-[#86868B] mt-1">
              {filteredProducts.length} {t('productsFound')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Select */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/[0.06] text-xs shadow-2xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#86868B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[#1D1D1F] font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured">{t('sortFeatured')}</option>
                <option value="best-selling">{t('sortBestSeller')}</option>
                <option value="price-asc">{t('sortPriceLow')}</option>
                <option value="price-desc">{t('sortPriceHigh')}</option>
                <option value="newest">{t('sortNewest')}</option>
              </select>
            </div>

            {/* Mobile Filter */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-black/[0.06] text-xs font-medium text-[#1D1D1F]"
            >
              <Filter className="w-3.5 h-3.5 text-[#86868B]" />
              <span>{t('filterBy')}</span>
            </button>
          </div>
        </div>

        {/* Top Horizontal Category Pills Filter Strip (Apple Store Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {animalOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilterAnimal(opt.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                filterAnimal === opt.value
                  ? 'bg-[#1D1D1F] text-white shadow-xs'
                  : 'bg-white text-[#1D1D1F] hover:bg-[#E8E8ED] border border-black/[0.04]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* 2-Column Catalog: Filters Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP FILTERS SIDEBAR */}
          <aside className="hidden lg:block space-y-5 bg-white p-6 rounded-3xl border border-black/[0.04] shadow-xs self-start">
            
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.04]">
              <span className="font-bold text-xs uppercase tracking-wider text-[#1D1D1F]">
                {t('filterBy')}
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  className="text-xs text-rose-600 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t('resetFilters')}</span>
                </button>
              )}
            </div>

            {/* Product Type Filter */}
            <div>
              <label className="block text-xs font-semibold text-[#86868B] mb-2 uppercase tracking-wider">
                {t('productType')}
              </label>
              <select
                value={filterProductType}
                onChange={(e) => setFilterProductType(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-none rounded-xl text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#1D1D1F]"
              >
                <option value="all">{t('allTypes')}</option>
                <option value="dry-food">{t('dryFood')}</option>
                <option value="wet-food">{t('wetFood')}</option>
                <option value="treats">{t('treats')}</option>
                <option value="healthcare">{t('healthcare')}</option>
                <option value="accessories">{t('accessories')}</option>
                <option value="farm-feed">{t('farmFeed')}</option>
              </select>
            </div>

            {/* Brand Filter */}
            <div className="pt-3 border-t border-black/[0.04]">
              <label className="block text-xs font-semibold text-[#86868B] mb-2 uppercase tracking-wider">
                {t('brand')}
              </label>
              <select
                value={filterBrand}
                onChange={(e) => setFilterBrand(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-none rounded-xl text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#1D1D1F]"
              >
                <option value="all">{language === 'bn' ? 'সব ব্র্যান্ড' : 'All Brands'}</option>
                {uniqueBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Price Range Slider */}
            <div className="pt-3 border-t border-black/[0.04]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                  {t('priceRange')}
                </label>
                <span className="text-xs font-mono font-bold text-[#1D1D1F] tabular-nums">
                  Up to {formatBDT(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="10000"
                step="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1D1D1F] cursor-pointer"
              />
            </div>

            {/* In Stock Only */}
            <div className="pt-3 border-t border-black/[0.04]">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#1D1D1F]">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded text-[#1D1D1F] accent-[#1D1D1F]"
                />
                <span>In Stock Items Only</span>
              </label>
            </div>

          </aside>

          {/* RIGHT PRODUCTS GRID */}
          <main className="lg:col-span-3">
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-white rounded-2xl border border-black/[0.04] text-xs">
                <span className="text-[#86868B]">{language === 'bn' ? 'সক্রিয় ফিল্টার:' : 'Active:'}</span>
                {filterAnimal !== 'all' && (
                  <span className="bg-[#F5F5F7] text-[#1D1D1F] px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <span>{t('animalType')}: {animalOptions.find(o => o.value === filterAnimal)?.label || filterAnimal}</span>
                    <button onClick={() => setFilterAnimal('all')} aria-label="Remove filter"><X className="w-3 h-3 text-[#86868B]" /></button>
                  </span>
                )}
                {filterProductType !== 'all' && (
                  <span className="bg-[#F5F5F7] text-[#1D1D1F] px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <span>{t('productType')}: {filterProductType}</span>
                    <button onClick={() => setFilterProductType('all')} aria-label="Remove filter"><X className="w-3 h-3 text-[#86868B]" /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-[#F5F5F7] text-[#1D1D1F] px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <span>{language === 'bn' ? 'অনুসন্ধান' : 'Search'}: "{searchQuery}"</span>
                    <button onClick={() => setSearchQuery('')} aria-label="Clear search"><X className="w-3 h-3 text-[#86868B]" /></button>
                  </span>
                )}
                <button onClick={handleReset} className="ml-auto text-xs text-[#1D1D1F] font-semibold hover:underline">
                  {language === 'bn' ? 'সব মুছুন' : 'Clear All'}
                </button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-black/[0.04] max-w-md mx-auto my-8">
                <span className="text-3xl block mb-2">🔍</span>
                <h3 className="font-serif font-bold text-base text-[#1D1D1F] mb-1">
                  No matching products
                </h3>
                <p className="text-xs text-[#86868B] mb-4">
                  Try clearing your filters or searching with different terms.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 rounded-full bg-[#1D1D1F] text-white text-xs font-semibold"
                >
                  {t('resetFilters')}
                </button>
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex bg-[#1D1D1F]/40 backdrop-blur-xs lg:hidden">
          <div className="w-3/4 max-w-xs bg-white h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <h3 className="font-bold text-sm text-[#1D1D1F]">
                  {t('filterBy')}
                </h3>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X className="w-4 h-4 text-[#86868B]" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#86868B] mb-2 uppercase">
                  {t('animalType')}
                </label>
                <div className="space-y-1">
                  {animalOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilterAnimal(opt.value)}
                      className={`w-full text-left px-3 py-1.5 rounded-full text-xs font-medium ${
                        filterAnimal === opt.value
                          ? 'bg-[#1D1D1F] text-white'
                          : 'text-[#1D1D1F] hover:bg-[#F5F5F7]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06]">
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full min-h-[44px] py-3 bg-[#1D1D1F] text-white font-semibold text-xs sm:text-sm rounded-full shadow-xs active:scale-98"
              >
                {language === 'bn' ? `ফিল্টার প্রয়োগ করুন (${filteredProducts.length}টি)` : `Apply Filters (${filteredProducts.length})`}
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileFiltersOpen(false)} />
        </div>
      )}
    </div>
  );
};
