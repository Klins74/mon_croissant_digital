import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTransparency = () => {
  const [selectedZone, setSelectedZone] = useState('central');
  const [orderValue, setOrderValue] = useState(5000);

  const deliveryZones = [
    {
      id: 'central',
      name: 'Central District',
      baseDeliveryFee: 500,
      minOrder: 3000,
      freeDeliveryThreshold: 8000,
      bulkDiscountThreshold: 15000
    },
    {
      id: 'almaly',
      name: 'Almaly District',
      baseDeliveryFee: 700,
      minOrder: 3500,
      freeDeliveryThreshold: 9000,
      bulkDiscountThreshold: 18000
    },
    {
      id: 'bostandyk',
      name: 'Bostandyk District',
      baseDeliveryFee: 800,
      minOrder: 4000,
      freeDeliveryThreshold: 10000,
      bulkDiscountThreshold: 20000
    }
  ];

  const bulkDiscounts = [
    { minAmount: 15000, discount: 5, description: 'Small events (10-15 people)' },
    { minAmount: 25000, discount: 10, description: 'Medium events (20-30 people)' },
    { minAmount: 40000, discount: 15, description: 'Large events (40+ people)' },
    { minAmount: 75000, discount: 20, description: 'Corporate catering' }
  ];

  const additionalFees = [
    {
      name: 'Night Delivery',
      fee: 200,
      condition: '10 PM - 6 AM',
      description: 'Additional fee for overnight service'
    },
    {
      name: 'Express Delivery',
      fee: 300,
      condition: 'Under 15 minutes',
      description: 'Priority delivery for urgent orders'
    },
    {
      name: 'Special Packaging',
      fee: 150,
      condition: 'Gift wrapping',
      description: 'Premium packaging for special occasions'
    }
  ];

  const currentZone = deliveryZones?.find(zone => zone?.id === selectedZone);
  
  const calculateDeliveryFee = () => {
    if (orderValue >= currentZone?.freeDeliveryThreshold) return 0;
    return currentZone?.baseDeliveryFee;
  };

  const calculateDiscount = () => {
    const applicableDiscount = bulkDiscounts?.filter(discount => orderValue >= discount?.minAmount)?.sort((a, b) => b?.discount - a?.discount)?.[0];
    
    return applicableDiscount ? (orderValue * applicableDiscount?.discount) / 100 : 0;
  };

  const suggestedItems = [
    { name: 'Classic Croissant', price: 450, category: 'Pastries' },
    { name: 'Pain au Chocolat', price: 550, category: 'Pastries' },
    { name: 'French Coffee', price: 350, category: 'Beverages' },
    { name: 'Almond Tart', price: 750, category: 'Desserts' },
    { name: 'Baguette Sandwich', price: 850, category: 'Sandwiches' }
  ];

  return (
    <div className="space-y-8">
      {/* Pricing Calculator */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Delivery Fee Calculator
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Zone Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Select Delivery Zone
            </label>
            <div className="space-y-2">
              {deliveryZones?.map((zone) => (
                <button
                  key={zone?.id}
                  onClick={() => setSelectedZone(zone?.id)}
                  className={`w-full p-3 rounded-lg border text-left transition-all duration-200 ${
                    selectedZone === zone?.id
                      ? 'border-primary bg-primary/5 shadow-warm'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{zone?.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ₸{zone?.baseDeliveryFee?.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Min order: ₸{zone?.minOrder?.toLocaleString()} • Free delivery: ₸{zone?.freeDeliveryThreshold?.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Order Value Input */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Order Value (₸)
            </label>
            <input
              type="range"
              min={currentZone?.minOrder}
              max="50000"
              step="500"
              value={orderValue}
              onChange={(e) => setOrderValue(parseInt(e?.target?.value))}
              className="w-full mb-4"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>₸{currentZone?.minOrder?.toLocaleString()}</span>
              <span className="font-medium text-foreground text-lg">
                ₸{orderValue?.toLocaleString()}
              </span>
              <span>₸50,000</span>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Cost Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground">₸{orderValue?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee:</span>
                  <span className={calculateDeliveryFee() === 0 ? 'text-success' : 'text-foreground'}>
                    {calculateDeliveryFee() === 0 ? 'FREE' : `₸${calculateDeliveryFee()?.toLocaleString()}`}
                  </span>
                </div>
                {calculateDiscount() > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bulk Discount:</span>
                    <span className="text-success">-₸{calculateDiscount()?.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 flex justify-between font-medium">
                  <span className="text-foreground">Total:</span>
                  <span className="text-foreground">
                    ₸{(orderValue + calculateDeliveryFee() - calculateDiscount())?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions to reach threshold */}
        {orderValue < currentZone?.freeDeliveryThreshold && (
          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Lightbulb" size={20} className="text-accent mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-2">
                  Add ₸{(currentZone?.freeDeliveryThreshold - orderValue)?.toLocaleString()} more for FREE delivery!
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {suggestedItems?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setOrderValue(prev => prev + item?.price)}
                      className="p-2 bg-background rounded border border-border hover:border-primary transition-colors text-left"
                    >
                      <p className="text-xs font-medium text-foreground">{item?.name}</p>
                      <p className="text-xs text-muted-foreground">₸{item?.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Bulk Discounts */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Bulk Order Discounts
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bulkDiscounts?.map((discount, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                orderValue >= discount?.minAmount
                  ? 'border-success bg-success/5 shadow-warm'
                  : 'border-border'
              }`}
            >
              <div className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  orderValue >= discount?.minAmount ? 'text-success' : 'text-foreground'
                }`}>
                  {discount?.discount}%
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  ₸{discount?.minAmount?.toLocaleString()}+
                </p>
                <p className="text-xs text-muted-foreground">
                  {discount?.description}
                </p>
                {orderValue >= discount?.minAmount && (
                  <div className="mt-2 flex items-center justify-center space-x-1">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-xs text-success font-medium">Qualified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Users" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Corporate Catering</h4>
              <p className="text-sm text-muted-foreground">
                Planning a large event? Contact us for custom pricing on orders over ₸100,000. We offer additional services including setup, serving equipment, and dedicated delivery staff.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                iconName="Phone"
                iconPosition="left"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Fees */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          Additional Services & Fees
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {additionalFees?.map((fee, index) => (
            <div key={index} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-foreground">{fee?.name}</h4>
                <span className="text-sm font-medium text-primary">
                  +₸{fee?.fee}
                </span>
              </div>
              <p className="text-xs text-accent mb-2">{fee?.condition}</p>
              <p className="text-sm text-muted-foreground">{fee?.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-success/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">No Hidden Fees</h4>
                <p className="text-sm text-muted-foreground">
                  All costs are transparent and shown before checkout. What you see is what you pay - no surprises at delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="CreditCard" size={20} className="text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Flexible Payment</h4>
                <p className="text-sm text-muted-foreground">
                  Pay online, cash on delivery, or through our mobile app. All payment methods accepted with secure processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Money-Back Guarantee */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
            <Icon name="ShieldCheck" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you're not completely satisfied with your order or delivery experience, we'll make it right. Full refund or replacement guaranteed within 24 hours of delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground">On-time delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Thermometer" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground">Fresh & warm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground">Quality guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTransparency;