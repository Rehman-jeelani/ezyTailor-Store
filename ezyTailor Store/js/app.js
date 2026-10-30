/**
 * ezyTailor Store - Interactive Application Logic
 * High-performance, reactive UI with Cart, Minimum Order Progress, 
 * Live Search/Filter, Quick View Modal, WhatsApp Checkout & Bilingual Support
 */

// ==========================================
// 1. Product Catalog Data
// ==========================================
const PRODUCTS = [
  {
    id: 'scale-30',
    title: 'Scale 30 Inch Precision Tailor Ruler',
    titleUr: 'پیمانہ 30 انچ اسٹیل ٹیلرنگ رولر',
    category: 'scales',
    categoryName: 'Tailoring Scales',
    categoryNameUr: 'ٹیلرنگ اسکیلز',
    price: 605,
    formattedPrice: 'Rs 605',
    hasOptions: false,
    options: ['Standard 30"'],
    image: 'assets/products/scale_30_inch.jpg',
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Ultra-durable stainless steel and acrylic 30-inch ruler with laser-etched inch and centimeter markings. Designed specifically for Shalwar Kameez and trouser pattern drafting.',
    specs: {
      'Material': 'Stainless Steel / High-Grade Acrylic',
      'Length': '30 Inches / 76.2 cm',
      'Accuracy': 'Precision 1mm calibrated'
    }
  },
  {
    id: 'speed-x-printer',
    title: 'Speed X Portable Bluetooth Thermal Printer',
    titleUr: 'اسپیڈ ایکس پورٹیبل بلوٹوتھ تھرمل پرنٹر',
    category: 'printers',
    categoryName: 'Printers',
    categoryNameUr: 'پرنٹرز',
    price: 7200,
    formattedPrice: 'Rs 7,200',
    hasOptions: false,
    options: ['58mm Bluetooth Model'],
    image: 'assets/products/bluetooth_printer.jpg',
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 96,
    description: 'Instant receipt and measurement tag printer for tailor shops. Works seamlessly with Android, iOS, and ezyTailor Shop Management software over Bluetooth.',
    specs: {
      'Connectivity': 'Bluetooth 4.0 + USB',
      'Paper Width': '58mm Thermal Paper',
      'Battery': '1500mAh Rechargeable Li-ion'
    }
  },
  {
    id: 'french-curve',
    title: 'French Curve Pattern Ruler Set',
    titleUr: 'فرینچ کرو پیٹرن رولر سیٹ',
    category: 'scales',
    categoryName: 'Tailoring Scales',
    categoryNameUr: 'ٹیلرنگ اسکیلز',
    price: 550,
    priceMax: 660,
    formattedPrice: 'Rs 550 – Rs 660',
    hasOptions: true,
    options: ['Standard Arc (Rs 550)', 'Extended Multi-Curve (Rs 660)'],
    optionPrices: [550, 660],
    image: 'assets/products/french_curve.jpg',
    badge: 'Essential',
    rating: 4.9,
    reviewsCount: 78,
    description: 'Crystal-clear acrylic French curves for drawing smooth armholes, necklines, pocket contours, and waist silhouettes with zero jagged angles.',
    specs: {
      'Material': '2mm Scratch-Resistant Acrylic',
      'Markings': 'Permanent red caliber lines',
      'Curve Range': 'Deep Armhole & Waist contour'
    }
  },
  {
    id: 'master-pattern',
    title: 'Master Pattern Grading Ruler (MA Traders)',
    titleUr: 'ماسٹر پیٹرن کٹنگ رولر',
    category: 'scales',
    categoryName: 'Tailoring Scales',
    categoryNameUr: 'ٹیلرنگ اسکیلز',
    price: 1100,
    priceMax: 1375,
    formattedPrice: 'Rs 1,100 – Rs 1,375',
    hasOptions: true,
    options: ['Standard Cut (Rs 1,100)', 'Deluxe Set with Armhole (Rs 1,375)'],
    optionPrices: [1100, 1375],
    image: 'assets/products/master_pattern.jpg',
    badge: 'Master Choice',
    rating: 5.0,
    reviewsCount: 184,
    description: 'The industry-standard master cutter drafting template. Delivers flawless shoulder slopes, collar bands, and armhole cutouts every single time.',
    specs: {
      'Template Style': 'All-in-one Master Grading',
      'Marking Language': 'Inch & Sooter Scale',
      'Durability': 'High flexibility shatter-proof'
    }
  },
  {
    id: 'ban-shape',
    title: 'Ban Shape Patron (7, 8 and 9 Sooter)',
    titleUr: 'بین شیپ پیٹرن (7، 8 اور 9 سوتر)',
    category: 'scales',
    categoryName: 'Tailoring Scales',
    categoryNameUr: 'ٹیلرنگ اسکیلز',
    price: 660,
    formattedPrice: 'Rs 660',
    hasOptions: false,
    options: ['7, 8, 9 Sooter Arc'],
    image: 'assets/products/ban_shape.jpg',
    badge: 'Specialized',
    rating: 4.8,
    reviewsCount: 65,
    description: 'Dedicated men kurta collar and ban curve guide. Accurately calibrated with 7, 8, and 9 sooter offsets to eliminate wrinkles in kameez collars.',
    specs: {
      'Sizes Covered': 'Size 7, 8, 9 Sooter Curvature',
      'Application': 'Sherwani & Kameez Ban Collar',
      'Edge': 'Laser-polished bevel'
    }
  },
  {
    id: 'pocket-pattern-set',
    title: 'Pocket Pattern Set (7 Pcs / Different Sizes)',
    titleUr: 'پاکٹ پیٹرن سیٹ (7 سائزز)',
    category: 'scales',
    categoryName: 'Tailoring Scales',
    categoryNameUr: 'ٹیلرنگ اسکیلز',
    price: 1100,
    formattedPrice: 'Rs 1,100',
    hasOptions: false,
    options: ['Complete 7-Piece Set'],
    image: 'assets/products/pocket_patterns.jpg',
    badge: 'Time Saver',
    rating: 4.9,
    reviewsCount: 112,
    description: 'Full set of 7 laser-cut acrylic chest and side pocket templates. From XS to 3XL, achieve uniform, crisp rounded and pointed pockets in seconds.',
    specs: {
      'Pieces': '7 Graduated Pocket Sizes',
      'Pocket Styles': 'Rounded Kurta & Pointed Shirt',
      'Material': 'Clear Acrylic with center lines'
    }
  },
  {
    id: 'small-scissors',
    title: 'Small Snip Scissors for Thread Cutting',
    titleUr: 'دھاگہ کٹائی کے لیے چھوٹی کینچی / سنیپر',
    category: 'scissors',
    categoryName: 'Scissors',
    categoryNameUr: 'کینچیاں',
    price: 400,
    formattedPrice: 'Rs 400',
    hasOptions: false,
    options: ['Spring Loaded Snip'],
    image: 'assets/products/small_scissors.jpg',
    badge: 'Workhorse',
    rating: 4.7,
    reviewsCount: 230,
    description: 'High-rebound spring-loaded thread trimmer with carbon steel ground blades. Snips loose ends and trim threads smoothly right at the sewing machine table.',
    specs: {
      'Blade': 'Ground High-Carbon Steel',
      'Action': 'Spring-assisted auto rebound',
      'Length': '4.5 inches'
    }
  },
  {
    id: 'excellent-scissors',
    title: 'Excellent Heavy Tailor Shears',
    titleUr: 'ایکسلنٹ ہیوی ٹیلرنگ کینچی',
    category: 'scissors',
    categoryName: 'Scissors',
    categoryNameUr: 'کینچیاں',
    price: 3800,
    priceMax: 4200,
    formattedPrice: 'Rs 3,800 – Rs 4,200',
    hasOptions: true,
    options: ['10-Inch Blade (Rs 3,800)', '12-Inch Heavy Duty (Rs 4,200)'],
    optionPrices: [3800, 4200],
    image: 'assets/products/tailor_scissors.jpg',
    badge: 'Master Grade',
    rating: 5.0,
    reviewsCount: 310,
    description: 'Forged brass-handle tailoring shears engineered for multi-layer fabric cutting. Cuts effortlessly through heavy suiting, denim, and fine silk without snagging.',
    specs: {
      'Handle': 'Ergonomic Cast Polished Brass',
      'Blade': 'Drop-Forged High Carbon Steel',
      'Re-sharpenable': 'Yes, lifetime re-grindable edge'
    }
  },
  {
    id: 'aafaq-scissor',
    title: 'Aafaq Super Cut Special Scissor',
    titleUr: 'آفاق سپر کٹ اسپیشل کینچی',
    category: 'scissors',
    categoryName: 'Scissors',
    categoryNameUr: 'کینچیاں',
    price: 1000,
    priceMax: 1250,
    formattedPrice: 'Rs 1,000 – Rs 1,250',
    hasOptions: true,
    options: ['Size 9 (Rs 1,000)', 'Size 10 (Rs 1,250)'],
    optionPrices: [1000, 1250],
    image: 'assets/products/tailor_scissors.jpg',
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 154,
    description: 'Genuine Aafaq Super Cut shears renowned across Pakistan tailor workshops for balance, sharp taper, and effortless cutting stroke on cotton and boski.',
    specs: {
      'Brand': 'Aafaq Original',
      'Size': 'Size 9 / 10 available',
      'Cutting Edge': 'Micro-bevel ground'
    }
  },
  {
    id: 'bukram-roll',
    title: 'Tailor Fine Fusing Bukram (Collar & Cuff)',
    titleUr: 'عمدہ فیوزنگ بکرم رول (کالر اور کف)',
    category: 'bukram',
    categoryName: 'Bukram',
    categoryNameUr: 'بکرم اور فیوزنگ',
    price: 1850,
    formattedPrice: 'Rs 1,850',
    hasOptions: true,
    options: ['Hard Collar Roll (Rs 1,850)', 'Soft Fusing Roll (Rs 1,950)'],
    optionPrices: [1850, 1950],
    image: 'assets/products/bukram_roll.jpg',
    badge: 'Wholesale Pack',
    rating: 4.9,
    reviewsCount: 89,
    description: 'Premium resin-coated collar canvas bukram. Does not bubble after washing, adheres cleanly under steam iron, and holds sharp cuffs and collars.',
    specs: {
      'Coating': 'Double-dot high-grade glue',
      'Roll Length': '50 Meters',
      'Wash Care': 'Anti-shrink & anti-bubble'
    }
  },
  {
    id: 'tailor-threads',
    title: 'Thread & Co. Industrial Spool Pack (12 Pcs)',
    titleUr: 'انڈسٹریل سلائی دھاگہ باکس (12 نلکیاں)',
    category: 'threads',
    categoryName: 'Threads',
    categoryNameUr: 'دھاگے اور نلکیاں',
    price: 1200,
    formattedPrice: 'Rs 1,200',
    hasOptions: false,
    options: ['Box of 12 Assorted Colors'],
    image: 'assets/products/tailor_threads.jpg',
    badge: 'Essential',
    rating: 4.8,
    reviewsCount: 175,
    description: 'High-tensile polyester sewing threads for high-speed industrial stitching machines. Zero thread snapping, smooth tension glide, and color-fast dyes.',
    specs: {
      'Quantity': '12 Spools per pack',
      'Yardage': '1000m per spool',
      'Grade': 'High-Speed Industrial 40/2'
    }
  },
  {
    id: 'tailor-iron',
    title: 'Vesta Heavy Professional Tailoring Steam Iron',
    titleUr: 'ویستا ہیوی پروفیشنل ٹیلرنگ اسٹیم استری',
    category: 'iron',
    categoryName: 'Iron',
    categoryNameUr: 'استری و پریس',
    price: 8500,
    formattedPrice: 'Rs 8,500',
    hasOptions: false,
    options: ['Heavy 3.5kg Unit'],
    image: 'assets/products/tailor_iron.jpg',
    badge: 'Heavy Duty',
    rating: 5.0,
    reviewsCount: 64,
    description: 'Industrial weighted steam pressing iron with chrome soleplate. Built for tailor workbenches to press sharp creases and set stubborn seams instantly.',
    specs: {
      'Weight': '3.5 kg solid gravity weight',
      'Soleplate': 'Mirror polished hard chrome',
      'Power': '1600W fast thermal core'
    }
  }
];

// ==========================================
// 2. Application State
// ==========================================
const MIN_ORDER_AMOUNT = 1500;

const state = {
  cart: [],
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  currentLang: 'en',
  activeQuickView: null
};

// ==========================================
// 3. Translations Dictionary (EN / UR)
// ==========================================
const TRANSLATIONS = {
  en: {
    topNotice: 'Minimum Order Rs. 1,500 | 100% Advance Payment Required',
    tagline: 'Supply Store',
    catalog: 'Catalog',
    scales: 'Tailoring Scales',
    scissors: 'Scissors & Shears',
    bukram: 'Bukram & Fusing',
    threads: 'Threads',
    iron: 'Iron & Steam',
    printers: 'Printers',
    wholesaleNav: 'Wholesale Pricing',
    allTools: 'All Tools',
    contact: 'Contact Helpline',
    heroBadge: 'The Official Supply Store for 34,000+ Master Tailors',
    heroTitle: 'Stock Your Workbench Like The Shops That Outlast Trends.',
    heroDesc: 'Scissors, bukram, thread, irons, and precision scales tailors already trust — the same brands from ezyTailor’s own network of 34,000 shops, ordered straight to your door.',
    shopAll: 'Explore All Tools',
    wholesalePartner: 'Wholesale & App Partner Pricing',
    shopsPowered: '34,000+ Tailors',
    verifiedQuality: '100% Verified Quality',
    minOrderRibbon: 'Rs. 1,500 Min. Order',
    satisfaction: '4.9/5 Rating',
    featuredProducts: 'Professional Workshop Supplies',
    featuredSubtitle: 'Authentic tools calibrated for Pakistani master cutters and stitchers',
    searchPlaceholder: 'Search scales, Aafaq scissors, Speed X printer...',
    sortFeatured: 'Sort: Featured',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    sortRating: 'Highest Rated',
    addToCart: 'Add to Cart',
    selectOptions: 'Select Options',
    quickView: 'Quick View',
    cartTitle: 'Your Workbench Cart',
    emptyCartTitle: 'Your Cart is Empty',
    emptyCartDesc: 'Add tailor scales, scissors, threads or bukram to build your workbench order.',
    subtotal: 'Subtotal:',
    advanceNote: '100% Advance Payment via JazzCash, EasyPaisa, or Raast is required before dispatch.',
    checkoutBtn: 'Proceed to Checkout',
    checkoutWhatsapp: 'Order via WhatsApp',
    minOrderRemaining: 'Add {amount} more to meet the Rs. 1,500 minimum order requirement',
    minOrderAchieved: 'Minimum order requirement of Rs. 1,500 reached!',
    wholesaleCardTitle: 'Already running your shop on the ezyTailor app?',
    wholesaleCardDesc: 'Contact us for special 15% to 25% wholesale pricing on bulk thread boxes, bukram rolls, and tailoring consumables.',
    contactUs: 'Request Wholesale Pricing',
    downloadApp: 'Download ezyTailor App',
    toastAdded: 'Added to your workbench cart!'
  },
  ur: {
    topNotice: 'کم از کم آرڈر 1,500 روپے | 100 فیصد ایڈوانس ادائیگی لازمی ہے',
    tagline: 'اسٹور برائے درزی',
    catalog: 'کیٹلاگ',
    scales: 'ٹیلرنگ اسکیلز',
    scissors: 'کینچیاں',
    bukram: 'بکرم اور فیوزنگ',
    threads: 'دھاگے اور نلکیاں',
    iron: 'استری و پریس',
    printers: 'پرنٹرز',
    wholesaleNav: 'ہول سیل قیمتیں',
    allTools: 'تمام اوزار',
    contact: 'ہیلپ لائن رابطہ',
    heroBadge: '34,000 سے زائد ماسٹر ٹیلرز کا بااعتماد اسٹور',
    heroTitle: 'اپنے ورک بینچ کو ان دکانوں کی طرح سجائیں جو سالوں سے معتبر ہیں۔',
    heroDesc: 'کینچی، بکرم، دھاگے، استری اور درست ناپ کے اسکیلز جو آزمودہ اور دیرپا ہیں — ایزی ٹیلر کے 34,000 دکانوں کے نیٹ ورک سے سیدھا آپ کے ورکشاپ تک۔',
    shopAll: 'تمام اوزار دیکھیں',
    wholesalePartner: 'ہول سیل و ایپ پارٹنر قیمتیں',
    shopsPowered: '34,000+ درزی دکانیں',
    verifiedQuality: '100% اصلی کوالٹی',
    minOrderRibbon: '1,500 روپے کم از کم آرڈر',
    satisfaction: '4.9/5 اطمینان',
    featuredProducts: 'پروفیشنل ورکشاپ سامان',
    featuredSubtitle: 'پاکستانی کٹنگ ماسٹرز اور سلائی کاریگروں کے لیے خصوصی سامان',
    searchPlaceholder: 'اسکیلز، آفاق کینچی، پرنٹر یا بکرم تلاش کریں...',
    sortFeatured: 'ترتیب: منتخب سامان',
    sortPriceLow: 'قیمت: کم سے زیادہ',
    sortPriceHigh: 'قیمت: زیادہ سے کم',
    sortRating: 'بہترین ریٹنگ',
    addToCart: 'کارٹ میں شامل کریں',
    selectOptions: 'سائز منتخب کریں',
    quickView: 'تفصیل دیکھیں',
    cartTitle: 'آپ کی شاپنگ کارٹ',
    emptyCartTitle: 'آپ کی کارٹ خالی ہے',
    emptyCartDesc: 'آرڈر شروع کرنے کے لیے اسکیلز، کینچی، دھاگہ یا بکرم منتخب کریں۔',
    subtotal: 'میزان (سب ٹوٹل):',
    advanceNote: 'ڈسپیچ سے قبل جاز کیش، ایزی پیسہ یا راست کے ذریعے 100% ایڈوانس ادائیگی لازمی ہے۔',
    checkoutBtn: 'آرڈر مکمل کریں',
    checkoutWhatsapp: 'واٹس ایپ پر آرڈر بھیجیں',
    minOrderRemaining: '1,500 روپے کی کم از کم حد پوری کرنے کے لیے {amount} کا مزید سامان شامل کریں',
    minOrderAchieved: '1,500 روپے کے کم از کم آرڈر کی شرط مکمل ہوگئی!',
    wholesaleCardTitle: 'کیا آپ پہلے سے ایزی ٹیلر ایپ پر دکان چلا رہے ہیں؟',
    wholesaleCardDesc: 'تھوک نلکیوں کے ڈبے، بکرم رولز اور بڑے آرڈرز پر 15 سے 25 فیصد تک خصوصی ہول سیل رعایت حاصل کریں۔',
    contactUs: 'ہول سیل قیمت حاصل کریں',
    downloadApp: 'ایزی ٹیلر ایپ ڈاؤن لوڈ کریں',
    toastAdded: 'کارٹ میں شامل کر لیا گیا!'
  }
};

// ==========================================
// 4. Cart Local Storage & Methods
// ==========================================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('ezytailor_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('ezytailor_cart', JSON.stringify(state.cart));
  } catch (e) {}
}

function getCartSubtotal() {
  return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function addToCart(productId, selectedOptionIndex = 0, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const optionName = product.options[selectedOptionIndex] || product.options[0];
  const unitPrice = (product.optionPrices && product.optionPrices[selectedOptionIndex]) 
    ? product.optionPrices[selectedOptionIndex] 
    : product.price;

  const cartItemId = `${productId}-${selectedOptionIndex}`;
  const existingItem = state.cart.find(item => item.cartItemId === cartItemId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({
      cartItemId,
      productId: product.id,
      title: product.title,
      titleUr: product.titleUr,
      optionName,
      price: unitPrice,
      image: product.image,
      quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`${product.title} ${TRANSLATIONS[state.currentLang].toastAdded}`);
  openCartDrawer();
}

function updateCartItemQty(cartItemId, delta) {
  const itemIndex = state.cart.findIndex(i => i.cartItemId === cartItemId);
  if (itemIndex > -1) {
    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function removeCartItem(cartItemId) {
  state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
}

// ==========================================
// 5. DOM Rendering
// ==========================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const query = state.searchQuery.toLowerCase().trim();
  const category = state.currentCategory;

  let filtered = PRODUCTS.filter(product => {
    const matchesCategory = (category === 'all' || product.category === category);
    const matchesQuery = query === '' || 
      product.title.toLowerCase().includes(query) ||
      (product.titleUr && product.titleUr.includes(query)) ||
      product.description.toLowerCase().includes(query) ||
      product.categoryName.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update item counter
  const counterEl = document.getElementById('productsCount');
  if (counterEl) {
    counterEl.textContent = `${filtered.length} products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px dashed var(--border-medium);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">✂️</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">No tools found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching with different keywords like "scale", "scissor", "bukram", or "printer".</p>
      </div>
    `;
    return;
  }

  const isUr = state.currentLang === 'ur';

  grid.innerHTML = filtered.map(product => {
    const title = isUr ? product.titleUr : product.title;
    const catName = isUr ? product.categoryNameUr : product.categoryName;
    const actionBtn = product.hasOptions ? `
      <button class="btn-select-options" onclick="openQuickView('${product.id}')">
        <span>${isUr ? 'آپشنز دیکھیں' : 'Select options'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    ` : `
      <button class="btn-add-cart" onclick="addToCart('${product.id}', 0, 1)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span>${isUr ? 'کارٹ میں ڈالیں' : 'Add to cart'}</span>
      </button>
    `;

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image-container">
          <span class="card-badge badge-bestseller">${product.badge}</span>
          <span class="badge-stock">● In Stock</span>
          <img class="product-image" src="${product.image}" alt="${title}" loading="lazy" />
          <button class="quick-view-overlay-btn" onclick="openQuickView('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>${isUr ? 'تیز نظارہ' : 'Quick View'}</span>
          </button>
        </div>
        <div class="product-content">
          <div class="product-category-row">
            <span class="product-cat-name">${catName}</span>
            <div class="product-rating">
              <span>★</span>
              <span>${product.rating}</span>
            </div>
          </div>
          <h3 class="product-title">${title}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <div class="product-price-wrap">
              <span class="price-prefix">${isUr ? 'قیمت' : 'Price'}</span>
              <span class="product-price">${product.formattedPrice}</span>
            </div>
            ${actionBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function updateCartUI() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();
  const isUr = state.currentLang === 'ur';

  // Badges
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = count;
  });

  // Drawer Elements
  const countHeader = document.getElementById('cartDrawerCount');
  if (countHeader) countHeader.textContent = `(${count})`;

  const itemsContainer = document.getElementById('cartItemsBody');
  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const checkoutBtn = document.getElementById('btnCheckoutPrimary');
  const progressFill = document.getElementById('minOrderProgressFill');
  const progressText = document.getElementById('minOrderProgressText');

  if (subtotalEl) {
    subtotalEl.textContent = `Rs ${subtotal.toLocaleString()}`;
  }

  // Minimum Order Progress Logic (Rs 1,500)
  const percent = Math.min(100, Math.round((subtotal / MIN_ORDER_AMOUNT) * 100));
  if (progressFill) {
    progressFill.style.width = `${percent}%`;
    if (percent >= 100) {
      progressFill.classList.add('complete');
    } else {
      progressFill.classList.remove('complete');
    }
  }

  if (progressText) {
    if (subtotal >= MIN_ORDER_AMOUNT) {
      progressText.textContent = isUr ? '1,500 روپے کے کم از کم آرڈر کی شرط پوری ہوگئی!' : 'Minimum order requirement met! (Rs. 1,500+)';
      progressText.style.color = '#2E7D32';
    } else {
      const remaining = MIN_ORDER_AMOUNT - subtotal;
      progressText.textContent = isUr 
        ? `کم از کم آرڈر مکمل کرنے کے لیے مزید Rs ${remaining.toLocaleString()} درکار ہیں`
        : `Add Rs ${remaining.toLocaleString()} more to reach Rs 1,500 minimum order`;
      progressText.style.color = 'var(--primary-dark)';
    }
  }

  if (checkoutBtn) {
    if (subtotal >= MIN_ORDER_AMOUNT) {
      checkoutBtn.disabled = false;
    } else {
      checkoutBtn.disabled = true;
    }
  }

  // Render items in cart
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">${isUr ? 'آپ کی کارٹ خالی ہے' : 'Your Workbench Cart is Empty'}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${isUr ? 'آرڈر شروع کرنے کے لیے اسکیلز، کینچی، دھاگہ یا بکرم منتخب کریں۔' : 'Select tailor scales, scissors, threads or bukram to start building your order.'}</p>
        <button class="btn-primary" onclick="closeCartDrawer()" style="padding: 10px 20px; font-size: 0.88rem; margin-top: 10px;">
          ${isUr ? 'سامان دیکھیں' : 'Browse Workbench Tools'}
        </button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => {
    const itemTitle = isUr && item.titleUr ? item.titleUr : item.title;
    return `
      <div class="cart-item-card" data-cart-id="${item.cartItemId}">
        <img class="cart-item-img" src="${item.image}" alt="${itemTitle}" />
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${itemTitle}</h4>
            <div class="cart-item-variant">${item.optionName}</div>
          </div>
          <div class="cart-item-controls">
            <span class="cart-item-price">Rs ${(item.price * item.quantity).toLocaleString()}</span>
            <div class="qty-stepper">
              <button class="qty-step-btn" onclick="updateCartItemQty('${item.cartItemId}', -1)">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-step-btn" onclick="updateCartItemQty('${item.cartItemId}', 1)">+</button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeCartItem('${item.cartItemId}')" title="Remove">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 6. Quick View Modal
// ==========================================
let currentSelectedVariantIdx = 0;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentSelectedVariantIdx = 0;
  const isUr = state.currentLang === 'ur';
  const modalContainer = document.getElementById('quickViewContent');
  const modalBackdrop = document.getElementById('quickViewModal');

  const title = isUr ? product.titleUr : product.title;
  const catName = isUr ? product.categoryNameUr : product.categoryName;

  const variantChips = product.options.map((opt, idx) => `
    <button class="qv-variant-chip ${idx === 0 ? 'active' : ''}" onclick="selectModalVariant(${idx}, '${product.id}')">
      ${opt}
    </button>
  `).join('');

  const specsList = Object.entries(product.specs).map(([key, val]) => `
    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
      <strong style="color: var(--text-main);">${key}:</strong>
      <span>${val}</span>
    </div>
  `).join('');

  modalContainer.innerHTML = `
    <div class="quick-view-grid">
      <div class="qv-image-wrap">
        <img src="${product.image}" alt="${title}" />
      </div>
      <div class="qv-details">
        <div class="qv-badge-row">
          <span class="card-badge badge-bestseller" style="position: static;">${product.badge}</span>
          <span class="qv-cat">${catName}</span>
        </div>
        <h2 class="qv-title">${title}</h2>
        <div class="qv-rating">
          ★ ${product.rating} / 5.0 (${product.reviewsCount} verified tailor reviews)
        </div>
        <div class="qv-price" id="qvDynamicPrice">${product.formattedPrice}</div>
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-specs-box">
          ${specsList}
        </div>

        ${product.options.length > 1 ? `
          <div class="qv-options-wrap">
            <div class="qv-options-label">${isUr ? 'اختیارات / سائز' : 'Select Option / Variation'}:</div>
            <div class="qv-chips-row">${variantChips}</div>
          </div>
        ` : ''}

        <div class="qv-actions-row">
          <div class="qty-stepper" style="padding: 6px 12px; gap: 14px;">
            <button class="qty-step-btn" onclick="adjustModalQty(-1)">−</button>
            <span class="qty-val" id="modalQtyVal" style="font-size: 1rem;">1</span>
            <button class="qty-step-btn" onclick="adjustModalQty(1)">+</button>
          </div>
          <button class="btn-primary" style="flex: 1;" onclick="addModalItemToCart('${product.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span>${isUr ? 'کارٹ میں شامل کریں' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
}

function selectModalVariant(idx, productId) {
  currentSelectedVariantIdx = idx;
  const chips = document.querySelectorAll('.qv-variant-chip');
  chips.forEach((c, i) => {
    if (i === idx) c.classList.add('active');
    else c.classList.remove('active');
  });

  const product = PRODUCTS.find(p => p.id === productId);
  if (product && product.optionPrices && product.optionPrices[idx]) {
    const priceEl = document.getElementById('qvDynamicPrice');
    if (priceEl) {
      priceEl.textContent = `Rs ${product.optionPrices[idx].toLocaleString()}`;
    }
  }
}

let modalQty = 1;
function adjustModalQty(delta) {
  const qtyEl = document.getElementById('modalQtyVal');
  if (!qtyEl) return;
  modalQty = Math.max(1, modalQty + delta);
  qtyEl.textContent = modalQty;
}

function addModalItemToCart(productId) {
  addToCart(productId, currentSelectedVariantIdx, modalQty);
  closeModal('quickViewModal');
  modalQty = 1;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

// ==========================================
// 7. Cart Drawer Open / Close
// ==========================================
function openCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  }
}

// ==========================================
// 8. WhatsApp Checkout Flow
// ==========================================
function checkoutViaWhatsApp() {
  if (state.cart.length === 0) return;

  const subtotal = getCartSubtotal();
  const phone = '923341333222'; // ezyTailor official store line

  let text = `Salam ezyTailor Store! I want to place an order from your website:\n\n`;
  state.cart.forEach((item, index) => {
    text += `${index + 1}. *${item.title}* (${item.optionName})\n   Qty: ${item.quantity} × Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
  });
  text += `\n*Total Amount:* Rs ${subtotal.toLocaleString()}\n`;
  text += `*Payment Requirement:* 100% Advance Payment (JazzCash / EasyPaisa / Bank Transfer)\n\n`;
  text += `Please send me the payment account details and confirm my workshop delivery.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function openCheckoutModal() {
  const subtotal = getCartSubtotal();
  if (subtotal < MIN_ORDER_AMOUNT) {
    alert(`Minimum order requirement is Rs. ${MIN_ORDER_AMOUNT}. Please add Rs. ${(MIN_ORDER_AMOUNT - subtotal).toLocaleString()} more to checkout.`);
    return;
  }
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.add('open');
}

// ==========================================
// 9. Bilingual Language Switcher (EN / UR)
// ==========================================
function setLanguage(lang) {
  state.currentLang = lang;
  if (lang === 'ur') {
    document.body.classList.add('lang-ur');
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ur');
  } else {
    document.body.classList.remove('lang-ur');
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }

  // Update switcher buttons
  const enBtn = document.getElementById('btnLangEn');
  const urBtn = document.getElementById('btnLangUr');
  if (enBtn && urBtn) {
    if (lang === 'en') {
      enBtn.classList.add('active');
      urBtn.classList.remove('active');
    } else {
      urBtn.classList.add('active');
      enBtn.classList.remove('active');
    }
  }

  // Update translatable static elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }

  // Re-render products & cart with translated labels
  renderProducts();
  updateCartUI();
}

// ==========================================
// 10. Toast Notification
// ==========================================
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;

  toast.querySelector('.toast-msg').textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================
// 11. Event Listeners Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();

  // Initial render
  renderProducts();
  updateCartUI();

  // Category chips
  const categoryChips = document.querySelectorAll('.category-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.currentCategory = chip.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart trigger
  const cartTrigger = document.getElementById('cartTriggerBtn');
  if (cartTrigger) {
    cartTrigger.addEventListener('click', openCartDrawer);
  }

  // Cart close
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
  }

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
  }

  // Language buttons
  const btnLangEn = document.getElementById('btnLangEn');
  const btnLangUr = document.getElementById('btnLangUr');
  if (btnLangEn) btnLangEn.addEventListener('click', () => setLanguage('en'));
  if (btnLangUr) btnLangUr.addEventListener('click', () => setLanguage('ur'));

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Contact / Wholesale Modal open triggers
  const wholesaleTriggers = document.querySelectorAll('.trigger-wholesale-modal');
  wholesaleTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('wholesaleModal');
      if (modal) modal.classList.add('open');
    });
  });

  // Checkout form submit simulation
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Order Placed Successfully! Your invoice and bank payment details (JazzCash / EasyPaisa / Bank Alfalah) have been generated. We will confirm your order via WhatsApp.');
      state.cart = [];
      saveCartToStorage();
      updateCartUI();
      closeModal('checkoutModal');
      closeCartDrawer();
    });
  }
});
