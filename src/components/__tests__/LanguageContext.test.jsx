import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../../contexts/LanguageContext';

// Test component to use the context
const TestComponent = () => {
  const { currentLanguage, changeLanguage, t, tArray } = useLanguage();
  
  return (
    <div>
      <span data-testid="current-language">{currentLanguage}</span>
      <button onClick={() => changeLanguage('KZ')} data-testid="change-to-kz">
        Change to KZ
      </button>
      <span data-testid="translated-text">
        {t({ RU: 'Привет', KZ: 'Сәлем', EN: 'Hello' })}
      </span>
      <span data-testid="translated-array">
        {tArray({ RU: ['один', 'два'], KZ: ['бір', 'екі'], EN: ['one', 'two'] }).join(', ')}
      </span>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should provide default language as RU', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId('current-language')).toHaveTextContent('RU');
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Привет');
  });

  it('should change language and translate text', async () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    await act(async () => {
      screen.getByTestId('change-to-kz').click();
    });

    expect(screen.getByTestId('current-language')).toHaveTextContent('KZ');
    expect(screen.getByTestId('translated-text')).toHaveTextContent('Сәлем');
    expect(screen.getByTestId('translated-array')).toHaveTextContent('бір, екі');
  });

  it('should persist language to localStorage', async () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    await act(async () => {
      screen.getByTestId('change-to-kz').click();
    });

    expect(localStorage.getItem('monCroissant_language')).toBe('KZ');
  });

  it('should handle fallback for missing translations', () => {
    const TestFallback = () => {
      const { t } = useLanguage();
      return <span data-testid="fallback">{t('simple string')}</span>;
    };

    render(
      <LanguageProvider>
        <TestFallback />
      </LanguageProvider>
    );

    expect(screen.getByTestId('fallback')).toHaveTextContent('simple string');
  });
});
