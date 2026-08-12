export const HOME_PATH = '/MarketStreet/en-US/';
export const WOMEN_PLP_PATH = '/MarketStreet/en-US/category/women';
export const LOGIN_PATH = '/MarketStreet/en-US/login';
export const WISHLIST_PATH = '/MarketStreet/en-US/wishlist';

export const HERO_SLIDES = [
  { heading: 'The New Season',      cta: 'Discover the Collection' },
  { heading: 'The Modern Wardrobe', cta: 'Shop the Look'           },
  { heading: 'After Hours',         cta: 'Explore the Collection'  },
  { heading: 'New Perspectives',    cta: 'Shop Now'                },
];

// HOME-204 / M-HOME-205 — spec says "Ten products" but lists 12 names.
// Tests treat the list as the authoritative order; product count assertion is
// deliberately flexible (≥10) to avoid locking on the conflicting number.
export const FEATURED_PRODUCTS = [
  'Leather Crossbody Bag', 'Girls Puffer Vest',   'Knit Midi Skirt',
  'Kids Rain Boots',       'Athletic Joggers',     'Utility Overshirt',
  'Waffle Long Sleeve',    'Denim Midi Skirt',     'Structured Blazer',
  'Oxford Shirt',          'Wool Blend Coat',      'Wide Leg Trousers',
];

export const WOMEN_SUBCATEGORIES = [
  'Accessories', 'Bags', 'Bottoms', 'Dresses', 'Knitwear',
  'New In', 'Outerwear', 'Shoes', 'Tops',
];

export const MEN_SUBCATEGORIES = [
  'Accessories', 'Bags', 'Knitwear', 'New In', 'Outerwear',
  'Shirts', 'Shoes', 'Trousers', 'T-Shirts & Polos',
];

export const KIDS_SUBCATEGORIES = [
  'Accessories', 'Baby', 'Boys', 'Girls', 'New In', 'Shoes',
];

export const SORT_OPTIONS = [
  'Best Matches',       'Price Low To High', 'Price High to Low',
  'Product Name A - Z', 'Product Name Z - A', 'Brand',
  'Most Popular',       'Top Sellers',
];

export const WOMEN_PRICE_BANDS = [
  { label: '$0 - $49.99',     count: 4  },
  { label: '$50 - $99.99',    count: 25 },
  { label: '$100 - $199.99',  count: 7  },
];

export const CATEGORY_REFINEMENTS = [
  'Accessories', 'Bags', 'Bottoms', 'Dresses', 'Knitwear',
  'New In', 'Outerwear', 'Shoes', 'Tops',
];
