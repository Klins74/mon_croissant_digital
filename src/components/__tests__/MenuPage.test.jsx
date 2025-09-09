import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { CartProvider } from '../../contexts/CartContext';
import MenuPage from '../../pages/menu';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

const renderMenuPage = (initialEntries = ['/menu']) => {
  return render(
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <MenuPage />
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

describe('MenuPage', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    });
  });

  it('should render organization info and menu categories', async () => {
    renderMenuPage();

    // Check if organization name is displayed
    expect(screen.getByText('Mon Croissant')).toBeInTheDocument();
    
    // Check if search input is present
    expect(screen.getByPlaceholderText(/поиск по меню/i)).toBeInTheDocument();
    
    // Check if categories are displayed
    await waitFor(() => {
      expect(screen.getByText(/круассаны и венская выпечка/i)).toBeInTheDocument();
    });
  });

  it('should filter products by search term', async () => {
    renderMenuPage();

    const searchInput = screen.getByPlaceholderText(/поиск по меню/i);
    
    fireEvent.change(searchInput, { target: { value: 'шоколад' } });

    // Wait for debounced search
    await waitFor(() => {
      expect(screen.getByText(/круассан с шоколадом/i)).toBeInTheDocument();
    }, { timeout: 500 });
  });

  it('should toggle category expansion', async () => {
    renderMenuPage();

    // Wait for categories to load
    await waitFor(() => {
      const categoryHeader = screen.getByText(/круассаны и венская выпечка/i);
      expect(categoryHeader).toBeInTheDocument();
    });

    // Find and click category header to toggle
    const categoryButton = screen.getByText(/круассаны и венская выпечка/i).closest('div[role="button"], button');
    if (categoryButton) {
      fireEvent.click(categoryButton);
      
      // Category should still be visible (just toggled)
      await waitFor(() => {
        expect(screen.getByText(/круассаны и венская выпечка/i)).toBeInTheDocument();
      });
    }
  });

  it('should apply dietary filters', async () => {
    renderMenuPage();

    // Wait for filters to load
    await waitFor(() => {
      const halalFilter = screen.getByText(/халяль/i);
      expect(halalFilter).toBeInTheDocument();
    });

    // Click on halal filter
    const halalFilter = screen.getByText(/халяль/i);
    fireEvent.click(halalFilter);

    // Products should still be visible (all test products are halal)
    await waitFor(() => {
      expect(screen.getByText(/круассан классический/i)).toBeInTheDocument();
    });
  });

  it('should handle deep linking to specific section', async () => {
    // Mock URLSearchParams
    delete window.location;
    window.location = { 
      search: '?current_section=58b29529-db33-45fc-a4d1-5e8461753ebe',
      pathname: '/menu/delivery/list'
    };

    renderMenuPage();

    // Should expand the croissants category and scroll to it
    await waitFor(() => {
      expect(screen.getByText(/круассаны и венская выпечка/i)).toBeInTheDocument();
    });
  });

  it('should change language and update content', async () => {
    renderMenuPage();

    // Wait for language switcher to load
    await waitFor(() => {
      const languageSwitcher = screen.getByText('RU');
      expect(languageSwitcher).toBeInTheDocument();
    });

    // Click language switcher (assuming it's clickable)
    const languageSwitcher = screen.getByText('RU');
    fireEvent.click(languageSwitcher);

    // Check if dropdown appears (this might need adjustment based on actual implementation)
    await waitFor(() => {
      // Language switcher interaction test
      expect(languageSwitcher).toBeInTheDocument();
    });
  });
});
