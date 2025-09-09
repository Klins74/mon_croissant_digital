import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';
import { MotionDiv, notificationVariants } from './motion/MotionWrapper';

const AddToCartNotification = ({ isVisible, product, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          variants={notificationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-success text-success-foreground px-6 py-4 rounded-lg shadow-lg border border-success-foreground/20 flex items-center space-x-3">
            <div className="w-8 h-8 bg-success-foreground/20 rounded-full flex items-center justify-center">
              <Icon name="Check" size={16} className="text-success-foreground" />
            </div>

            <div className="flex-1">
              <p className="font-medium text-sm">
                Добавлено в корзину!
              </p>
              <p className="text-xs text-success-foreground/80">
                {product?.name}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full hover:bg-success-foreground/10 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={14} className="text-success-foreground" />
            </button>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default AddToCartNotification;

