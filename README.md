# 🥐 Mon Croissant - Mobile-First Bakery Menu

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.20-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.18.0-pink.svg)](https://www.framer.com/motion/)

A modern, mobile-first menu application for Mon Croissant bakery in Almaty, Kazakhstan. Built with React and optimized for performance, accessibility, and user experience.

## ✨ Features

### 🎯 Core Functionality
- **📱 Mobile-First Design** - Optimized for touch devices with 44px+ touch targets
- **🌍 Multi-Language Support** - Russian, Kazakh, and English with localStorage persistence
- **🔍 Smart Search** - Debounced search with real-time filtering
- **📂 Collapsible Categories** - Organized menu with smooth animations
- **🖼️ Image Gallery** - Full-screen viewer with pinch-to-zoom and swipe
- **🛒 Cart Integration** - Ready for checkout with Stripe and Kaspi payments
- **🔗 Deep Linking** - Shareable links to specific menu sections

### 🚀 Performance & SEO
- **⚡ Lighthouse 90+** - Optimized for Core Web Vitals
- **🖼️ LQIP Images** - Blur-up loading with responsive srcset
- **📦 Code Splitting** - Feature-based chunks for optimal loading
- **🎯 SEO Optimized** - OpenGraph tags and structured data
- **♿ Accessibility** - WCAG 2.1 AA compliant

### 🎨 Design & UX
- **🎭 Smooth Animations** - Framer Motion powered interactions
- **📍 Sticky Navigation** - Context-aware category navigation
- **🎨 Custom Design System** - Warm, bakery-inspired color palette
- **📱 Touch Gestures** - Swipe, pinch, and tap optimizations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Klins74/mon_croissant_digital.git
cd mon_croissant_digital

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev       # Start frontend and backend concurrently
npm start         # Start frontend only
npm run server    # Start backend only
npm run build     # Build for production
npm run test      # Run tests
npm run preview   # Preview production build
```

## 🌐 Live Demo

- **Frontend**: http://localhost:5173/
- **Menu Page**: http://localhost:5173/menu
- **Deep Link Example**: http://localhost:5173/menu/delivery/list?current_section=58b29529-db33-45fc-a4d1-5e8461753ebe

## 📱 Mobile Testing

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Test on Real Devices
```bash
# Expose dev server to network
npm start -- --host

# Access via your local IP
# Example: http://192.168.1.100:5173
```

## 🎨 Design System

### Color Palette
```css
/* Brand Colors */
Primary (Croissant Gold): #D4A574
Secondary (Chocolate): #8B4513
Accent (Buttery): #E8B86D

/* Semantic Colors */
Background: #FEFCF8 (Cream)
Foreground: #2C1810 (Dark Chocolate)
Muted: #F5F2ED (Warm Gray)
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Dancing Script (cursive)

## 🏗️ Architecture

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic primitives (Button, etc.)
│   ├── motion/         # Animation wrappers
│   └── __tests__/      # Component tests
├── contexts/           # React Context providers
├── data/              # Static data and configuration
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── styles/            # Global styles and Tailwind
└── utils/             # Utility functions
```

### Key Components
- **MenuPage** - Main menu with categories and products
- **ProductDetailSheet** - Full-screen product details
- **FullscreenImageViewer** - Image gallery with zoom
- **LanguageSwitcher** - Multi-language support
- **OrganizationInfoBlocks** - Business information

## 🌍 Internationalization

### Supported Languages
- **🇷🇺 Russian (RU)** - Default language
- **🇰🇿 Kazakh (KZ)** - Local language
- **🇬🇧 English (EN)** - International

### Usage
```jsx
import { useLanguage } from './contexts/LanguageContext';

function MyComponent() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t({ RU: 'Меню', KZ: 'Мәзір', EN: 'Menu' })}</h1>
      <button onClick={() => changeLanguage('EN')}>
        Switch to English
      </button>
    </div>
  );
}
```

## 🛒 E-commerce Integration

### Payment Methods
- **💳 Stripe** - International card payments
- **🏦 Kaspi** - Local Kazakhstani payment system

### Cart Features
- Add/remove products
- Quantity management
- Price calculations
- Persistent storage

## 📊 Performance

### Optimization Techniques
- **Code Splitting**: Vendor, UI, and feature chunks
- **Image Optimization**: WebP, LQIP, responsive images
- **Lazy Loading**: Components and images
- **Debouncing**: Search and scroll events
- **Caching**: Service worker ready

### Core Web Vitals Targets
- **FCP**: < 1.5s
- **LCP**: < 2.5s  
- **CLS**: < 0.1
- **FID**: < 100ms

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Components, hooks, utilities
- **Integration Tests**: User workflows
- **Mobile Tests**: Touch interactions, responsive design

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test -- --coverage

# Run in watch mode
npm run test -- --watch
```

## 🚀 Deployment

### Production Build
```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

### Environment Variables
```env
# .env.local
VITE_API_URL=http://localhost:4242
STRIPE_SECRET_KEY=sk_test_...
KASPI_API_KEY=your_kaspi_key
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

### Code Style
- Use ESLint configuration
- Follow React best practices
- Write meaningful commit messages
- Add JSDoc comments for functions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Mon Croissant bakery branding
- **Reference Implementation**: https://mon-croissant.kamiqr.com/menu/delivery
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion library
- **Styling**: Tailwind CSS framework

## 📞 Support

For support and questions:
- 📧 Email: support@mon-croissant.kz
- 📱 WhatsApp: +77011133490
- 📸 Instagram: @mon_croissant_almaty

---

**Built with ❤️ in Almaty, Kazakhstan**

*Bringing French pastry tradition to the digital age*