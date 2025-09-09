import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';
import Button from './ui/Button';
import ImageWithFallback from './ImageWithFallback';
import { MotionDiv, modalVariants } from './motion/MotionWrapper';
import { dietaryFilters } from '../data/menuData';

const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(0);
  }, [product?.id]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Mock additional images for demo
  const images = [
    product?.image,
    // Add more images if available in the future
  ].filter(Boolean);

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <MotionDiv 
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <div className="relative min-h-full flex items-center justify-center p-4">
            <MotionDiv
              className="relative bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
          >
            <Icon name="X" size={16} />
          </button>

          <div className="grid lg:grid-cols-2 gap-0 max-h-[90vh] overflow-y-auto">
            {/* Left: Images */}
            <div className="relative">
              <div className="aspect-square bg-muted">
                <ImageWithFallback
                  src={images[activeImageIndex]}
                  alt={product.name}
                  priority={true}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full font-medium">
                      Новинка
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full font-medium">
                      Хит продаж
                    </span>
                  )}
                  {product.isPopular && !product.isBestseller && (
                    <span className="bg-success text-success-foreground text-sm px-3 py-1 rounded-full font-medium">
                      Популярное
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-error text-error-foreground px-4 py-2 rounded-lg text-lg font-medium">
                      Нет в наличии
                    </span>
                  </div>
                )}
              </div>

              {/* Image Thumbnails - if multiple images */}
              {images.length > 1 && (
                <div className="flex gap-2 p-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        activeImageIndex === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="p-6 lg:p-8 space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviewCount} отзывов)
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Код: {product.id}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-foreground">
                  ₸{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₸{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Dietary Information */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">Диетические особенности</h3>
                <div className="flex flex-wrap gap-2">
                  {product.dietary.map(diet => {
                    const filter = dietaryFilters.find(f => f.id === diet);
                    return filter ? (
                      <div key={diet} className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
                        <Icon name={filter.icon} size={16} className={filter.color} />
                        <span className="text-sm">{filter.name}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Ingredients & Allergens */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Состав</h3>
                  <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                </div>
                
                {product.allergens && (
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Аллергены</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.allergens.join(', ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Nutritional Information */}
              {product.nutritionalInfo && (
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Пищевая ценность (на 100г)</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Калории:</span>
                      <span>{product.nutritionalInfo.calories} ккал</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Белки:</span>
                      <span>{product.nutritionalInfo.protein}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Углеводы:</span>
                      <span>{product.nutritionalInfo.carbs}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Жиры:</span>
                      <span>{product.nutritionalInfo.fat}г</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Production Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Время приготовления:</span>
                  <span>{product.prepTime}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Доступность:</span>
                  <span>{product.availableHours}</span>
                </div>
                
                {product.technique && (
                  <div className="flex items-start space-x-2">
                    <Icon name="Info" size={16} className="text-muted-foreground mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Технология:</span>
                      <p className="text-foreground">{product.technique}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Особенности</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-accent/10 text-accent px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Section */}
              <div className="border-t border-border pt-6 space-y-4">
                {product.inStock ? (
                  <>
                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium">Количество:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Minus" size={16} />
                        </button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Plus" size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Итого:</span>
                      <span>₸{(product.price * quantity).toLocaleString()}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      onClick={handleAddToCart}
                      size="lg"
                      iconName="ShoppingCart"
                      iconPosition="left"
                      fullWidth
                      className="btn-warm"
                    >
                      Добавить в корзину
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="text-error font-medium mb-2">Товар временно недоступен</div>
                    <p className="text-sm text-muted-foreground">
                      Мы уведомим вас, когда товар появится в наличии
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Bell"
                      iconPosition="left"
                      fullWidth
                      className="mt-3"
                    >
                      Уведомить о поступлении
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </MotionDiv>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
