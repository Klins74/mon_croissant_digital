import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const subtotal = cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  const deliveryFee = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + deliveryFee;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-heading font-semibold text-foreground">Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">Add some delicious items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems?.map((item) => (
                <div key={`${item?.id}-${item?.selectedOptions || ''}`} className="flex items-center space-x-3 bg-card rounded-lg p-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{item?.name}</h4>
                    <p className="text-sm text-muted-foreground">{formatPrice(item?.price)}</p>
                    {item?.selectedOptions && (
                      <p className="text-xs text-muted-foreground">{item?.selectedOptions}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item?.id, Math.max(1, item?.quantity - 1))}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Icon name="Minus" size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item?.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item?.id, item?.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Icon name="Plus" size={12} />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item?.id)}
                      className="w-6 h-6 rounded-full text-destructive hover:bg-destructive/10 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Trash2" size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems?.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="text-foreground">
                  {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
                </span>
              </div>
              {deliveryFee === 0 && (
                <p className="text-xs text-success">Free delivery on orders over ₸5,000</p>
              )}
              <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">{formatPrice(total)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              variant="default"
              size="lg"
              fullWidth
              onClick={onCheckout}
              className="btn-warm"
            >
              Proceed to Checkout
            </Button>

            {/* Minimum Order Notice */}
            {subtotal < 2000 && (
              <p className="text-xs text-center text-muted-foreground">
                Minimum order: ₸2,000 (Add ₸{formatPrice(2000 - subtotal)} more)
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;