import React from 'react';
import Icon from '../../../components/AppIcon';

const DietaryFilter = ({ filters, activeFilters, onFilterChange }) => {
  return (
    <div className="bg-card rounded-lg p-4 mb-6">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Dietary Preferences</h3>
      <div className="flex flex-wrap gap-2">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => onFilterChange(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
              activeFilters?.includes(filter?.id)
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span className="text-sm font-medium">{filter?.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DietaryFilter;