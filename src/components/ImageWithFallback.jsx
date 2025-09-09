import React, { useState, useEffect, useRef } from 'react';
import { MotionDiv } from './motion/MotionWrapper';
import Icon from './AppIcon';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallback = '/assets/images/no_image.png',
  loading = 'lazy',
  blurDataURL = null,
  priority, // strip non-standard prop so it won't hit <img>
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Blur-up effect with placeholder
  const [blurSrc, setBlurSrc] = useState(blurDataURL || '/assets/images/no_image.png');

  useEffect(() => {
    if (loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
      setImageSrc(src);
    }
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageSrc(fallback);
    setError(true);
    setIsLoading(false);
  };

  return (
    <div ref={imgRef} className={`relative ${className} overflow-hidden`}>
      {/* Blur-up placeholder */}
      {isVisible && isLoading && (
        <MotionDiv
          initial={{ opacity: 1, filter: 'blur(20px)' }}
          animate={{ 
            opacity: isLoading ? 1 : 0,
            filter: isLoading ? 'blur(20px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 bg-muted"
        >
          <img
            src={blurSrc}
            alt=""
            className="w-full h-full object-cover scale-110"
          />
        </MotionDiv>
      )}

      {/* Main image with fade-in */}
      {isVisible && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isLoading ? 0 : 1,
            scale: isLoading ? 1.05 : 1
          }}
          transition={{ 
            opacity: { duration: 0.4, delay: isLoading ? 0.2 : 0 },
            scale: { duration: 0.6, ease: 'easeOut' }
          }}
          className="absolute inset-0"
        >
          <img
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover rounded-lg ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            {...props}
          />
        </MotionDiv>
      )}

      {/* Fallback for error state */}
      {error && (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80 rounded-lg"
        >
          <div className="text-center">
            <Icon name="Image" size={32} className="text-muted-foreground mb-2" />
            <p className="text-xs text-muted-foreground">{alt}</p>
          </div>
        </MotionDiv>
      )}

      {/* Loading shimmer effect */}
      {isVisible && isLoading && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
