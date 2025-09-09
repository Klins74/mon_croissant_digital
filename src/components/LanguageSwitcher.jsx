import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv, cardHoverVariants } from './motion/MotionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './AppIcon';

const LanguageSwitcher = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Mobile-optimized trigger button */}
      <MotionDiv
        className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors min-w-[100px]"
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="rest"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="text-sm font-medium text-foreground">{currentLang?.code}</span>
        <MotionDiv
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
        </MotionDiv>
      </MotionDiv>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <MotionDiv
              className="fixed inset-0 z-40 bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <MotionDiv
              className="absolute top-full mt-2 right-0 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {languages.map((language) => (
                <MotionDiv
                  key={language.code}
                  className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-colors ${
                    currentLanguage === language.code
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted/50 text-foreground'
                  }`}
                  whileHover={{ backgroundColor: currentLanguage === language.code ? undefined : 'rgba(var(--muted) / 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{language.name}</div>
                    <div className="text-xs text-muted-foreground">{language.code}</div>
                  </div>
                  {currentLanguage === language.code && (
                    <MotionDiv
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-primary"
                    >
                      <Icon name="Check" size={16} />
                    </MotionDiv>
                  )}
                </MotionDiv>
              ))}
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
