import React from 'react';
import { MotionDiv, cardHoverVariants } from './motion/MotionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './AppIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

const LanguageSwitcher = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MotionDiv
            className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors min-w-[100px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            variants={cardHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="rest"
            as="button"
          >
            <span className="text-lg">{currentLang?.flag}</span>
            <span className="text-sm font-medium text-foreground">{currentLang?.code}</span>
            <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
          </MotionDiv>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center space-x-3 ${
                currentLanguage === language.code
                  ? 'bg-primary/10 text-primary'
                  : ''
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex-1">
                <div className="text-sm font-medium">{language.name}</div>
                <div className="text-xs text-muted-foreground">{language.code}</div>
              </div>
              {currentLanguage === language.code && (
                <Icon name="Check" size={16} className="text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
