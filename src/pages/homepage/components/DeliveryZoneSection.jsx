import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const DeliveryZoneSection = ({ currentLanguage }) => {
  const [selectedCity, setSelectedCity] = useState('almaty');

  const content = {
    en: {
      title: "Delivery Coverage",
      subtitle: "Fresh pastries delivered across Kazakhstan\'s major cities",
      checkAvailability: "Check Availability",
      orderNow: "Order Now",
      deliveryTime: "Delivery Time",
      minimumOrder: "Minimum Order",
      deliveryFee: "Delivery Fee",
      available247: "Available 24/7",
      currentlyServing: "Currently Serving"
    },
    ru: {
      title: "Зона доставки",
      subtitle: "Свежая выпечка доставляется по крупным городам Казахстана",
      checkAvailability: "Проверить доступность",
      orderNow: "Заказать сейчас",
      deliveryTime: "Время доставки",
      minimumOrder: "Минимальный заказ",
      deliveryFee: "Стоимость доставки",
      available247: "Доступно 24/7",
      currentlyServing: "В настоящее время обслуживаем"
    },
    kz: {
      title: "Жеткізу аймағы",
      subtitle: "Қазақстанның ірі қалаларына жаңа тәттілер жеткізіледі",
      checkAvailability: "Қолжетімділікті тексеру",
      orderNow: "Қазір тапсырыс беру",
      deliveryTime: "Жеткізу уақыты",
      minimumOrder: "Ең аз тапсырыс",
      deliveryFee: "Жеткізу құны",
      available247: "24/7 қолжетімді",
      currentlyServing: "Қазіргі уақытта қызмет көрсетеміз"
    }
  };

  const cities = {
    almaty: {
      name: { en: "Almaty", ru: "Алматы", kz: "Алматы" },
      zones: [
        { name: { en: "City Center", ru: "Центр города", kz: "Қала орталығы" }, time: "30-45 min", fee: "500₸", active: true },
        { name: { en: "Medeu District", ru: "Медеуский район", kz: "Медеу ауданы" }, time: "45-60 min", fee: "700₸", active: true },
        { name: { en: "Bostandyk District", ru: "Бостандыкский район", kz: "Бостандық ауданы" }, time: "40-55 min", fee: "600₸", active: true },
        { name: { en: "Alatau District", ru: "Алатауский район", kz: "Алатау ауданы" }, time: "50-65 min", fee: "800₸", active: false }
      ],
      coordinates: { lat: 43.2220, lng: 76.8512 },
      minimumOrder: "2000₸"
    },
    nursultan: {
      name: { en: "Nur-Sultan", ru: "Нур-Султан", kz: "Нұр-Сұлтан" },
      zones: [
        { name: { en: "Left Bank", ru: "Левый берег", kz: "Сол жақ" }, time: "35-50 min", fee: "600₸", active: true },
        { name: { en: "Right Bank", ru: "Правый берег", kz: "Оң жақ" }, time: "40-55 min", fee: "700₸", active: true },
        { name: { en: "Saryarka District", ru: "Сарыаркинский район", kz: "Сарыарқа ауданы" }, time: "45-60 min", fee: "800₸", active: true }
      ],
      coordinates: { lat: 51.1694, lng: 71.4491 },
      minimumOrder: "2500₸"
    },
    shymkent: {
      name: { en: "Shymkent", ru: "Шымкент", kz: "Шымкент" },
      zones: [
        { name: { en: "Central District", ru: "Центральный район", kz: "Орталық аудан" }, time: "30-45 min", fee: "400₸", active: true },
        { name: { en: "Abay District", ru: "Абайский район", kz: "Абай ауданы" }, time: "40-55 min", fee: "500₸", active: true },
        { name: { en: "Al-Farabi District", ru: "Аль-Фарабийский район", kz: "Әл-Фараби ауданы" }, time: "35-50 min", fee: "450₸", active: true }
      ],
      coordinates: { lat: 42.3000, lng: 69.5900 },
      minimumOrder: "1800₸"
    }
  };

  const currentContent = content?.[currentLanguage] || content?.en;
  const currentCity = cities?.[selectedCity];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {currentContent?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent?.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* City Selection & Zone Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* City Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(cities)?.map(([cityKey, cityData]) => (
                <button
                  key={cityKey}
                  onClick={() => setSelectedCity(cityKey)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCity === cityKey
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'bg-card text-card-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {cityData?.name?.[currentLanguage]}
                </button>
              ))}
            </div>

            {/* City Info Card */}
            <div className="artisanal-card p-6 bg-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-bold text-card-foreground">
                  {currentCity?.name?.[currentLanguage]}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">
                    {currentContent?.available247}
                  </span>
                </div>
              </div>

              {/* City Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-background rounded-lg">
                  <Icon name="Clock" size={20} className="text-primary mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">{currentContent?.deliveryTime}</div>
                  <div className="text-sm font-medium text-foreground">30-65 min</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <Icon name="ShoppingCart" size={20} className="text-primary mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">{currentContent?.minimumOrder}</div>
                  <div className="text-sm font-medium text-foreground">{currentCity?.minimumOrder}</div>
                </div>
              </div>

              {/* Delivery Zones */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-card-foreground mb-3">
                  {currentContent?.currentlyServing}:
                </h4>
                {currentCity?.zones?.map((zone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                      zone?.active
                        ? 'bg-green-50 border-green-200 hover:bg-green-100' :'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        zone?.active ? 'bg-green-500 delivery-pulse' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm font-medium text-foreground">
                        {zone?.name?.[currentLanguage]}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">{zone?.time}</div>
                      <div className="text-sm font-medium text-foreground">{zone?.fee}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors btn-warm">
                  <Icon name="ShoppingCart" size={16} />
                  <span className="font-medium">{currentContent?.orderNow}</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-background border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                  <Icon name="MapPin" size={16} />
                  <span className="font-medium">{currentContent?.checkAvailability}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="artisanal-card p-4 bg-card">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentCity?.name?.[currentLanguage]}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentCity?.coordinates?.lat},${currentCity?.coordinates?.lng}&z=12&output=embed`}
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Coverage Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="artisanal-card p-4 bg-card text-center">
                <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-card-foreground mb-1">
                  {currentCity?.zones?.filter(zone => zone?.active)?.length}
                </div>
                <div className="text-xs text-muted-foreground">Active Zones</div>
              </div>
              <div className="artisanal-card p-4 bg-card text-center">
                <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-card-foreground mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Service Hours</div>
              </div>
            </div>

            {/* Delivery Promise */}
            <div className="artisanal-card p-6 bg-primary/5 border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="Truck" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-heading font-semibold text-card-foreground mb-2">
                    Delivery Promise
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fresh pastries delivered hot from our 24/7 bakery. Real-time tracking and temperature-controlled delivery vehicles ensure perfect quality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryZoneSection;