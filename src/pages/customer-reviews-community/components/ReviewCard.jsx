import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ReviewCard = ({ review, language }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

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
    <div className="artisanal-card p-6 hover:shadow-warm-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
            <Image
              src={review?.avatar}
              alt={review?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{review?.name}</h4>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(review?.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDate(review?.date)}
              </span>
            </div>
          </div>
        </div>
        
        {review?.verified && (
          <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
            <Icon name="CheckCircle" size={14} />
            <span className="text-xs font-medium">Verified</span>
          </div>
        )}
      </div>
      {/* Review Content */}
      <div className="mb-4">
        <p className="text-foreground leading-relaxed">{review?.content}</p>
        
        {review?.occasion && (
          <div className="mt-3 flex items-center space-x-2">
            <Icon name="Calendar" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Occasion: {review?.occasion}
            </span>
          </div>
        )}
      </div>
      {/* Product Images */}
      {review?.images && review?.images?.length > 0 && (
        <div className="mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {review?.images?.slice(0, 3)?.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            {review?.images?.length > 3 && (
              <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">
                  +{review?.images?.length - 3} more
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Products Ordered */}
      {review?.products && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {review?.products?.map((product, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ThumbsUp" size={16} />
            <span className="text-sm">{review?.helpful}</span>
          </button>
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="MessageCircle" size={16} />
            <span className="text-sm">Reply</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Globe" size={12} />
          <span>{review?.language}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;