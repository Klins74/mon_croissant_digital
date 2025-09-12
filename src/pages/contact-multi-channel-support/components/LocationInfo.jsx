import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const [activeTab, setActiveTab] = useState('location');

  const businessHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 11:00 PM', service: 'Full Service' },
    { day: 'Saturday', hours: '7:00 AM - 11:00 PM', service: 'Full Service' },
    { day: 'Sunday', hours: '8:00 AM - 10:00 PM', service: 'Full Service' },
    { day: 'Customer Support', hours: '8:00 AM - 10:00 PM', service: 'Daily' },
    { day: 'Online Ordering', hours: '24/7', service: 'Always Available' }
  ];

  const locationDetails = {
    address: "123 Dostyk Avenue, Almaty 050000, Kazakhstan",
    coordinates: "43.2220,76.8512",
    parking: "Free parking available for pickup orders",
    publicTransport: "Metro: Dostyk Station (5 min walk)\nBus: Routes 12, 34, 56",
    landmarks: "Near Kok-Tobe Hill, opposite Central Park"
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our Bakery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the aroma of fresh pastries and meet our master bakers at our flagship location in the heart of Almaty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and Location Details */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-warm">
              <div className="h-64 lg:h-80 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="FrenchCroissant Bakery Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${locationDetails?.coordinates}&z=15&output=embed`}
                  className="rounded-t-xl"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open(`https://maps.google.com?q=${locationDetails?.coordinates}`, '_blank')}
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">
                      Main Bakery Location
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {locationDetails?.address}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Car" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{locationDetails?.parking}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Bus" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground whitespace-pre-line">
                          {locationDetails?.publicTransport}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Landmark" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{locationDetails?.landmarks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours and Services */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border shadow-warm overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-card-foreground">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {businessHours?.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-card-foreground">{schedule?.day}</p>
                        <p className="text-sm text-muted-foreground">{schedule?.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{schedule?.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <div>
                      <p className="font-medium text-green-800 text-sm">24/7 Ordering</p>
                      <p className="text-green-600 text-xs">Always available online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Icon name="Truck" size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-800 text-sm">Same Day Delivery</p>
                      <p className="text-blue-600 text-xs">Orders before 6 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <Icon name="Coffee" size={20} className="text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-800 text-sm">Fresh Daily</p>
                      <p className="text-purple-600 text-xs">Baked every morning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <Icon name="Award" size={20} className="text-orange-600" />
                    <div>
                      <p className="font-medium text-orange-800 text-sm">Halal Certified</p>
                      <p className="text-orange-600 text-xs">Verified quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-border">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Quick Actions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Navigation"
                  iconPosition="left"
                  fullWidth
                  className="btn-warm"
                  onClick={() => window.open(`https://maps.google.com?q=${locationDetails?.coordinates}`, '_blank')}
                >
                  Get Directions
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  fullWidth
                  onClick={() => window.location.href = 'tel:87073870029'}
                >
                  Call Store
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  iconName="ShoppingBag"
                  iconPosition="left"
                  fullWidth
                  onClick={() => window.location.href = '/interactive-menu-ordering'}
                >
                  Order Pickup
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                  fullWidth
                  onClick={() => {
                    const digits = '87770213788';
                    const appUrl = `whatsapp://send?phone=${digits}`;
                    const webUrl = `https://wa.me/${digits}`;
                    const opened = window.open(appUrl, '_blank');
                    setTimeout(() => { if (!opened || opened.closed) window.open(webUrl, '_blank'); }, 300);
                  }}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;