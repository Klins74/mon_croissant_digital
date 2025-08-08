import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-card rounded-lg p-4 mb-6">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 ${
              activeCategory === category?.id
                ? 'border-primary bg-primary/10 text-primary' :'border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={24} className="mb-2" />
            <span className="text-sm font-medium text-center">{category?.name}</span>
            <span className="text-xs opacity-70 mt-1">{category?.count} items</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;