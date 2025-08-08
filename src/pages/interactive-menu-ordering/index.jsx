import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import CategoryFilter from './components/CategoryFilter';
import DietaryFilter from './components/DietaryFilter';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import QRCodeModal from './components/QRCodeModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const InteractiveMenuOrdering = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietaryFilters, setActiveDietaryFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Items', icon: 'Grid3X3', count: 24 },
    { id: 'croissants', name: 'Croissants & Viennoiserie', icon: 'Croissant', count: 8 },
    { id: 'breads', name: 'Artisan Breads', icon: 'Wheat', count: 6 },
    { id: 'pastries', name: 'French Pastries', icon: 'Cake', count: 7 },
    { id: 'seasonal', name: 'Seasonal Specialties', icon: 'Sparkles', count: 3 }
  ];

  // Mock data for dietary filters
  const dietaryFilters = [
    { id: 'halal', name: 'Halal Certified', icon: 'Star' },
    { id: 'vegan', name: 'Vegan', icon: 'Leaf' },
    { id: 'gluten-free', name: 'Gluten Free', icon: 'Shield' },
    { id: 'sugar-free', name: 'Sugar Free', icon: 'Heart' }
  ];

  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Круассан классический",
      description: "Традиционный французский круассан со слоистой маслянистой выпечкой, выпекаемый свежим каждые 2 часа",
      price: 350,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Французское масло, органическая мука, свежие дрожжи, морская соль, молоко",
      technique: "Традиционная техника ламинирования с 81 слоем масла",
      prepTime: "2 часа",
      nutritionalInfo: { calories: 280, protein: 6, carbs: 32, fat: 14 }
    },
    {
      id: 2,
      name: "Кр шоко",
      description: "Маслянистый круассан с премиальным бельгийским темным шоколадом",
      price: 580,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.9,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Тесто круассан, бельгийский темный шоколад (70% какао)",
      technique: "Ручная раскатка с премиальным шоколадом, двойная расстойка",
      prepTime: "2.5 часа"
    },
    {
      id: 3,
      name: "Кр фист",
      description: "Круассан с фисташковым кремом и хрустящими фисташками",
      price: 580,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: true,
      isPopular: false,
      ingredients: "Тесто круассан, фисташковый крем, дробленые фисташки",
      technique: "Начинка после первой выпечки, финишная выпечка с фисташками",
      prepTime: "2.5 часа"
    },
    {
      id: 4,
      name: "Кр минд",
      description: "Круассан с нежным миндальным кремом и миндальными лепестками",
      price: 580,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.9,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Тесто круассан, миндальный крем, миндальные лепестки, сахарная пудра",
      technique: "Начинка после первой выпечки, затем финишная выпечка с миндалем",
      prepTime: "2.5 часа"
    },
    {
      id: 5,
      name: "Кр сгущенка",
      description: "Круассан с домашней сгущенкой и карамельными нотками",
      price: 580,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Тесто круассан, домашняя сгущенка, сливочная карамель",
      technique: "Наполнение сгущенкой после выпечки, карамелизация",
      prepTime: "2 часа"
    },
    {
      id: 6,
      name: "Косички с корицей",
      description: "Воздушная плетеная выпечка с ароматной корицей и сахарной глазурью",
      price: 500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.7,
      inStock: true,
      isNew: false,
      isPopular: false,
      ingredients: "Дрожжевое тесто, корица, сливочное масло, сахарная глазурь",
      technique: "Плетение в три слоя с коричной начинкой",
      prepTime: "1.5 часа"
    },
    {
      id: 7,
      name: "Косичка фист",
      description: "Плетеная выпечка с фисташковой начинкой и хрустящими орехами",
      price: 550,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: true,
      isPopular: false,
      ingredients: "Дрожжевое тесто, фисташковая паста, дробленые фисташки",
      technique: "Плетение с фисташковой начинкой, посыпка орехами",
      prepTime: "1.5 часа"
    },
    {
      id: 8,
      name: "Чизкейк Нью Йорк",
      description: "Классический нью-йоркский чизкейк с кремовой текстурой и песочной основой",
      price: 680,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.9,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Сливочный сыр, органические яйца, песочная основа, ванилин",
      technique: "Водяная баня, медленное охлаждение для идеальной текстуры",
      prepTime: "4 часа"
    },
    {
      id: 9,
      name: "Испанский чиз",
      description: "Баскский чизкейк с карамелизированной корочкой и нежной серединкой",
      price: 650,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: true,
      isPopular: false,
      ingredients: "Сливочный сыр, сливки, яйца, мука, ванильный экстракт",
      technique: "Высокотемпературная выпечка для карамелизации",
      prepTime: "3 часа"
    },
    {
      id: 10,
      name: "Торт медовик",
      description: "Многослойный медовый торт с нежным кремом и медовыми коржами",
      price: 750,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.9,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Натуральный мед, сметанный крем, мука, яйца, сода",
      technique: "Тонкие медовые коржи, выдержка 8 часов для пропитки",
      prepTime: "8 часов"
    },
    {
      id: 11,
      name: "Торт молоч девочка",
      description: "Нежный молочный торт с воздушными бисквитами и сливочным кремом",
      price: 750,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.8,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Бисквит, молочный крем, сгущенное молоко, ванилин",
      technique: "Воздушный бисквит, многослойная сборка с кремом",
      prepTime: "4 часа"
    },
    {
      id: 12,
      name: "Торт вупи пай",
      description: "Американский торт-пирог с шоколадными коржами и зефирным кремом",
      price: 700,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.7,
      inStock: true,
      isNew: true,
      isPopular: false,
      ingredients: "Шоколадные коржи, зефирный крем, какао-порошок",
      technique: "Мягкие шоколадные коржи, воздушный зефирный крем",
      prepTime: "3 часа"
    },
    {
      id: 13,
      name: "Маффин шоколадный",
      description: "Влажный шоколадный маффин с кусочками темного шоколада",
      price: 450,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.6,
      inStock: true,
      isNew: false,
      isPopular: false,
      ingredients: "Шоколад, мука, яйца, сливочное масло, какао",
      technique: "Быстрое смешивание, выпечка при высокой температуре",
      prepTime: "45 минут"
    },
    {
      id: 14,
      name: "Маффин класс с сухофруктами",
      description: "Классический маффин с изюмом, курагой и орехами",
      price: 470,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.5,
      inStock: true,
      isNew: false,
      isPopular: false,
      ingredients: "Мука, изюм, курага, грецкие орехи, ванильный экстракт",
      technique: "Замачивание сухофруктов, равномерное распределение",
      prepTime: "1 час"
    },
    {
      id: 15,
      name: "Кукисы классик",
      description: "Хрустящее печенье по классическому рецепту с ванильным ароматом",
      price: 220,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.4,
      inStock: true,
      isNew: false,
      isPopular: false,
      ingredients: "Мука, сливочное масло, сахар, яйца, ванилин",
      technique: "Классическое сливание масла с сахаром, формовка",
      prepTime: "30 минут"
    },
    {
      id: 16,
      name: "Кукисы шоко",
      description: "Шоколадное печенье с кусочками молочного шоколада",
      price: 220,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      category: 'pastries',
      dietary: ['halal'],
      rating: 4.5,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Мука, какао, молочный шоколад, сливочное масло",
      technique: "Двойной шоколад, кусочки для текстуры",
      prepTime: "30 минут"
    },
    {
      id: 17,
      name: "Круассан с сыром",
      description: "Слоеный круассан с расплавленным сыром и зеленью",
      price: 550,
      originalPrice: null,
      image: "/assets/images/_-1754647262992.png",
      category: 'croissants',
      dietary: ['halal'],
      rating: 4.7,
      inStock: true,
      isNew: false,
      isPopular: true,
      ingredients: "Тесто круассан, сыр моцарелла, свежая зелень",
      technique: "Начинка сыром перед финальной выпечкой",
      prepTime: "2 часа"
    }
  ];

  // Load language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Filter and sort products
  const filteredProducts = products?.filter(product => {
      // Category filter
      if (activeCategory !== 'all' && product?.category !== activeCategory) {
        return false;
      }
      
      // Dietary filters
      if (activeDietaryFilters?.length > 0) {
        const hasMatchingDietary = activeDietaryFilters?.some(filter => 
          product?.dietary?.includes(filter)
        );
        if (!hasMatchingDietary) return false;
      }
      
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm?.toLowerCase();
        return (product?.name?.toLowerCase()?.includes(searchLower) ||
        product?.description?.toLowerCase()?.includes(searchLower) || product?.ingredients?.toLowerCase()?.includes(searchLower));
      }
      
      return true;
    })?.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a?.price - b?.price;
        case 'price-high':
          return b?.price - a?.price;
        case 'rating':
          return b?.rating - a?.rating;
        case 'popular':
          return b?.isPopular - a?.isPopular;
        default:
          return a?.name?.localeCompare(b?.name);
      }
    });

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleDietaryFilterChange = (filterId) => {
    setActiveDietaryFilters(prev => 
      prev?.includes(filterId)
        ? prev?.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev?.find(item => item?.id === product?.id);
      if (existingItem) {
        return prev?.map(item =>
          item?.id === product?.id
            ? { ...item, quantity: item?.quantity + product?.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev?.map(item =>
        item?.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev?.filter(item => item?.id !== productId));
  };

  const handleCheckout = () => {
    // Navigate to checkout or delivery information page
    window.location.href = '/delivery-ordering-information';
  };

  const cartItemCount = cartItems?.reduce((sum, item) => sum + item?.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Интерактивное меню и заказы
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Откройте для себя наш подлинный французский ассортимент выпечки с круглосуточной доступностью. 
                Фильтруйте по диетическим предпочтениям и заказывайте с немедленной доставкой.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setIsQRModalOpen(true)}
                  iconName="QrCode"
                  iconPosition="left"
                  className="btn-warm"
                >
                  View QR Menu
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsCartOpen(true)}
                  iconName="ShoppingCart"
                  iconPosition="left"
                >
                  Cart ({cartItemCount})
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-8">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              
              <DietaryFilter
                filters={dietaryFilters}
                activeFilters={activeDietaryFilters}
                onFilterChange={handleDietaryFilterChange}
              />
              
              <SearchBar
                onSearch={setSearchTerm}
                onSortChange={setSortBy}
                sortBy={sortBy}
              />
            </div>

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                {activeCategory === 'all' ? 'All Items' : 
                 categories?.find(cat => cat?.id === activeCategory)?.name}
                <span className="text-muted-foreground ml-2">
                  ({filteredProducts?.length} items)
                </span>
              </h2>
              
              {/* View Toggle */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Icon name="Grid3X3" size={20} />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="List" size={20} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts?.map((product) => (
                  <ProductCard
                    key={product?.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={() => {}}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveDietaryFilters([]);
                    setSearchTerm('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  24/7 Fresh Baking
                </h3>
                <p className="text-muted-foreground">
                  Fresh croissants and pastries baked around the clock for your convenience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Halal Certified
                </h3>
                <p className="text-muted-foreground">
                  All our products are halal certified with premium quality ingredients
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Fast Delivery
                </h3>
                <p className="text-muted-foreground">
                  Quick delivery across Almaty with real-time order tracking
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center shadow-warm-lg hover:scale-105 transition-all duration-300 z-40"
        >
          <Icon name="ShoppingCart" size={24} />
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cartItemCount}
          </span>
        </button>
      )}
    </div>
  );
};

export default InteractiveMenuOrdering;