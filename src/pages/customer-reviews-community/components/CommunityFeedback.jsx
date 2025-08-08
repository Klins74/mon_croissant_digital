import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunityFeedback = () => {
  const [activeTab, setActiveTab] = useState('suggestions');
  const [newSuggestion, setNewSuggestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const suggestionCategories = [
    { value: 'new-products', label: 'New Products', icon: 'Plus' },
    { value: 'flavors', label: 'New Flavors', icon: 'Palette' },
    { value: 'service', label: 'Service Improvement', icon: 'Settings' },
    { value: 'delivery', label: 'Delivery Options', icon: 'Truck' },
    { value: 'app', label: 'App Features', icon: 'Smartphone' },
    { value: 'other', label: 'Other', icon: 'MessageCircle' }
  ];

  const communityIdeas = [
    {
      id: 1,
      author: 'Aida K.',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      category: 'new-products',
      title: 'Seasonal Fruit Tarts',
      description: `Would love to see seasonal fruit tarts using local Kazakhstan fruits like apples from Almaty region. It would be a beautiful fusion of French technique with local ingredients.`,
      votes: 47,
      status: 'under-review',
      comments: 12,
      timestamp: new Date(Date.now() - 3600000 * 24),
      responses: [
        {
          author: 'Mon Croissant Team',
          message: 'Thank you for this wonderful suggestion! We\'re currently working with local fruit suppliers to explore this possibility.',
          timestamp: new Date(Date.now() - 3600000 * 12)
        }
      ]
    },
    {
      id: 2,
      author: 'Dmitry M.',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      category: 'delivery',
      title: 'Subscription Delivery Service',
      description: `A weekly or monthly subscription for regular customers would be amazing. Maybe different tiers - basic croissants, premium pastries, or family packages.`,
      votes: 89,
      status: 'in-development',
      comments: 23,
      timestamp: new Date(Date.now() - 3600000 * 48),
      responses: [
        {
          author: 'Mon Croissant Team',
          message: 'Great news! We\'re actively developing a subscription service. Beta testing will begin next month with select customers.',
          timestamp: new Date(Date.now() - 3600000 * 6)
        }
      ]
    },
    {
      id: 3,
      author: 'Elena P.',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      category: 'app',
      title: 'Loyalty Points Tracking',
      description: `It would be helpful to see loyalty points balance and rewards directly in the app, maybe with a progress bar showing how close we are to the next reward.`,
      votes: 34,
      status: 'implemented',
      comments: 8,
      timestamp: new Date(Date.now() - 3600000 * 72),
      responses: [
        {
          author: 'Mon Croissant Team',
          message: 'This feature is now live in the latest app update! Check your profile section to see your points balance.',
          timestamp: new Date(Date.now() - 3600000 * 2)
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'under-review': return 'bg-warning/10 text-warning border-warning/20';
      case 'in-development': return 'bg-primary/10 text-primary border-primary/20';
      case 'implemented': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'under-review': return 'Under Review';
      case 'in-development': return 'In Development';
      case 'implemented': return 'Implemented';
      default: return 'New';
    }
  };

  const handleSubmitSuggestion = (e) => {
    e?.preventDefault();
    if (newSuggestion?.trim() && selectedCategory) {
      // Handle suggestion submission
      console.log('New suggestion:', { category: selectedCategory, suggestion: newSuggestion });
      setNewSuggestion('');
      setSelectedCategory('');
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Community Feedback & Innovation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your voice shapes our future. Share ideas, vote on suggestions, and see how we're 
          constantly improving based on your feedback.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'suggestions' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="Lightbulb" size={16} />
          <span>Community Ideas</span>
        </button>
        <button
          onClick={() => setActiveTab('submit')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'submit' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon name="Plus" size={16} />
          <span>Submit Idea</span>
        </button>
      </div>
      {/* Content */}
      {activeTab === 'suggestions' ? (
        <div className="space-y-6">
          {/* Filter Options */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" iconName="Filter" iconPosition="left">
              All Categories
            </Button>
            <Button variant="ghost" size="sm">Most Voted</Button>
            <Button variant="ghost" size="sm">Recent</Button>
            <Button variant="ghost" size="sm">Implemented</Button>
          </div>

          {/* Community Ideas */}
          <div className="space-y-6">
            {communityIdeas?.map((idea) => (
              <div key={idea?.id} className="artisanal-card p-6">
                {/* Idea Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={idea?.avatar}
                        alt={idea?.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{idea?.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatTimeAgo(idea?.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(idea?.status)}`}>
                    {getStatusLabel(idea?.status)}
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center space-x-2 mb-3">
                  <Icon 
                    name={suggestionCategories?.find(cat => cat?.value === idea?.category)?.icon || 'MessageCircle'} 
                    size={14} 
                    className="text-primary" 
                  />
                  <span className="text-sm font-medium text-primary">
                    {suggestionCategories?.find(cat => cat?.value === idea?.category)?.label || 'Other'}
                  </span>
                </div>

                {/* Idea Content */}
                <div className="mb-4">
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {idea?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {idea?.description}
                  </p>
                </div>

                {/* Team Response */}
                {idea?.responses && idea?.responses?.length > 0 && (
                  <div className="bg-primary/5 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MessageSquare" size={16} className="text-primary" />
                      <span className="font-medium text-primary">Team Response</span>
                    </div>
                    {idea?.responses?.map((response, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        <p className="text-foreground text-sm leading-relaxed">
                          {response?.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatTimeAgo(response?.timestamp)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="ChevronUp" size={18} />
                      <span className="font-medium">{idea?.votes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{idea?.comments}</span>
                    </button>
                  </div>
                  
                  <Button variant="ghost" size="sm" iconName="Share" iconPosition="left">
                    Share
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {/* Submit Form */}
          <div className="artisanal-card p-8">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Share Your Idea
            </h3>
            
            <form onSubmit={handleSubmitSuggestion} className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {suggestionCategories?.map((category) => (
                    <button
                      key={category?.value}
                      type="button"
                      onClick={() => setSelectedCategory(category?.value)}
                      className={`flex items-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                        selectedCategory === category?.value
                          ? 'bg-primary text-primary-foreground border-primary shadow-warm'
                          : 'bg-background text-foreground border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon name={category?.icon} size={16} />
                      <span className="text-sm font-medium">{category?.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggestion Input */}
              <div>
                <Input
                  label="Your Suggestion"
                  type="text"
                  placeholder="Share your idea to help us improve..."
                  value={newSuggestion}
                  onChange={(e) => setNewSuggestion(e?.target?.value)}
                  required
                  className="min-h-[120px]"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Be specific and detailed. The more information you provide, the better we can understand and implement your idea.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                className="w-full btn-warm"
                iconName="Send"
                iconPosition="right"
                disabled={!newSuggestion?.trim() || !selectedCategory}
              >
                Submit Suggestion
              </Button>
            </form>
          </div>

          {/* Guidelines */}
          <div className="mt-8 bg-muted/50 rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
              <Icon name="Info" size={18} className="text-primary" />
              <span>Suggestion Guidelines</span>
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                <span>Be specific about what you'd like to see improved or added</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                <span>Explain how your suggestion would benefit the community</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                <span>Keep suggestions constructive and respectful</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                <span>We review all suggestions and respond within 48 hours</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityFeedback;