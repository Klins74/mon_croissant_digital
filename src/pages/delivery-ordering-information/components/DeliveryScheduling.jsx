import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DeliveryScheduling = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()?.toISOString()?.split('T')?.[0]);
  const [selectedTime, setSelectedTime] = useState('asap');

  const timeSlots = [
    { id: 'asap', label: 'As Soon As Possible', time: '20-30 min', available: true },
    { id: '09:00', label: '9:00 AM', time: '9:00', available: true },
    { id: '12:00', label: '12:00 PM', time: '12:00', available: true, popular: true },
    { id: '15:00', label: '3:00 PM', time: '15:00', available: true },
    { id: '18:00', label: '6:00 PM', time: '18:00', available: false },
    { id: '21:00', label: '9:00 PM', time: '21:00', available: true },
    { id: '00:00', label: 'Midnight', time: '00:00', available: true, night: true }
  ];

  const specialOccasions = [
    {
      id: 1,
      name: 'Birthday Celebration',
      icon: 'Cake',
      description: 'Perfect timing for birthday surprises',
      recommendedTime: '2-3 hours advance notice',
      features: ['Custom message cards', 'Special packaging', 'Surprise delivery']
    },
    {
      id: 2,
      name: 'Business Meeting',
      icon: 'Briefcase',
      description: 'Professional catering service',
      recommendedTime: '24 hours advance notice',
      features: ['Bulk order discounts', 'Professional presentation', 'Punctual delivery']
    },
    {
      id: 3,
      name: 'Ramadan Iftar',
      icon: 'Moon',
      description: 'Respectful timing for breaking fast',
      recommendedTime: 'Schedule for sunset time',
      features: ['Halal certified items', 'Sunset timing coordination', 'Cultural sensitivity']
    }
  ];

  const peakHours = [
    { time: '8:00-10:00 AM', demand: 'High', delay: '+5-10 min' },
    { time: '12:00-2:00 PM', demand: 'Very High', delay: '+10-15 min' },
    { time: '6:00-8:00 PM', demand: 'High', delay: '+5-10 min' },
    { time: '10:00 PM-12:00 AM', demand: 'Medium', delay: 'Normal' }
  ];

  return (
    <div className="space-y-8">
      {/* Scheduling Interface */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Schedule Your Delivery
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e?.target?.value)}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)?.toISOString()?.split('T')?.[0]}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-muted-foreground mt-2">
              We accept orders up to 7 days in advance
            </p>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Preferred Time
            </label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {timeSlots?.map((slot) => (
                <button
                  key={slot?.id}
                  onClick={() => slot?.available && setSelectedTime(slot?.id)}
                  disabled={!slot?.available}
                  className={`w-full p-3 rounded-lg border text-left transition-all duration-200 ${
                    selectedTime === slot?.id
                      ? 'border-primary bg-primary/5 shadow-warm'
                      : slot?.available
                      ? 'border-border hover:border-primary/50' :'border-border bg-muted opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-foreground">{slot?.label}</span>
                      {slot?.popular && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                          Popular
                        </span>
                      )}
                      {slot?.night && (
                        <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                          Night Service
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {!slot?.available && (
                        <Icon name="Clock" size={16} className="text-error" />
                      )}
                      <span className={`text-sm ${
                        slot?.available ? 'text-muted-foreground' : 'text-error'
                      }`}>
                        {slot?.available ? slot?.time : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-accent/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">24/7 Service Available</h4>
              <p className="text-sm text-muted-foreground">
                Our bakers work around the clock to ensure fresh pastries are always available. Night deliveries include special insulated packaging to maintain optimal temperature and freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Peak Hours Information */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Peak Hours & Delivery Times
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {peakHours?.map((peak, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{peak?.time}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  peak?.demand === 'Very High' ? 'bg-error text-error-foreground' :
                  peak?.demand === 'High' ? 'bg-warning text-warning-foreground' :
                  'bg-success text-success-foreground'
                }`}>
                  {peak?.demand}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Expected delay: {peak?.delay}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="TrendingUp" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Smart Scheduling Tip</h4>
              <p className="text-sm text-muted-foreground">
                Order 30 minutes before peak hours to avoid delays, or schedule for off-peak times for faster delivery. Our system automatically suggests optimal delivery windows.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Special Occasions */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Special Occasion Planning
        </h3>

        <div className="grid lg:grid-cols-3 gap-6">
          {specialOccasions?.map((occasion) => (
            <div key={occasion?.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={occasion?.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-medium text-foreground">{occasion?.name}</h4>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {occasion?.description}
              </p>

              <div className="mb-4">
                <span className="text-xs font-medium text-accent">
                  {occasion?.recommendedTime}
                </span>
              </div>

              <div className="space-y-2">
                {occasion?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                className="mt-4"
                iconName="Calendar"
                iconPosition="left"
              >
                Plan Event
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Cultural Considerations */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon name="Heart" size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Cultural Sensitivity
            </h3>
            <p className="text-sm text-muted-foreground">
              We respect and accommodate cultural and religious preferences
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Ramadan Services</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="Moon" size={16} className="text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Iftar Timing</p>
                  <p className="text-xs text-muted-foreground">
                    Coordinated delivery with sunset prayers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={16} className="text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Halal Certified</p>
                  <p className="text-xs text-muted-foreground">
                    All ingredients verified and certified
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Holiday Scheduling</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="Calendar" size={16} className="text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Advance Booking</p>
                  <p className="text-xs text-muted-foreground">
                    Special holiday menu items available
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Gift" size={16} className="text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Gift Packaging</p>
                  <p className="text-xs text-muted-foreground">
                    Beautiful presentation for celebrations
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

export default DeliveryScheduling;