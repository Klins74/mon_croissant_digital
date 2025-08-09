import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DeliveryZoneMap = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const deliveryZones = [
    {
      id: 1,
      name: "Central District",
      deliveryTime: "20-30 min",
      fee: 500,
      minOrder: 3000,
      isActive: true,
      coordinates: { lat: 43.2220, lng: 76.8512 }
    },
    {
      id: 2,
      name: "Almaly District",
      deliveryTime: "25-35 min",
      fee: 700,
      minOrder: 3500,
      isActive: true,
      coordinates: { lat: 43.2565, lng: 76.9286 }
    },
    {
      id: 3,
      name: "Bostandyk District",
      deliveryTime: "30-40 min",
      fee: 800,
      minOrder: 4000,
      isActive: true,
      coordinates: { lat: 43.2075, lng: 76.8405 }
    },
    {
      id: 4,
      name: "Medeu District",
      deliveryTime: "35-45 min",
      fee: 1000,
      minOrder: 4500,
      isActive: false,
      coordinates: { lat: 43.1325, lng: 77.0403 }
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold text-foreground">
          Delivery Zones
        </h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <span className="text-muted-foreground">Unavailable</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Interactive Map */}
        <div className="relative">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="FrenchCroissant Delivery Zones"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=43.2220,76.8512&z=12&output=embed"
              className="border-0"
            />
          </div>
          
          {/* Zone Indicators */}
          <div className="absolute inset-0 pointer-events-none">
            {deliveryZones?.map((zone) => (
              <div
                key={zone?.id}
                className={`absolute w-4 h-4 rounded-full border-2 border-background ${
                  zone?.isActive ? 'bg-success' : 'bg-error'
                } delivery-pulse`}
                style={{
                  top: `${20 + (zone?.id * 15)}%`,
                  left: `${30 + (zone?.id * 10)}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Zone Details */}
        <div className="space-y-4">
          {deliveryZones?.map((zone) => (
            <div
              key={zone?.id}
              className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                selectedZone === zone?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              } ${!zone?.isActive ? 'opacity-60' : ''}`}
              onClick={() => setSelectedZone(selectedZone === zone?.id ? null : zone?.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    zone?.isActive ? 'bg-success' : 'bg-error'
                  }`} />
                  <h4 className="font-medium text-foreground">{zone?.name}</h4>
                </div>
                <Icon 
                  name={selectedZone === zone?.id ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  className="text-muted-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Delivery Time:</span>
                  <p className="font-medium text-foreground">{zone?.deliveryTime}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Delivery Fee:</span>
                  <p className="font-medium text-foreground">₸{zone?.fee?.toLocaleString()}</p>
                </div>
              </div>

              {selectedZone === zone?.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Minimum Order:</span>
                      <p className="font-medium text-foreground">₸{zone?.minOrder?.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <p className={`font-medium ${
                        zone?.isActive ? 'text-success' : 'text-error'
                      }`}>
                        {zone?.isActive ? 'Available 24/7' : 'Temporarily Unavailable'}
                      </p>
                    </div>
                    {zone?.isActive && (
                      <div className="flex items-center space-x-2 text-success">
                        <Icon name="Clock" size={14} />
                        <span>Next available slot: Now</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">24/7 Delivery Promise</h4>
            <p className="text-sm text-muted-foreground">
              We deliver fresh pastries around the clock. Night deliveries (10 PM - 6 AM) may take 5-10 minutes longer due to traffic conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZoneMap;