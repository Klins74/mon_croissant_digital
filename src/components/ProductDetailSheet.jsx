import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv, cardHoverVariants } from './motion/MotionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import FullscreenImageViewer from './FullscreenImageViewer';
import ImageWithFallback from './ImageWithFallback';
import Icon from './AppIcon';
import Button from './ui/Button';

const ProductDetailSheet = ({ product, isOpen, onClose }) => {
  const { t, tArray } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedImageIndex(0);
      setActiveTab('details');
    }
  }, [product]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      onClose();
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setImageViewerOpen(true);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  if (!product) return null;

  const images = product.images?.gallery || [product.images?.main || product.image];
  const totalPrice = product.price * quantity;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionDiv
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <MotionDiv
            className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl shadow-2xl max-h-[95vh] overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Handle */}
            <div className="flex justify-center py-3 border-b border-border">
              <div className="w-12 h-1 bg-muted rounded-full" />
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto pb-24" style={{ maxHeight: 'calc(95vh - 120px)' }}>
              {/* Header */}
              <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
                <div className="flex items-center justify-between p-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-foreground truncate">
                      {t(product.name)}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviewCount} {t({ RU: 'отзывов', KZ: 'пікір', EN: 'reviews' })})
                        </span>
                      </div>
                      {product.weight && (
                        <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          {product.weight}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-muted transition-colors ml-4"
                    aria-label={t({ RU: 'Закрыть', KZ: 'Жабу', EN: 'Close' })}
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="p-4">
                <div className="relative mb-4">
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted cursor-pointer"
                    onClick={() => handleImageClick(selectedImageIndex)}
                  >
                    <ImageWithFallback
                      src={images[selectedImageIndex]}
                      alt={t(product.name)}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Zoom indicator */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2">
                      <Icon name="ZoomIn" size={16} />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {t({ RU: 'Новинка', KZ: 'Жаңа', EN: 'New' })}
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {t({ RU: 'Хит продаж', KZ: 'Хит сату', EN: 'Bestseller' })}
                        </span>
                      )}
                      {product.dietary?.includes('halal') && (
                        <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {t({ RU: 'Халяль', KZ: 'Халал', EN: 'Halal' })}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail navigation */}
                  {images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                            index === selectedImageIndex
                              ? 'border-primary shadow-warm scale-105'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <ImageWithFallback
                            src={image}
                            alt={`${t(product.name)} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground">
                    ₸{product.price.toLocaleString()}
                  </div>
                  {product.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">
                      ₸{product.originalPrice.toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Tabs */}
                <div className="mb-6">
                  <div className="flex border-b border-border mb-4">
                    {[
                      { id: 'details', label: { RU: 'Описание', KZ: 'Сипаттама', EN: 'Details' } },
                      { id: 'ingredients', label: { RU: 'Состав', KZ: 'Құрамы', EN: 'Ingredients' } },
                      { id: 'nutrition', label: { RU: 'Пищевая ценность', KZ: 'Қоректік құндылық', EN: 'Nutrition' } }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {t(tab.label)}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[120px]">
                    {activeTab === 'details' && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <p className="text-foreground leading-relaxed">
                          {t(product.detailedDescription) || t(product.description)}
                        </p>
                        
                        {product.technique && (
                          <div>
                            <h4 className="font-medium text-foreground mb-2">
                              {t({ RU: 'Технология приготовления', KZ: 'Дайындау технологиясы', EN: 'Preparation technique' })}
                            </h4>
                            <p className="text-muted-foreground">{t(product.technique)}</p>
                          </div>
                        )}

                        {product.prepTime && (
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {t({ RU: 'Время приготовления:', KZ: 'Дайындау уақыты:', EN: 'Prep time:' })} {t(product.prepTime)}
                            </span>
                          </div>
                        )}

                        {tArray(product.tags).length > 0 && (
                          <div>
                            <h4 className="font-medium text-foreground mb-2">
                              {t({ RU: 'Теги', KZ: 'Тегтер', EN: 'Tags' })}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {tArray(product.tags).map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </MotionDiv>
                    )}

                    {activeTab === 'ingredients' && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-medium text-foreground mb-2">
                            {t({ RU: 'Ингредиенты', KZ: 'Ингредиенттер', EN: 'Ingredients' })}
                          </h4>
                          <p className="text-foreground">{t(product.ingredients)}</p>
                        </div>

                        {tArray(product.allergens).length > 0 && (
                          <div>
                            <h4 className="font-medium text-foreground mb-2">
                              {t({ RU: 'Аллергены', KZ: 'Аллергендер', EN: 'Allergens' })}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {tArray(product.allergens).map((allergen, index) => (
                                <span
                                  key={index}
                                  className="bg-warning/10 text-warning-foreground border border-warning/20 px-3 py-1 rounded-full text-sm"
                                >
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </MotionDiv>
                    )}

                    {activeTab === 'nutrition' && product.nutritionalInfo && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { key: 'calories', label: { RU: 'Калории', KZ: 'Калория', EN: 'Calories' }, unit: { RU: 'ккал', KZ: 'ккал', EN: 'kcal' } },
                            { key: 'protein', label: { RU: 'Белки', KZ: 'Ақуыз', EN: 'Protein' }, unit: { RU: 'г', KZ: 'г', EN: 'g' } },
                            { key: 'carbs', label: { RU: 'Углеводы', KZ: 'Көмірсулар', EN: 'Carbs' }, unit: { RU: 'г', KZ: 'г', EN: 'g' } },
                            { key: 'fat', label: { RU: 'Жиры', KZ: 'Майлар', EN: 'Fat' }, unit: { RU: 'г', KZ: 'г', EN: 'g' } },
                            { key: 'fiber', label: { RU: 'Клетчатка', KZ: 'Талшық', EN: 'Fiber' }, unit: { RU: 'г', KZ: 'г', EN: 'g' } },
                            { key: 'sugar', label: { RU: 'Сахар', KZ: 'Қант', EN: 'Sugar' }, unit: { RU: 'г', KZ: 'г', EN: 'g' } }
                          ].map(item => (
                            product.nutritionalInfo[item.key] && (
                              <div key={item.key} className="bg-muted rounded-lg p-3">
                                <div className="text-sm text-muted-foreground">{t(item.label)}</div>
                                <div className="text-lg font-semibold text-foreground">
                                  {product.nutritionalInfo[item.key]} {t(item.unit)}
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </MotionDiv>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border p-4">
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center bg-muted rounded-xl overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-muted-foreground/10 transition-colors"
                    disabled={quantity <= 1}
                    aria-label={t({ RU: 'Уменьшить количество', KZ: 'Санын азайту', EN: 'Decrease quantity' })}
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <div className="px-4 py-3 font-medium text-foreground min-w-[60px] text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-muted-foreground/10 transition-colors"
                    aria-label={t({ RU: 'Увеличить количество', KZ: 'Санын көбейту', EN: 'Increase quantity' })}
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <MotionDiv
                  className="flex-1"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="rest"
                >
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full py-4 text-base font-semibold"
                    size="lg"
                  >
                    {product.inStock ? (
                      <>
                        {t({ RU: 'Добавить в корзину', KZ: 'Себетке қосу', EN: 'Add to cart' })}
                        <span className="ml-2">₸{totalPrice.toLocaleString()}</span>
                      </>
                    ) : (
                      t({ RU: 'Нет в наличии', KZ: 'Қоймада жоқ', EN: 'Out of stock' })
                    )}
                  </Button>
                </MotionDiv>
              </div>
            </div>

            {/* Fullscreen Image Viewer */}
            <FullscreenImageViewer
              isOpen={imageViewerOpen}
              onClose={() => setImageViewerOpen(false)}
              images={images}
              initialIndex={selectedImageIndex}
              productName={t(product.name)}
            />
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailSheet;
