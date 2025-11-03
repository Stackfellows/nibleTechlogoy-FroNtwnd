import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-brand-lg">
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={project?.client?.logo}
              alt={project?.client?.logoAlt}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                {project?.title}
              </h2>
              <p className="text-text-secondary">
                {project?.client?.name} • {project?.client?.industry}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-4">
              <Image
                src={project?.beforeImage}
                alt={project?.beforeImageAlt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center">
                <span className="px-3 py-1 bg-error/10 text-error text-sm font-medium rounded-full">
                  Before Transformation
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src={project?.afterImage}
                alt={project?.afterImageAlt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center">
                <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                  After Transformation
                </span>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Project Overview
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {project?.fullDescription}
              </p>

              <h4 className="text-lg font-semibold text-text-primary mb-3">
                Key Challenges
              </h4>
              <ul className="space-y-2 mb-6">
                {project?.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon
                      name="AlertCircle"
                      size={16}
                      className="text-warning mt-1 flex-shrink-0"
                    />
                    <span className="text-text-secondary">{challenge}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-text-primary mb-3">
                Our Solution
              </h4>
              <ul className="space-y-2">
                {project?.solutions?.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-success mt-1 flex-shrink-0"
                    />
                    <span className="text-text-secondary">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Details Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <div className="bg-surface rounded-lg p-4">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Project Details
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Duration</span>
                    <span className="font-medium text-text-primary">
                      {project?.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Team Size</span>
                    <span className="font-medium text-text-primary">
                      {project?.teamSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Launch Date</span>
                    <span className="font-medium text-text-primary">
                      {project?.launchDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-warning"
                        fill="currentColor"
                      />
                      <span className="font-medium text-text-primary">
                        {project?.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-surface rounded-lg p-4">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-surface rounded-lg p-4">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Key Results
                </h4>
                <div className="space-y-3">
                  {project?.results?.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-text-secondary text-sm">
                        {result?.metric}
                      </span>
                      <span className="font-bold text-success">
                        +{result?.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-4">
              <Image
                src={project?.testimonial?.avatar}
                alt={project?.testimonial?.avatarAlt}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <blockquote className="text-text-primary italic text-lg mb-4">
                  "{project?.testimonial?.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-text-primary">
                      {project?.testimonial?.name}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {project?.testimonial?.position}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-warning"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90"
            >
              View Live Project
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
