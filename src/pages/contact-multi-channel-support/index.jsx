import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import SupportTeam from './components/SupportTeam';
import FAQ from './components/FAQ';

const ContactMultiChannelSupport = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact & Support - Mon Croissant Digital | Multi-Channel Customer Service</title>
        <meta 
          name="description" 
          content="Get comprehensive support through multiple channels. WhatsApp, phone, email, and in-person assistance. Multilingual team ready to help with orders, quality concerns, and catering requests." 
        />
        <meta name="keywords" content="contact, support, customer service, WhatsApp, phone, email, multilingual, halal bakery, Almaty" />
        <meta property="og:title" content="Contact & Support - Mon Croissant Digital" />
        <meta property="og:description" content="Experience personalized support through multiple channels. Our multilingual team is ready to assist you." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-multi-channel-support" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          <ContactMethods />
          <ContactForm />
          <LocationInfo />
          <SupportTeam />
          <FAQ />
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="1.5" fill="var(--color-accent)"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">Mon Croissant Digital</h3>
                    <p className="text-secondary-foreground/80 text-sm">Authentic French Bakery</p>
                  </div>
                </div>
                <p className="text-secondary-foreground/80 mb-4 max-w-md">
                  Experience the finest French pastries with 24/7 availability, halal certification, and exceptional customer service in the heart of Almaty.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors cursor-pointer">
                    <span className="text-lg">📍</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Quick Contact</h4>
                <div className="space-y-3 text-sm text-secondary-foreground/80">
                  <div>
                    <p className="font-medium text-secondary-foreground">WhatsApp</p>
                    <p>+7 777 123 4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">Phone</p>
                    <p>+7 727 456 7890</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-foreground">Email</p>
                    <p>support@moncroissant.kz</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-secondary-foreground/80">
                  <div className="flex justify-between">
                    <span>Mon-Fri:</span>
                    <span>6:00-23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>7:00-23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>8:00-22:00</span>
                  </div>
                  <div className="flex justify-between font-medium text-secondary-foreground">
                    <span>Online:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-secondary-foreground/60 text-sm">
                © {new Date()?.getFullYear()} Mon Croissant Digital. All rights reserved. | Halal Certified | Premium French Bakery
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactMultiChannelSupport;