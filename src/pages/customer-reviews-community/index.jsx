import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ReviewCard from './components/ReviewCard';
import ReviewFilters from './components/ReviewFilters';
import SocialMediaFeed from './components/SocialMediaFeed';
import CorporateTestimonials from './components/CorporateTestimonials';
import CommunityFeedback from './components/CommunityFeedback';
import LoyaltyProgram from './components/LoyaltyProgram';

const CustomerReviewsCommunity = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [activeSection, setActiveSection] = useState('reviews');
  const [activeFilters, setActiveFilters] = useState({
    rating: [],
    language: [],
    occasion: [],
    category: [],
    verified: [],
    withPhotos: [],
    recent: []
  });
  const [filteredReviews, setFilteredReviews] = useState([]);

  // Mock reviews data
  const allReviews = [
    {
      id: 1,
      name: 'Aida Nazarbayeva',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      date: new Date(Date.now() - 3600000 * 24),
      content: `Exceptional quality and authentic French taste! I've been ordering from Mon Croissant for my family's weekend breakfasts for months. The croissants are perfectly flaky, buttery, and fresh every time. What I appreciate most is their respect for halal requirements and cultural sensitivity. My children love the pain au chocolat, and I love knowing I'm giving them authentic French pastries made with care.`,occasion: 'Family Breakfast',
      products: ['Classic Croissants', 'Pain au Chocolat', 'Almond Croissants'],
      images: [
        'https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 23,
      language: 'English'
    },
    {
      id: 2,
      name: 'Dmitry Volkov',avatar: 'https://randomuser.me/api/portraits/men/28.jpg',rating: 5,date: new Date(Date.now() - 3600000 * 48),content: `As a tech company with 24/7 operations, Mon Croissant's round-the-clock service is invaluable. Our development teams often work late nights, and having access to fresh, high-quality pastries at any hour boosts morale significantly. The 3 AM croissants taste just as perfect as morning ones. Incredible consistency!`,
      occasion: 'Corporate Order',
      products: ['Variety Pack', 'Coffee Pastries', 'Danish Selection'],
      images: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 18,
      language: 'English'
    },
    {
      id: 3,
      name: 'Elena Petrova',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 5,
      date: new Date(Date.now() - 3600000 * 72),
      content: `Наш свадебный десертный стол был просто потрясающим! Mon Croissant создал самые красивые французские пирожные, которые идеально дополнили наше торжество. Каждый гость был поражен качеством и вкусом. Очень рекомендую для особых случаев!`,
      occasion: 'Wedding',
      products: ['Wedding Pastry Selection', 'Mini Éclairs', 'Fruit Tarts'],
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 31,
      language: 'Russian'
    },
    {
      id: 4,
      name: 'Arman Kassymov',
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      rating: 4,
      date: new Date(Date.now() - 3600000 * 96),
      content: `Өте жақсы сапа және дәм! Француз наубайханасының дәстүрлі дәмін Алматыда табу - бұл керемет. Халал сертификаты бар болуы біз үшін маңызды. Жеткізу қызметі де өте жылдам және сенімді. Отбасымыз үшін тамаша таңдау!`,
      occasion: 'Family Celebration',
      products: ['Traditional Croissants', 'Halal Pastries'],
      images: [
        'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 15,
      language: 'Kazakh'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      date: new Date(Date.now() - 3600000 * 120),
      content: `Perfect for our morning business meetings! The buttery layers and authentic French taste made our corporate breakfast special. Clients were impressed with the quality and presentation. The reliable 24/7 service means we can always count on Mon Croissant for last-minute orders. Professional packaging and punctual delivery every time.`,
      occasion: 'Business Meeting',
      products: ['Corporate Breakfast Box', 'Assorted Pastries'],
      images: [
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 27,
      language: 'English'
    },
    {
      id: 6,
      name: 'Marat Abdullayev',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      rating: 5,
      date: new Date(Date.now() - 3600000 * 144),
      content: `Балаларымның туған күніне тапсырыс бердім. Торт пен пирожныелар керемет болды! Француз дәстүрі мен жергілікті дәмдердің үйлесімі өте жақсы. Қызметкерлер мейрамханалық және кәсіби. Міндетті түрде қайта тапсырыс беремін!`,
      occasion: 'Birthday Party',
      products: ['Birthday Cake', 'Mini Pastries', 'Celebration Box'],
      images: [
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop'
      ],
      verified: true,
      helpful: 19,
      language: 'Kazakh'
    }
  ];

  // Review statistics for filters
  const reviewStats = {
    fiveStars: 142,
    fourStars: 28,
    threeStars: 8,
    twoStars: 3,
    oneStar: 1,
    english: 89,
    russian: 67,
    kazakh: 26,
    birthday: 34,
    wedding: 18,
    corporate: 45,
    daily: 78,
    holiday: 23,
    croissants: 98,
    pastries: 67,
    breads: 23,
    cakes: 31,
    desserts: 45
  };

  // Overall statistics
  const overallStats = {
    totalReviews: 182,
    averageRating: 4.8,
    satisfactionRate: 96,
    repeatCustomers: 89
  };

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'english';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    // Filter reviews based on active filters
    let filtered = [...allReviews];

    // Apply filters
    Object.keys(activeFilters)?.forEach(filterType => {
      const filterValues = activeFilters?.[filterType];
      if (filterValues?.length > 0) {
        filtered = filtered?.filter(review => {
          switch (filterType) {
            case 'rating':
              return filterValues?.includes(review?.rating?.toString());
            case 'language':
              return filterValues?.includes(review?.language?.toLowerCase());
            case 'occasion':
              return filterValues?.some(occasion => 
                review?.occasion?.toLowerCase()?.includes(occasion)
              );
            case 'verified':
              return filterValues?.includes('true') ? review?.verified : true;
            case 'withPhotos':
              return filterValues?.includes('true') ? review?.images && review?.images?.length > 0 : true;
            case 'recent':
              const isRecent = (Date.now() - review?.date?.getTime()) < (7 * 24 * 60 * 60 * 1000);
              return filterValues?.includes('true') ? isRecent : true;
            default:
              return true;
          }
        });
      }
    });

    setFilteredReviews(filtered);
  }, [activeFilters]);

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const navigationSections = [
    { key: 'reviews', label: 'Customer Reviews', icon: 'Star' },
    { key: 'social', label: 'Social Media', icon: 'Share2' },
    { key: 'corporate', label: 'Corporate Stories', icon: 'Building' },
    { key: 'feedback', label: 'Community Ideas', icon: 'Lightbulb' },
    { key: 'loyalty', label: 'Loyalty Program', icon: 'Gift' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Community Speaks
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover authentic experiences from our valued customers across Kazakhstan. 
              From daily breakfast orders to special celebrations, see how Mon Croissant 
              brings French artisanal excellence to your table.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {overallStats?.totalReviews}+
                </div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center space-x-1">
                  <span>{overallStats?.averageRating}</span>
                  <Icon name="Star" size={20} className="text-warning fill-current" />
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {overallStats?.satisfactionRate}%
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {overallStats?.repeatCustomers}%
                </div>
                <div className="text-sm text-muted-foreground">Repeat Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-4">
            {navigationSections?.map((section) => (
              <button
                key={section?.key}
                onClick={() => setActiveSection(section?.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === section?.key
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {activeSection === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ReviewFilters
                  filters={activeFilters}
                  onFilterChange={handleFilterChange}
                  activeFilters={activeFilters}
                  reviewStats={reviewStats}
                />
              </div>
            </div>

            {/* Reviews Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Customer Reviews ({filteredReviews?.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" iconName="Filter" iconPosition="left">
                    Sort by: Most Recent
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {filteredReviews?.length > 0 ? (
                  filteredReviews?.map((review) => (
                    <ReviewCard
                      key={review?.id}
                      review={review}
                      language={currentLanguage}
                    />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No reviews found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters to see more reviews.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setActiveFilters({
                        rating: [],
                        language: [],
                        occasion: [],
                        category: [],
                        verified: [],
                        withPhotos: [],
                        recent: []
                      })}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Load More */}
              {filteredReviews?.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    iconName="RefreshCw"
                    iconPosition="left"
                  >
                    Load More Reviews
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'social' && <SocialMediaFeed />}
        {activeSection === 'corporate' && <CorporateTestimonials />}
        {activeSection === 'feedback' && <CommunityFeedback />}
        {activeSection === 'loyalty' && <LoyaltyProgram />}
      </main>
      {/* WhatsApp Support */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="default"
          className="rounded-full w-14 h-14 bg-success hover:bg-success/90 shadow-warm-lg"
          iconName="MessageCircle"
        >
        </Button>
      </div>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <circle cx="12" cy="9" r="1.5" fill="var(--color-accent)"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    Mon Croissant Digital
                  </h3>
                  <p className="text-sm font-accent text-muted-foreground">
                    Authentic French Excellence
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Bringing authentic French artisanal pastries to Kazakhstan with 24/7 availability, 
                halal certification, and unwavering commitment to quality.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Customer Reviews</a></li>
                <li><a href="#social" className="text-muted-foreground hover:text-foreground transition-colors">Social Media</a></li>
                <li><a href="#corporate" className="text-muted-foreground hover:text-foreground transition-colors">Corporate Stories</a></li>
                <li><a href="#feedback" className="text-muted-foreground hover:text-foreground transition-colors">Share Feedback</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">+7 (727) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">WhatsApp Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">hello@moncroissant.kz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date()?.getFullYear()} Mon Croissant Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerReviewsCommunity;