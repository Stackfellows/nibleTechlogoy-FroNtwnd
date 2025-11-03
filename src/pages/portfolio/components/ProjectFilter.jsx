import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectFilter = ({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  onCategoryChange,
  onTechnologyChange,
  onClearFilters,
  projectCount,
}) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-brand mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Filter Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Filter Projects
            </h3>
            <p className="text-sm text-text-secondary">
              {projectCount} projects found
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e?.target?.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 min-w-[150px]"
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Technology Filter */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Technology
            </label>
            <select
              value={selectedTechnology}
              onChange={(e) => onTechnologyChange(e?.target?.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 min-w-[150px]"
            >
              <option value="">All Technologies</option>
              {technologies?.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedCategory || selectedTechnology) && (
            <div className="flex items-end">
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                iconName="X"
                iconPosition="left"
                className="whitespace-nowrap"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Active Filters Display */}
      {(selectedCategory || selectedTechnology) && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Active filters:</span>
            {selectedCategory && (
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center space-x-1">
                <span>{selectedCategory}</span>
                <button
                  onClick={() => onCategoryChange("")}
                  className="hover:bg-primary/20 rounded-full p-0.5 transition-colors duration-200"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
            {selectedTechnology && (
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex items-center space-x-1">
                <span>{selectedTechnology}</span>
                <button
                  onClick={() => onTechnologyChange("")}
                  className="hover:bg-accent/20 rounded-full p-0.5 transition-colors duration-200"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
