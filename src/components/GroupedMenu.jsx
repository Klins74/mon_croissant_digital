import React, { useState, useMemo, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';
import Button from './ui/Button';
import ImageWithFallback from './ImageWithFallback';
import { LoadingState, CategorySectionSkeleton, FiltersSkeleton } from './SkeletonLoader';
import { MotionDiv, cardHoverVariants, hoverScaleVariants, flyToCartVariants, sidebarVariants } from './motion/MotionWrapper';
import { menuCategories, menuProducts, dietaryFilters, getCategoryStats } from '../data/menuData';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFlying, setIsFlying] = useState(false);

  const handleAddToCart = () => {
    setIsFlying(true);
    onAddToCart({ ...product, quantity });

    // Reset flying animation after it completes
    setTimeout(() => {
      setIsFlying(false);
    }, 800);
  };

  return (
    <MotionDiv 
      className="group bg-card hover:bg-muted/40 transition-colors border border-border rounded-none lg:rounded-xl overflow-hidden"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
    >
      {/* Row layout */}
      <div className="flex items-center gap-3 p-3 lg:p-4">
        {/* Product Image */}
        <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
        {/* Fly-to-cart animation layer */}
        {isFlying && (
          <MotionDiv
            className="absolute inset-0 z-10"
            variants={flyToCartVariants}
            initial="initial"
            animate="animate"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </MotionDiv>
        )}

        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          sizes="(max-width: 1024px) 40vw, 20vw"
        />

        {/* Badges (mini) */}
        <div className="absolute top-1 left-1 flex flex-wrap gap-1">
          {product.isNew && (
            <span className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0.5 rounded font-medium">Новинка</span>
          )}
          {product.isBestseller && (
            <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded font-medium">Хит</span>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-medium">
              Нет в наличии
            </span>
          </div>
        )}
        </div>

        {/* Middle: Name/desc */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] lg:text-base font-medium text-foreground truncate">{product.name}</h3>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Icon name="Star" size={12} className="text-warning fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          <p className="text-[13px] lg:text-[14px] text-muted-foreground line-clamp-2">{product.description}</p>
          <button onClick={() => onViewDetails(product)} className="mt-1 text-[12px] text-primary hover:underline">Подробнее</button>
        </div>

        {/* Right: price + add */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[14px] lg:text-base font-semibold text-foreground">₸{product.price.toLocaleString()}</div>
            {product.originalPrice && (
              <div className="text-[12px] text-muted-foreground line-through">₸{product.originalPrice.toLocaleString()}</div>
            )}
          </div>
          <MotionDiv
            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50"
            variants={hoverScaleVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleAddToCart}
            style={{ pointerEvents: product.inStock ? 'auto' : 'none' }}
            as="button"
            disabled={!product.inStock}
            aria-label="Добавить"
          >
            <Icon name="Plus" size={16} />
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
};

const CategorySection = ({ category, products, onViewDetails, onAddToCart }) => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const displayProducts = showAll ? products : products.slice(0, 4);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <MotionDiv
      ref={sectionRef}
      id={`category-${category.id}`}
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-warm`}>
            <Icon name={category.icon} size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {category.name}
            </h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-muted-foreground">
            {products.length} позиций
          </div>
          <div className="text-xs text-muted-foreground">
            Доступно {products.filter(p => p.inStock).length}
          </div>
        </div>
      </div>

      {/* Products List (compact rows) */}
      <div className="mb-6 divide-y divide-border border border-border rounded-xl overflow-hidden bg-card will-change-transform">
        {displayProducts.map((product, index) => (
          <MotionDiv
            key={product.id}
            initial={{ opacity: 0, y: 6 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.03 }}
          >
            <ProductCard
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Show More Button */}
      {products.length > 4 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            iconName={showAll ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {showAll ? 'Скрыть' : `Показать ещё ${products.length - 4}`}
          </Button>
        </div>
      )}
    </MotionDiv>
  );
};

const CategoryNav = ({ categories, activeCategory, onCategoryClick }) => {
  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    onCategoryClick(categoryId);
  };

  return (
    <nav className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border mb-6">
      <div className="flex items-center space-x-2 overflow-x-auto py-4 px-4">
        {categories.map(category => {
          const categoryProducts = category.count;
          return (
            <MotionDiv
              key={category.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToCategory(category.id)}
            >
              <Icon name={category.icon} size={16} />
              <span className="font-medium">{category.name}</span>
              <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">
                {categoryProducts}
              </span>
            </MotionDiv>
          );
        })}
      </div>
    </nav>
  );
};

const AdvancedFilters = ({
  searchTerm,
  onSearchChange,
  selectedDietaryFilters,
  onDietaryFilterChange,
  sortBy,
  onSortChange,
  isOpen,
  onToggle,
  totalProducts,
  onClearFilters
}) => {
  const dietaryFilters = [
    { id: 'halal', name: 'Халяль', icon: 'Star', color: 'text-green-600' },
    { id: 'vegan', name: 'Веганский', icon: 'Leaf', color: 'text-emerald-600' },
    { id: 'gluten-free', name: 'Без глютена', icon: 'Shield', color: 'text-blue-600' },
    { id: 'sugar-free', name: 'Без сахара', icon: 'Heart', color: 'text-red-600' }
  ];

  const hasActiveFilters = searchTerm || selectedDietaryFilters.length > 0 || sortBy !== 'category';

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <MotionDiv
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <button
            onClick={onToggle}
            className="flex items-center justify-between w-full p-4 bg-card rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Filter" size={20} className="text-muted-foreground" />
              <span className="font-medium">Фильтры и поиск</span>
              {hasActiveFilters && (
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full"
                >
                  Активно
                </MotionDiv>
              )}
            </div>
            <MotionDiv
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="ChevronDown" size={20} />
            </MotionDiv>
          </button>
        </MotionDiv>
      </div>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <MotionDiv
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onToggle}
            />
            
            {/* Bottom Sheet */}
            <MotionDiv
              className="absolute inset-x-0 bottom-0 bg-background rounded-t-2xl shadow-xl max-h-[85vh] overflow-hidden"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Handle */}
              <div className="flex justify-center py-3">
                <div className="w-12 h-1 bg-muted rounded-full" />
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <Icon name="Filter" size={20} className="text-primary" />
                  <h3 className="text-lg font-heading font-semibold">Фильтры и поиск</h3>
                </div>
                <button
                  onClick={onToggle}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              {/* Content */}
              <div className="overflow-y-auto px-6 py-4 space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Поиск по меню
                  </label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => onSearchChange(e.target.value)}
                      placeholder="Название, описание, ингредиенты..."
                      className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Dietary Filters */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Диетические предпочтения
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {dietaryFilters.map(filter => (
                      <MotionDiv
                        key={filter.id}
                        whileTap={{ scale: 0.95 }}
                      >
                        <label className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
                          <input
                            type="checkbox"
                            checked={selectedDietaryFilters.includes(filter.id)}
                            onChange={() => onDietaryFilterChange(filter.id)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            selectedDietaryFilters.includes(filter.id)
                              ? 'bg-primary border-primary text-primary-foreground'
                              : 'border-muted-foreground'
                          }`}>
                            {selectedDietaryFilters.includes(filter.id) && (
                              <Icon name="Check" size={12} />
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name={filter.icon} size={16} className={filter.color} />
                            <span className="text-sm font-medium">{filter.name}</span>
                          </div>
                        </label>
                      </MotionDiv>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Сортировка
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'category', label: 'По категориям', icon: 'Grid3X3' },
                      { value: 'name', label: 'По названию А-Я', icon: 'SortAsc' },
                      { value: 'price-low', label: 'Цена: низкая → высокая', icon: 'TrendingUp' },
                      { value: 'price-high', label: 'Цена: высокая → низкая', icon: 'TrendingDown' },
                      { value: 'rating', label: 'По рейтингу', icon: 'Star' },
                      { value: 'popular', label: 'Популярное', icon: 'Heart' }
                    ].map(option => (
                      <MotionDiv
                        key={option.value}
                        whileTap={{ scale: 0.98 }}
                      >
                        <label className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
                          <input
                            type="radio"
                            name="sortBy"
                            value={option.value}
                            checked={sortBy === option.value}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            sortBy === option.value
                              ? 'bg-primary border-primary'
                              : 'border-muted-foreground'
                          }`}>
                            {sortBy === option.value && (
                              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                            )}
                          </div>
                          <Icon name={option.icon} size={16} className="text-muted-foreground" />
                          <span className="text-sm font-medium">{option.label}</span>
                        </label>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    Найдено позиций: <span className="font-medium text-foreground">{totalProducts}</span>
                  </span>
                  {hasActiveFilters && (
                    <button
                      onClick={onClearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Сбросить все
                    </button>
                  )}
                </div>
                <button
                  onClick={onToggle}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Применить фильтры
                </button>
              </div>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop Filters - Always visible */}
      <div className="hidden lg:block bg-card rounded-lg border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-foreground">Фильтры и поиск</h3>
          {hasActiveFilters && (
            <MotionDiv
              className="text-xs text-primary font-medium cursor-pointer hover:underline"
              onClick={onClearFilters}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Сбросить все
            </MotionDiv>
          )}
        </div>

        <div className="space-y-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Поиск по товарам
            </label>
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Название, описание, ингредиенты..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Dietary Filters */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Диетические предпочтения
            </label>
            <div className="grid grid-cols-2 gap-3">
              {dietaryFilters.map(filter => (
                <MotionDiv
                  key={filter.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedDietaryFilters.includes(filter.id)
                      ? 'border-primary bg-primary/5 shadow-warm'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => onDietaryFilterChange(filter.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon name={filter.icon} size={18} className={filter.color} />
                  <span className="text-sm font-medium">{filter.name}</span>
                  {selectedDietaryFilters.includes(filter.id) && (
                    <Icon name="Check" size={16} className="text-primary ml-auto" />
                  )}
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Сортировка
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="category">По категориям</option>
              <option value="name">По названию А-Я</option>
              <option value="price-low">Цена: низкая → высокая</option>
              <option value="price-high">Цена: высокая → низкая</option>
              <option value="rating">По рейтингу</option>
              <option value="popular">Популярное</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filters - Collapsible */}
      <MotionDiv
        className="lg:hidden"
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        <div className="bg-card rounded-lg border border-border p-4 mb-4">
          <div className="space-y-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Поиск по товарам
              </label>
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Название, описание..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Dietary Filters */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Диетические предпочтения
              </label>
              <div className="space-y-2">
                {dietaryFilters.map(filter => (
                  <MotionDiv
                    key={filter.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedDietaryFilters.includes(filter.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => onDietaryFilterChange(filter.id)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon name={filter.icon} size={18} className={filter.color} />
                    <span className="text-sm font-medium">{filter.name}</span>
                    {selectedDietaryFilters.includes(filter.id) && (
                      <Icon name="Check" size={16} className="text-primary ml-auto" />
                    )}
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Сортировка
              </label>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="category">По категориям</option>
                <option value="name">По названию</option>
                <option value="price-low">Цена: низкая → высокая</option>
                <option value="price-high">Цена: высокая → низкая</option>
                <option value="rating">По рейтингу</option>
                <option value="popular">Популярное</option>
              </select>
            </div>

            {hasActiveFilters && (
              <MotionDiv
                className="pt-4 border-t border-border"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={onClearFilters}
                  className="w-full py-2 text-primary font-medium hover:underline"
                >
                  Сбросить все фильтры
                </button>
              </MotionDiv>
            )}
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

const GroupedMenu = ({ onViewDetails, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedDietaryFilters, setSelectedDietaryFilters] = useState([]);
  const [sortBy, setSortBy] = useState('category');
  const [activeCategory, setActiveCategory] = useState('');
  const [isCategoryNavVisible, setIsCategoryNavVisible] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [showFilterResults, setShowFilterResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const categoryStats = useMemo(() => getCategoryStats(), []);
  const menuRef = useRef(null);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setShowFilterResults(searchTerm.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Simulate loading on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 1 second loading

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for active category tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
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
  }, []);

  // Show/hide category nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const menuSection = menuRef.current;
      if (!menuSection) return;

      const rect = menuSection.getBoundingClientRect();
      const isVisible = rect.top <= 100 && rect.bottom >= 200;
      setIsCategoryNavVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter and group products
  const filteredProducts = useMemo(() => {
    return menuProducts.filter(product => {
      // Search filter with debounced term
      if (debouncedSearchTerm) {
        const searchLower = debouncedSearchTerm.toLowerCase();
        if (!product.name.toLowerCase().includes(searchLower) &&
            !product.description.toLowerCase().includes(searchLower) &&
            !product.ingredients.toLowerCase().includes(searchLower) &&
            !product.tags?.some(tag => tag.toLowerCase().includes(searchLower))) {
          return false;
        }
      }

      // Dietary filters
      if (selectedDietaryFilters.length > 0) {
        if (!selectedDietaryFilters.some(filter => product.dietary.includes(filter))) {
          return false;
        }
      }

      return true;
    });
  }, [debouncedSearchTerm, selectedDietaryFilters]);

  const groupedProducts = useMemo(() => {
    const grouped = {};
    
    categoryStats.forEach(category => {
      grouped[category.id] = filteredProducts.filter(product => 
        product.category === category.id
      );
    });

    // Sort products within each category
    Object.keys(grouped).forEach(categoryId => {
      grouped[categoryId].sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'popular':
            return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
          default:
            return a.name.localeCompare(b.name);
        }
      });
    });

    return grouped;
  }, [filteredProducts, categoryStats, sortBy]);

  const handleDietaryFilterChange = (filterId) => {
    setSelectedDietaryFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSelectedDietaryFilters([]);
    setSortBy('category');
    setIsFiltersOpen(false);
  };

  const totalProducts = filteredProducts.length;

  return (
    <div ref={menuRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Advanced Filters */}
      <LoadingState
        isLoading={isLoading}
        skeleton={FiltersSkeleton}
      >
        <AdvancedFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDietaryFilters={selectedDietaryFilters}
          onDietaryFilterChange={handleDietaryFilterChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
          isOpen={isFiltersOpen}
          onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
          totalProducts={totalProducts}
          onClearFilters={handleClearFilters}
        />
      </LoadingState>

      {/* Filter Results Summary */}
      {showFilterResults && (
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Search" size={20} className="text-primary" />
              <span className="font-medium text-foreground">
                Результаты поиска: <span className="text-primary">{totalProducts}</span> позиций
              </span>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setShowFilterResults(false);
              }}
              className="text-primary hover:underline text-sm"
            >
              Очистить
            </button>
          </div>
          {debouncedSearchTerm && (
            <p className="mt-2 text-sm text-muted-foreground">
              По запросу "<span className="font-medium">{debouncedSearchTerm}</span>"
            </p>
          )}
        </MotionDiv>
      )}

      {/* Category Navigation - Only show when menu is in view */}
      {isCategoryNavVisible && (
        <CategoryNav
          categories={categoryStats.filter(category => groupedProducts[category.id]?.length > 0)}
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
        />
      )}

      {/* Menu Sections */}
      {totalProducts === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Ничего не найдено</h3>
          <p className="text-muted-foreground mb-4">
            Попробуйте изменить поисковый запрос или снять фильтры
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedDietaryFilters([]);
            }}
          >
            Сбросить фильтры
          </Button>
        </div>
      ) : (
        <LoadingState
          isLoading={isLoading}
          skeleton={() => (
            <div className="space-y-12">
              {categoryStats.slice(0, 3).map(category => (
                <CategorySectionSkeleton key={category.id} categoryName={category.name} />
              ))}
            </div>
          )}
        >
          {categoryStats.map(category => {
            const categoryProducts = groupedProducts[category.id] || [];

            if (categoryProducts.length === 0) return null;

            return (
              <CategorySection
                key={category.id}
                category={category}
                products={categoryProducts}
                onViewDetails={onViewDetails}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </LoadingState>
      )}
    </div>
  );
};

export default GroupedMenu;
