import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setQuantity(1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-warm transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product?.isNew && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            New
          </div>
        )}
        {product?.isPopular && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
        )}
        {!product?.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
        
        {/* Dietary Icons */}
        <div className="absolute bottom-3 left-3 flex space-x-1">
          {product?.dietary?.map((diet) => (
            <div
              key={diet}
              className="bg-white/90 backdrop-blur-sm rounded-full p-1.5"
              title={diet}
            >
              <Icon
                name={
                  diet === 'halal' ? 'Star' :
                  diet === 'vegan' ? 'Leaf' :
                  diet === 'gluten-free' ? 'Shield' : 'Check'
                }
                size={12}
                className="text-primary"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-heading font-semibold text-foreground line-clamp-2">
            {product?.name}
          </h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="Info" size={16} />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product?.description}
        </p>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mb-4 p-3 bg-muted rounded-lg">
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-foreground">Ingredients:</span>
                <p className="text-xs text-muted-foreground">{product?.ingredients}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-foreground">Technique:</span>
                <p className="text-xs text-muted-foreground">{product?.technique}</p>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-medium text-foreground">Prep Time:</span>
                <span className="text-xs text-muted-foreground">{product?.prepTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Price and Rating */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl font-bold text-foreground">{formatPrice(product?.price)}</span>
            {product?.originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {formatPrice(product?.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
            <span className="text-sm text-muted-foreground">{product?.rating}</span>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        {product?.inStock ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon name="Minus" size={14} />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon name="Plus" size={14} />
              </button>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={handleAddToCart}
              iconName="ShoppingCart"
              iconPosition="left"
              className="btn-warm"
            >
              Add
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="sm" disabled fullWidth>
            Out of Stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;