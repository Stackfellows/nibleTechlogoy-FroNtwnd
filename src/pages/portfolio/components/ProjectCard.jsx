import React from "react";

import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Project Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
            {project?.category}
          </span>
        </div>

        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onViewDetails(project)}
            className="px-6 py-3 bg-white/90 backdrop-blur-sm text-brand-primary font-medium rounded-lg hover:bg-white transition-colors duration-200 flex items-center space-x-2"
          >
            <Icon name="Eye" size={18} />
            <span>View Details</span>
          </button>
        </div>

        {/* Technologies Used */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md">
              +{project?.technologies?.length - 3}
            </span>
          )}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            <Icon name="Star" size={16} fill="currentColor" />
            <span className="text-sm font-medium">{project?.rating}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Project Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{project?.teamSize}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-text-secondary">ROI Increase</div>
            <div className="text-sm font-bold text-success">
              +{project?.roiIncrease}%
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Image
              src={project?.client?.logo}
              alt={project?.client?.logoAlt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-text-primary">
                {project?.client?.name}
              </div>
              <div className="text-xs text-text-secondary">
                {project?.client?.industry}
              </div>
            </div>
          </div>
          <Icon
            name="ArrowUpRight"
            size={16}
            className="text-text-secondary group-hover:text-primary transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
