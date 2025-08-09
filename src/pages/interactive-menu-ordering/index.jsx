import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
// Mobile-first redesign: remove desktop filters/chips UI
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import QRCodeModal from './components/QRCodeModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

// Mock data for categories
const categories = [
  { id: 'croissants', name: 'Круассаны и венская выпечка', icon: 'Croissant', count: 8 },
  { id: 'breads', name: 'Ремесленный хлеб', icon: 'Wheat', count: 6 },
  { id: 'pastries', name: 'Французские пирожные', icon: 'Cake', count: 7 },
  { id: 'seasonal', name: 'Сезонные специальности', icon: 'Sparkles', count: 3 }
];

const InteractiveMenuOrdering = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietaryFilters, setActiveDietaryFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Mock data for dietary filters
  const dietaryFilters = [
    { id: 'halal', name: 'Халяль сертификат', icon: 'Star' },
    { id: 'vegan', name: 'Веганский', icon: 'Leaf' },
    { id: 'gluten-free', name: 'Без глютена', icon: 'Shield' },
    { id: 'sugar-free', name: 'Без сахара', icon: 'Heart' }
  ];

  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Круассан классический",
      description: "Традиционный французский круассан со слоистой маслянистой выпечкой, выпекаемый свежим каждые 2 часа",
      price: 350,
      originalPrice: null,
      image: "/Фотки/Круассан классик.png",
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
      name: "Круассан шоко",
      description: "Маслянистый круассан с премиальным бельгийским темным шоколадом",
      price: 580,
      originalPrice: null,
      image: "/Фотки/Круассан с шоколадом.png",
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
      name: "Круассан фист",
      description: "Круассан с начинкой из богатого фисташкового крема и посыпанный дроблеными фисташками",
      price: 580,
      originalPrice: null,
      image: "/Фотки/Круассан с фисташкой.png",
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
      name: "Круассан минд",
      description: "Круассан с ароматной миндальной начинкой и посыпанный миндальными лепестками",
      price: 580,
      originalPrice: null,
      image: "/Фотки/Круассан с миндалем.png",
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
      name: "Круассан сгущенка",
      description: "Сладкий круассан с начинкой из нежного сгущенного молока, вкус детства",
      price: 580,
      originalPrice: null,
      image: "/Фотки/Круассан со сгущенкой.png",
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
      image: "/Фотки/Торт Косичка с корицей.png",
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
      image: "/Фотки/Торт Косичка с корицей.png",
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
      image: "/Фотки/Чизкейк Нью Йорк.png",
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
      image: "/Фотки/Испанский чизкейк.png",
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
      image: "/Фотки/Торт медовик.png",
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
      image: "/Фотки/молочная девочка.png",
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
      image: "/Фотки/Торт вупи пай.png",
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
      image: "/Фотки/Маффин шоколадный.png",
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
      image: "/Фотки/Маффин классик с сухофруктами.png",
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
      image: "/Фотки/Кукисы классик и шоколадныеэ.png",
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
      image: "/Фотки/Кукисы классик и шоколадныеэ.png",
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
      image: "/Фотки/Круассан с сыром.png",
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

  // Mobile UI does not show per-category chips, but we still need counts for the category select if desired later
  const productsFilteredForCounts = products?.filter(product => {
    if (activeDietaryFilters?.length > 0) {
      const hasMatchingDietary = activeDietaryFilters?.some(filter => product?.dietary?.includes(filter));
      if (!hasMatchingDietary) return false;
    }
    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      return (
        product?.name?.toLowerCase()?.includes(searchLower) ||
        product?.description?.toLowerCase()?.includes(searchLower) ||
        product?.ingredients?.toLowerCase()?.includes(searchLower)
      );
    }
    return true;
  });

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
      <main className="pt-16">
        {/* Mobile toolbar */}
        <div className="sticky top-16 z-30 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            <Input
              placeholder="Поиск по меню..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
            />
            <div className="grid grid-cols-2 gap-2">
              <Select
                value={activeCategory}
                onChange={setActiveCategory}
                options={[{ value: 'all', label: 'Все' }, ...categories.map(c => ({ value: c.id, label: c.name }))]}
              />
              <div className="flex gap-2">
                <Select
                  className="flex-1"
                  value={sortBy}
                  onChange={setSortBy}
                  options={[
                    { value: 'name', label: 'По имени' },
                    { value: 'price-low', label: 'Цена: низкая → высокая' },
                    { value: 'price-high', label: 'Цена: высокая → низкая' },
                    { value: 'rating', label: 'Рейтинг' },
                    { value: 'popular', label: 'Популярное' },
                  ]}
                />
                <Button variant="outline" onClick={() => setIsFiltersOpen(true)}>
                  <Icon name="Sliders" size={16} />
                </Button>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Найдено: {filteredProducts?.length}</div>
          </div>
        </div>
        {/* Далее секция меню и остальной код ... */}
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
                  QR-меню
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsCartOpen(true)}
                  iconName="ShoppingCart"
                  iconPosition="left"
                >
                  Корзина ({cartItemCount})
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content */}
            {filteredProducts?.length === 0 ? (
              <div className="mb-12 border border-dashed border-border rounded-lg p-10 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Icon name="Search" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground mb-4">Попробуйте изменить запрос, снять диетические фильтры или выбрать другую категорию.</p>
                <Button variant="outline" onClick={() => { setActiveCategory('all'); setActiveDietaryFilters([]); setSearchTerm(''); setSortBy('name'); }}>Сбросить фильтры</Button>
              </div>
            ) : (
              <>
            {/* Organized Category Blocks (mobile layout) */}
            {activeCategory === 'all' ? (
              categories.map(category => {
                const categoryProducts = filteredProducts.filter(
                  product => product.category === category.id
                );
                if (categoryProducts.length === 0) return null;
                return (
                  <div key={category.id} id={`section-${category.id}`} className="mb-8">
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
                      <Icon name={category.icon} size={22} className="mr-2" />
                      {category.name}
                      <span className="text-muted-foreground ml-2">({categoryProducts.length})</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {categoryProducts.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onViewDetails={() => {}}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
                  <Icon name={categories.find(cat => cat.id === activeCategory)?.icon} size={22} className="mr-2" />
                  {categories.find(cat => cat.id === activeCategory)?.name}
                  <span className="text-muted-foreground ml-2">({filteredProducts.length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={() => {}}
                    />
                  ))}
                </div>
              </div>
            )}
              </>
            )}
            {/* Duplicate desktop block removed for mobile-first layout */}
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
                  Свежая выпечка 24/7
                </h3>
                <p className="text-muted-foreground">
                  Свежие круассаны и пирожные выпекаются круглосуточно для вашего удобства
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Халяль сертификат
                </h3>
                <p className="text-muted-foreground">
                  Вся наша продукция имеет халяль-сертификацию с ингредиентами премиум качества
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Быстрая доставка
                </h3>
                <p className="text-muted-foreground">
                  Быстрая доставка по Алматы с отслеживанием заказа в реальном времени
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
      {/* Mobile filters bottom sheet */}
      {isFiltersOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 bg-background rounded-t-2xl shadow-lg p-4 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Фильтры</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsFiltersOpen(false)}>Готово</Button>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Диетические предпочтения</div>
              <div className="grid grid-cols-2 gap-2">
                {dietaryFilters.map(f => (
                  <button
                    key={f.id}
                    onClick={() => handleDietaryFilterChange(f.id)}
                    className={`px-3 py-2 rounded-lg border text-sm ${activeDietaryFilters.includes(f.id) ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-foreground border-border'}`}
                  >
                    <span className="flex items-center gap-2"><Icon name={f.icon} size={16} />{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" onClick={() => { setActiveCategory('all'); setActiveDietaryFilters([]); setSearchTerm(''); setSortBy('name'); }}>Сбросить</Button>
              <Button onClick={() => setIsFiltersOpen(false)}>Показать {filteredProducts?.length}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMenuOrdering;