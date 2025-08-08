import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialMediaFeed = () => {
  const [activeTab, setActiveTab] = useState('instagram');

  const socialPosts = {
    instagram: [
      {
        id: 1,
        platform: 'instagram',
        username: '@sarah_almaty',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=400&h=400&fit=crop',
        caption: `Perfect croissants for our morning meeting! 🥐 The buttery layers and authentic French taste made our corporate breakfast special. Thank you @moncroissantdigital for the reliable 24/7 service! #MorningTreat #FrenchPastry #AlmatyBusiness`,
        likes: 127,
        comments: 23,
        timestamp: new Date(Date.now() - 3600000 * 2),
        hashtags: ['#MorningTreat', '#FrenchPastry', '#AlmatyBusiness']
      },
      {
        id: 2,
        platform: 'instagram',
        username: '@wedding_kz',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
        caption: `Our wedding dessert table was absolutely stunning! 💕 Mon Croissant created the most beautiful French pastries that perfectly complemented our celebration. Every guest was amazed by the quality and taste. Highly recommend for special occasions! 🎂✨`,
        likes: 89,
        comments: 15,
        timestamp: new Date(Date.now() - 3600000 * 8),
        hashtags: ['#WeddingDesserts', '#FrenchPastries', '#SpecialOccasion']
      },
      {
        id: 3,
        platform: 'instagram',
        username: '@foodie_astana',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
        caption: `Late night cravings satisfied! 🌙 Ordered at 11 PM and got fresh, warm croissants delivered. The 24/7 service is a game-changer in Astana. Quality never compromises, no matter what time you order. #NightOwl #FreshPastries #AstanaEats`,
        likes: 156,
        comments: 31,
        timestamp: new Date(Date.now() - 3600000 * 12),
        hashtags: ['#NightOwl', '#FreshPastries', '#AstanaEats']
      }
    ],
    facebook: [
      {
        id: 4,
        platform: 'facebook',
        username: 'Aida Nazarbayeva',
        avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
        image: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=400&h=400&fit=crop',
        caption: `I've been ordering from Mon Croissant for my family's weekend breakfasts for months now. The consistency in quality is remarkable - every croissant is perfectly flaky, buttery, and fresh. What I appreciate most is their respect for halal requirements and the cultural sensitivity they show. My children love the pain au chocolat, and I love knowing I'm giving them authentic French pastries made with care. The delivery is always on time, and the packaging keeps everything fresh. Truly a blessing for our community to have such quality available 24/7.`,
        likes: 67,
        comments: 12,
        timestamp: new Date(Date.now() - 3600000 * 18),
        hashtags: []
      },
      {
        id: 5,
        platform: 'facebook',username: 'Almaty Business Center',avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
        caption: `Mon Croissant has become our go-to catering partner for corporate events. Last week's board meeting breakfast was exceptional - the variety of pastries, the presentation, and the punctual delivery impressed all our international guests. The quality speaks for itself, and having halal-certified options means we can accommodate all our team members and clients. Professional service that understands business needs. Highly recommended for corporate catering in Almaty.`,
        likes: 94,
        comments: 8,
        timestamp: new Date(Date.now() - 3600000 * 24),
        hashtags: []
      }
    ]
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const renderPost = (post) => (
    <div key={post?.id} className="artisanal-card p-6 hover:shadow-warm-lg transition-all duration-300">
      {/* Post Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={post?.avatar}
            alt={post?.username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-foreground">{post?.username}</h4>
            <Icon 
              name={post?.platform === 'instagram' ? 'Instagram' : 'Facebook'} 
              size={16} 
              className="text-muted-foreground" 
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {formatTimeAgo(post?.timestamp)}
          </p>
        </div>
      </div>

      {/* Post Image */}
      {post?.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={post?.image}
            alt="Social media post"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-foreground leading-relaxed">{post?.caption}</p>
        
        {post?.hashtags && post?.hashtags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post?.hashtags?.map((hashtag, index) => (
              <span
                key={index}
                className="text-primary hover:text-primary/80 cursor-pointer text-sm font-medium"
              >
                {hashtag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={18} className="text-error" />
            <span className="text-sm font-medium text-foreground">{post?.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MessageCircle" size={18} className="text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{post?.comments}</span>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
        >
          View Post
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('instagram')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'instagram' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="Instagram" size={16} />
          <span>Instagram</span>
        </button>
        <button
          onClick={() => setActiveTab('facebook')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'facebook' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="Facebook" size={16} />
          <span>Facebook</span>
        </button>
      </div>
      {/* Social Posts */}
      <div className="space-y-6">
        {socialPosts?.[activeTab]?.map(renderPost)}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button
          variant="outline"
          iconName="RefreshCw"
          iconPosition="left"
        >
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaFeed;