import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import translations from '../../translations';

const Header = ({ isCollapsed = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const lang = 'ru';
  const t = translations[lang];

  const navigationItems = [
    { name: t.common.home, path: '/homepage', icon: 'Home' },
    { name: t.common.menuAndOrdering, path: '/interactive-menu-ordering', icon: 'UtensilsCrossed' },
    { name: t.common.deliveryInfo, path: '/delivery-ordering-information', icon: 'Truck' },
    { name: t.common.contactSupport, path: '/contact-multi-channel-support', icon: 'MessageCircle' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-warm border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                <circle cx="12" cy="9" r="1.5" fill="var(--color-accent)"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-heading font-semibold text-foreground leading-tight">
                DayInFood
              </h1>
              <span className="text-xs font-accent text-muted-foreground -mt-1">
                Digital
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/homepage" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.common.home}</Link>
            <Link to="/interactive-menu-ordering" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.common.menuAndOrdering}</Link>
            <Link to="/delivery-ordering-information" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.common.deliveryInfo}</Link>
            <Link to="/contact-multi-channel-support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.common.contactSupport}</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              iconName="ShoppingCart"
              iconPosition="left"
              className="hidden sm:flex"
            >
              Корзина
            </Button>

            {/* Order Now Button */}
            <Button
              as={Link}
              to="/interactive-menu-ordering"
              variant="default"
              size="sm"
              className="hidden sm:flex btn-warm"
            >
              {t.common.orderNow}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-warm ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-4 py-4 bg-card border-t border-border">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'text-card-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  fullWidth
                >
                  Посмотреть корзину
                </Button>
                <Button
                  as={Link}
                  to="/interactive-menu-ordering"
                  variant="default"
                  size="sm"
                  fullWidth
                  className="btn-warm"
                  onClick={closeMobileMenu}
                >
                  {t.common.orderNow}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;