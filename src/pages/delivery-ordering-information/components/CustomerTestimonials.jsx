import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aida Nazarbayeva",
      location: "Central District",
      rating: 5,
      date: "2025-01-15",
      orderType: "Regular Delivery",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      review: `Ordered croissants for my family's Sunday breakfast. The delivery was exactly on time at 9 AM, and everything arrived warm and fresh. The packaging kept everything perfect - even the delicate pastries weren't damaged. My children loved the pain au chocolat!`,
      orderDetails: "6 croissants, 4 pain au chocolat, 2 coffee",
      deliveryTime: "28 minutes",
      photos: [
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      name: "James Mitchell",
      location: "Almaly District",
      rating: 5,
      date: "2025-01-12",
      orderType: "Night Delivery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review: `Working late shifts, I really appreciate the 24/7 service. Ordered at 11 PM and received fresh baguette sandwiches by midnight. The night delivery fee is totally worth it for the convenience. The driver was professional and the food quality was exactly the same as daytime orders.`,
      orderDetails: "2 baguette sandwiches, 1 almond tart",
      deliveryTime: "35 minutes",
      photos: [
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      location: "Bostandyk District",
      rating: 5,
      date: "2025-01-10",
      orderType: "Ramadan Iftar",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      review: `During Ramadan, timing is everything for iftar. Mon Croissant perfectly coordinated the delivery to arrive just before sunset. All items were halal certified as promised, and the cultural sensitivity shown by the team was remarkable. The dates and pastries were a perfect combination for breaking our fast.`,
      orderDetails: "Halal pastry selection, dates, traditional sweets",
      deliveryTime: "Scheduled for sunset",
      photos: [
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Dmitri Volkov",
      location: "Central District",
      rating: 5,
      date: "2025-01-08",
      orderType: "Corporate Catering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: `Ordered for our office meeting with international clients. The presentation was impeccable, delivery was punctual, and the variety satisfied everyone's preferences. The bulk discount made it very cost-effective. Our clients were impressed with the authentic French quality. Will definitely use for future corporate events.`,
      orderDetails: "50 assorted pastries, coffee service for 20",
      deliveryTime: "Scheduled - 8:30 AM sharp",
      photos: [
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop",
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Sarah Kim",
      location: "Almaly District",
      rating: 5,
      date: "2025-01-05",
      orderType: "Birthday Surprise",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: `Surprised my husband with a birthday cake delivery at his office. The coordination was perfect - they called to confirm timing and even included a personalized message card. The cake arrived in beautiful packaging and tasted incredible. The surprise was a complete success thanks to their attention to detail!`,
      orderDetails: "Custom birthday cake, 6 éclairs",
      deliveryTime: "Scheduled surprise delivery",
      photos: [
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?w=300&h=200&fit=crop"
      ]
    }
  ];

  const deliveryStats = [
    { label: "Average Delivery Time", value: "28 minutes", icon: "Clock" },
    { label: "On-Time Delivery Rate", value: "98.5%", icon: "Target" },
    { label: "Customer Satisfaction", value: "4.9/5", icon: "Star" },
    { label: "Orders Delivered", value: "50,000+", icon: "Package" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="space-y-8">
      {/* Delivery Statistics */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
          Delivery Performance
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryStats?.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat?.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Testimonial */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Customer Experiences
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <span className="text-sm text-muted-foreground px-3">
              {activeTestimonial + 1} of {testimonials?.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customer Info */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-foreground mb-1">
                {currentTestimonial?.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {currentTestimonial?.location}
              </p>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {new Date(currentTestimonial.date)?.toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Package" size={14} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">Order Type</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentTestimonial?.orderType}</p>
              </div>
              
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">Delivery Time</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentTestimonial?.deliveryTime}</p>
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <blockquote className="text-foreground leading-relaxed mb-4">
                "{currentTestimonial?.review}"
              </blockquote>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ShoppingBag" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Order Details</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial?.orderDetails}
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            {currentTestimonial?.photos && currentTestimonial?.photos?.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-foreground mb-3">
                  Customer Photos
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {currentTestimonial?.photos?.map((photo, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={photo}
                        alt={`Customer photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Testimonial Grid */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
          More Customer Reviews
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials?.slice(0, 6)?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                activeTestimonial === index
                  ? 'border-primary bg-primary/5 shadow-warm'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {testimonial?.name}
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={12} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
                {testimonial?.review}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{testimonial?.orderType}</span>
                <span>{new Date(testimonial.date)?.toLocaleDateString()}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            Trusted by Thousands
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing community of satisfied customers who trust Mon Croissant for reliable, high-quality bakery deliveries across the city.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200K+</div>
              <p className="text-sm text-muted-foreground">Orders Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Service Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;