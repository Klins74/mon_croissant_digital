import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReviewFilters = ({ 
  filters, 
  onFilterChange, 
  activeFilters, 
  reviewStats 
}) => {
  const filterCategories = [
    {
      key: 'rating',
      label: 'Rating',
      icon: 'Star',
      options: [
        { value: '5', label: '5 Stars', count: reviewStats?.fiveStars },
        { value: '4', label: '4 Stars', count: reviewStats?.fourStars },
        { value: '3', label: '3 Stars', count: reviewStats?.threeStars },
        { value: '2', label: '2 Stars', count: reviewStats?.twoStars },
        { value: '1', label: '1 Star', count: reviewStats?.oneStar }
      ]
    },
    {
      key: 'language',
      label: 'Language',
      icon: 'Globe',
      options: [
        { value: 'english', label: 'English', count: reviewStats?.english },
        { value: 'russian', label: 'Русский', count: reviewStats?.russian },
        { value: 'kazakh', label: 'Қазақша', count: reviewStats?.kazakh }
      ]
    },
    {
      key: 'occasion',
      label: 'Occasion',
      icon: 'Calendar',
      options: [
        { value: 'birthday', label: 'Birthday', count: reviewStats?.birthday },
        { value: 'wedding', label: 'Wedding', count: reviewStats?.wedding },
        { value: 'corporate', label: 'Corporate', count: reviewStats?.corporate },
        { value: 'daily', label: 'Daily Order', count: reviewStats?.daily },
        { value: 'holiday', label: 'Holiday', count: reviewStats?.holiday }
      ]
    },
    {
      key: 'category',
      label: 'Product Category',
      icon: 'UtensilsCrossed',
      options: [
        { value: 'croissants', label: 'Croissants', count: reviewStats?.croissants },
        { value: 'pastries', label: 'Pastries', count: reviewStats?.pastries },
        { value: 'breads', label: 'Breads', count: reviewStats?.breads },
        { value: 'cakes', label: 'Cakes', count: reviewStats?.cakes },
        { value: 'desserts', label: 'Desserts', count: reviewStats?.desserts }
      ]
    }
  ];

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const clearAllFilters = () => {
    filterCategories?.forEach(category => {
      onFilterChange(category?.key, []);
    });
  };

  const hasActiveFilters = Object.values(activeFilters)?.some(filters => filters?.length > 0);

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Filter Reviews
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear All
          </Button>
        )}
      </div>
      <div className="space-y-6">
        {filterCategories?.map((category) => (
          <div key={category?.key}>
            <div className="flex items-center space-x-2 mb-3">
              <Icon name={category?.icon} size={16} className="text-muted-foreground" />
              <h4 className="font-medium text-foreground">{category?.label}</h4>
            </div>
            
            <div className="space-y-2">
              {category?.options?.map((option) => {
                const isActive = activeFilters?.[category?.key]?.includes(option?.value);
                
                return (
                  <button
                    key={option?.value}
                    onClick={() => handleFilterToggle(category?.key, option?.value)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-warm'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="font-medium">{option?.label}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-background text-muted-foreground'
                    }`}>
                      {option?.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Quick Filters */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-3">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilters?.verified?.includes('true') ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterToggle('verified', 'true')}
            iconName="CheckCircle"
            iconPosition="left"
          >
            Verified Only
          </Button>
          <Button
            variant={activeFilters?.withPhotos?.includes('true') ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterToggle('withPhotos', 'true')}
            iconName="Camera"
            iconPosition="left"
          >
            With Photos
          </Button>
          <Button
            variant={activeFilters?.recent?.includes('true') ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterToggle('recent', 'true')}
            iconName="Clock"
            iconPosition="left"
          >
            Recent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilters;