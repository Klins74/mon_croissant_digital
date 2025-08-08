import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DeliveryZoneMap from './components/DeliveryZoneMap';
import OrderingChannels from './components/OrderingChannels';
import DeliveryScheduling from './components/DeliveryScheduling';
import PricingTransparency from './components/PricingTransparency';
import CustomerTestimonials from './components/CustomerTestimonials';

const DeliveryOrderingInformation = () => {
  const [activeTab, setActiveTab] = useState('zones');

  const tabs = [
    { id: 'zones', label: 'Delivery Zones', icon: 'MapPin' },
    { id: 'ordering', label: 'How to Order', icon: 'Smartphone' },
    { id: 'scheduling', label: 'Scheduling', icon: 'Calendar' },
    { id: 'pricing', label: 'Pricing', icon: 'DollarSign' },
    { id: 'reviews', label: 'Customer Reviews', icon: 'Star' }
  ];

  const quickStats = [
    { label: '24/7 Delivery', value: 'Always Open', icon: 'Clock', color: 'text-success' },
    { label: 'Average Time', value: '25-30 min', icon: 'Timer', color: 'text-primary' },
    { label: 'Delivery Zones', value: '4 Districts', icon: 'MapPin', color: 'text-accent' },
    { label: 'Minimum Order', value: '₸3,000', icon: 'ShoppingCart', color: 'text-warning' }
  ];

  const emergencyContacts = [
    { type: 'WhatsApp', number: '+7 777 123 4567', available: '24/7' },
    { type: 'Phone', number: '+7 727 123 4567', available: '24/7' },
    { type: 'Email', email: 'delivery@moncroissant.kz', available: '24/7' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Delivery & Ordering Information - Mon Croissant Digital</title>
        <meta name="description" content="Complete guide to Mon Croissant's 24/7 delivery service. View delivery zones, pricing, scheduling options, and customer reviews. Order fresh French pastries anytime." />
        <meta name="keywords" content="bakery delivery, 24/7 service, delivery zones, ordering guide, fresh pastries, Mon Croissant" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Icon name="Truck" size={40} className="text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Delivery & Ordering
                <span className="block text-primary">Information</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience seamless 24/7 delivery service with transparent pricing, flexible scheduling, and guaranteed freshness. Your favorite French pastries delivered exactly when you need them.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {quickStats?.map((stat, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-3">
                    <Icon name={stat?.icon} size={24} className={stat?.color} />
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat?.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat?.label}</p>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="Phone" size={24} className="text-success" />
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Need Immediate Help?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {emergencyContacts?.map((contact, index) => (
                  <div key={index} className="text-center p-3 bg-muted rounded-lg">
                    <p className="font-medium text-foreground mb-1">{contact?.type}</p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact?.number || contact?.email}
                    </p>
                    <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">
                      {contact?.available}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'zones' && <DeliveryZoneMap />}
            {activeTab === 'ordering' && <OrderingChannels />}
            {activeTab === 'scheduling' && <DeliveryScheduling />}
            {activeTab === 'pricing' && <PricingTransparency />}
            {activeTab === 'reviews' && <CustomerTestimonials />}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Experience the convenience of 24/7 French bakery delivery. Fresh pastries, transparent pricing, and reliable service - all just a click away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="UtensilsCrossed"
                iconPosition="left"
                onClick={() => window.location.href = '/interactive-menu-ordering'}
              >
                Browse Menu & Order
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://wa.me/77771234567', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-primary-foreground"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="1.5" fill="var(--color-accent)"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Mon Croissant</h3>
                    <p className="text-sm text-muted-foreground">Digital</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Authentic French bakery with 24/7 delivery service across the city.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/homepage" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                  <a href="/interactive-menu-ordering" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Menu & Ordering
                  </a>
                  <a href="/customer-reviews-community" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Customer Reviews
                  </a>
                  <a href="/contact-multi-channel-support" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Support
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📱 +7 777 123 4567 (WhatsApp)</p>
                  <p>📞 +7 727 123 4567</p>
                  <p>✉️ delivery@moncroissant.kz</p>
                  <p>🕒 24/7 Service Available</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Mon Croissant Digital. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DeliveryOrderingInformation;