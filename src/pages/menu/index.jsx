import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv, cardHoverVariants } from '../../components/motion/MotionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { menuCategories, menuProducts, dietaryFilters, organizationInfo } from '../../data/menuData';
import OrganizationInfoBlocks from '../../components/OrganizationInfoBlocks';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import FullscreenImageViewer from '../../components/FullscreenImageViewer';
import ProductDetailSheet from '../../components/ProductDetailSheet';
import ImageWithFallback from '../../components/ImageWithFallback';
import SEOHead from '../../components/SEOHead';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductCard = ({ product, onViewDetails, onAddToCart, language }) => {
  const { t, tArray } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [isFlying, setIsFlying] = useState(false);

  const handleAddToCart = () => {
    setIsFlying(true);
    onAddToCart({ ...product, quantity });
    setTimeout(() => setIsFlying(false), 800);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  return (
    <MotionDiv 
      className="bg-card border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
    >
      <div className="flex items-center gap-4 p-4">
        {/* Product Image - Mobile optimized */}
        <div 
          className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted cursor-pointer"
          onClick={handleImageClick}
        >
          <ImageWithFallback
            src={product.images?.main || product.image}
            alt={t(product.name)}
            className="w-full h-full object-cover"
            priority={false}
          />
          
          {/* Badges */}
          <div className="absolute top-1 left-1 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                {t({ RU: 'Новинка', KZ: 'Жаңа', EN: 'New' })}
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                {t({ RU: 'Хит', KZ: 'Хит', EN: 'Hit' })}
              </span>
            )}
          </div>

          {/* Stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-[10px] font-medium">
                {t({ RU: 'Нет в наличии', KZ: 'Жоқ', EN: 'Out of stock' })}
              </span>
            </div>
          )}

          {/* Zoom indicator */}
          <div className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1">
            <Icon name="ZoomIn" size={12} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
              {t(product.name)}
            </h3>
            <div className="flex items-center gap-1 ml-2 shrink-0">
              <Icon name="Star" size={12} className="text-yellow-500 fill-current" />
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-2">
            {t(product.description)}
          </p>

          {/* Tags and dietary info */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {product.weight && (
              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                {product.weight}
              </span>
            )}
            {product.dietary?.includes('halal') && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {t({ RU: 'Халяль', KZ: 'Халал', EN: 'Halal' })}
              </span>
            )}
          </div>

          {/* Price and actions */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-base font-semibold text-foreground">
                ₸{product.price.toLocaleString()}
              </div>
              {product.originalPrice && (
                <div className="text-xs text-muted-foreground line-through">
                  ₸{product.originalPrice.toLocaleString()}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onViewDetails(product)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t({ RU: 'Подробнее', KZ: 'Толығырақ', EN: 'Details' })}
              >
                <Icon name="Info" size={16} />
              </button>
              
              <MotionDiv
                as="button"
                className="min-w-[44px] h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap="rest"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                aria-label={t({ RU: 'Добавить в корзину', KZ: 'Себетке қосу', EN: 'Add to cart' })}
              >
                <Icon name="Plus" size={18} />
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

const CategorySection = ({ category, products, onViewDetails, onAddToCart, isExpanded, onToggle }) => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} id={`category-${category.id}`} className="mb-6">
      {/* Category Header - Mobile optimized */}
      <MotionDiv
        className="flex items-center justify-between p-4 bg-card border border-border rounded-t-xl cursor-pointer"
        onClick={onToggle}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="rest"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-sm`}>
            <Icon name={category.icon} size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground">
              {t(category.name)}
            </h2>
            <p className="text-sm text-muted-foreground">
              {products.length} {t({ RU: 'позиций', KZ: 'дана', EN: 'items' })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-primary">
            {products.filter(p => p.inStock).length}/{products.length}
          </span>
          <MotionDiv
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
          </MotionDiv>
        </div>
      </MotionDiv>

      {/* Products List */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-card border-x border-b border-border rounded-b-xl"
          >
            <div className="divide-y divide-border">
              {products.map((product, index) => (
                <MotionDiv
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <ProductCard
                    product={product}
                    onViewDetails={onViewDetails}
                    onAddToCart={onAddToCart}
                  />
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuPage = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Handle deep linking
  const currentSection = searchParams.get('current_section');
  
  useEffect(() => {
    if (currentSection) {
      // Find product with matching section and expand its category
      const product = menuProducts.find(p => p.section === currentSection);
      if (product) {
        setExpandedCategories(prev => ({ ...prev, [product.category]: true }));
        setActiveCategory(product.category);
        // Scroll to category after a short delay
        setTimeout(() => {
          const element = document.getElementById(`category-${product.category}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else {
      // Expand first category by default
      if (menuCategories.length > 0) {
        const firstCategory = menuCategories[0].id;
        setExpandedCategories({ [firstCategory]: true });
        setActiveCategory(firstCategory);
      }
    }
  }, [currentSection]);

  // Intersection Observer for active category tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id.replace('category-', '');
          setActiveCategory(categoryId);
        }
      });
    }, observerOptions);

    // Observe all category sections
    const categorySections = document.querySelectorAll('[id^="category-"]');
    categorySections.forEach(section => observer.observe(section));

    return () => {
      categorySections.forEach(section => observer.unobserve(section));
    };
  }, [expandedCategories]);

  // Show/hide sticky nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 400; // Show after scrolling past header
      setShowStickyNav(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return menuProducts.filter(product => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const name = t(product.name).toLowerCase();
        const description = t(product.description).toLowerCase();
        const ingredients = t(product.ingredients).toLowerCase();
        
        if (!name.includes(searchLower) && 
            !description.includes(searchLower) && 
            !ingredients.includes(searchLower)) {
          return false;
        }
      }

      // Dietary filters
      if (selectedFilters.length > 0) {
        if (!selectedFilters.some(filter => product.dietary?.includes(filter))) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedFilters, t]);

  // Group products by category
  const groupedProducts = useMemo(() => {
    const grouped = {};
    menuCategories.forEach(category => {
      grouped[category.id] = filteredProducts.filter(p => p.category === category.id);
    });
    return grouped;
  }, [filteredProducts]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setProductDetailOpen(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const headerHeight = 80; // Account for sticky header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Expand category if not already expanded
    if (!expandedCategories[categoryId]) {
      setExpandedCategories(prev => ({ ...prev, [categoryId]: true }));
    }
  };

  // Get current category and product for SEO
  const currentCategoryData = currentSection 
    ? menuCategories.find(cat => {
        const product = menuProducts.find(p => p.section === currentSection);
        return product?.category === cat.id;
      })
    : null;

  const currentProductData = currentSection 
    ? menuProducts.find(p => p.section === currentSection)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <SEOHead
        title={currentProductData ? t(currentProductData.name) : t({
          RU: "Меню доставки",
          KZ: "Жеткізу мәзірі", 
          EN: "Delivery Menu"
        })}
        description={currentProductData ? t(currentProductData.description) : t({
          RU: "Заказать французскую выпечку с доставкой в Алматы. Круассаны, пирожные, хлеб. Халяль сертификат. Доставка 24/7.",
          KZ: "Алматыда жеткізумен француз нанын тапсырыңыз. Круассандар, тортиктер, нан. Халал сертификаты. Жеткізу 24/7.",
          EN: "Order French pastries with delivery in Almaty. Croissants, cakes, bread. Halal certified. Delivery 24/7."
        })}
        image={currentProductData?.images?.main || currentProductData?.image}
        url={window.location.pathname + window.location.search}
        type={currentProductData ? "product" : "website"}
        product={currentProductData}
        category={currentCategoryData}
      />

      {/* Header with language switcher */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-xl font-bold text-foreground">
              {t(organizationInfo.name)}
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Organization Info Blocks */}
      <OrganizationInfoBlocks />

      {/* Sticky Category Navigation */}
      <AnimatePresence>
        {showStickyNav && (
          <MotionDiv
            className="fixed top-16 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
                {menuCategories.map(category => {
                  const categoryProducts = groupedProducts[category.id] || [];
                  if (categoryProducts.length === 0) return null;

                  return (
                    <MotionDiv
                      key={category.id}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                        activeCategory === category.id
                          ? 'bg-primary text-primary-foreground shadow-warm scale-105'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-102'
                      }`}
                      whileHover={{ scale: activeCategory === category.id ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToCategory(category.id)}
                    >
                      <Icon name={category.icon} size={16} />
                      <span className="font-medium text-sm">{t(category.name)}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id 
                          ? 'bg-primary-foreground/20 text-primary-foreground' 
                          : 'bg-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {categoryProducts.length}
                      </span>
                    </MotionDiv>
                  );
                })}
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Search */}
        <div className="relative mb-4">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t({
              RU: "Поиск по меню...",
              KZ: "Мәзір бойынша іздеу...",
              EN: "Search menu..."
            })}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Dietary Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dietaryFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg border whitespace-nowrap transition-all ${
                selectedFilters.includes(filter.id)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-foreground border-border hover:bg-muted/50'
              }`}
            >
              <Icon name={filter.icon} size={16} className={filter.color} />
              <span className="text-sm font-medium">{t(filter.name)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {menuCategories.map(category => {
          const categoryProducts = groupedProducts[category.id] || [];
          if (categoryProducts.length === 0) return null;

          return (
            <CategorySection
              key={category.id}
              category={category}
              products={categoryProducts}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
              isExpanded={expandedCategories[category.id]}
              onToggle={() => toggleCategory(category.id)}
            />
          );
        })}

        {/* No results */}
        {Object.values(groupedProducts).every(products => products.length === 0) && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t({ RU: 'Ничего не найдено', KZ: 'Ештеңе табылмады', EN: 'Nothing found' })}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t({ 
                RU: 'Попробуйте изменить поисковый запрос или фильтры',
                KZ: 'Іздеу сұрауын немесе сүзгілерді өзгертіп көріңіз',
                EN: 'Try changing your search query or filters'
              })}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedFilters([]);
              }}
            >
              {t({ RU: 'Сбросить фильтры', KZ: 'Сүзгілерді тазалау', EN: 'Clear filters' })}
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Sheet */}
      <ProductDetailSheet
        product={selectedProduct}
        isOpen={productDetailOpen}
        onClose={() => {
          setProductDetailOpen(false);
          setSelectedProduct(null);
        }}
      />

      {/* Fullscreen Image Viewer */}
      <FullscreenImageViewer
        isOpen={imageViewerOpen}
        onClose={() => setImageViewerOpen(false)}
        images={selectedProduct?.images?.gallery || []}
        initialIndex={currentImageIndex}
        productName={selectedProduct ? t(selectedProduct.name) : ''}
      />
    </div>
  );
};

export default MenuPage;
