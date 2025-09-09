import React from 'react';
import { motion } from 'framer-motion';

// Croissant SVG Illustration
export const CroissantIllustration = ({ className = "w-24 h-24", animate = true }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={animate ? {
      rotate: [0, 2, -2, 0],
      y: [0, -2, 0]
    } : {}}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Croissant body */}
    <motion.path
      d="M20 60C20 50 30 40 45 35C60 30 80 25 85 20C90 15 85 10 80 15C75 20 60 25 45 30C30 35 15 45 15 60C15 75 25 85 40 85C55 85 70 75 75 60"
      fill="currentColor"
      className="text-amber-400"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    {/* Croissant layers */}
    <motion.path
      d="M25 55C35 50 50 45 65 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-amber-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M30 65C40 60 55 55 70 60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-amber-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
    />
  </motion.svg>
);

// Cake Slice SVG Illustration
export const CakeSliceIllustration = ({ className = "w-24 h-24", animate = true }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={animate ? {
      scale: [1, 1.02, 1],
      rotate: [0, 1, -1, 0]
    } : {}}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Cake base */}
    <motion.path
      d="M20 80L50 20L80 80H20Z"
      fill="currentColor"
      className="text-rose-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    />
    {/* Cake layers */}
    <motion.path
      d="M25 70L50 25L75 70"
      stroke="currentColor"
      strokeWidth="2"
      className="text-rose-500"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    />
    <motion.path
      d="M30 60L50 30L70 60"
      stroke="currentColor"
      strokeWidth="2"
      className="text-rose-500"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.6 }}
    />
    {/* Cherry on top */}
    <motion.circle
      cx="50"
      cy="25"
      r="3"
      fill="currentColor"
      className="text-red-500"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "bounceOut" }}
    />
    <motion.path
      d="M50 22C52 20 54 18 56 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="text-green-500"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
  </motion.svg>
);

// Bread Loaf SVG Illustration
export const BreadLoafIllustration = ({ className = "w-24 h-24", animate = true }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={animate ? {
      y: [0, -3, 0],
      rotate: [0, 0.5, -0.5, 0]
    } : {}}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Bread body */}
    <motion.ellipse
      cx="50"
      cy="60"
      rx="35"
      ry="20"
      fill="currentColor"
      className="text-amber-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    />
    {/* Bread crust lines */}
    <motion.path
      d="M20 55C30 50 45 48 50 50C55 48 70 50 80 55"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-amber-800"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.path
      d="M25 65C35 60 45 58 50 60C55 58 65 60 75 65"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-amber-800"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    />
    {/* Wheat decoration */}
    <motion.path
      d="M45 35L48 30L51 35L48 40L45 35"
      fill="currentColor"
      className="text-yellow-600"
      initial={{ scale: 0, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "bounceOut" }}
    />
    <motion.path
      d="M48 40L48 30"
      stroke="currentColor"
      strokeWidth="2"
      className="text-green-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
  </motion.svg>
);

// Coffee Cup SVG Illustration
export const CoffeeCupIllustration = ({ className = "w-24 h-24", animate = true }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={animate ? {
      rotate: [0, 1, -1, 0]
    } : {}}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Cup body */}
    <motion.path
      d="M25 35C25 30 30 25 35 25H65C70 25 75 30 75 35V65C75 70 70 75 65 75H35C30 75 25 70 25 65V35Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      className="text-slate-100"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    />
    {/* Coffee */}
    <motion.ellipse
      cx="50"
      cy="40"
      rx="20"
      ry="8"
      fill="currentColor"
      className="text-amber-800"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    />
    {/* Handle */}
    <motion.path
      d="M75 40C80 40 85 45 85 50C85 55 80 60 75 60"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      className="text-slate-400"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
    {/* Steam */}
    <motion.path
      d="M45 20C45 15 47 15 47 20C47 25 45 25 45 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-slate-300"
      animate={{
        opacity: [0.3, 1, 0.3],
        y: [0, -3, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.path
      d="M50 18C50 13 52 13 52 18C52 23 50 23 50 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-slate-300"
      animate={{
        opacity: [0.3, 1, 0.3],
        y: [0, -3, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3
      }}
    />
    <motion.path
      d="M55 20C55 15 57 15 57 20C57 25 55 25 55 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-slate-300"
      animate={{
        opacity: [0.3, 1, 0.3],
        y: [0, -3, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6
      }}
    />
  </motion.svg>
);

// Floating Food Decorations Component
export const FloatingFoodDecorations = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Croissant - Top Left */}
    <motion.div
      className="absolute top-20 left-10 text-amber-400/20"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <CroissantIllustration className="w-16 h-16" animate={false} />
    </motion.div>

    {/* Cake - Top Right */}
    <motion.div
      className="absolute top-32 right-16 text-rose-300/20"
      animate={{
        y: [0, 10, 0],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <CakeSliceIllustration className="w-20 h-20" animate={false} />
    </motion.div>

    {/* Bread - Bottom Left */}
    <motion.div
      className="absolute bottom-40 left-20 text-amber-600/20"
      animate={{
        y: [0, -8, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    >
      <BreadLoafIllustration className="w-18 h-18" animate={false} />
    </motion.div>

    {/* Coffee - Bottom Right */}
    <motion.div
      className="absolute bottom-32 right-12 text-slate-400/20"
      animate={{
        y: [0, 12, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    >
      <CoffeeCupIllustration className="w-14 h-14" animate={false} />
    </motion.div>

    {/* Additional smaller decorations */}
    <motion.div
      className="absolute top-1/2 left-1/4 text-amber-400/10"
      animate={{
        rotate: [0, 360],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <CroissantIllustration className="w-8 h-8" animate={false} />
    </motion.div>

    <motion.div
      className="absolute top-3/4 right-1/3 text-rose-300/10"
      animate={{
        rotate: [0, -360],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    >
      <CakeSliceIllustration className="w-10 h-10" animate={false} />
    </motion.div>
  </div>
);

export default {
  CroissantIllustration,
  CakeSliceIllustration,
  BreadLoafIllustration,
  CoffeeCupIllustration,
  FloatingFoodDecorations,
};
