import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionDiv } from './motion/MotionWrapper';
import Icon from './AppIcon';

const FullscreenImageViewer = ({ 
  isOpen, 
  onClose, 
  images = [], 
  initialIndex = 0,
  productName = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Reset state when opening/closing or changing images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Reset position and scale when changing images
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.5, 4));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.5, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Handle pinch-to-zoom (for touch devices)
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.5), 4));
  };

  // Handle drag to pan when zoomed
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    
    // If not zoomed, handle swipe navigation
    if (scale <= 1) {
      const threshold = 100;
      if (info?.offset?.x > threshold && currentIndex > 0) {
        goToPrevious();
      } else if (info?.offset?.x < -threshold && currentIndex < images.length - 1) {
        goToNext();
      }
    } else {
      // Handle panning when zoomed
      if (info?.offset) {
        setPosition(prev => ({
          x: prev.x + info.offset.x,
          y: prev.y + info.offset.y
        }));
      }
    }
  };

  const currentImage = images[currentIndex];

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <MotionDiv
          key="fullscreen-viewer"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Закрыть"
              >
                <Icon name="X" size={24} />
              </button>
              <div className="text-white">
                <h3 className="font-medium truncate max-w-[200px] sm:max-w-none">
                  {productName}
                </h3>
                <p className="text-sm text-white/70">
                  {currentIndex + 1} из {images.length}
                </p>
              </div>
            </div>

            {/* Desktop zoom controls */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Уменьшить"
              >
                <Icon name="Minus" size={20} />
              </button>
              <span className="text-white text-sm min-w-[60px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Увеличить"
              >
                <Icon name="Plus" size={20} />
              </button>
              <button
                onClick={resetZoom}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Сбросить масштаб"
              >
                <Icon name="RotateCcw" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div 
          ref={containerRef}
          className="absolute inset-0 flex items-center justify-center p-4 pt-20 pb-20"
          onWheel={handleWheel}
        >
          <motion.div
            ref={imageRef}
            className="relative max-w-full max-h-full cursor-grab active:cursor-grabbing"
            style={{
              scale,
              x: position.x,
              y: position.y,
            }}
            drag={scale > 1 ? true : 'x'}
            dragConstraints={scale > 1 ? undefined : { left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={scale > 1 ? 0 : 0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: 'grabbing' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <img
              src={currentImage}
              alt={`${productName} - изображение ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain select-none"
              draggable={false}
              onDoubleClick={() => scale === 1 ? setScale(2) : resetZoom()}
            />
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                aria-label="Предыдущее изображение"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
            )}
            
            {currentIndex < images.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                aria-label="Следующее изображение"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            )}
          </>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center space-x-2 mb-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-white shadow-lg scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Миниатюра ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Mobile zoom controls */}
          <div className="flex sm:hidden items-center justify-center space-x-4">
            <button
              onClick={handleZoomOut}
              className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Уменьшить"
            >
              <Icon name="Minus" size={20} />
            </button>
            <span className="text-white text-sm min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Увеличить"
            >
              <Icon name="Plus" size={20} />
            </button>
            <button
              onClick={resetZoom}
              className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Сбросить масштаб"
            >
              <Icon name="RotateCcw" size={20} />
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center text-white/70 text-xs mt-3 hidden sm:block">
            <p>Используйте колесо мыши для масштабирования • Двойной клик для увеличения • Стрелки для навигации • ESC для закрытия</p>
          </div>
          <div className="text-center text-white/70 text-xs mt-3 sm:hidden">
            <p>Свайп для навигации • Двойное касание для увеличения • Pinch для масштабирования</p>
          </div>
        </div>
      </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default FullscreenImageViewer;
