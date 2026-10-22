export type Language = 'bn' | 'en';

export type AnimalCategory = 
  | 'all'
  | 'cats' 
  | 'dogs' 
  | 'birds' 
  | 'fish' 
  | 'small-pets' 
  | 'farm-animals';

export type ProductType = 
  | 'all'
  | 'dry-food' 
  | 'wet-food' 
  | 'treats' 
  | 'healthcare' 
  | 'accessories' 
  | 'farm-feed';

export interface PackageSizeOption {
  size: string;
  price: number;
  originalPrice?: number;
  stockCount: number;
  sku?: string;
}

export interface Product {
  id: string;
  sku?: string;
  name: string;
  nameBn: string;
  brand: string;
  animalCategory: 'cats' | 'dogs' | 'birds' | 'fish' | 'small-pets' | 'farm-animals';
  productType: 'dry-food' | 'wet-food' | 'treats' | 'healthcare' | 'accessories' | 'farm-feed';
  description: string;
  descriptionBn: string;
  rating: number;
  reviewCount: number;
  image: string;
  imageGallery?: string[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  isActive?: boolean;
  packageSizes: PackageSizeOption[];
  defaultSize: string;
  price: number;
  originalPrice?: number;
  stockCount: number;
  ageGroup: 'Kitten/Puppy' | 'Adult' | 'Senior' | 'All Life Stages' | 'Grower/Finisher';
  ageGroupBn: string;
  ingredientsDemo: string;
  ingredientsDemoBn: string;
  nutritionDemo: {
    protein: string;
    fat: string;
    fiber: string;
    moisture: string;
  };
  feedingGuidanceDemo: string;
  feedingGuidanceDemoBn: string;
  storageGuidance: string;
  storageGuidanceBn: string;
  batchExpiry: string;
  origin: string;
}

export interface StoreSettings {
  currencySymbol: string;
  currencyCode: string;
  freeShippingThreshold: number;
  shippingInsideDhaka: number;
  shippingOutsideDhaka: number;
  supportHotline: string;
  supportEmail: string;
  officeAddress: string;
}


export interface CartItem {
  product: Product;
  selectedSize: string;
  unitPrice: number;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  division: string;
  district: string;
  area: string;
  address: string;
  deliveryNotes?: string;
}

export type PaymentMethod = 'cod' | 'bkash' | 'nagad';

export type OrderStatus = 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface Order {
  id: string;
  date: string;
  customer: CustomerDetails;
  items: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  couponCode?: string;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Pending Verification' | 'Paid (Demo)' | 'Cash on Delivery';
  orderStatus: OrderStatus;
}

export interface Review {
  id: string;
  author: string;
  petName: string;
  petType: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  commentBn: string;
  verifiedBuyer: boolean;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number; // e.g. 10 for 10%, or 150 for ৳150
  minSpend: number;
  description: string;
  descriptionBn: string;
}

export interface BulkInquiry {
  id: string;
  date: string;
  fullName: string;
  phone: string;
  district: string;
  feedType: string;
  tonnageOrBags: string;
  notes: string;
  status: 'Received' | 'Contacted';
}
