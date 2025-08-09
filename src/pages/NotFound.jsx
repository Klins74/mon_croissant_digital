import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/Button";
import Icon from "../components/AppIcon";
import translations from '../translations';

const NotFound = () => {
  const navigate = useNavigate();
  const currentLanguage = localStorage.getItem('currentLanguage') || 'russian';
  const notFoundTexts = translations[currentLanguage]?.notFound || {
    title: 'Страница не найдена',
    description: 'Страница, которую вы ищете, не существует. Давайте вернемся!',
    goBack: 'Назад',
    backToHome: 'На главную'
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
          </div>
        </div>

        <h2 className="text-2xl font-medium text-onBackground mb-2">{notFoundTexts.title}</h2>
        <p className="text-onBackground/70 mb-8">
          {notFoundTexts.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            icon={<Icon name="ArrowLeft" />}
            iconPosition="left"
            onClick={() => window.history?.back()}
          >
            {notFoundTexts.goBack}
          </Button>

          <Button
            variant="outline"
            icon={<Icon name="Home" />}
            iconPosition="left"
            onClick={handleGoHome}
          >
            {notFoundTexts.backToHome}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
