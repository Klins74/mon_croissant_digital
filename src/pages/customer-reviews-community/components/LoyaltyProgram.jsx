import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = () => {
  const [userPoints] = useState(2450);
  const [currentTier] = useState('gold');

  const loyaltyTiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      maxPoints: 999,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      benefits: [
        '5% discount on all orders',
        'Birthday month special offer',
        'Early access to new products',
        'Free delivery on orders over ₸5,000'
      ],
      icon: 'Award'
    },
    {
      name: 'Silver',
      minPoints: 1000,
      maxPoints: 2499,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      benefits: [
        '10% discount on all orders',
        'Priority customer support',
        'Exclusive seasonal flavors',
        'Free delivery on orders over ₸3,000',
        'Monthly surprise pastry'
      ],
      icon: 'Medal'
    },
    {
      name: 'Gold',
      minPoints: 2500,
      maxPoints: 4999,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      benefits: [
        '15% discount on all orders',
        'VIP customer support line',
        'Custom order consultations',
        'Free delivery on all orders',
        'Weekly surprise treats',
        'Exclusive event invitations'
      ],
      icon: 'Crown'
    },
    {
      name: 'Platinum',
      minPoints: 5000,
      maxPoints: Infinity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      benefits: [
        '20% discount on all orders',
        'Dedicated account manager',
        'Personalized product recommendations',
        'Free delivery on all orders',
        'Daily surprise treats',
        'Private tasting events',
        'First access to limited editions'
      ],
      icon: 'Gem'
    }
  ];

  const pointsHistory = [
    {
      id: 1,
      type: 'earned',
      points: 150,
      description: 'Order #MC-2024-0156 - Croissant Variety Pack',
      date: new Date(Date.now() - 3600000 * 24),
      orderId: 'MC-2024-0156'
    },
    {
      id: 2,
      type: 'redeemed',
      points: -500,
      description: 'Redeemed: Free Pain au Chocolat (5 pieces)',
      date: new Date(Date.now() - 3600000 * 48),
      reward: 'Free Pain au Chocolat'
    },
    {
      id: 3,
      type: 'earned',
      points: 200,
      description: 'Referral Bonus - Friend joined Mon Croissant',
      date: new Date(Date.now() - 3600000 * 72),
      referral: true
    },
    {
      id: 4,
      type: 'earned',
      points: 300,
      description: 'Order #MC-2024-0142 - Corporate Catering',
      date: new Date(Date.now() - 3600000 * 96),
      orderId: 'MC-2024-0142'
    },
    {
      id: 5,
      type: 'bonus',
      points: 100,
      description: 'Birthday Month Bonus Points',
      date: new Date(Date.now() - 3600000 * 120),
      special: true
    }
  ];

  const availableRewards = [
    {
      id: 1,
      name: 'Free Classic Croissant',
      points: 200,
      image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=200&h=200&fit=crop',
      description: 'One classic butter croissant, freshly baked',
      category: 'pastry',
      available: true
    },
    {
      id: 2,
      name: 'Pain au Chocolat (3 pieces)',
      points: 350,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop',
      description: 'Three delicious pain au chocolat pastries',
      category: 'pastry',
      available: true
    },
    {
      id: 3,
      name: 'Free Delivery (Any Order)',
      points: 150,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
      description: 'Free delivery service for your next order',
      category: 'service',
      available: true
    },
    {
      id: 4,
      name: 'Artisan Bread Loaf',
      points: 500,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200&h=200&fit=crop',
      description: 'Fresh artisan bread loaf of your choice',
      category: 'bread',
      available: true
    },
    {
      id: 5,
      name: '15% Off Next Order',
      points: 300,
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200&h=200&fit=crop',
      description: '15% discount on your next order (max ₸1,000)',
      category: 'discount',
      available: true
    },
    {
      id: 6,
      name: 'Exclusive Tasting Box',
      points: 1000,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
      description: 'Curated selection of 8 premium pastries',
      category: 'special',
      available: userPoints >= 1000
    }
  ];

  const getCurrentTier = () => {
    return loyaltyTiers?.find(tier => 
      userPoints >= tier?.minPoints && userPoints <= tier?.maxPoints
    );
  };

  const getNextTier = () => {
    const current = getCurrentTier();
    const currentIndex = loyaltyTiers?.findIndex(tier => tier?.name === current?.name);
    return currentIndex < loyaltyTiers?.length - 1 ? loyaltyTiers?.[currentIndex + 1] : null;
  };

  const getProgressToNextTier = () => {
    const nextTier = getNextTier();
    if (!nextTier) return 100;
    
    const current = getCurrentTier();
    const progress = ((userPoints - current?.minPoints) / (nextTier?.minPoints - current?.minPoints)) * 100;
    return Math.min(progress, 100);
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const currentTierData = getCurrentTier();
  const nextTier = getNextTier();
  const progressPercent = getProgressToNextTier();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Mon Croissant Loyalty Program
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Earn points with every order and unlock exclusive rewards, discounts, and special experiences. 
          The more you enjoy, the more you save!
        </p>
      </div>
      {/* Current Status */}
      <div className="artisanal-card p-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${currentTierData?.bgColor} ${currentTierData?.borderColor} border-2`}>
            <Icon name={currentTierData?.icon} size={24} className={currentTierData?.color} />
            <span className={`text-xl font-heading font-bold ${currentTierData?.color}`}>
              {currentTierData?.name} Member
            </span>
          </div>
          
          <div className="mt-6">
            <p className="text-3xl font-bold text-foreground mb-2">
              {userPoints?.toLocaleString()} Points
            </p>
            <p className="text-muted-foreground">
              {nextTier ? `${nextTier?.minPoints - userPoints} points to ${nextTier?.name}` : 'Highest tier achieved!'}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        {nextTier && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{currentTierData?.name}</span>
              <span>{nextTier?.name}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {Math.round(progressPercent)}% to next tier
            </p>
          </div>
        )}

        {/* Current Tier Benefits */}
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-4">
            Your {currentTierData?.name} Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentTierData?.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Available Rewards */}
      <div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
          Available Rewards
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableRewards?.map((reward) => (
            <div 
              key={reward?.id} 
              className={`artisanal-card p-6 transition-all duration-300 ${
                reward?.available ? 'hover:shadow-warm-lg' : 'opacity-60'
              }`}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={reward?.image}
                  alt={reward?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">{reward?.name}</h4>
                <p className="text-sm text-muted-foreground">{reward?.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning" />
                  <span className="font-bold text-foreground">{reward?.points}</span>
                  <span className="text-sm text-muted-foreground">points</span>
                </div>
                
                <Button
                  variant={reward?.available ? "default" : "outline"}
                  size="sm"
                  disabled={!reward?.available}
                  className={reward?.available ? "btn-warm" : ""}
                >
                  {reward?.available ? 'Redeem' : 'Locked'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Points History */}
      <div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
          Points History
        </h3>
        
        <div className="artisanal-card p-6">
          <div className="space-y-4">
            {pointsHistory?.map((entry) => (
              <div key={entry?.id} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    entry?.type === 'earned' ? 'bg-success/10' :
                    entry?.type === 'redeemed'? 'bg-error/10' : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name={
                        entry?.type === 'earned' ? 'Plus' :
                        entry?.type === 'redeemed'? 'Minus' : 'Gift'
                      } 
                      size={16} 
                      className={
                        entry?.type === 'earned' ? 'text-success' :
                        entry?.type === 'redeemed'? 'text-error' : 'text-primary'
                      }
                    />
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground">{entry?.description}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(entry?.date)}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`font-bold ${
                    entry?.points > 0 ? 'text-success' : 'text-error'
                  }`}>
                    {entry?.points > 0 ? '+' : ''}{entry?.points}
                  </p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline" iconName="History" iconPosition="left">
              View Full History
            </Button>
          </div>
        </div>
      </div>
      {/* Referral Program */}
      <div className="bg-primary/10 rounded-lg p-8">
        <div className="text-center">
          <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            Refer Friends & Earn More
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share the Mon Croissant experience with friends and family. You both get 200 bonus points 
            when they make their first order!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="btn-warm"
              iconName="Share"
              iconPosition="left"
            >
              Share Referral Code
            </Button>
            <Button
              variant="outline"
              iconName="Copy"
              iconPosition="left"
            >
              Copy: FRIEND200
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;