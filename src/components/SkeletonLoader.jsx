import React from 'react';
import { MotionDiv } from './motion/MotionWrapper';

const SkeletonPulse = ({ className = '', children }) => (
  <div className={`animate-pulse bg-muted rounded ${className}`}>
    {children}
  </div>
);

// Product Card Skeleton
export const ProductCardSkeleton = ({ count = 1 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <MotionDiv
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-card rounded-lg border border-border overflow-hidden"
      >
        {/* Image Skeleton */}
        <SkeletonPulse className="aspect-[4/3] w-full" />

        <div className="p-4 space-y-3">
          {/* Title Skeleton */}
          <SkeletonPulse className="h-5 w-3/4" />

          {/* Description Skeleton */}
          <div className="space-y-2">
            <SkeletonPulse className="h-4 w-full" />
            <SkeletonPulse className="h-4 w-2/3" />
          </div>

          {/* Tags Skeleton */}
          <div className="flex gap-2">
            <SkeletonPulse className="h-6 w-16 rounded-full" />
            <SkeletonPulse className="h-6 w-20 rounded-full" />
          </div>

          {/* Bottom Row Skeleton */}
          <div className="flex items-center justify-between">
            <SkeletonPulse className="h-6 w-16" />
            <SkeletonPulse className="h-8 w-20 rounded" />
          </div>
        </div>
      </MotionDiv>
    ))}
  </div>
);

// Category Section Skeleton
export const CategorySectionSkeleton = ({ categoryName }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    {/* Category Header Skeleton */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <SkeletonPulse className="w-12 h-12 rounded-lg" />
        <div>
          <SkeletonPulse className="h-7 w-48 mb-2" />
          <SkeletonPulse className="h-4 w-64" />
        </div>
      </div>
      <div className="text-right">
        <SkeletonPulse className="h-4 w-12 mb-1" />
        <SkeletonPulse className="h-3 w-16" />
      </div>
    </div>

    {/* Products Grid Skeleton */}
    <ProductCardSkeleton count={4} />
  </MotionDiv>
);

// Filters Skeleton
export const FiltersSkeleton = () => (
  <div className="bg-card rounded-lg border border-border p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <SkeletonPulse className="h-6 w-32" />
      <SkeletonPulse className="h-4 w-24" />
    </div>

    <div className="space-y-4">
      {/* Search Skeleton */}
      <SkeletonPulse className="h-12 w-full rounded-lg" />

      {/* Dietary Filters Skeleton */}
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonPulse key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>

      {/* Sort Skeleton */}
      <SkeletonPulse className="h-12 w-full rounded-lg" />
    </div>
  </div>
);

// Modal Skeleton
export const ModalSkeleton = () => (
  <MotionDiv
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-50 overflow-y-auto"
  >
    <div className="fixed inset-0 bg-black/50" />
    <div className="relative min-h-full flex items-center justify-center p-4">
      <div className="relative bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <SkeletonPulse className="h-8 w-64" />
          <SkeletonPulse className="w-8 h-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Skeleton */}
          <SkeletonPulse className="aspect-square w-full" />

          {/* Content Skeleton */}
          <div className="p-6 lg:p-8 space-y-6">
            {/* Title Skeleton */}
            <SkeletonPulse className="h-9 w-3/4" />

            {/* Rating Skeleton */}
            <div className="flex items-center space-x-4">
              <SkeletonPulse className="h-5 w-20" />
              <SkeletonPulse className="h-4 w-16" />
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <SkeletonPulse className="h-4 w-full" />
              <SkeletonPulse className="h-4 w-full" />
              <SkeletonPulse className="h-4 w-3/4" />
            </div>

            {/* Price Skeleton */}
            <SkeletonPulse className="h-10 w-24" />

            {/* Dietary Tags Skeleton */}
            <div className="flex gap-2">
              <SkeletonPulse className="h-8 w-20 rounded-lg" />
              <SkeletonPulse className="h-8 w-24 rounded-lg" />
            </div>

            {/* Ingredients Skeleton */}
            <div className="space-y-2">
              <SkeletonPulse className="h-5 w-20 mb-2" />
              <SkeletonPulse className="h-4 w-full" />
            </div>

            {/* Nutritional Info Skeleton */}
            <div className="grid grid-cols-2 gap-4">
              <SkeletonPulse className="h-12 w-full rounded-lg" />
              <SkeletonPulse className="h-12 w-full rounded-lg" />
            </div>

            {/* CTA Button Skeleton */}
            <SkeletonPulse className="h-12 w-full rounded-lg mt-6" />
          </div>
        </div>
      </div>
    </div>
  </MotionDiv>
);

// Search Results Skeleton
export const SearchResultsSkeleton = () => (
  <MotionDiv
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <SkeletonPulse className="w-5 h-5 rounded" />
        <SkeletonPulse className="h-5 w-48" />
      </div>
      <SkeletonPulse className="h-4 w-16" />
    </div>
    <SkeletonPulse className="h-4 w-64 mt-2" />
  </MotionDiv>
);

// Loading State Wrapper
export const LoadingState = ({
  isLoading,
  skeleton: SkeletonComponent,
  skeletonProps = {},
  children
}) => {
  if (!isLoading) return children;

  return <SkeletonComponent {...skeletonProps} />;
};

export default {
  ProductCardSkeleton,
  CategorySectionSkeleton,
  FiltersSkeleton,
  ModalSkeleton,
  SearchResultsSkeleton,
  LoadingState
};

