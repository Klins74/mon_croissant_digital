import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CorporateTestimonials = () => {
  const corporateClients = [
    {
      id: 1,
      company: 'Almaty Business Center',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      contactPerson: 'Elena Petrov',
      position: 'Event Manager',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      testimonial: `Mon Croissant has transformed our corporate catering experience. For our quarterly board meetings with international partners, we needed premium quality pastries that would represent our company's standards. The consistency is remarkable - every delivery arrives on time, beautifully presented, and the taste never disappoints. The halal certification is crucial for our diverse team, and the 24/7 availability means we can accommodate last-minute meetings. Our CEO specifically requested Mon Croissant for the upcoming annual conference.`,
      eventType: 'Board Meetings & Conferences',orderFrequency: 'Weekly',teamSize: '50-100 people',
      rating: 5,
      caseStudy: {
        event: 'Annual International Conference 2024',attendees: 150,challenge: 'Catering for diverse dietary requirements with premium quality',solution: 'Custom pastry selection with halal certification and elegant presentation',result: 'Outstanding feedback from international guests, 98% satisfaction rate'
      },
      images: [
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=300&h=200&fit=crop'
      ]
    },
    {
      id: 2,
      company: 'Astana Tech Hub',logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop',contactPerson: 'Dmitry Volkov',position: 'Operations Director',avatar: 'https://randomuser.me/api/portraits/men/38.jpg',testimonial: `As a tech company with round-the-clock operations, Mon Croissant's 24/7 service is invaluable. Our development teams often work late nights and early mornings, and having access to fresh, high-quality pastries at any hour boosts morale significantly. The online ordering system integrates perfectly with our workflow, and the delivery tracking keeps our office managers informed. The quality never varies regardless of the time - 3 AM croissants taste just as perfect as morning ones.`,
      eventType: 'Daily Team Catering',
      orderFrequency: 'Daily',
      teamSize: '30-50 people',
      rating: 5,
      caseStudy: {
        event: 'Product Launch Week',
        attendees: 75,
        challenge: '72-hour development sprint requiring continuous catering',
        solution: 'Scheduled deliveries every 8 hours with variety rotation',
        result: 'Team productivity maintained, zero complaints about food quality'
      },
      images: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&fit=crop'
      ]
    },
    {
      id: 3,
      company: 'Kazakhstan Medical Center',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop',
      contactPerson: 'Dr. Aigerim Nazarbayeva',
      position: 'Chief Administrator',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      testimonial: `In healthcare, we understand the importance of quality and reliability. Mon Croissant delivers both consistently. For our medical conferences and staff appreciation events, we need catering that reflects our commitment to excellence. The halal certification is essential for our diverse medical staff, and the presentation always looks professional. During our recent international medical symposium, several visiting doctors specifically asked about our catering provider - that's the kind of impression Mon Croissant creates.`,eventType: 'Medical Conferences & Staff Events',orderFrequency: 'Monthly',teamSize: '100-200 people',
      rating: 5,
      caseStudy: {
        event: 'International Medical Symposium',attendees: 200,challenge: 'Multi-day event requiring consistent quality and dietary compliance',solution: 'Comprehensive catering plan with daily fresh deliveries',result: 'International recognition for event quality, multiple referrals'
      },
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop','https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=300&h=200&fit=crop'
      ]
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating 
            ? 'text-warning fill-current' :'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Corporate Success Stories
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover how leading organizations trust Mon Croissant for their corporate catering needs, 
          from daily team support to prestigious international events.
        </p>
      </div>
      {/* Corporate Testimonials */}
      <div className="space-y-8">
        {corporateClients?.map((client) => (
          <div key={client?.id} className="artisanal-card p-8">
            {/* Client Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={client?.logo}
                    alt={client?.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {client?.company}
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(client?.rating)}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={client?.avatar}
                    alt={client?.contactPerson}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{client?.contactPerson}</p>
                  <p className="text-sm text-muted-foreground">{client?.position}</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-6">
              <blockquote className="text-foreground leading-relaxed italic">
                "{client?.testimonial}"
              </blockquote>
            </div>

            {/* Client Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="font-medium text-foreground">Event Type</span>
                </div>
                <p className="text-sm text-muted-foreground">{client?.eventType}</p>
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="RefreshCw" size={16} className="text-primary" />
                  <span className="font-medium text-foreground">Frequency</span>
                </div>
                <p className="text-sm text-muted-foreground">{client?.orderFrequency}</p>
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="font-medium text-foreground">Team Size</span>
                </div>
                <p className="text-sm text-muted-foreground">{client?.teamSize}</p>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-primary/5 rounded-lg p-6 mb-6">
              <h4 className="font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Award" size={18} className="text-primary" />
                <span>Case Study: {client?.caseStudy?.event}</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="font-medium text-foreground mb-1">Attendees</p>
                  <p className="text-sm text-muted-foreground">{client?.caseStudy?.attendees} people</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Challenge</p>
                  <p className="text-sm text-muted-foreground">{client?.caseStudy?.challenge}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">{client?.caseStudy?.solution}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Result</p>
                  <p className="text-sm text-muted-foreground">{client?.caseStudy?.result}</p>
                </div>
              </div>
            </div>

            {/* Event Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {client?.images?.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${client?.company} event ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Full Case Study
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">
          Ready to Elevate Your Corporate Events?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join these leading organizations and experience the Mon Croissant difference. 
          Our corporate catering solutions are designed to impress your clients and delight your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="btn-warm"
            iconName="Phone"
            iconPosition="left"
          >
            Request Corporate Quote
          </Button>
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
          >
            Download Corporate Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CorporateTestimonials;