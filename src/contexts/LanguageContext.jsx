import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('RU');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('monCroissant_language');
    if (savedLanguage && ['RU', 'KZ', 'EN'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('monCroissant_language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    if (['RU', 'KZ', 'EN'].includes(language)) {
      setCurrentLanguage(language);
    }
  };

  // Helper function to get localized text
  const t = (textObject, fallback = '') => {
    if (typeof textObject === 'string') return textObject;
    if (typeof textObject === 'object' && textObject !== null) {
      return textObject[currentLanguage] || textObject['RU'] || textObject || fallback;
    }
    return fallback;
  };

  // Helper function to get localized array
  const tArray = (arrayObject, fallback = []) => {
    if (Array.isArray(arrayObject)) return arrayObject;
    if (typeof arrayObject === 'object' && arrayObject !== null) {
      return arrayObject[currentLanguage] || arrayObject['RU'] || fallback;
    }
    return fallback;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    tArray,
    languages: [
      { code: 'RU', name: 'Русский', flag: '🇷🇺' },
      { code: 'KZ', name: 'Қазақша', flag: '🇰🇿' },
      { code: 'EN', name: 'English', flag: '🇬🇧' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
