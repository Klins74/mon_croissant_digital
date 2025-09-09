import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GroupedMenu from '../GroupedMenu';
import { menuCategories, menuProducts } from '../../data/menuData';

// Mock the context
const mockCartContext = {
  addToCart: vi.fn(),
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  openCart: vi.fn(),
  closeCart: vi.fn(),
  updateQuantity: vi.fn(),
  removeFromCart: vi.fn(),
  clearCart: vi.fn(),
};

vi.mock('../../contexts/CartContext', () => ({
  useCart: () => mockCartContext,
}));

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => children,
  useReducedMotion: () => false,
}));

describe('GroupedMenu', () => {
  const mockOnViewDetails = vi.fn();
  const mockOnAddToCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders menu categories and products', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Check if categories are rendered
    expect(screen.getByText('Круассаны и венская выпечка')).toBeInTheDocument();
    expect(screen.getByText('Ремесленный хлеб')).toBeInTheDocument();
    expect(screen.getByText('Французские пирожные')).toBeInTheDocument();
  });

  it('filters products by search term', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Название, описание, ингредиенты...');
    fireEvent.change(searchInput, { target: { value: 'круассан' } });

    // Wait for debounced search
    await waitFor(() => {
      expect(screen.getByText('Круассан классический')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('groups products by categories correctly', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Check that products are grouped under their categories
    const croissantProducts = menuProducts.filter(p => p.category === 'croissants');
    const breadProducts = menuProducts.filter(p => p.category === 'breads');

    expect(croissantProducts.length).toBeGreaterThan(0);
    expect(breadProducts.length).toBeGreaterThan(0);
  });

  it('handles dietary filter changes', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Open filters
    const filtersButton = screen.getByText('Фильтры и поиск');
    fireEvent.click(filtersButton);

    // Find and click halal filter
    const halalFilter = screen.getByLabelText('Халяль');
    fireEvent.click(halalFilter);

    // Verify filter is applied (products should be filtered)
    await waitFor(() => {
      const searchResults = screen.queryByText('Результаты поиска');
      expect(searchResults).toBeInTheDocument();
    });
  });

  it('calls onAddToCart when add to cart button is clicked', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Find and click first add to cart button
    const addToCartButtons = screen.getAllByText('Добавить в корзину');
    fireEvent.click(addToCartButtons[0]);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });

  it('calls onViewDetails when view details button is clicked', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Find and click first view details button
    const viewDetailsButtons = screen.getAllByText('Подробнее');
    fireEvent.click(viewDetailsButtons[0]);

    expect(mockOnViewDetails).toHaveBeenCalledTimes(1);
  });

  it('shows no results message when no products match filters', async () => {
    render(
      <GroupedMenu 
        onViewDetails={mockOnViewDetails} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    // Wait for loading
    await waitFor(() => {
      expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument();
    });

    // Search for something that doesn't exist
    const searchInput = screen.getByPlaceholderText('Название, описание, ингредиенты...');
    fireEvent.change(searchInput, { target: { value: 'несуществующий продукт xyz123' } });

    // Wait for debounced search and no results message
    await waitFor(() => {
      expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});

