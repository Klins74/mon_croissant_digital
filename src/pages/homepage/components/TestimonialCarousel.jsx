import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import translations from "../../../../src/translations.js";

const TestimonialCarousel = ({ currentLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);



  const currentTestimonials = translations?.[currentLanguage]?.testimonials?.list || translations?.ru?.testimonials?.list;

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

  const currentTitles = translations?.[currentLanguage]?.testimonials?.titles || translations?.ru?.testimonials?.titles;

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