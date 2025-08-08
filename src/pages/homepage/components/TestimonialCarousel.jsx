import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = ({ currentLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = {
    en: [
      {
        id: 1,
        name: "Aida Nazarbayeva",
        location: "Almaty, Kazakhstan",
        rating: 5,
        text: "The croissants are absolutely authentic! As someone who lived in Paris, I can confirm these taste just like the ones from French bakeries. The halal certification gives me complete peace of mind.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true,
        orderCount: 47
      },
      {
        id: 2,
        name: "Dmitry Volkov",
        location: "Nur-Sultan, Kazakhstan",
        rating: 5,
        text: "Incredible that they bake fresh pastries at 3 AM! I work night shifts and Mon Croissant is a lifesaver. The quality never disappoints, even for late-night orders.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true,
        orderCount: 23
      },
      {
        id: 3,
        name: "Fatima Al-Rashid",
        location: "Shymkent, Kazakhstan",
        rating: 5,
        text: "Finally, premium French pastries that are halal certified! The pain au chocolat is my family's favorite. Excellent delivery service and always fresh.",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: true,
        orderCount: 31
      },
      {
        id: 4,
        name: "Alexander Petrov",
        location: "Almaty, Kazakhstan",
        rating: 5,
        text: "The attention to detail is remarkable. You can taste the quality ingredients and traditional French techniques. Worth every tenge!",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        verified: true,
        orderCount: 18
      }
    ],
    ru: [
      {
        id: 1,
        name: "Аида Назарбаева",
        location: "Алматы, Казахстан",
        rating: 5,
        text: "Круассаны абсолютно аутентичные! Как человек, который жил в Париже, могу подтвердить, что они на вкус точно такие же, как из французских пекарен. Халяльная сертификация дает мне полное спокойствие.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true,
        orderCount: 47
      },
      {
        id: 2,
        name: "Дмитрий Волков",
        location: "Нур-Султан, Казахстан",
        rating: 5,
        text: "Невероятно, что они пекут свежую выпечку в 3 утра! Я работаю в ночную смену, и Mon Croissant - спасение. Качество никогда не подводит, даже при ночных заказах.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true,
        orderCount: 23
      },
      {
        id: 3,
        name: "Фатима Аль-Рашид",
        location: "Шымкент, Казахстан",
        rating: 5,
        text: "Наконец-то премиальная французская выпечка с халяльной сертификацией! Пан-о-шоколя - любимое лакомство моей семьи. Отличная служба доставки и всегда свежее.",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: true,
        orderCount: 31
      },
      {
        id: 4,
        name: "Александр Петров",
        location: "Алматы, Казахстан",
        rating: 5,
        text: "Внимание к деталям поразительное. Чувствуется качество ингредиентов и традиционные французские техники. Стоит каждой тенге!",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        verified: true,
        orderCount: 18
      }
    ],
    kz: [
      {
        id: 1,
        name: "Айда Назарбаева",
        location: "Алматы, Қазақстан",
        rating: 5,
        text: "Круассандар мүлдем түпнұсқа! Парижде тұрған адам ретінде, олардың дәмі француз наубайханаларындағыдай екенін растай аламын. Халал сертификаты маған толық тыныштық береді.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true,
        orderCount: 47
      },
      {
        id: 2,
        name: "Дмитрий Волков",
        location: "Нұр-Сұлтан, Қазақстан",
        rating: 5,
        text: "Таң 3-те жаңа тәттілер пісіруі керемет! Мен түнгі ауысымда жұмыс істеймін, Mon Croissant - құтқарушы. Сапа ешқашан ренжітпейді, тіпті түнгі тапсырыстарда да.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true,
        orderCount: 23
      },
      {
        id: 3,
        name: "Фатима Әл-Рашид",
        location: "Шымкент, Қазақстан",
        rating: 5,
        text: "Ақырында халал сертификатталған премиум француз тәттілері! Пан-о-шокола менің отбасымның сүйіктісі. Керемет жеткізу қызметі және әрқашан жаңа.",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: true,
        orderCount: 31
      },
      {
        id: 4,
        name: "Александр Петров",
        location: "Алматы, Қазақстан",
        rating: 5,
        text: "Бөлшектерге көңіл бөлу таңғажайып. Ингредиенттердің сапасы мен дәстүрлі француз техникасы сезіледі. Әр теңгеге тұрарлық!",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        verified: true,
        orderCount: 18
      }
    ]
  };

  const currentTestimonials = testimonials?.[currentLanguage] || testimonials?.en;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonials?.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials?.length) % currentTestimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const sectionTitles = {
    en: {
      title: "What Our Customers Say",
      subtitle: "Real experiences from our valued customers across Kazakhstan"
    },
    ru: {
      title: "Что говорят наши клиенты",
      subtitle: "Реальные отзывы наших ценных клиентов по всему Казахстану"
    },
    kz: {
      title: "Клиенттеріміз не дейді",
      subtitle: "Қазақстан бойынша құнды клиенттеріміздің нақты тәжірибелері"
    }
  };

  const currentTitles = sectionTitles?.[currentLanguage] || sectionTitles?.en;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {currentTitles?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentTitles?.subtitle}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="artisanal-card p-8 lg:p-12 bg-card"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Customer Info */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <Image
                        src={currentTestimonials?.[currentIndex]?.image}
                        alt={currentTestimonials?.[currentIndex]?.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto lg:mx-0"
                      />
                      {currentTestimonials?.[currentIndex]?.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold text-card-foreground mb-1">
                      {currentTestimonials?.[currentIndex]?.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {currentTestimonials?.[currentIndex]?.location}
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                      {renderStars(currentTestimonials?.[currentIndex]?.rating)}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {currentTestimonials?.[currentIndex]?.orderCount} orders
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <Icon name="Quote" size={40} className="text-primary/20 mb-4" />
                      <blockquote className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-6">
                        "{currentTestimonials?.[currentIndex]?.text}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-warm"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-warm"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {currentTestimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-4 mt-8">
          {currentTestimonials?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => goToSlide(index)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary/10 border border-primary/20' :'bg-muted/50 hover:bg-muted border border-transparent'
              }`}
            >
              <Image
                src={testimonial?.image}
                alt={testimonial?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-sm font-medium text-card-foreground">
                  {testimonial?.name?.split(' ')?.[0]}
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial?.rating)?.slice(0, 1)}
                  <span className="text-xs text-muted-foreground">{testimonial?.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;