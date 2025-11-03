import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border rounded-brand p-8 hover:shadow-brand-lg transition-brand overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-brand"></div>
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div
              className={`w-16 h-16 rounded-brand flex items-center justify-center ${service?.iconBg} group-hover:scale-110 transition-brand`}
            >
              <Icon name={service?.icon} size={28} color="white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {service?.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {service?.category}
                </span>
                <span className="text-sm text-text-secondary">
                  Starting from ${service?.startingPrice}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-brand hover:bg-muted/50 transition-brand"
          >
            <Icon
              name={isExpanded ? "ChevronUp" : "ChevronDown"}
              size={20}
              color="var(--color-text-secondary)"
            />
          </button>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">
          {service?.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-text-primary mb-3">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service?.features
              ?.slice(0, isExpanded ? service?.features?.length : 4)
              ?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    color="var(--color-trust-builder)"
                  />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
          </div>
          {service?.features?.length > 4 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-sm text-primary hover:text-primary/80 mt-2 transition-brand"
            >
              +{service?.features?.length - 4} more features
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-text-primary mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {service?.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium bg-muted text-text-secondary px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="space-y-6 pt-4 border-t border-border">
              {/* Process */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Our Process
                </h4>
                <div className="space-y-3">
                  {service?.process?.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">
                          {step?.title}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {step?.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Project Timeline
                </h4>
                <div className="bg-muted/30 rounded-brand p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                      Estimated Duration:
                    </span>
                    <span className="font-semibold text-text-primary">
                      {service?.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="default"
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1"
          >
            Start Discussion
          </Button>
          <Button
            variant="outline"
            iconName="Calculator"
            iconPosition="left"
            className="flex-1"
          >
            Get Estimate
          </Button>
        </div>

        {/* Case Study Link */}
        {service?.caseStudy && (
          <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-brand">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-text-primary">
                  Featured Case Study
                </div>
                <div className="text-xs text-text-secondary">
                  {service?.caseStudy?.title}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Details
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
