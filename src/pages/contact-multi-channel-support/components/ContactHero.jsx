import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 texture-flour"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={24} className="text-primary-foreground" />
              </div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-secondary-foreground" />
              </div>
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-accent-foreground" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 french-heading">
            We're Here to Help
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience personalized support through multiple channels. Our multilingual team is ready to assist you with orders, questions, and everything Mon Croissant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <Icon name="Clock" size={20} className="text-primary" />
              <span className="text-sm font-medium text-card-foreground">24/7 Ordering</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <Icon name="Languages" size={20} className="text-primary" />
              <span className="text-sm font-medium text-card-foreground">Multi-Language</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <Icon name="Headphones" size={20} className="text-primary" />
              <span className="text-sm font-medium text-card-foreground">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;