import { Product, Review, Coupon, StoreSettings } from '../types';

export const STORE_SETTINGS: StoreSettings = {
  currencySymbol: '৳',
  currencyCode: 'BDT',
  freeShippingThreshold: 2500,
  shippingInsideDhaka: 70,
  shippingOutsideDhaka: 130,
  supportHotline: '01800-PETPALACE',
  supportEmail: 'store@petpalace-bd.demo',
  officeAddress: 'Banani, Dhaka-1213, Bangladesh'
};

export const HERO_BANNER_IMAGE = '/src/assets/images/hero_pet_palace_1792590998117.jpg';
export const CAT_SALMON_IMAGE = '/src/assets/images/cat_nutrition_salmon_1792590998960.jpg';
export const DOG_KIBBLE_IMAGE = '/src/assets/images/dog_royal_kibble_1792590999978.jpg';
export const FARM_FEED_IMAGE = '/src/assets/images/farm_livestock_feed_1792590999553.jpg';

export const CAT_AVATAR_IMAGE = '/src/assets/images/category_cat_real_1792656879141.jpg';
export const DOG_AVATAR_IMAGE = '/src/assets/images/category_dog_real_1792656895840.jpg';
export const BIRD_AVATAR_IMAGE = '/src/assets/images/category_bird_real_1792656913115.jpg';
export const FISH_AVATAR_IMAGE = '/src/assets/images/category_fish_real_1792656931865.jpg';
export const RABBIT_AVATAR_IMAGE = '/src/assets/images/category_rabbit_real_1792656945985.jpg';
export const FARM_COW_AVATAR_IMAGE = '/src/assets/images/category_farm_cow_real_1792656962096.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  // CAT PRODUCTS
  {
    id: 'prod-cat-01',
    sku: 'PP-CAT-001',
    isActive: true,
    name: 'Pet Palace Royal Ocean Salmon & Herbs Wet Pouch',
    nameBn: 'পেট প্যালেস রয়্যাল ওশান স্যালমন ও হার্বস ওয়েট পাউচ',
    brand: 'Pet Palace Signature',
    animalCategory: 'cats',
    productType: 'wet-food',
    description: 'Grain-free wet cat food crafted with Atlantic salmon chunks in natural broth, rosemary extract, and essential taurine for adult cats.',
    descriptionBn: 'গ্রেইন-ফ্রি ওয়েট ক্যাট ফুড যাতে রয়েছে খাঁটি স্যালমন মাছের টুকরো, পুষ্টিকর ভেষজ রস ও অপরিহার্য টরিন যা চোখের জ্যোতি ও হার্ট সুস্থ রাখে।',
    rating: 4.9,
    reviewCount: 38,
    image: CAT_SALMON_IMAGE,
    isBestSeller: true,
    isFeatured: true,
    isNew: true,
    packageSizes: [
      { size: '100g Pouch', price: 160, originalPrice: 180, stockCount: 140 },
      { size: 'Pack of 6 (6x100g)', price: 920, originalPrice: 1080, stockCount: 45 },
      { size: 'Box of 12 (12x100g)', price: 1750, originalPrice: 2160, stockCount: 20 }
    ],
    defaultSize: '100g Pouch',
    price: 160,
    originalPrice: 180,
    stockCount: 140,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক',
    ingredientsDemo: 'De-boned Salmon (60%), Salmon Broth, Sweet Potatoes, Cranberries, Rosemary Extract, Taurine, Vitamin E Supplement.',
    ingredientsDemoBn: 'কাটাবিহীন স্যালমন (৬০%), স্যালমন ব্রথ, মিষ্টি আলু, ক্র্যানবেরি, রোজমেরি নির্যাস, টরিন, ভিটামিন ই।',
    nutritionDemo: {
      protein: '11.5% Min',
      fat: '4.8% Min',
      fiber: '0.8% Max',
      moisture: '80.0% Max'
    },
    feedingGuidanceDemo: 'Feed 2-3 pouches daily per 4kg cat body weight, split into 2 meals.',
    feedingGuidanceDemoBn: '৪ কেজি ওজনের বিড়ালের জন্য প্রতিদিন ২-৩ পাউচ, দিনে ২ বার বিভক্ত করে দিন।',
    storageGuidance: 'Store in a cool dry place. Once opened, refrigerate and consume within 48 hours.',
    storageGuidanceBn: 'শুকনো ও ঠান্ডা স্থানে রাখুন। মুখ খোলার পর ফ্রিজে রাখুন এবং ৪৮ ঘণ্টার মধ্যে ব্যবহার করুন।',
    batchExpiry: 'EXP: 09/2027 (Batch #PP-CAT-904)',
    origin: 'Locally Packed (Ingredients Sourced from Norway)'
  },
  {
    id: 'prod-cat-02',
    name: 'Royal Paws Mother & Babycat Growth Formula',
    nameBn: 'রয়েল পজ মাদার ও বেবিক্যাট গ্রোথ ফর্মুলা',
    brand: 'Royal Paws',
    animalCategory: 'cats',
    productType: 'dry-food',
    description: 'Ultra-digestible micro-kibble specially formulated for pregnant/lactating queens and kittens aged 1 to 4 months.',
    descriptionBn: 'সহজে হজমযোগ্য ক্ষুদ্র কিবল যা গর্ভবতী বিড়াল এবং ১ থেকে ৪ মাস বয়সী বিড়ালছানাদের দ্রুত বৃদ্ধি ও রোগ প্রতিরোধে সহায়ক।',
    rating: 4.8,
    reviewCount: 52,
    image: CAT_SALMON_IMAGE,
    isBestSeller: true,
    isFeatured: true,
    packageSizes: [
      { size: '400g', price: 490, originalPrice: 550, stockCount: 65 },
      { size: '1.5kg', price: 1650, originalPrice: 1850, stockCount: 30 },
      { size: '3kg', price: 3100, originalPrice: 3450, stockCount: 15 }
    ],
    defaultSize: '1.5kg',
    price: 1650,
    originalPrice: 1850,
    stockCount: 30,
    ageGroup: 'Kitten/Puppy',
    ageGroupBn: 'বিড়ালছানা (১-৪ মাস)',
    ingredientsDemo: 'Dehydrated poultry protein, brewers rice, animal fats, maize flour, vegetable protein isolate, beet pulp, fish oil.',
    ingredientsDemoBn: 'ডিহাইড্রেটেড পোল্ট্রি প্রোটিন, চালের গুঁড়ো, প্রাণিজ চর্বি, উদ্ভিজ্জ প্রোটিন, ফিশ অয়েল।',
    nutritionDemo: {
      protein: '34.0% Min',
      fat: '25.0% Min',
      fiber: '1.9% Max',
      moisture: '6.5% Max'
    },
    feedingGuidanceDemo: 'For 2-3 month kittens, offer 45g to 60g daily moistened with warm water.',
    feedingGuidanceDemoBn: '২-৩ মাসের বিড়ালছানার জন্য দৈনিক ৪৫-৬০ গ্রাম কিবল হালকা কুসুম গরম পানিতে ভিজিয়ে পরিবেশন করুন।',
    storageGuidance: 'Seal bag tightly with zip-lock and store away from direct sunlight.',
    storageGuidanceBn: 'জিপ-লক বায়ুরোধী করে আঁটকে রাখুন এবং সরাসরি রোদ থেকে দূরে রাখুন।',
    batchExpiry: 'EXP: 11/2027 (Batch #RP-BC-112)',
    origin: 'Thailand (Imported)'
  },
  {
    id: 'prod-cat-03',
    name: 'Pet Palace Activated Carbon Bentonite Cat Litter',
    nameBn: 'পেট প্যালেস অ্যাক্টিভেটেড কার্বন বেন্টোনাইট ক্যাট লিটার',
    brand: 'Pet Palace Signature',
    animalCategory: 'cats',
    productType: 'accessories',
    description: 'Instant clump 99.9% dust-free sodium bentonite cat litter with activated carbon granules for superior odor neutralization.',
    descriptionBn: '৯৯.৯% ধুলামুক্ত বেন্টোনাইট ক্যাট লিটার যাতে রয়েছে অ্যাক্টিভেটেড কার্বন যা অপ্রীতিকর গন্ধ দ্রুত দূর করে শক্ত দলা তৈরি করে।',
    rating: 4.9,
    reviewCount: 78,
    image: CAT_SALMON_IMAGE,
    isBestSeller: true,
    packageSizes: [
      { size: '5kg Bag', price: 480, originalPrice: 550, stockCount: 120 },
      { size: '10kg Bag', price: 890, originalPrice: 1050, stockCount: 80 }
    ],
    defaultSize: '5kg Bag',
    price: 480,
    originalPrice: 550,
    stockCount: 120,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের জন্য',
    ingredientsDemo: '100% Natural Sodium Bentonite Clay, Activated Charcoal Crushed Pellets, Natural Deodorizing Essence.',
    ingredientsDemoBn: '১০০% প্রাকৃতিক সোডিয়াম বেন্টোনাইট মাটি, অ্যাক্টিভেটেড কাঠকয়লা দানা।',
    nutritionDemo: {
      protein: 'N/A',
      fat: 'N/A',
      fiber: 'N/A',
      moisture: 'Clump Speed: < 3s'
    },
    feedingGuidanceDemo: 'Non-edible hygiene product. Fill clean litter tray to 7cm depth and scoop clumps daily.',
    feedingGuidanceDemoBn: 'খাদ্য নয়। লিটার ট্রেতে ৭ সেমি পুরু করে ঢালুন এবং প্রতিদিন ব্যবহৃত শক্ত দলাগুলো ফেলে দিন।',
    storageGuidance: 'Store in dry indoor area away from humidity.',
    storageGuidanceBn: 'আর্দ্রতামুক্ত শুকনো স্থানে রাখুন।',
    batchExpiry: 'EXP: Indefinite when dry',
    origin: 'Turkey'
  },
  {
    id: 'prod-cat-04',
    name: 'FelineVital Hairball Control Crunchy Treats',
    nameBn: 'ফেলাইনভাইটাল হেয়ারবল কন্ট্রোল ক্রাঞ্চি ট্রিটস',
    brand: 'FelineVital',
    animalCategory: 'cats',
    productType: 'treats',
    description: 'Dual-textured crunchy bites filled with prebiotic fiber and malt extract to naturally pass hairballs.',
    descriptionBn: 'সুস্বাদু ক্রাঞ্চি বাইটস যাতে আছে প্রিবায়োটিক ফাইবার ও মল্ট নির্যাস যা বিড়ালের পেটের হেয়ারবল স্বাভাবিকভাবে নিষ্কাশনে সাহায্য করে।',
    rating: 4.7,
    reviewCount: 29,
    image: CAT_SALMON_IMAGE,
    packageSizes: [
      { size: '60g Pouch', price: 290, originalPrice: 330, stockCount: 55 },
      { size: '3x60g Bundle', price: 810, originalPrice: 990, stockCount: 22 }
    ],
    defaultSize: '60g Pouch',
    price: 290,
    originalPrice: 330,
    stockCount: 55,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক',
    ingredientsDemo: 'Chicken meal, whole wheat, barley grass, malt extract, vegetable cellulose, natural chicken liver aroma.',
    ingredientsDemoBn: 'চিকেন মিল, বার্লি গ্রাস, মল্ট নির্যাস, ফাইবার ও প্রাকৃতিক স্বাদ।',
    nutritionDemo: {
      protein: '28.0% Min',
      fat: '14.0% Min',
      fiber: '7.5% Max',
      moisture: '10.0% Max'
    },
    feedingGuidanceDemo: 'Give up to 10 treats daily as a training reward or hairball maintenance.',
    feedingGuidanceDemoBn: 'দৈনিক সর্বোচ্চ ১০টি ট্রিট দিতে পারেন। সাথে পর্যাপ্ত বিশুদ্ধ পানি রাখুন।',
    storageGuidance: 'Keep pouch resealed.',
    storageGuidanceBn: 'পাউচ সিল করে রাখুন।',
    batchExpiry: 'EXP: 05/2027 (Batch #FV-HB-441)',
    origin: 'Germany'
  },

  // DOG PRODUCTS
  {
    id: 'prod-dog-01',
    name: 'Pet Palace Artisan Roast Chicken & Sweet Potato Dog Kibble',
    nameBn: 'পেট প্যালেস রোস্ট চিকেন ও মিষ্টি আলু ডগ কিবল',
    brand: 'Pet Palace Signature',
    animalCategory: 'dogs',
    productType: 'dry-food',
    description: 'Small-batch oven baked dog kibble prepared with free-range roasted chicken, sweet potato, and glucosamine for active breeds.',
    descriptionBn: 'ছোট ব্যাচে যত্নসহকারে তৈরি খাঁটি রোস্টেড চিকেন ও মিষ্টি আলুর গ্রেইন-ফ্রি কিবল, যাতে রয়েছে গ্লুকোসামিন যা কুকুরের জয়েন্ট ও হাড় মজবুত রাখে।',
    rating: 4.9,
    reviewCount: 44,
    image: DOG_KIBBLE_IMAGE,
    isBestSeller: true,
    isFeatured: true,
    packageSizes: [
      { size: '1.2kg Bag', price: 1350, originalPrice: 1550, stockCount: 40 },
      { size: '3kg Bag', price: 3100, originalPrice: 3500, stockCount: 25 },
      { size: '10kg Breeder Sack', price: 9400, originalPrice: 10500, stockCount: 12 }
    ],
    defaultSize: '3kg Bag',
    price: 3100,
    originalPrice: 3500,
    stockCount: 25,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক কুকুর',
    ingredientsDemo: 'Farm Chicken (38%), Sweet Potato, Brown Rice, Flaxseed, Salmon Oil, Glucosamine, Chondroitin, Carrots, Blueberries.',
    ingredientsDemoBn: 'ফার্ম চিকেন (৩৮%), মিষ্টি আলু, ব্রাউন রাইস, স্যামন তেল, গ্লুকোসামিন, গাজর ও ব্লুবেরি।',
    nutritionDemo: {
      protein: '26.0% Min',
      fat: '15.0% Min',
      fiber: '3.5% Max',
      moisture: '9.0% Max'
    },
    feedingGuidanceDemo: 'Medium dog (15-25kg): 200g-300g daily split across 2 meals.',
    feedingGuidanceDemoBn: 'মাঝারি আকারের কুকুরের জন্য দৈনিক ২০০-৩০০ গ্রাম কিবল দিন।',
    storageGuidance: 'Store in airtight dog food dispenser or dry sealed bag.',
    storageGuidanceBn: 'বায়ুরোধী বক্সে অথবা সিল করা ব্যাগে সংরক্ষণ করুন।',
    batchExpiry: 'EXP: 08/2027 (Batch #PP-DK-812)',
    origin: 'Australia / Packed in BD'
  },
  {
    id: 'prod-dog-02',
    name: 'NutraCanine Puppy Pro Joint & Bone Starter',
    nameBn: 'নিউট্রাক্যানাইন পাপ্পি প্রো জয়েন্ট ও বোন স্টার্টার',
    brand: 'NutraCanine',
    animalCategory: 'dogs',
    productType: 'dry-food',
    description: 'Enriched with DHA from cold-water fish oil and calcium-phosphorus ratio tailored for rapid bone development.',
    descriptionBn: 'ডিএইচএ ও ব্যালেন্সড ক্যালসিয়াম-ফসফরাস সমৃদ্ধ উন্নত পাপ্পি খাদ্য যা বুদ্ধি ও হাড়ের দ্রুত বর্ধনে সহায়তা করে।',
    rating: 4.8,
    reviewCount: 31,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: '1kg', price: 950, originalPrice: 1100, stockCount: 35 },
      { size: '3kg', price: 2650, originalPrice: 2950, stockCount: 18 }
    ],
    defaultSize: '1kg',
    price: 950,
    originalPrice: 1100,
    stockCount: 35,
    ageGroup: 'Kitten/Puppy',
    ageGroupBn: 'কুকুরছানা (২-১২ মাস)',
    ingredientsDemo: 'Deboned Lamb, Whole Oat Groats, Egg Product, Dried Beet Pulp, Fish Oil, Zinc Proteinate, Folic Acid.',
    ingredientsDemoBn: 'ল্যাম্ব মাংস, ওটস, ডিমের প্রোটিন, ফিশ অয়েল ও মাল্টি-ভিটামিন।',
    nutritionDemo: {
      protein: '29.0% Min',
      fat: '17.0% Min',
      fiber: '3.0% Max',
      moisture: '10.0% Max'
    },
    feedingGuidanceDemo: 'Feed 3 times daily following weight chart on pack.',
    feedingGuidanceDemoBn: 'প্যাকেটের চার্ট অনুযায়ী দিনে ৩ বার খাবার পরিবেশন করুন।',
    storageGuidance: 'Store below 28°C in a dry place.',
    storageGuidanceBn: '২৮ ডিগ্রি সেলসিয়াসের নিচে রাখুন।',
    batchExpiry: 'EXP: 10/2027 (Batch #NC-PP-629)',
    origin: 'New Zealand'
  },
  {
    id: 'prod-dog-03',
    name: 'CanineCare Dental Enzymatic Chew Sticks',
    nameBn: 'ক্যানাইনকেয়ার ডেন্টাল এনজাইমেটিক চিউ স্টিকস',
    brand: 'NutraCanine',
    animalCategory: 'dogs',
    productType: 'treats',
    description: 'Veterinary approved geometric ridged dental sticks with chlorophyll and zinc for fresh breath and tartar reduction.',
    descriptionBn: 'দাঁতের প্লাক ও দুর্গন্ধ দূর করতে সাহায্য করে এমন কার্যকরী ডেন্টাল স্টিকস যা মাড়ি সুস্থ রাখে।',
    rating: 4.6,
    reviewCount: 22,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: 'Pack of 7 (Small/Med)', price: 420, originalPrice: 480, stockCount: 60 },
      { size: 'Pack of 14 (Large)', price: 780, originalPrice: 900, stockCount: 40 }
    ],
    defaultSize: 'Pack of 7 (Small/Med)',
    price: 420,
    originalPrice: 480,
    stockCount: 60,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক',
    ingredientsDemo: 'Rice flour, potato starch, vegetable glycerin, gelatin, parsley powder, green tea extract, zinc sulphate.',
    ingredientsDemoBn: 'রাইস ফ্লাওয়ার, আলুর স্টার্চ, পার্সলে পাতা ও গ্রিন টি এক্সট্রাক্ট।',
    nutritionDemo: {
      protein: '12.0% Min',
      fat: '2.0% Min',
      fiber: '2.5% Max',
      moisture: '14.0% Max'
    },
    feedingGuidanceDemo: 'Give one dental stick daily after meals.',
    feedingGuidanceDemoBn: 'খাবারের পর প্রতিদিন একটি করে স্টিক চিবানোর জন্য দিন।',
    storageGuidance: 'Keep zip closed to retain chewy texture.',
    storageGuidanceBn: 'জিপ বন্ধ রাখুন যাতে নরম থাকে।',
    batchExpiry: 'EXP: 07/2027 (Batch #CC-DEN-103)',
    origin: 'Netherlands'
  },
  {
    id: 'prod-dog-04',
    name: 'ProGroom Oatmeal & Aloe Soothing Pet Shampoo',
    nameBn: 'প্রোগ্রুম ওটমিল ও অ্যালোভেরা সুদিং পেট শ্যাম্পু',
    brand: 'Pet Palace Signature',
    animalCategory: 'dogs',
    productType: 'healthcare',
    description: 'Hypoallergenic pH-balanced soothing shampoo formulated with organic colloidal oatmeal and aloe vera for itchy, dry pet skin.',
    descriptionBn: 'হাইপোঅ্যালার্জেনিক ও পিএইচ-ব্যালান্সড ওটমিল ও ঘৃতকুমারী শ্যাম্পু যা ত্বকের অ্যালার্জি ও চুলকানি কমায়।',
    rating: 4.8,
    reviewCount: 36,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: '250ml Bottle', price: 490, originalPrice: 560, stockCount: 48 },
      { size: '500ml Salon Pump', price: 850, originalPrice: 990, stockCount: 24 }
    ],
    defaultSize: '250ml Bottle',
    price: 490,
    originalPrice: 560,
    stockCount: 48,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের কুকুর ও বিড়াল',
    ingredientsDemo: 'Deionized water, Colloidal Oatmeal, Aloe Barbadensis Leaf Juice, Coconut derived surfactants, Chamomile extract.',
    ingredientsDemoBn: 'পরিশোধিত পানি, ওটমিল পাউডার, অ্যালোভেরা জুস, নারকেলজাত ক্লিনজার।',
    nutritionDemo: {
      protein: 'N/A',
      fat: 'N/A',
      fiber: 'N/A',
      moisture: 'pH 6.8 balanced'
    },
    feedingGuidanceDemo: 'External topical use only. Lather gently and rinse thoroughly.',
    feedingGuidanceDemoBn: 'শুধুমাত্র বাহ্যিক ব্যবহারের জন্য। হালকা করে ফেনা তৈরি করে ভালো করে ধুয়ে ফেলুন।',
    storageGuidance: 'Store at room temperature away from eyes.',
    storageGuidanceBn: 'ঘরের স্বাভাবিক তাপমাত্রায় রাখুন।',
    batchExpiry: 'EXP: 04/2028 (Batch #PG-SH-205)',
    origin: 'United Kingdom'
  },

  // FARM & LIVESTOCK FEED (Extremely important for BD agriculture)
  {
    id: 'prod-farm-01',
    name: 'Verdant Fields Ultra-Yield Dairy Cattle Feed Pellets',
    nameBn: 'ভার্ড্যান্ট ফিল্ডস আল্ট্রা-ইল্ড ডেইরি ক্যাটেল ফিড পেলেটি',
    brand: 'Verdant Fields Agro',
    animalCategory: 'farm-animals',
    productType: 'farm-feed',
    description: 'Scientifically balanced 20% crude protein high-energy dairy pellet designed to boost daily milk fat percentage and lactation yield in high-yielding cows.',
    descriptionBn: 'উন্নত ডেইরি গাভীর জন্য বৈজ্ঞানিক ফর্মুলার ২০% ক্রুড প্রোটিন সমৃদ্ধ এনার্জি ফিড যা দুধের ফ্যাট ও দৈনিক ফলন উল্লেখযোগ্যভাবে বৃদ্ধি করে।',
    rating: 4.9,
    reviewCount: 65,
    image: FARM_FEED_IMAGE,
    isBestSeller: true,
    isFeatured: true,
    packageSizes: [
      { size: '25kg Woven Sack', price: 1650, originalPrice: 1800, stockCount: 85 },
      { size: '50kg Commercial Sack', price: 3150, originalPrice: 3450, stockCount: 60 }
    ],
    defaultSize: '50kg Commercial Sack',
    price: 3150,
    originalPrice: 3450,
    stockCount: 60,
    ageGroup: 'Adult',
    ageGroupBn: 'দুগ্ধবতী গাভী',
    ingredientsDemo: 'Soya meal, Roasted Maize, Wheat Bran, Mustard Oil Cake, De-Oiled Rice Bran, Dicalcium Phosphate, Bypass Fat, Trace Mineral Premix.',
    ingredientsDemoBn: 'সয়াবিন মিল, ভুট্টা ভাঙা, গমের ভুসি, সরিষার খৈল, রাইস পলিশ, ডিসিপি ও ভিটামিন-মিনারেল প্রিমিক্স।',
    nutritionDemo: {
      protein: '20.0% Min',
      fat: '4.5% Min',
      fiber: '8.0% Max',
      moisture: '11.0% Max'
    },
    feedingGuidanceDemo: 'Feed 1kg of pellets for every 2.5-3 liters of daily milk produced, along with green fodder and fresh water.',
    feedingGuidanceDemoBn: 'প্রতি ২.৫-৩ লিটার দুধের জন্য ১ কেজি ফিড দিন, সাথে পর্যাপ্ত সবুজ ঘাস ও বিশুদ্ধ পানি রাখুন।',
    storageGuidance: 'Keep in ventilated dry storehouse on wooden pallets.',
    storageGuidanceBn: 'বায়ু চলাচলযুক্ত শুকনো গুদামে কাঠের পাটাতনের উপর রাখুন।',
    batchExpiry: 'EXP: 06/2027 (Batch #VF-DC-509)',
    origin: 'Bangladesh (Gazipur Agro Plant)'
  },
  {
    id: 'prod-farm-02',
    name: 'Bengal Agro Broiler Starter Super Feed Crumbs',
    nameBn: 'বেঙ্গল এগ্রো ব্রয়লার স্টার্টার সুপার ফিড ক্রাম্বস',
    brand: 'Bengal Agro Pure',
    animalCategory: 'farm-animals',
    productType: 'farm-feed',
    description: 'High-density crumble feed for day 1 to day 14 broiler chicks. Formulated with amino acids, probiotics, and essential enzymes for low FCR.',
    descriptionBn: '১ থেকে ১৪ দিন বয়সী ব্রয়লার বাচ্চার জন্য উচ্চ প্রোটিন ও এনজাইম সমৃদ্ধ ক্রাম্বস ফিড যা এফসিআর উন্নত করে এবং মৃত্যুহার কমায়।',
    rating: 4.8,
    reviewCount: 42,
    image: FARM_FEED_IMAGE,
    packageSizes: [
      { size: '25kg Sack', price: 1850, originalPrice: 2000, stockCount: 70 },
      { size: '50kg Sack', price: 3550, originalPrice: 3850, stockCount: 50 }
    ],
    defaultSize: '50kg Sack',
    price: 3550,
    originalPrice: 3850,
    stockCount: 50,
    ageGroup: 'Kitten/Puppy',
    ageGroupBn: '১-১৪ দিনের বাচ্চা',
    ingredientsDemo: 'Yellow Corn, Dehulled Soybean Meal, Fish Meal (Steam dried), Soybean Oil, Lysine, DL-Methionine, Phytase Enzyme.',
    ingredientsDemoBn: 'হলুদ ভুট্টা, সয়াবিন মিল, স্টিম ফিশ মিল, লাইসিন, মেথিওনিন ও বিশেষ এনজাইম।',
    nutritionDemo: {
      protein: '22.5% Min',
      fat: '4.2% Min',
      fiber: '3.5% Max',
      moisture: '11.5% Max'
    },
    feedingGuidanceDemo: 'Ad-libitum clean feeding during initial 14 days brooding period.',
    feedingGuidanceDemoBn: 'বাচ্চার ব্রুডিং সময়ে পর্যাপ্ত আলো ও পরিষ্কার পানির সাথে মুক্তভাবে খেতে দিন।',
    storageGuidance: 'Protect from rodents and moisture.',
    storageGuidanceBn: 'আর্দ্রতা ও ইঁদুর থেকে সুরক্ষিত রাখুন।',
    batchExpiry: 'EXP: 07/2027 (Batch #BA-BS-771)',
    origin: 'Bangladesh'
  },
  {
    id: 'prod-farm-03',
    name: 'Verdant Fields Black Bengal & Boer Goat Fattening Pellets',
    nameBn: 'ভার্ড্যান্ট ফিল্ডস ব্ল্যাক বেঙ্গল ও বোয়ার ছাগল মোটাতাজাকরণ পেলেটি',
    brand: 'Verdant Fields Agro',
    animalCategory: 'farm-animals',
    productType: 'farm-feed',
    description: 'Digestible pelletized feed fortified with zinc, selenium, and bypass protein for healthy rumen growth and rapid muscle gain in goats.',
    descriptionBn: 'ব্ল্যাক বেঙ্গল ও বোয়ার জাতের খাসি এবং ছাগলের সুষম শারীরিক বৃদ্ধি ও পেশি গঠনের জন্য জিঙ্ক ও সেলেনিয়াম সমৃদ্ধ পিলেট ফিড।',
    rating: 4.7,
    reviewCount: 39,
    image: FARM_FEED_IMAGE,
    packageSizes: [
      { size: '20kg Sack', price: 1380, originalPrice: 1550, stockCount: 55 },
      { size: '40kg Sack', price: 2600, originalPrice: 2900, stockCount: 35 }
    ],
    defaultSize: '20kg Sack',
    price: 1380,
    originalPrice: 1550,
    stockCount: 55,
    ageGroup: 'Grower/Finisher',
    ageGroupBn: 'বাড়ন্ত ও মোটাতাজাকরণ',
    ingredientsDemo: 'Corn meal, Molasses, De-oiled Mustard cake, Wheat Bran, Salt, Organic Selenium, Rumen buffer.',
    ingredientsDemoBn: 'ভুট্টার গুঁড়ো, চিটাগুড়, সরিষার খৈল, গমের ভুসি, লবণ ও অর্গানিক খনিজ।',
    nutritionDemo: {
      protein: '16.5% Min',
      fat: '3.2% Min',
      fiber: '12.0% Max',
      moisture: '10.5% Max'
    },
    feedingGuidanceDemo: 'Feed 300g-500g per goat daily alongside chopped straw and grass.',
    feedingGuidanceDemoBn: 'প্রতিটি ছাগলকে দৈনিক ৩০০-৫০০ গ্রাম দিন এবং পর্যাপ্ত আঁশযুক্ত ঘাস খাওয়ান।',
    storageGuidance: 'Dry warehouse storage.',
    storageGuidanceBn: 'শুকনো গুদামে রাখুন।',
    batchExpiry: 'EXP: 08/2027 (Batch #VF-GT-301)',
    origin: 'Bangladesh'
  },
  {
    id: 'prod-farm-04',
    name: 'AquaVital Floating Fish Farming Feed (Carp & Tilapia)',
    nameBn: 'অ্যাকোয়াভাইটাল ভাসমান মাছের বাণিজ্যিক ফিড (কার্প ও তেলাপিয়া)',
    brand: 'AquaVital Commercial',
    animalCategory: 'farm-animals',
    productType: 'farm-feed',
    description: 'Extruded water-stable floating pellets (2mm/3mm) with 28% protein for commercial pond culture of Pangas, Tilapia, and Rohu carps.',
    descriptionBn: 'পানিতে সহজে ভাসমান ২৮% প্রোটিন সমৃদ্ধ মাছের ফিড যা পানির গুণমান ঠিক রাখে এবং রুই, কাতলা ও তেলাপিয়া মাছের দ্রুত বৃদ্ধি ঘটায়।',
    rating: 4.8,
    reviewCount: 53,
    image: FARM_FEED_IMAGE,
    packageSizes: [
      { size: '20kg Bag', price: 1450, originalPrice: 1600, stockCount: 75 },
      { size: '40kg Bag (2x20kg)', price: 2800, originalPrice: 3200, stockCount: 40 }
    ],
    defaultSize: '20kg Bag',
    price: 1450,
    originalPrice: 1600,
    stockCount: 75,
    ageGroup: 'Grower/Finisher',
    ageGroupBn: 'বাড়ন্ত মাছ',
    ingredientsDemo: 'High grade fish meal, Rice polish, Soybean meal, Wheat flour, Spirulina, Vitamin & Mineral Aquaculture Premix.',
    ingredientsDemoBn: 'উন্নত ফিশ মিল, রাইস পলিশ, সয়া মিল, গমের আটা, স্পিরুলিনা ও মিনারেল।',
    nutritionDemo: {
      protein: '28.0% Min',
      fat: '5.0% Min',
      fiber: '6.0% Max',
      moisture: '11.0% Max'
    },
    feedingGuidanceDemo: 'Broadcast over pond surface twice daily at 3-5% of total biomass weight.',
    feedingGuidanceDemoBn: 'পুকুরের মাছের মোট ওজনের ৩-৫% হারে দিনে ২ বার পানিতে ছড়িয়ে দিন।',
    storageGuidance: 'Protect from moisture to prevent mold.',
    storageGuidanceBn: 'স্যাঁতসেঁতে পরিবেশ থেকে সম্পূর্ণ দূরে রাখুন।',
    batchExpiry: 'EXP: 05/2027 (Batch #AV-FF-918)',
    origin: 'Mymensingh Feed Mills'
  },

  // BIRDS
  {
    id: 'prod-bird-01',
    name: 'NatureWing Sun-Ripened Budgie & Cockatiel Seed Mix',
    nameBn: 'নেচারউইং বাজেরিগার ও ককাটেল সিড মিক্স',
    brand: 'NatureWing Aviary',
    animalCategory: 'birds',
    productType: 'dry-food',
    description: 'Triple-cleaned gourmet blend of yellow millet, red millet, canary grass seed, oat groats, and dried fruit flakes.',
    descriptionBn: 'ধূলা ও ময়লামুক্ত হলুদ মিলেটি, লাল মিলেটি, ক্যানারি সিড ও ফলের কুচি সমৃদ্ধ সুষম পুষ্টিকর পাখির খাবার।',
    rating: 4.9,
    reviewCount: 47,
    image: DOG_KIBBLE_IMAGE,
    isBestSeller: true,
    packageSizes: [
      { size: '500g Pouch', price: 240, originalPrice: 280, stockCount: 80 },
      { size: '1kg Bag', price: 440, originalPrice: 500, stockCount: 50 },
      { size: '5kg Value Sack', price: 2050, originalPrice: 2400, stockCount: 20 }
    ],
    defaultSize: '1kg Bag',
    price: 440,
    originalPrice: 500,
    stockCount: 50,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের পাখি',
    ingredientsDemo: 'Proso Yellow Millet, Red Millet, Canary Seed, Naked Oats, Safflower Seed, Niger Seed, Calcium Carbonate.',
    ingredientsDemoBn: 'হলুদ চিনা, লাল চিনা, গুজি তিল, ক্যানারি সিড ও সূর্যমুখী বীজ।',
    nutritionDemo: {
      protein: '13.2% Min',
      fat: '6.4% Min',
      fiber: '8.5% Max',
      moisture: '10.0% Max'
    },
    feedingGuidanceDemo: 'Provide 1-2 tablespoons per bird daily and discard empty husks.',
    feedingGuidanceDemoBn: 'প্রতি পাখির জন্য দৈনিক ১-২ চামচ দিন এবং প্রতিদিন খোসা পরিষ্কার করুন।',
    storageGuidance: 'Keep in cool dry airtight container.',
    storageGuidanceBn: 'বায়ুরোধী পাত্রে রাখুন।',
    batchExpiry: 'EXP: 10/2027 (Batch #NW-BG-411)',
    origin: 'Australia / Packed in BD'
  },
  {
    id: 'prod-bird-02',
    name: 'NatureWing Calcium Cuttlefish Bone & Mineral Block',
    nameBn: 'নেচারউইং ক্যালসিয়াম ক্যাটলবোন ও মিনারেল ব্লক',
    brand: 'NatureWing Aviary',
    animalCategory: 'birds',
    productType: 'healthcare',
    description: 'Natural ocean cuttlebone with stainless steel cage clip for beak conditioning and eggshell calcium replenishment.',
    descriptionBn: 'প্রাকৃতিক সমুদ্রের ক্যাটলবোন ও মিনারেল যা পাখির ঠোঁট ধারালো রাখে এবং ডিম উৎপাদনের প্রয়োজনীয় ক্যালসিয়াম যোগায়।',
    rating: 4.8,
    reviewCount: 26,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: '2 Pcs Blister Pack', price: 180, originalPrice: 220, stockCount: 90 },
      { size: 'Pack of 5 Pcs', price: 390, originalPrice: 480, stockCount: 45 }
    ],
    defaultSize: '2 Pcs Blister Pack',
    price: 180,
    originalPrice: 220,
    stockCount: 90,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক',
    ingredientsDemo: '100% Sun-Dried Marine Cuttlefish Bone, Ground Oyster Shell Calcium, Trace Iodine.',
    ingredientsDemoBn: 'প্রাকৃতিক সামুদ্রিক ক্যাটলবোন ও আয়োডিন মিনারেল।',
    nutritionDemo: {
      protein: '3.0% Min',
      fat: '0.2% Min',
      fiber: 'N/A',
      moisture: 'Calcium: 35.0% Min'
    },
    feedingGuidanceDemo: 'Hang securely inside the cage with the soft side facing inward.',
    feedingGuidanceDemoBn: 'খাঁচার তারের সাথে নরম অংশ ভেতরের দিকে রেখে শক্তভাবে ঝুলিয়ে দিন।',
    storageGuidance: 'Dry environment.',
    storageGuidanceBn: 'শুকনো স্থানে সংরক্ষণ করুন।',
    batchExpiry: 'EXP: Indefinite (Dry Mineral)',
    origin: 'Cox’s Bazar Coastal Fishery'
  },

  // FISH & AQUARIUM
  {
    id: 'prod-fish-01',
    name: 'AquaVital Colour Enhancing Spirulina Micro-Pellets',
    nameBn: 'অ্যাকোয়াভাইটাল কালার এনহ্যান্সিং স্পিরুলিনা মাইক্রো-পেলেট',
    brand: 'AquaVital Commercial',
    animalCategory: 'fish',
    productType: 'dry-food',
    description: 'Slow-sinking nano pellets rich in natural astaxanthin and blue-green spirulina algae for vibrant red, blue, and yellow fish coloration.',
    descriptionBn: 'ধীরগতিতে নিমজ্জিত মাইক্রো-পেলেট যাতে রয়েছে স্পিরুলিনা ও অ্যাস্টাক্সানথিন যা রঙিন মাছের গায়ের উজ্জ্বল বর্ণ বিকশিত করে।',
    rating: 4.7,
    reviewCount: 35,
    image: CAT_SALMON_IMAGE,
    packageSizes: [
      { size: '100g Jar', price: 320, originalPrice: 380, stockCount: 65 },
      { size: '250g Value Tub', price: 680, originalPrice: 790, stockCount: 30 }
    ],
    defaultSize: '100g Jar',
    price: 320,
    originalPrice: 380,
    stockCount: 65,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের অ্যাকোয়ারিয়াম মাছ',
    ingredientsDemo: 'Shrimp meal, White fish meal, Spirulina (12%), Krill, Wheat germ, Yeast, Vitamin C, Beta Carotene.',
    ingredientsDemoBn: 'চিংড়ি মাছের গুঁড়ো, সাদা মাছের মিল, স্পিরুলিনা শৈবাল, ইস্ট ও মাল্টি-ভিটামিন।',
    nutritionDemo: {
      protein: '42.0% Min',
      fat: '6.0% Min',
      fiber: '3.0% Max',
      moisture: '8.0% Max'
    },
    feedingGuidanceDemo: 'Feed 2-3 times daily in amounts fish consume within 2 minutes. Do not overfeed.',
    feedingGuidanceDemoBn: 'দিনে ২-৩ বার এমন পরিমাপে দিন যা মাছ ২ মিনিটের মধ্যে খেয়ে শেষ করতে পারে। অতিরিক্ত খাবার দেবেন না।',
    storageGuidance: 'Keep screw cap sealed tight.',
    storageGuidanceBn: 'ক্যাপ ভালো করে এঁটে রাখুন।',
    batchExpiry: 'EXP: 11/2027 (Batch #AV-COL-220)',
    origin: 'Singapore'
  },
  {
    id: 'prod-fish-02',
    name: 'AquaVital AquaSafe Water Conditioner & Anti-Chlorine',
    nameBn: 'অ্যাকোয়াভাইটাল অ্যাকোয়াসেফ ওয়াটার কন্ডিশনার ও অ্যান্টি-ক্লোরিন',
    brand: 'AquaVital Commercial',
    animalCategory: 'fish',
    productType: 'healthcare',
    description: 'Instantly neutralizes harmful municipal tap water chlorine, chloramines, and binds toxic heavy metals while protecting fish slime coats.',
    descriptionBn: 'লাইনের ট্যাপের পানির ক্ষতিকারক ক্লোরিন ও ভারী ধাতু তাৎক্ষণিকভাবে নিষ্ক্রিয় করে মাছের প্রাকৃতিক শ্লেষ্মা স্তর রক্ষা করে।',
    rating: 4.9,
    reviewCount: 58,
    image: CAT_SALMON_IMAGE,
    packageSizes: [
      { size: '120ml Bottle', price: 290, originalPrice: 340, stockCount: 70 },
      { size: '250ml Bottle', price: 520, originalPrice: 600, stockCount: 40 }
    ],
    defaultSize: '120ml Bottle',
    price: 290,
    originalPrice: 340,
    stockCount: 70,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'অ্যাকোয়ারিয়াম ও হাউজ পন্ড',
    ingredientsDemo: 'Dechlorinating agents, Polyvinylpyrrolidones, Colloidal protectants, Vitamin B Complex.',
    ingredientsDemoBn: 'ডিক্লোরিন সল্ট, সুরক্ষা জেল ও বি-কমপ্লেক্স।',
    nutritionDemo: {
      protein: 'N/A',
      fat: 'N/A',
      fiber: 'N/A',
      moisture: 'Dosage: 5ml per 40L'
    },
    feedingGuidanceDemo: 'Add 5ml for every 40 liters of new tap water during weekly water changes.',
    feedingGuidanceDemoBn: 'প্রতি সপ্তাহে পানি পরিবর্তনের সময় প্রতি ৪০ লিটার ট্যাপের পানিতে ৫ মিলি মেশান।',
    storageGuidance: 'Store in a cool dark cabinet.',
    storageGuidanceBn: 'আলো থেকে দূরে রাখুন।',
    batchExpiry: 'EXP: 01/2028 (Batch #AV-COND-55)',
    origin: 'Malaysia'
  },

  // RABBITS & SMALL PETS
  {
    id: 'prod-small-01',
    name: 'MeadowPure 1st-Cut Green Timothy Hay & Herbs',
    nameBn: 'মেডোপিউর ফার্স্ট-কাট গ্রিন টিমোথি হে ও হার্বস',
    brand: 'MeadowPure Naturals',
    animalCategory: 'small-pets',
    productType: 'dry-food',
    description: 'Aromatic high-fiber sun-cured Timothy Hay enriched with marigold and chamomile flowers. Vital for rabbit, guinea pig, and chinchilla gut motility.',
    descriptionBn: 'সুগন্ধযুক্ত ও উচ্চ ফাইবারযুক্ত টিমোথি ঘাস যাতে রয়েছে গাঁদা ও ক্যামোমাইল ফুল। খরগোশ ও গিনিপিগের হজম ও দাঁত ক্ষয়ের জন্য অত্যন্ত জরুরি।',
    rating: 4.9,
    reviewCount: 33,
    image: FARM_FEED_IMAGE,
    isBestSeller: true,
    packageSizes: [
      { size: '500g Bag', price: 420, originalPrice: 480, stockCount: 50 },
      { size: '1kg Compressed Bale', price: 790, originalPrice: 920, stockCount: 35 },
      { size: '2.5kg Value Box', price: 1850, originalPrice: 2200, stockCount: 15 }
    ],
    defaultSize: '1kg Compressed Bale',
    price: 790,
    originalPrice: 920,
    stockCount: 35,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের খরগোশ ও গিনিপিগ',
    ingredientsDemo: '100% First-Cut Premium Sun-Cured Timothy Grass, Calendula Blossoms, Chamomile Heads.',
    ingredientsDemoBn: '১০০% রোদে শুকানো টিমোথি ঘাস ও গাঁদা ফুল।',
    nutritionDemo: {
      protein: '7.5% Min',
      fat: '1.5% Min',
      fiber: '32.0% Max',
      moisture: '12.0% Max'
    },
    feedingGuidanceDemo: 'Should make up 80% of your rabbit’s daily diet. Provide unlimited fresh hay at all times.',
    feedingGuidanceDemoBn: 'খরগোশের দৈনিক খাদ্যের ৮০% ঘাস হওয়া উচিত। খাঁচায় সার্বক্ষণিক পর্যাপ্ত ঘাস রাখুন।',
    storageGuidance: 'Keep in breathable box or cotton bag away from humidity.',
    storageGuidanceBn: 'বায়ু চলাচলের উপযোগী পাত্রে আর্দ্রতামুক্ত স্থানে রাখুন।',
    batchExpiry: 'EXP: 09/2027 (Batch #MP-TH-809)',
    origin: 'USA / Packed in BD'
  },
  {
    id: 'prod-small-02',
    name: 'MeadowPure Fortified Guinea Pig Vitamin C Daily Pellets',
    nameBn: 'মেডোপিউর ভিটামিন-সি সমৃদ্ধ গিনিপিগ ডেইলি পেলেট',
    brand: 'MeadowPure Naturals',
    animalCategory: 'small-pets',
    productType: 'dry-food',
    description: 'Stabilized Vitamin C pellet formula specially tailored for guinea pigs who cannot synthesize their own Vitamin C, preventing scurvy.',
    descriptionBn: 'উচ্চমানের ভিটামিন-সি যুক্ত সুষম পেলেট খাবার যা গিনিপিগকে স্কার্ভি রোগ থেকে রক্ষা করে সুস্থ রাখে।',
    rating: 4.8,
    reviewCount: 24,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: '800g Bag', price: 540, originalPrice: 620, stockCount: 40 },
      { size: '2kg Value Pack', price: 1250, originalPrice: 1450, stockCount: 20 }
    ],
    defaultSize: '800g Bag',
    price: 540,
    originalPrice: 620,
    stockCount: 40,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'গিনিপিগ',
    ingredientsDemo: 'Timothy grass meal, Soybean hulls, Wheat middlings, Stabilized L-Ascorbyl-2-Polyphosphate (Vit C), Rosemary extract.',
    ingredientsDemoBn: 'টিমোথি গ্রাস মিল, গমের ভুসি, স্থিতিশীল ভিটামিন-সি ও প্রাকৃতিক নির্যাস।',
    nutritionDemo: {
      protein: '14.0% Min',
      fat: '2.5% Min',
      fiber: '25.0% Max',
      moisture: '10.0% Max'
    },
    feedingGuidanceDemo: 'Provide 1/8 cup daily per adult guinea pig along with fresh water and hay.',
    feedingGuidanceDemoBn: 'প্রতিটি প্রাপ্তবয়স্ক গিনিপিগকে দৈনিক ১/৮ কাপ পেলেট দিন।',
    storageGuidance: 'Reseal bag after every use.',
    storageGuidanceBn: 'প্রতিবার ব্যবহারের পর জিপ বন্ধ করুন।',
    batchExpiry: 'EXP: 12/2027 (Batch #MP-GP-119)',
    origin: 'Canada'
  },

  // MORE SPECIALTY PRODUCTS FOR FULL CATALOG DEPTH
  {
    id: 'prod-cat-05',
    name: 'Royal Paws Sterilised Weight & Urinary Care',
    nameBn: 'রয়েল পজ স্টেরিলাইজড ওয়েট ও ইউরিনারি কেয়ার',
    brand: 'Royal Paws',
    animalCategory: 'cats',
    productType: 'dry-food',
    description: 'Controlled mineral levels to support bladder health and L-carnitine to prevent excessive weight gain in neutered cats.',
    descriptionBn: 'নিউটার বা স্টেরিলাইজ করা বিড়ালের প্রস্রাবের নালী সুস্থ রাখতে এবং ওজন নিয়ন্ত্রণে রাখতে বিশেষ ব্যালান্সড কিবল।',
    rating: 4.8,
    reviewCount: 41,
    image: CAT_SALMON_IMAGE,
    packageSizes: [
      { size: '1.5kg', price: 1750, originalPrice: 1950, stockCount: 30 },
      { size: '3.5kg', price: 3700, originalPrice: 4200, stockCount: 15 }
    ],
    defaultSize: '1.5kg',
    price: 1750,
    originalPrice: 1950,
    stockCount: 30,
    ageGroup: 'Adult',
    ageGroupBn: 'প্রাপ্তবয়স্ক (নিউটার করা)',
    ingredientsDemo: 'Poultry meal, corn gluten, vegetable fibers, hydrolysed animal proteins, DL-methionine, psyllium husks.',
    ingredientsDemoBn: 'পোল্ট্রি মিল, উদ্ভিজ্জ ফাইবার, মেথিওনিন ও সাইলিয়াম ভুসি।',
    nutritionDemo: {
      protein: '37.0% Min',
      fat: '12.0% Min',
      fiber: '6.2% Max',
      moisture: '7.0% Max'
    },
    feedingGuidanceDemo: 'Follow portion control strictly according to pet ideal weight.',
    feedingGuidanceDemoBn: 'বিড়ালের আদর্শ ওজন অনুযায়ী সঠিক মাপে খাবার দিন।',
    storageGuidance: 'Store in dry pantry.',
    storageGuidanceBn: 'শুকনো প্যান্ট্রিতে রাখুন।',
    batchExpiry: 'EXP: 08/2027 (Batch #RP-ST-732)',
    origin: 'France'
  },
  {
    id: 'prod-dog-05',
    name: 'Pet Palace Royal Salmon Oil Omega-3 Supplement',
    nameBn: 'পেট প্যালেস রয়্যাল স্যালমন অয়েল ওমেগা-৩ সাপ্লিমেন্ট',
    brand: 'Pet Palace Signature',
    animalCategory: 'dogs',
    productType: 'healthcare',
    description: 'Pure 100% wild Norwegian salmon oil pump bottle for glossy coats, reduced shedding, and brain cognitive health in dogs and cats.',
    descriptionBn: '১০০% খাঁটি নরওয়েজিয়ান স্যালমন অয়েল যা লোম পড়া কমায়, পশম উজ্জ্বল করে এবং কুকুরের হার্ট ও ব্রেন সুস্থ রাখে।',
    rating: 4.9,
    reviewCount: 68,
    image: DOG_KIBBLE_IMAGE,
    isBestSeller: true,
    packageSizes: [
      { size: '250ml Pump', price: 750, originalPrice: 880, stockCount: 50 },
      { size: '500ml Pump', price: 1350, originalPrice: 1600, stockCount: 28 }
    ],
    defaultSize: '250ml Pump',
    price: 750,
    originalPrice: 880,
    stockCount: 50,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'কুকুর ও বিড়াল উভয়ের জন্য',
    ingredientsDemo: '100% Pure Wild Caught Salmon Oil, Natural Mixed Tocopherols (Vitamin E preservative).',
    ingredientsDemoBn: '১০০% খাঁটি বন্য স্যালমন মাছের তেল ও ভিটামিন ই।',
    nutritionDemo: {
      protein: '0%',
      fat: '99.5% Min',
      fiber: '0%',
      moisture: 'EPA: 8.5%, DHA: 11.2%'
    },
    feedingGuidanceDemo: 'Pump directly onto dry or wet food: 1 pump per 5kg body weight daily.',
    feedingGuidanceDemoBn: 'প্রতি ৫ কেজি ওজনের জন্য ১ পাম্প তেল খাবারের উপর মিশিয়ে দিন।',
    storageGuidance: 'Store in a cool place away from sunlight.',
    storageGuidanceBn: 'সূর্যের আলো থেকে দূরে রাখুন।',
    batchExpiry: 'EXP: 02/2028 (Batch #PP-SO-119)',
    origin: 'Norway / Packed in BD'
  },
  {
    id: 'prod-acc-01',
    name: 'Pet Palace Ergonomic Reflective No-Pull Harness',
    nameBn: 'পেট প্যালেস আর্গোনোমিক রিফ্লেক্টিভ নো-পুল হারনেস',
    brand: 'Pet Palace Signature',
    animalCategory: 'dogs',
    productType: 'accessories',
    description: 'Breathable Oxford mesh chest harness with 3M reflective safety piping, dual leash attachment D-rings, and heavy-duty handle.',
    descriptionBn: 'আরামদায়ক শ্বাসপ্রশ্বাস উপযোগী অক্সফোর্ড মেশ ডগ হারনেস যাতে রয়েছে রাতের জন্য ৩এম রিফ্লেক্টিভ স্ট্রিপ ও শক্তিশালী হ্যান্ডেল।',
    rating: 4.8,
    reviewCount: 39,
    image: DOG_KIBBLE_IMAGE,
    packageSizes: [
      { size: 'Small (Chest 45-56cm)', price: 650, originalPrice: 780, stockCount: 25 },
      { size: 'Medium (Chest 56-69cm)', price: 750, originalPrice: 890, stockCount: 30 },
      { size: 'Large (Chest 69-81cm)', price: 880, originalPrice: 1050, stockCount: 20 }
    ],
    defaultSize: 'Medium (Chest 56-69cm)',
    price: 750,
    originalPrice: 890,
    stockCount: 30,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের কুকুর',
    ingredientsDemo: 'Waterproof Oxford Fabric, Breathable Air Mesh, Zinc Alloy D-rings, Nylon Webbing.',
    ingredientsDemoBn: 'ওয়াটারপ্রুফ অক্সফোর্ড কাপড় ও শক্তিশালী রিং।',
    nutritionDemo: {
      protein: 'N/A',
      fat: 'N/A',
      fiber: 'N/A',
      moisture: 'Tensile Strength: 180kg'
    },
    feedingGuidanceDemo: 'Adjust chest straps evenly leaving 2 fingers space for comfortable movement.',
    feedingGuidanceDemoBn: 'কুকুরের গায়ে পরিয়ে ২ আঙ্গুল ঢোকার মতো আরামদায়ক ফাঁক রেখে বেল্ট অ্যাডজাস্ট করুন।',
    storageGuidance: 'Hand wash with mild soap and air dry.',
    storageGuidanceBn: 'হালকা সাবান পানিতে ধুয়ে রোদে শুকিয়ে নিন।',
    batchExpiry: 'Long-life textile warranty',
    origin: 'Imported Quality'
  },
  {
    id: 'prod-acc-02',
    name: 'Pet Palace Royal Sisal Scratching Post & Tree',
    nameBn: 'পেট প্যালেস রয়্যাল সাইসাল স্ক্র্যাচিং পোস্ট ও ট্রি',
    brand: 'Pet Palace Signature',
    animalCategory: 'cats',
    productType: 'accessories',
    description: 'Natural woven sisal rope scratch pillar with elevated velvet observation perch and dangling plush bell toy.',
    descriptionBn: 'প্রাকৃতিক সাইসাল দড়ির স্ক্র্যাচিং পোস্ট যা আসবাবপত্র নখের আঁচড় থেকে রক্ষা করে এবং বিড়ালের খেলাধুলার সুযোগ তৈরি করে।',
    rating: 4.7,
    reviewCount: 19,
    image: CAT_SALMON_IMAGE,
    packageSizes: [
      { size: 'Standard (Height 55cm)', price: 1250, originalPrice: 1450, stockCount: 18 },
      { size: 'Deluxe Multi-Tier (Height 85cm)', price: 2450, originalPrice: 2850, stockCount: 10 }
    ],
    defaultSize: 'Standard (Height 55cm)',
    price: 1250,
    originalPrice: 1450,
    stockCount: 18,
    ageGroup: 'All Life Stages',
    ageGroupBn: 'সব বয়সের বিড়াল',
    ingredientsDemo: 'Natural Sisal Rope, Solid Particle Board, Soft Plush Fabric.',
    ingredientsDemoBn: 'প্রাকৃতিক সাইসাল রোপ ও নরম ভেলভেট কাপড়।',
    nutritionDemo: {
      protein: 'N/A',
      fat: 'N/A',
      fiber: 'N/A',
      moisture: 'Base: 35x35cm Solid'
    },
    feedingGuidanceDemo: 'Place near your cat’s favorite napping or window viewing spot.',
    feedingGuidanceDemoBn: 'বিড়ালের প্রিয় জানালার কাছে বা ঘরের এক কোণে স্থাপন করুন।',
    storageGuidance: 'Indoor dry usage.',
    storageGuidanceBn: 'ঘরের ভেতরে ব্যবহার করুন।',
    batchExpiry: 'Durable construction',
    origin: 'Handcrafted BD'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    author: 'Tanvir Hossain',
    petName: 'Milo',
    petType: 'British Shorthair Cat',
    location: 'Gulshan-2, Dhaka',
    rating: 5,
    date: '14 Oct 2026',
    comment: 'The Royal Ocean Salmon pouch is Milo’s absolute favorite! The delivery inside Dhaka took just 24 hours and the packaging was in pristine condition. Highly recommended for genuine pet food in Bangladesh.',
    commentBn: 'আমার বিড়াল মাইলোর সবচেয়ে প্রিয় খাবার এই স্যালমন পাউচটি! গুলশানে মাত্র ২৪ ঘণ্টার মধ্যে ডেলিভারি পেয়েছি এবং ব্যাচ এক্সপায়ারি চেক করে দেখেছি সম্পূর্ণ ফ্রেশ। বাংলাদেশে অরিজিনাল ক্যাট ফুডের জন্য সবচেয়ে বিশ্বস্ত।',
    verifiedBuyer: true
  },
  {
    id: 'rev-02',
    author: 'Dr. Nusrat Jahan',
    petName: 'Tiger & Bella',
    petType: 'Golden Retrievers',
    location: 'Dhanmondi, Dhaka',
    rating: 5,
    date: '08 Oct 2026',
    comment: 'Switched both my goldens to the Roast Chicken & Sweet Potato kibble 2 months ago. Their coat is remarkably shinier and energy levels are balanced. BDT pricing is very fair compared to local brick-and-mortar pet shops.',
    commentBn: 'আমার দুই গোল্ডেন রিট্রিভারের জন্য এই রোস্টেড চিকেন কিবলটি ২ মাস ধরে ব্যবহার করছি। ওদের পশম অনেক মসৃণ হয়েছে এবং হজমে কোনো সমস্যা হয়নি। পেট প্যালেসের সার্ভিস সত্যিই রাজকীয়!',
    verifiedBuyer: true
  },
  {
    id: 'rev-03',
    author: 'Haji Rafiqul Islam',
    petName: 'Dairy Herd (42 Cows)',
    petType: 'Holstein Friesian Cattle',
    location: 'Sreepur, Gazipur',
    rating: 5,
    date: '28 Sep 2026',
    comment: 'We ordered 30 sacks of the Verdant Fields Ultra-Yield Dairy pellets. Milk yield per cow increased by nearly 1.4 liters daily after 3 weeks of proper feeding. Excellent bulk farm supply experience.',
    commentBn: 'আমাদের শ্রীপুরের খামারের জন্য ৩০ বস্তা আল্ট্রা-ইল্ড ডেইরি ফিড অর্ডার করেছিলাম। ৩ সপ্তাহ নিয়মিত খাওয়ানোর পর প্রতি গাভীর গড় দুধের পরিমাণ প্রায় ১.৪ লিটার বৃদ্ধি পেয়েছে। খামারিদের জন্য অসাধারণ সার্ভিস।',
    verifiedBuyer: true
  },
  {
    id: 'rev-04',
    author: 'Kazi Mahbubur Rahman',
    petName: 'Rio & Sunny',
    petType: 'Cockatiels',
    location: 'Nasirabad, Chattogram',
    rating: 5,
    date: '19 Sep 2026',
    comment: 'Extremely clean bird seed mix! No dusty residue or dead seeds like the loose market stuff. Ordered all the way from Chattogram and received Cash on Delivery in 48 hours.',
    commentBn: 'চমৎকার পরিষ্কার বাজেরিগার সিড মিক্স। বাজারের খোলা খাবারের মতো ধুলোবালি নেই। চট্টগ্রাম থেকে অর্ডার করে ২ দিনের মধ্যেই ক্যাশ অন ডেলিভারিতে পেয়ে গেছি।',
    verifiedBuyer: true
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    code: 'ROYAL10',
    discountType: 'percentage',
    value: 10,
    minSpend: 1000,
    description: '10% instant discount on orders over ৳1,000',
    descriptionBn: '১,০০০৳ এর বেশি অর্ডারে তাৎক্ষণিক ১০% মূল্যছাড়'
  },
  {
    code: 'PETPALACE',
    discountType: 'fixed',
    value: 150,
    minSpend: 1500,
    description: 'Flat ৳150 off on orders over ৳1,500',
    descriptionBn: '১,৫০০৳ এর বেশি অর্ডারে সরাসরি ১৫০৳ ছাড়'
  },
  {
    code: 'FARMCARE',
    discountType: 'fixed',
    value: 300,
    minSpend: 4000,
    description: 'Flat ৳300 off on bulk livestock orders over ৳4,000',
    descriptionBn: '৪,০০০৳ এর বেশি লাইভস্টক অর্ডারে ৩০০৳ সরাসরি ছাড়'
  }
];

export const BANGLADESH_DISTRICTS = [
  'Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Narsingdi', 'Faridpur', 'Manikganj', 'Munshiganj',
  'Chattogram', 'Cox\'s Bazar', 'Cumilla', 'Feni', 'Noakhali', 'Brahmanbaria', 'Chandpur',
  'Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj',
  'Rajshahi', 'Bogra', 'Pabna', 'Sirajganj', 'Naogaon', 'Natore',
  'Khulna', 'Jashore', 'Kushtia', 'Satkhira', 'Bagerhat',
  'Barishal', 'Patuakhali', 'Bhola', 'Pirojpur',
  'Rangpur', 'Dinajpur', 'Kurigram', 'Gaibandha',
  'Mymensingh', 'Jamalpur', 'Netrokona', 'Sherpur'
];
