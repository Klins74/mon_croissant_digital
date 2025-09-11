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
import { useToast } from '../../components/ui/Toast';

const ProductCard = ({ product, onViewDetails, onAddToCart, language }) => {
  const { t, tArray } = useLanguage();
  const { success } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isFlying, setIsFlying] = useState(false);

  const handleAddToCart = () => {
    setIsFlying(true);
    onAddToCart({ ...product, quantity });
    
    // Show success toast
    success(
      t({ RU: 'Добавлено в корзину!', KZ: 'Себетке қосылды!', EN: 'Added to cart!' }),
      t({ RU: `${t(product.name)} добавлен в корзину`, KZ: `${t(product.name)} себетке қосылды`, EN: `${t(product.name)} added to cart` })
    );
    
    setTimeout(() => setIsFlying(false), 800);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  return (
    <MotionDiv 
      className="bg-card border-b border-border last:border-b-0 hover:bg-accent/10 transition-all duration-200 hover:shadow-warm"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
    >
      <div className="p-6">
        {/* Product Header */}
        <div className="flex items-start gap-6 mb-4">
          {/* Product Image - Larger */}
          <div 
            className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-muted cursor-pointer shadow-warm"
            onClick={handleImageClick}
          >
            <ImageWithFallback
              src={product.images?.main || product.image}
              alt={t(product.name)}
              className="w-full h-full object-cover"
              priority={false}
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isNew && (
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                  {t({ RU: 'Новинка', KZ: 'Жаңа', EN: 'New' })}
                </span>
              )}
              {product.isBestseller && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                  {t({ RU: 'Хит продаж', KZ: 'Хит сату', EN: 'Bestseller' })}
                </span>
              )}
            </div>

            {/* Stock overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t({ RU: 'Нет в наличии', KZ: 'Қоймада жоқ', EN: 'Out of stock' })}
                </span>
              </div>
            )}

            {/* Zoom indicator */}
            <div className="absolute bottom-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-1.5">
              <Icon name="ZoomIn" size={14} />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 leading-tight">
                {t(product.name)}
              </h3>
              <div className="flex items-center gap-1 ml-3 shrink-0">
                <Icon name="Star" size={16} className="text-secondary fill-current" />
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-3">
              {t(product.description)}
            </p>

            {/* Nutritional Info */}
            {product.nutritionalInfo && (
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-accent/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-muted-foreground">
                    {t({ RU: 'Калории', KZ: 'Калория', EN: 'Calories' })}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {product.nutritionalInfo.calories}
                  </div>
                </div>
                <div className="bg-accent/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-muted-foreground">
                    {t({ RU: 'Белки', KZ: 'Ақуыз', EN: 'Protein' })}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {product.nutritionalInfo.protein}г
                  </div>
                </div>
                <div className="bg-accent/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-muted-foreground">
                    {t({ RU: 'Жиры', KZ: 'Май', EN: 'Fat' })}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {product.nutritionalInfo.fat}г
                  </div>
                </div>
              </div>
            )}

            {/* Tags and dietary info */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {product.weight && (
                <span className="text-xs bg-muted/80 text-foreground px-3 py-1 rounded-full font-medium">
                  {product.weight}
                </span>
              )}
              {product.dietary?.includes('halal') && (
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  {t({ RU: 'Халяль', KZ: 'Халал', EN: 'Halal' })}
                </span>
              )}
              {tArray(product.tags).slice(0, 2).map((tag, index) => (
                <span key={index} className="text-xs bg-secondary/20 text-foreground px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Price and actions */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-foreground">
                  ₸{product.price.toLocaleString()}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-foreground/80 line-through">
                    ₸{product.originalPrice.toLocaleString()}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onViewDetails(product)}
                  className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
                  aria-label={t({ RU: 'Подробнее', KZ: 'Толығырақ', EN: 'Details' })}
                >
                  <Icon name="Info" size={20} />
                </button>
                
                <MotionDiv
                  as="button"
                  className="min-w-[52px] h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm shadow-warm hover:shadow-warm-lg"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="rest"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  aria-label={t({ RU: 'Добавить в корзину', KZ: 'Себетке қосу', EN: 'Add to cart' })}
                >
                  <Icon name="Plus" size={20} />
                </MotionDiv>
              </div>
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
      {/* Category Header - Enhanced with burgundy theme */}
      <MotionDiv
        className="flex items-center justify-between p-6 bg-gradient-to-r from-[#D4A574] via-[#D4A574] to-[#D4A574] text-primary-foreground border border-primary rounded-t-2xl cursor-pointer shadow-warm hover:shadow-warm-lg filter saturate-150 contrast-110"
        onClick={onToggle}
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="rest"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-sm">
            <Icon name={category.icon} size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">
              {t(category.name)}
            </h2>
            <p className="text-sm text-white/80">
              {products.length} {t({ RU: 'позиций', KZ: 'дана', EN: 'items' })} • {products.filter(p => p.inStock).length} {t({ RU: 'в наличии', KZ: 'қоймада', EN: 'available' })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium text-white">
              {products.filter(p => p.inStock).length}/{products.length}
            </div>
            <div className="text-xs text-white/70">
              {t({ RU: 'доступно', KZ: 'бар', EN: 'available' })}
            </div>
          </div>
          <MotionDiv
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-white/20 rounded-full p-2"
          >
            <Icon name="ChevronDown" size={20} className="text-white" />
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
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden bg-card border-x border-b border-border rounded-b-2xl shadow-warm"
          >
            <div className="divide-y divide-border/50">
              {products.map((product, index) => (
                <MotionDiv
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
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
            <div className="inline-flex items-center">
              <img
                src="/logo1.png"
                alt="French Croissant"
                className="h-10 sm:h-12 md:h-14 w-auto select-none"
                loading="eager"
                decoding="async"
              />
            </div>
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
