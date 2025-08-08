import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ currentLanguage, onLanguageChange, onOrderNow, onExploreMenu, setCurrentLanguage }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'kz', name: 'Қазақша', flag: '🇰🇿' }];


  const heroContent = {
    ru: {
      headline: "Подлинное французское мастерство, всегда доступно",
      subheadline: "Мастера-пекари создают премиальную халяльную выпечку 24/7 по традиционным французским технологиям",
      orderNow: "Заказать сейчас",
      exploreMenu: "Изучить меню",
      halalCertified: "Халяль сертифицировано",
      available247: "Доступно 24/7"
    },
    en: {
      headline: "Authentic French Artistry, Available Always",
      subheadline: "Master bakers crafting premium halal pastries 24/7 with traditional French techniques",
      orderNow: "Order Now",
      exploreMenu: "Explore Menu",
      halalCertified: "Halal Certified",
      available247: "Available 24/7"
    },
    kz: {
      headline: "Шынайы француз өнері, әрқашан қолжетімді",
      subheadline: "Шебер наубайшылар дәстүрлі француз техникасымен 24/7 премиум халал тәттілер жасайды",
      orderNow: "Қазір тапсырыс беру",
      exploreMenu: "Мәзірді зерттеу",
      halalCertified: "Халал сертификатталған",
      available247: "24/7 қолжетімді"
    }
  };

  const videoSources = [
  "https://images.pexels.com/photos/4686821/pexels-photo-4686821.jpeg",
  "https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg",
  "https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg"];


  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && ['ru', 'en', 'kz']?.includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      setCurrentLanguage('ru'); // Set Russian as default
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = heroContent?.[currentLanguage] || heroContent?.ru;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {videoSources?.map((src, index) =>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentVideoIndex ? 1 : 0 }}
            transition={{ duration: 1 }}>

              <Image
              src={src}
              alt={`Artisan baker crafting croissants ${index + 1}`}
              className="w-full h-full object-cover golden-hour" />

            </motion.div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        <div className="absolute inset-0 texture-flour"></div>
      </div>
      {/* Language Selector */}
      <div className="absolute top-20 right-4 lg:right-8 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-card/90 backdrop-blur-md border border-border rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300">

            <span className="text-lg">
              {languages?.find((lang) => lang?.code === currentLanguage)?.flag}
            </span>
            <span className="text-sm font-medium text-card-foreground">
              {languages?.find((lang) => lang?.code === currentLanguage)?.name}
            </span>
            <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
          </button>

          {isLanguageDropdownOpen &&
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-warm-lg z-60">

              <div className="py-2">
                {languages?.map((lang) =>
              <button
                key={lang?.code}
                onClick={() => {
                  onLanguageChange(lang?.code);
                  setIsLanguageDropdownOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-2 text-sm transition-colors ${
                currentLanguage === lang?.code ?
                'bg-primary text-primary-foreground' :
                'text-popover-foreground hover:bg-muted'}`
                }>

                    <span className="text-lg">{lang?.flag}</span>
                    <span>{lang?.name}</span>
                  </button>
              )}
              </div>
            </motion.div>
          }
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">

              <Icon name="Award" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">{content?.halalCertified}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium text-primary">{content?.available247}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">

              {content?.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">

              {content?.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button
                variant="default"
                size="lg"
                className="btn-warm text-lg px-8 py-4"
                iconName="ShoppingCart"
                iconPosition="left"
                onClick={onOrderNow}>

                {content?.orderNow}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2"
                iconName="Menu"
                iconPosition="left"
                onClick={onExploreMenu}>

                {content?.exploreMenu}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mt-8">

              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Fresh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">Halal Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">Fast Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Live Production Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">

            <div className="relative">
              <div className="artisanal-card p-6 bg-card/90 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-heading font-semibold text-card-foreground">
                    Live Production
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Cookie" size={20} className="text-primary" />
                      <span className="text-sm font-medium">Croissants</span>
                    </div>
                    <span className="text-sm text-muted-foreground">3:24 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Cake" size={20} className="text-primary" />
                      <span className="text-sm font-medium">Pain au Chocolat</span>
                    </div>
                    <span className="text-sm text-muted-foreground">2:45 AM</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Coffee" size={20} className="text-primary" />
                      <span className="text-sm font-medium">Fresh Bread</span>
                    </div>
                    <span className="text-sm text-muted-foreground">1:15 AM</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Master Bakers Active</span>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">3</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2">

          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;