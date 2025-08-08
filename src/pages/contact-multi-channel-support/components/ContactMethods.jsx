import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Instant messaging for quick questions and order updates',
      icon: 'MessageSquare',
      primary: '+7 777 123 4567',
      secondary: 'Available 24/7',
      action: 'Chat Now',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our customer service team',
      icon: 'Phone',
      primary: '+7 727 456 7890',
      secondary: 'Mon-Sun: 8:00 - 22:00',
      action: 'Call Now',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Detailed inquiries and comprehensive assistance',
      icon: 'Mail',
      primary: 'support@moncroissant.kz',
      secondary: 'Response within 2 hours',
      action: 'Send Email',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: 'emergency',
      title: 'Emergency Line',
      description: 'Urgent order issues or quality concerns',
      icon: 'AlertCircle',
      primary: '+7 777 999 8888',
      secondary: 'Available 24/7',
      action: 'Emergency Call',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200'
    }
  ];

  const handleContactAction = (method) => {
    switch (method?.id) {
      case 'whatsapp':
        window.open('https://wa.me/77771234567', '_blank');
        break;
      case 'phone':
        window.location.href = 'tel:+77274567890';
        break;
      case 'email':
        window.location.href = 'mailto:support@moncroissant.kz';
        break;
      case 'emergency':
        window.location.href = 'tel:+77779998888';
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer multiple ways to reach us, ensuring you get the support you need in the way that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`${method?.bgColor} ${method?.borderColor} border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-warm-lg group`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${method?.iconColor} bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={method?.icon} size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {method?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method?.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">
                    {method?.primary}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method?.secondary}
                  </p>
                </div>
              </div>

              <Button
                variant="default"
                size="sm"
                fullWidth
                className="btn-warm"
                onClick={() => handleContactAction(method)}
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 border border-border">
            <Icon name="Info" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
              Language Support Available
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🇷🇺 Russian
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🇰🇿 Kazakh
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🇬🇧 English
              </span>
            </div>
            <p className="text-muted-foreground">
              Our multilingual support team is ready to assist you in your preferred language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;