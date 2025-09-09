import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';
import Button from './ui/Button';
import ImageWithFallback from './ImageWithFallback';
import { MotionDiv, sidebarVariants } from './motion/MotionWrapper';
import { useCart } from '../contexts/CartContext';

const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    cartItemCount,
    cartTotal,
    isCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    closeCart,
  } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <MotionDiv 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          {/* Sidebar */}
          <MotionDiv 
            className="absolute inset-y-0 right-0 w-full max-w-md bg-background shadow-xl"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-heading font-semibold text-foreground">
            Корзина ({cartItemCount})
          </h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShoppingCart" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Корзина пуста
                </h3>
                <p className="text-muted-foreground mb-4">
                  Добавьте товары из нашего меню
                </p>
                <Button
                  onClick={() => {
                    closeCart();
                    navigate('/interactive-menu-ordering');
                  }}
                  iconName="UtensilsCrossed"
                  iconPosition="left"
                >
                  Открыть меню
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border"
                  >
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        ₸{item.price.toLocaleString()} × {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        ₸{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted transition-colors"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-xs hover:bg-muted transition-colors"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-error transition-colors flex-shrink-0"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border p-4 space-y-4">
                {/* Clear Cart Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  iconName="Trash2"
                  iconPosition="left"
                  className="text-muted-foreground hover:text-error"
                >
                  Очистить корзину
                </Button>

                {/* Total */}
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Итого:</span>
                  <span>₸{cartTotal.toLocaleString()}</span>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  size="lg"
                  iconName="CreditCard"
                  iconPosition="left"
                  fullWidth
                  className="btn-warm"
                >
                  Оформить заказ
                </Button>

                {/* Continue Shopping */}
                <Button
                  variant="outline"
                  onClick={() => {
                    closeCart();
                    navigate('/interactive-menu-ordering');
                  }}
                  fullWidth
                >
                  Продолжить покупки
                </Button>
              </div>
            </>
          )}
        </div>
      </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
