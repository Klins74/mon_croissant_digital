import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveProductionCounter from './components/LiveProductionCounter';
import QualityAssuranceSection from './components/QualityAssuranceSection';
import TestimonialCarousel from "./components/TestimonialCarousel";
import HeritageSection from "./components/HeritageSection";
import DeliveryZoneSection from './components/DeliveryZoneSection';
import translations from '../../translations';

const Homepage = () => {
  const navigate = useNavigate();
  const lang = 'ru'; // Or get from context/state
  const t = translations[lang];

  // Navigation handlers
  const handleOrderNow = () => {
    navigate('/interactive-menu-ordering');
  };

  const handleExploreMenu = () => {
    navigate('/interactive-menu-ordering');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection
          onOrderNow={handleOrderNow}
          onExploreMenu={handleExploreMenu}
        />
        {/* Live Production Counter */}
        <LiveProductionCounter />
        {/* Quality Assurance Section */}
        <QualityAssuranceSection />
        {/* Heritage Section */}
        <HeritageSection />
        {/* Delivery Zone Section */}
        <DeliveryZoneSection />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
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
                  <h3 className="text-xl font-bold font-heading text-card-foreground">
                    FrenchCroissant
                  </h3>
                  <span className="text-xs font-accent text-muted-foreground -mt-1">
                    Digital
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Подлинная французская кулинария встречается с местным теплом. Премиальная халяльная выпечка, изготовленная круглосуточно по традиционным технологиям.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-heading font-semibold text-card-foreground mb-4">
                {t.common.quickLinks}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/interactive-menu-ordering')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.common.menuAndOrdering}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/delivery-ordering-information')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.common.deliveryInfo}
                  </button>
                </li>
                {/* Removed Reviews navigation link */}
                <li>
                  <button
                    onClick={() => navigate('/contact-multi-channel-support')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.common.contact}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-heading font-semibold text-card-foreground mb-4">
                {t.common.contactInfo}
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  +7 (727) 123-4567
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.common.email}
                </div>
                <div className="text-sm text-muted-foreground">
                  24/7 WhatsApp Поддержка
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-heading font-semibold text-card-foreground mb-4">
                {t.common.certifications}
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">✓ {t.common.halalCertified}</div>
                <div className="text-sm text-muted-foreground">✓ {t.common.EAEUStandards}</div>
                <div className="text-sm text-muted-foreground">✓ {t.common.ISO22000}</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mt-4 md:mt-0 md:order-1">
            © {new Date()?.getFullYear()} FrenchCroissant Digital. {t.common.allRightsReserved}.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-sm text-muted-foreground">{t.common.halalCertified}</div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;