import React from 'react';
import { motion, useReducedMotion as useFramerReducedMotion } from 'framer-motion';

// Enhanced motion components with performance optimizations
export const MotionDiv = React.memo(motion.div);
export const MotionSection = React.memo(motion.section);
export const MotionButton = React.memo(motion.button);
export const MotionSpan = React.memo(motion.span);

// Performance-optimized motion configuration
const performanceConfig = {
  // Use GPU acceleration
  style: {
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    perspective: 1000,
  },
  // Optimize layout calculations
  layout: false,
  // Reduce render frequency for complex animations
  transition: {
    ease: 'easeOut',
    duration: 0.3,
  }
};

// Fade in animation variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide up animation variants
export const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger children animation
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale animation variants
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Hover scale animation
export const hoverScaleVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Card hover animation with lift effect
export const cardHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: { 
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Modal/drawer animation variants
export const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// Sidebar slide animation
export const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    x: "100%",
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// Badge pulse animation
export const badgePulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Add to cart fly animation
export const flyToCartVariants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: 0.3,
    opacity: 0,
    x: 300,
    y: -100,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

// Badge pulse animation for cart count
export const cartBadgeVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  }
};

// Success notification animation
export const notificationVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Enhanced hook for reduced motion preference with fallback
export const useReducedMotion = () => {
  const framerReducedMotion = useFramerReducedMotion();
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(framerReducedMotion);

  React.useEffect(() => {
    // Use Framer Motion's built-in hook as primary
    setPrefersReducedMotion(framerReducedMotion);
    
    // Fallback for older browsers
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches || framerReducedMotion);

      const handleChange = (event) => {
        setPrefersReducedMotion(event.matches);
      };

      mediaQuery.addEventListener?.('change', handleChange) || 
      mediaQuery.addListener?.(handleChange);
      
      return () => {
        mediaQuery.removeEventListener?.('change', handleChange) || 
        mediaQuery.removeListener?.(handleChange);
      };
    }
  }, [framerReducedMotion]);

  return prefersReducedMotion;
};

// Enhanced motion wrapper with accessibility and performance optimizations
export const MotionWrapper = React.memo(({ 
  children, 
  variants, 
  initial = "hidden", 
  animate = "visible", 
  exit,
  className,
  reduceMotion = true,
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, provide simplified animations
  if (prefersReducedMotion && reduceMotion) {
    const simplifiedVariants = variants ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.1 } }
    } : undefined;

    return (
      <MotionDiv
        variants={simplifiedVariants}
        initial={initial}
        animate={animate}
        exit={exit}
        className={className}
        style={{ ...performanceConfig.style, ...props.style }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </MotionDiv>
    );
  }

  // Full animations for users who don't prefer reduced motion
  return (
    <MotionDiv
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      className={className}
      style={{ ...performanceConfig.style, ...props.style }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
});

// Accessibility-aware animation variants
export const accessibleVariants = {
  // Reduced motion variants
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  },
  // Full motion variants
  full: {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }
};

// Performance monitoring hook
export const useAnimationPerformance = () => {
  const [performanceMetrics, setPerformanceMetrics] = React.useState({
    fps: 60,
    isOptimal: true
  });

  React.useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;

      if (elapsed >= 1000) {
        const fps = Math.round((frameCount * 1000) / elapsed);
        setPerformanceMetrics({
          fps,
          isOptimal: fps >= 50 // Consider 50+ FPS as optimal
        });
        
        frameCount = 0;
        startTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return performanceMetrics;
};
