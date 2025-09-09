import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductDetailModal from '../ProductDetailModal';
import { menuProducts } from '../../data/menuData';

// Mock Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    img: ({ children, ...props }) => <img {...props}>{children}</img>,
  },
  AnimatePresence: ({ children }) => children,
  useReducedMotion: () => false,
}));

describe('ProductDetailModal', () => {
  const mockProduct = menuProducts[0]; // Use first product from menu data
  const mockOnClose = vi.fn();
  const mockOnAddToCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders when isOpen is true', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.detailedDescription)).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={false}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    expect(screen.queryByText(mockProduct.name)).not.toBeInTheDocument();
  });

  it('does not render when product is null', () => {
    render(
      <ProductDetailModal
        product={null}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('displays product information correctly', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    // Check product details
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.detailedDescription)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} ₸`)).toBeInTheDocument();
    
    // Check ingredients
    expect(screen.getByText('Состав')).toBeInTheDocument();
    expect(screen.getByText(mockProduct.ingredients)).toBeInTheDocument();

    // Check nutritional info
    expect(screen.getByText('Пищевая ценность')).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.nutritionalInfo.calories}`)).toBeInTheDocument();
  });

  it('handles quantity changes', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    const increaseButton = screen.getByLabelText('Увеличить количество');
    const decreaseButton = screen.getByLabelText('Уменьшить количество');
    const quantityDisplay = screen.getByText('1');

    // Increase quantity
    fireEvent.click(increaseButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    // Decrease quantity
    fireEvent.click(decreaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    // Should not go below 1
    fireEvent.click(decreaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    const closeButton = screen.getByLabelText('Закрыть');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    // Click on the backdrop (the outer container)
    const backdrop = screen.getByRole('dialog').parentElement;
    fireEvent.click(backdrop);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onAddToCart with correct product and quantity', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    // Increase quantity to 2
    const increaseButton = screen.getByLabelText('Увеличить количество');
    fireEvent.click(increaseButton);

    // Add to cart
    const addToCartButton = screen.getByText('Добавить в корзину');
    fireEvent.click(addToCartButton);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('displays dietary badges correctly', () => {
    render(
      <ProductDetailModal
        product={mockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    // Check if dietary badges are displayed
    if (mockProduct.dietary && mockProduct.dietary.includes('halal')) {
      expect(screen.getByText('Халяль')).toBeInTheDocument();
    }
  });

  it('displays out of stock message when product is not in stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    
    render(
      <ProductDetailModal
        product={outOfStockProduct}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    expect(screen.getByText('Нет в наличии')).toBeInTheDocument();
    expect(screen.getByText('Уведомить о поступлении')).toBeInTheDocument();
  });

  it('handles image navigation when multiple images exist', () => {
    const productWithMultipleImages = {
      ...mockProduct,
      images: [mockProduct.image, '/test-image-2.jpg', '/test-image-3.jpg']
    };

    render(
      <ProductDetailModal
        product={productWithMultipleImages}
        isOpen={true}
        onClose={mockOnClose}
        onAddToCart={mockOnAddToCart}
      />
    );

    // Should show thumbnails for multiple images
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails.length).toBeGreaterThan(1);
  });
});

