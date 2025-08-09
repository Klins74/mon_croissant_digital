import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import SupportTeam from './components/SupportTeam';
import FAQ from './components/FAQ';
import translations from '../../translations';

const ContactMultiChannelSupport = () => {
  const t = translations.ru;
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Контакты и поддержка - DayInFood Digital | Многоканальная служба поддержки</title>
        <meta 
          name="description" 
          content="Получите всеобъемлющую поддержку по нескольким каналам. WhatsApp, телефон, email и личная помощь. Многоязычная команда готова помочь с заказами, вопросами качества и кейтерингом." 
        />
        <meta name="keywords" content="контакты, поддержка, служба клиентов, WhatsApp, телефон, email, многоязычная, халяль пекарня, Алматы" />
        <meta property="og:title" content="Контакты и поддержка - DayInFood Digital" />
        <meta property="og:description" content="Опыт персонализированной поддержки по нескольким каналам. Наша многоязычная команда готова помочь вам." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-multi-channel-support" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          <ContactMethods />
          <ContactForm />
          <LocationInfo />
          <SupportTeam />
          <FAQ />
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="1.5" fill="var(--color-accent)"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">DayInFood Digital</h3>
                    <p className="text-secondary-foreground/80 text-sm">Подлинная французская пекарня</p>
                  </div>
                </div>
                <p className="text-secondary-foreground/80 mb-4 max-w-md">
Ощутите лучшие французские пирожные с доступностью 24/7, халяль-сертификацией и исключительным обслуживанием клиентов в самом сердце Алматы.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📍</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Быстрая связь</h4>
                <div className="space-y-3 text-sm text-secondary-foreground/80">
                  <div>
                    <p className="font-medium text-secondary-foreground">{t.common.whatsapp}</p>
                    <p>{t.common.whatsapp}</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">{t.common.phone}</p>
                    <p>{t.common.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">{t.common.email}</p>
                    <p>{t.common.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Рабочие часы</h4>
                <div className="space-y-2 text-sm text-secondary-foreground/80">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span>6:00-23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота:</span>
                    <span>7:00-23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span>8:00-22:00</span>
                  </div>
                  <div className="flex justify-between font-medium text-secondary-foreground">
                    <span>Онлайн:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-secondary-foreground/60 text-sm">
© {new Date()?.getFullYear()} DayInFood Digital. Все права защищены. | Халяль сертификат | Премиум французская пекарня
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactMultiChannelSupport;