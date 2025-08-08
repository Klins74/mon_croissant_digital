import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderingChannels = () => {
  const [activeChannel, setActiveChannel] = useState('website');

  const orderingChannels = [
    {
      id: 'website',
      name: 'Website Ordering',
      icon: 'Globe',
      description: 'Full menu access with detailed customization options',
      features: [
        'Complete menu browsing',
        'Advanced filtering options',
        'Nutritional information',
        'Order history tracking',
        'Loyalty points earning'
      ],
      steps: [
        'Browse our interactive menu',
        'Select items and customize',
        'Add to cart and review',
        'Choose delivery time',
        'Complete secure payment'
      ]
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Ordering',
      icon: 'MessageCircle',
      description: 'Personal assistance with instant communication',
      features: [
        'Real-time chat support',
        'Voice message ordering',
        'Photo sharing for custom requests',
        'Instant order confirmation',
        'Direct delivery updates'
      ],
      steps: [
        'Message us at +7 777 123 4567',
        'Share your location',
        'Tell us your preferences',
        'Confirm order details',
        'Receive delivery tracking'
      ]
    },
    {
      id: 'qr',
      name: 'QR Code System',
      icon: 'QrCode',
      description: 'Quick access menu for repeat customers',
      features: [
        'Instant menu access',
        'Saved preferences',
        'Quick reordering',
        'Table service integration',
        'Contactless experience'
      ],
      steps: [
        'Scan QR code with camera',
        'Access personalized menu',
        'Select from favorites',
        'Confirm delivery address',
        'Track order progress'
      ]
    }
  ];

  const supportNumbers = [
    { language: 'English', number: '+7 777 123 4567', hours: '24/7' },
    { language: 'Русский', number: '+7 777 123 4568', hours: '24/7' },
    { language: 'Қазақша', number: '+7 777 123 4569', hours: '24/7' }
  ];

  return (
    <div className="space-y-8">
      {/* Channel Selection */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Choose Your Ordering Method
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {orderingChannels?.map((channel) => (
            <button
              key={channel?.id}
              onClick={() => setActiveChannel(channel?.id)}
              className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                activeChannel === channel?.id
                  ? 'border-primary bg-primary/5 shadow-warm'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${
                  activeChannel === channel?.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon name={channel?.icon} size={20} />
                </div>
                <h4 className="font-medium text-foreground">{channel?.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{channel?.description}</p>
            </button>
          ))}
        </div>

        {/* Active Channel Details */}
        {orderingChannels?.map((channel) => (
          activeChannel === channel?.id && (
            <div key={channel?.id} className="grid lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Key Features</h4>
                <div className="space-y-3">
                  {channel?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-medium text-foreground mb-4">How to Order</h4>
                <div className="space-y-4">
                  {channel?.steps?.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
      {/* WhatsApp Support */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-success/10 rounded-lg">
            <Icon name="MessageCircle" size={24} className="text-success" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              WhatsApp Support
            </h3>
            <p className="text-sm text-muted-foreground">
              Get instant help in your preferred language
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {supportNumbers?.map((support, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{support?.language}</span>
                <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">
                  {support?.hours}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{support?.number}</p>
              <Button
                variant="outline"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                onClick={() => window.open(`https://wa.me/${support?.number?.replace(/[^0-9]/g, '')}`, '_blank')}
              >
                Chat Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* QR Code Demo */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Try Our QR Menu System
            </h3>
            <p className="text-muted-foreground mb-6">
              Scan the QR code to experience our contactless ordering system. Perfect for quick orders and repeat customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Smartphone" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Works with any smartphone camera
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Zap" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Instant access to personalized menu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Remembers your favorite orders
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="p-6 bg-background rounded-lg border-2 border-dashed border-primary">
              <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="QrCode" size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    QR Code Menu
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Scan to order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderingChannels;