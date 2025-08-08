import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('orders');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    { id: 'orders', name: 'Orders & Delivery', icon: 'ShoppingBag' },
    { id: 'halal', name: 'Halal Certification', icon: 'Award' },
    { id: 'quality', name: 'Quality & Freshness', icon: 'Star' },
    { id: 'payment', name: 'Payment & Pricing', icon: 'CreditCard' },
    { id: 'general', name: 'General Questions', icon: 'HelpCircle' }
  ];

  const faqData = {
    orders: [
      {
        id: 1,
        question: "What are your delivery zones in Almaty?",
        answer: `We deliver to all major districts in Almaty including:\n• Medeu District (Kok-Tobe, Dostyk Avenue area)\n• Almaly District (City Center, Republic Square)\n• Auezov District (Mega Park, Samal areas)\n• Bostandyk District (Al-Farabi Avenue, Furmanov Street)\n\nDelivery fees vary by distance: ₸500-1,500 depending on location. Free delivery for orders over ₸8,000.`
      },
      {
        id: 2,
        question: "How long does delivery take?",
        answer: "Standard delivery takes 45-90 minutes depending on your location and order complexity. Express delivery (30-45 minutes) is available for an additional ₸1,000. We provide real-time tracking once your order is dispatched."
      },
      {
        id: 3,
        question: "Can I schedule orders for later?",
        answer: "Yes! You can schedule orders up to 7 days in advance. Simply select your preferred delivery time during checkout. We recommend scheduling at least 2 hours ahead for same-day delivery."
      },
      {
        id: 4,
        question: "What\'s the minimum order amount?",
        answer: "Minimum order is ₸3,000 for delivery. No minimum for pickup orders. Bulk orders (₸15,000+) qualify for special pricing and dedicated delivery slots."
      }
    ],
    halal: [
      {
        id: 5,
        question: "Are all your products halal certified?",
        answer: "Yes, 100% of our products are halal certified by the Spiritual Administration of Muslims of Kazakhstan (SAMK). Our certification number is SAMK-2024-HC-001, valid until December 2025."
      },
      {
        id: 6,
        question: "How do you ensure halal compliance?",
        answer: `Our halal compliance includes:\n• All ingredients sourced from certified halal suppliers\n• Dedicated halal-only production equipment\n• Regular inspections by SAMK officials\n• Staff training on halal food handling\n• Complete ingredient traceability\n• Separate storage for all raw materials`
      },
      {
        id: 7,
        question: "Do you have halal certification documents?",
        answer: "Yes, our current halal certificate and all supplier certifications are available for viewing at our bakery or can be sent via email upon request. We also display our certificate prominently in our store."
      }
    ],
    quality: [
      {
        id: 8,
        question: "How fresh are your pastries?",
        answer: "All pastries are baked fresh daily, with most items prepared within 6-12 hours of delivery. We use a 24/7 production schedule to ensure maximum freshness. Items not sold within 24 hours are donated to local charities."
      },
      {
        id: 9,
        question: "What if I'm not satisfied with my order?",
        answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied, contact us within 24 hours for a full refund or replacement. We also provide photo documentation of all orders for quality assurance."
      },
      {
        id: 10,
        question: "How do you maintain quality during delivery?",
        answer: "We use insulated delivery bags, temperature-controlled vehicles for sensitive items, and special packaging to maintain freshness. Delivery drivers are trained in proper food handling procedures."
      }
    ],
    payment: [
      {
        id: 11,
        question: "What payment methods do you accept?",
        answer: `We accept:\n• Kaspi Pay (most popular)\n• Bank cards (Visa, Mastercard)\n• Cash on delivery\n• Bank transfers for corporate orders\n• Halyk Bank installments (for orders ₸10,000+)`
      },
      {
        id: 12,
        question: "Do you offer corporate pricing?",
        answer: "Yes! Corporate clients with monthly orders ₸50,000+ receive 10-15% discounts, dedicated account management, and flexible payment terms. Contact sarah@moncroissant.kz for corporate packages."
      },
      {
        id: 13,
        question: "Are there any hidden fees?",
        answer: "No hidden fees. All costs (delivery, service charges, taxes) are clearly displayed before checkout. What you see is what you pay."
      }
    ],
    general: [
      {
        id: 14,
        question: "Do you cater events and parties?",
        answer: "Yes! We provide catering for corporate events, weddings, birthdays, and religious celebrations. Minimum order ₸25,000. We offer custom packaging, setup service, and dietary accommodation. Book 48 hours in advance."
      },
      {
        id: 15,
        question: "Can I customize orders for dietary restrictions?",
        answer: "Absolutely! We offer vegan, gluten-free, sugar-free, and nut-free options. All dietary restrictions are clearly marked on our menu. Custom orders require 24-hour advance notice."
      },
      {
        id: 16,
        question: "Do you have a loyalty program?",
        answer: "Yes! Our 'Croissant Club' offers points for every purchase, birthday discounts, early access to new products, and exclusive member events. Join through our app or website."
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services, quality standards, and ordering process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-xl border border-border p-4 sticky top-24">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">
                Categories
              </h3>
              <nav className="space-y-2">
                {faqCategories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setActiveCategory(category?.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeCategory === category?.id
                        ? 'bg-primary text-primary-foreground shadow-warm'
                        : 'text-muted-foreground hover:text-card-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={category?.icon} size={18} />
                    <span className="text-sm font-medium">{category?.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              {faqData?.[activeCategory]?.map((faq) => (
                <div
                  key={faq?.id}
                  className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-warm transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(faq?.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-card-foreground pr-4">
                      {faq?.question}
                    </h3>
                    <Icon
                      name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      className="text-muted-foreground flex-shrink-0"
                    />
                  </button>
                  
                  <div
                    className={`accordion-content overflow-hidden transition-all duration-300 ${
                      openFAQ === faq?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line pt-4">
                        {faq?.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Need Help */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-border text-center">
              <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Still Need Help?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Can't find the answer you're looking for? Our support team is ready to help you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/77771234567', '_blank')}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  <Icon name="MessageSquare" size={18} />
                  <span>WhatsApp Support</span>
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:support@moncroissant.kz'}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium btn-warm"
                >
                  <Icon name="Mail" size={18} />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;