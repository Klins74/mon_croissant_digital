# Mon Croissant - Mobile-First Architecture

## 📱 Overview

This project implements a mobile-first, responsive menu application for Mon Croissant bakery, built with React and optimized for performance and accessibility.

## 🏗️ Architecture Principles

### Mobile-First Design
- All components designed primarily for mobile devices (320px+)
- Touch-friendly interactions (44px+ touch targets)
- Optimized for thumb navigation
- Progressive enhancement for larger screens

### Performance-Focused
- Code splitting by features and vendors
- Lazy loading with Intersection Observer
- Image optimization with LQIP and srcset
- Debounced search and interactions
- Lighthouse 90+ score target

### Accessibility Compliance
- WCAG 2.1 AA standards
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion support

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI primitives
│   ├── motion/          # Animation wrappers
│   └── __tests__/       # Component tests
├── contexts/            # React Context providers
├── data/               # Static data and configuration
├── hooks/              # Custom React hooks
├── pages/              # Page components (route-based)
├── styles/             # Global styles and Tailwind config
└── utils/              # Utility functions
```

## 🎯 Core Features

### 1. Multi-language Support (i18n)
- **Languages**: Russian (RU), Kazakh (KZ), English (EN)
- **Persistence**: localStorage with fallback
- **Implementation**: React Context with translation helpers

```jsx
// Usage example
const { t, currentLanguage, changeLanguage } = useLanguage();
const text = t({ RU: 'Привет', KZ: 'Сәлем', EN: 'Hello' });
```

### 2. Mobile-Optimized Menu
- **Collapsible categories** with large touch targets
- **Sticky navigation** with scroll-spy
- **Product cards** optimized for mobile layout
- **Search and filtering** with debounced input

### 3. Image Optimization
- **LQIP (Low Quality Image Placeholder)** with blur-up effect
- **Responsive images** with srcset and sizes
- **Lazy loading** with Intersection Observer
- **Fallback handling** for missing images

### 4. SEO & Social Sharing
- **OpenGraph tags** for social media
- **Structured data** (JSON-LD) for search engines
- **Meta tags** for each page/product
- **Canonical URLs** and language alternatives

## 🛠️ Technical Stack

### Frontend
- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and gestures
- **Tailwind CSS** - Utility-first styling with custom design system
- **React Router** - Client-side routing with deep-linking
- **Lucide React** - Consistent icon system

### Build & Development
- **Vite** - Fast build tool with HMR
- **Vitest** - Unit testing framework
- **ESLint** - Code linting and formatting

### Backend Integration
- **Express.js** - API server for payments
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

## 🎨 Design System

### Color Palette
```css
/* Brand Colors */
--color-primary: #D4A574;      /* Croissant Gold */
--color-secondary: #8B4513;    /* Chocolate Brown */
--color-accent: #E8B86D;       /* Buttery Highlight */

/* Semantic Colors */
--color-background: #FEFCF8;   /* Cream */
--color-foreground: #2C1810;   /* Dark Chocolate */
--color-muted: #F5F2ED;        /* Warm Gray */
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Dancing Script (cursive)

### Spacing System
- **xs**: 8px, **sm**: 12px, **md**: 18px
- **lg**: 24px, **xl**: 36px, **2xl**: 54px

## 📱 Mobile Optimizations

### Touch Interactions
- Minimum 44px touch targets
- Swipe gestures for image galleries
- Pull-to-refresh considerations
- Haptic feedback ready

### Performance
- Code splitting: vendor, UI, router chunks
- Asset inlining: <4kb assets inlined
- Image optimization: WebP support
- CSS optimization: critical path CSS

### Accessibility
- Focus management for modals
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader announcements

## 🔧 Custom Hooks

### useDebounce
Debounces rapidly changing values (search input, scroll events).

```jsx
const debouncedSearchTerm = useDebounce(searchTerm, 300);
```

### useIntersectionObserver
Tracks element visibility for lazy loading and scroll-spy.

```jsx
const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: '100px'
});
```

### useLocalStorage
Persists state to localStorage with SSR safety.

```jsx
const [language, setLanguage] = useLocalStorage('language', 'RU');
```

## 🧪 Testing Strategy

### Unit Tests
- Context providers (Language, Cart)
- Custom hooks (debounce, localStorage)
- Utility functions
- Component rendering and interactions

### Integration Tests
- Menu navigation and filtering
- Language switching
- Cart operations
- Deep-linking functionality

### Mobile Testing
- Touch interactions
- Responsive breakpoints
- Performance on slow networks
- iOS Safari and Android Chrome

## 🚀 Deployment & Performance

### Build Optimization
```javascript
// vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['framer-motion', 'lucide-react'],
        router: ['react-router-dom'],
      }
    }
  },
  minify: 'terser',
  assetsInlineLimit: 4096
}
```

### Performance Targets
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms
- **Lighthouse Score**: 90+ (mobile)

## 📊 Analytics & Monitoring

### Core Web Vitals
- Performance monitoring with Lighthouse CI
- Real User Monitoring (RUM) ready
- Error tracking and reporting

### User Experience Metrics
- Language preference tracking
- Search query analytics
- Cart abandonment rates
- Mobile vs desktop usage

## 🔮 Future Enhancements

### Planned Features
- PWA (Progressive Web App) support
- Push notifications for orders
- Offline menu browsing
- Voice search integration
- AR product visualization

### Technical Improvements
- React Server Components migration
- Edge caching strategy
- Advanced image formats (AVIF)
- GraphQL API integration

## 📚 Development Guidelines

### Code Style
- Use TypeScript for new features
- Follow React best practices
- Implement proper error boundaries
- Write comprehensive tests

### Performance
- Lazy load non-critical components
- Optimize bundle size regularly
- Monitor Core Web Vitals
- Test on real devices

### Accessibility
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios
- Support reduced motion preferences

---

**Built with ❤️ for Mon Croissant**
*Mobile-first, performance-focused, accessible by design*
