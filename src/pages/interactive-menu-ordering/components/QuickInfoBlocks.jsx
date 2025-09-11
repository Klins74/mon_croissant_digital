import React from 'react';
import Icon from '../../../components/AppIcon';

const InfoRow = ({ icon, title, lines }) => (
  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
    <div className="mt-0.5 shrink-0 p-2 rounded-md bg-muted">
      <Icon name={icon} size={18} />
    </div>
    <div className="text-sm">
      <div className="font-medium text-foreground">{title}</div>
      {Array.isArray(lines) ? (
        <div className="mt-1 space-y-0.5 text-muted-foreground">
          {lines.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>
      ) : (
        <div className="mt-1 text-muted-foreground">{lines}</div>
      )}
    </div>
  </div>
);

const QuickInfoBlocks = () => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-3">
            Быстрая информация
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно знать о нашей французской пекарне — от сертификатов до контактов
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <InfoRow
            icon="Award"
            title="Сертификаты качества"
            lines={["ХАЛЯЛ сертифицирован", "ЕАЭС — декларация о соответствии", "Французские стандарты качества"]}
          />
          <InfoRow
            icon="UtensilsCrossed"
            title="Основное меню"
            lines={["Круассаны — 12 видов", "Пирожные — 8 видов", "Ремесленный хлеб — 6 видов", "Доступно 24/7"]}
          />
          <InfoRow
            icon="Star"
            title="Рейтинг и отзывы"
            lines={["4.8/5 звёзд", "500+ довольных клиентов", "98% рекомендуют нас"]}
          />
          <InfoRow
            icon="MapPin"
            title="Адрес и зона доставки"
            lines={["г. Алматы", "Доставка по всему городу", "Бесплатно от ₸15 000"]}
          />
          <InfoRow
            icon="CalendarClock"
            title="Режим работы"
            lines={["Заявки до 19:00 (вс-чт)", "Пятница-суббота до 18:00", "Минимальный заказ ₸10 000", "Доставка в день заказа"]}
          />
          <InfoRow
            icon="Phone"
            title="Телефон"
            lines={["+7 701 113 34 90", "Звонки с 9:00 до 19:00", "Быстрая консультация"]}
          />
          <InfoRow
            icon="Instagram"
            title="Instagram"
            lines={["sweet_home.food", "Свежие фото выпечки", "Написать в Direct"]}
          />
          <InfoRow
            icon="MessageCircle"
            title="WhatsApp"
            lines={["+7 777 021 3788", "Быстрые заказы", "Поддержка 24/7"]}
          />
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Готовы попробовать настоящие французские круассаны?
            </h3>
            <p className="text-muted-foreground mb-4">
              Закажите сейчас и получите свежую выпечку в день заказа
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Заказать сейчас
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Посмотреть меню
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoBlocks;



