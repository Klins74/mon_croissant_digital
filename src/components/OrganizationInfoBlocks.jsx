import React from 'react';
import { MotionDiv, cardHoverVariants } from './motion/MotionWrapper';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationInfo } from '../data/menuData';
import Icon from './AppIcon';

const InfoBlock = ({ icon, title, content, className = '', onClick = null }) => {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <MotionDiv
      as={Component}
      className={`p-4 bg-card border border-border rounded-xl hover:bg-muted/30 transition-colors text-left w-full ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
          <Icon name={icon} size={20} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground text-sm mb-1">{title}</h3>
          <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

const ContactButton = ({ icon, href, children, className = '' }) => {
  return (
    <MotionDiv
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors ${className}`}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
    >
      <Icon name={icon} size={18} />
      <span className="text-sm">{children}</span>
    </MotionDiv>
  );
};

const OrganizationInfoBlocks = () => {
  const { t } = useLanguage();

  const handlePhoneClick = () => {
    window.open(`tel:${organizationInfo.contacts.phone}`, '_self');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${organizationInfo.contacts.instagram.replace('@', '')}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${organizationInfo.contacts.whatsapp.replace('+', '')}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      {/* Organization Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
          {t(organizationInfo.name)}
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {t(organizationInfo.certifications)}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
        <div className="text-center">
          <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {t(organizationInfo.values)}
          </div>
        </div>
      </div>

      {/* Info Blocks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Main Menu Section */}
        <InfoBlock
          icon="Menu"
          title={t({
            RU: "Основное меню",
            KZ: "Негізгі мәзір", 
            EN: "Main menu"
          })}
          content={t({
            RU: "Круассаны, пирожные, хлеб\nСвежая выпечка 24/7\nБолее 15 видов изделий",
            KZ: "Круассандар, тортиктер, нан\nЖаңа нан 24/7\n15-тен астам түр өнім",
            EN: "Croissants, pastries, bread\nFresh baking 24/7\nMore than 15 types of products"
          })}
          className="md:col-span-2 lg:col-span-1"
        />

        {/* Reviews Section */}
        <InfoBlock
          icon="Star"
          title={t({
            RU: "Отзывы и жалобы",
            KZ: "Пікірлер мен шағымдар",
            EN: "Reviews and complaints"
          })}
          content={t({
            RU: "Рейтинг: 4.8/5\nБолее 500 отзывов\nВысокое качество обслуживания",
            KZ: "Рейтинг: 4.8/5\n500-ден астам пікір\nЖоғары сапалы қызмет",
            EN: "Rating: 4.8/5\nMore than 500 reviews\nHigh quality service"
          })}
        />

        {/* Address Section */}
        <InfoBlock
          icon="MapPin"
          title={t({
            RU: "Адрес заведения",
            KZ: "Мекеме мекенжайы",
            EN: "Organization address"
          })}
          content={t(organizationInfo.address)}
        />
      </div>

      {/* Schedule and Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Work Schedule */}
        <InfoBlock
          icon="Clock"
          title={t({
            RU: "Режим работы",
            KZ: "Жұмыс режимі",
            EN: "Work schedule"
          })}
          content={t(organizationInfo.workSchedule)}
        />

        {/* Contacts */}
        <div className="p-4 bg-card border border-border rounded-xl">
          <div className="flex items-start space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <Icon name="Phone" size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground text-sm mb-1">
                {t({
                  RU: "Контакты",
                  KZ: "Байланыстар",
                  EN: "Contacts"
                })}
              </h3>
              <div className="text-sm text-muted-foreground mb-4">
                {organizationInfo.contacts.phone}
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <ContactButton
              icon="Instagram"
              href={`https://instagram.com/${organizationInfo.contacts.instagram.replace('@', '')}`}
            >
              Instagram
            </ContactButton>
            <ContactButton
              icon="MessageCircle"
              href={`https://wa.me/${organizationInfo.contacts.whatsapp.replace('+', '')}`}
            >
              WhatsApp
            </ContactButton>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          {t({
            RU: "Готовы сделать заказ?",
            KZ: "Тапсырыс беруге дайынсыз ба?",
            EN: "Ready to place an order?"
          })}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t({
            RU: "Свяжитесь с нами любым удобным способом или просто добавьте товары в корзину",
            KZ: "Бізбен кез келген ыңғайлы жолмен байланысыңыз немесе себетке тауарларды қосыңыз",
            EN: "Contact us in any convenient way or just add items to your cart"
          })}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ContactButton
            icon="Phone"
            href={`tel:${organizationInfo.contacts.phone}`}
            className="bg-green-600 hover:bg-green-700"
          >
            {t({
              RU: "Позвонить",
              KZ: "Телефон шалу",
              EN: "Call now"
            })}
          </ContactButton>
          <ContactButton
            icon="MessageCircle"
            href={`https://wa.me/${organizationInfo.contacts.whatsapp.replace('+', '')}`}
            className="bg-green-500 hover:bg-green-600"
          >
            {t({
              RU: "Написать в WhatsApp",
              KZ: "WhatsApp-қа жазу",
              EN: "WhatsApp"
            })}
          </ContactButton>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfoBlocks;
