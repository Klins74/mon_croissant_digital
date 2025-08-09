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
      {/* Delivery Statistics Only */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
          Delivery Performance
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">28 minutes</div>
            <p className="text-sm text-muted-foreground">Average Delivery Time</p>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <Icon name="Target" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">98.5%</div>
            <p className="text-sm text-muted-foreground">On-Time Delivery Rate</p>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <Icon name="Star" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <Icon name="Package" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">50,000+</div>
            <p className="text-sm text-muted-foreground">Orders Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;