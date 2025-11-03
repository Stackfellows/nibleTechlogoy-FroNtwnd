import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "/src/components/ui/Button.jsx";

import Select from "../../../components/ui/Select";

const ProjectCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    complexity: "",
    features: [],
    timeline: "",
    budget: "",
    teamSize: "",
  });
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const projectTypes = [
    { value: "web", label: "Web Development" },
    { value: "app", label: "Mobile App" },
    { value: "ecommerce", label: "E-commerce Platform" },
    { value: "marketing", label: "Digital Marketing Campaign" },
    { value: "custom", label: "Custom Solution" },
  ];

  const complexityLevels = [
    { value: "basic", label: "Basic (Simple functionality)" },
    { value: "intermediate", label: "Intermediate (Moderate features)" },
    { value: "advanced", label: "Advanced (Complex requirements)" },
    { value: "enterprise", label: "Enterprise (Full-scale solution)" },
  ];

  const featureOptions = [
    { value: "responsive", label: "Responsive Design" },
    { value: "cms", label: "Content Management System" },
    { value: "ecommerce", label: "E-commerce Integration" },
    { value: "api", label: "API Development" },
    { value: "auth", label: "User Authentication" },
    { value: "payment", label: "Payment Gateway" },
    { value: "analytics", label: "Analytics Integration" },
    { value: "seo", label: "SEO Optimization" },
    { value: "multilang", label: "Multi-language Support" },
    { value: "admin", label: "Admin Dashboard" },
  ];

  const timelineOptions = [
    { value: "2-4", label: "2-4 weeks" },
    { value: "1-2", label: "1-2 months" },
    { value: "2-4", label: "2-4 months" },
    { value: "4-6", label: "4-6 months" },
    { value: "6+", label: "6+ months" },
  ];

  const budgetRanges = [
    { value: "5-10", label: "$5,000 - $10,000" },
    { value: "10-25", label: "$10,000 - $25,000" },
    { value: "25-50", label: "$25,000 - $50,000" },
    { value: "50-100", label: "$50,000 - $100,000" },
    { value: "100+", label: "$100,000+" },
  ];

  const teamSizeOptions = [
    { value: "1-2", label: "1-2 developers" },
    { value: "3-5", label: "3-5 developers" },
    { value: "6-10", label: "6-10 developers" },
    { value: "10+", label: "10+ developers" },
  ];

  const calculateEstimate = () => {
    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      let basePrice = 5000;
      let timeMultiplier = 1;

      // Project type multiplier
      const typeMultipliers = {
        web: 1,
        app: 1.5,
        ecommerce: 2,
        marketing: 0.8,
        custom: 2.5,
      };

      // Complexity multiplier
      const complexityMultipliers = {
        basic: 1,
        intermediate: 1.5,
        advanced: 2.5,
        enterprise: 4,
      };

      // Feature additions
      const featurePrice = formData?.features?.length * 1500;

      // Timeline impact
      const timelineMultipliers = {
        "1-2": 1.2,
        "2-4": 1.5, // or use 1 — whichever you actually want
        "4-6": 0.9,
        "6+": 0.8,
      };

      if (formData?.projectType && formData?.complexity) {
        basePrice *= typeMultipliers?.[formData?.projectType] || 1;
        basePrice *= complexityMultipliers?.[formData?.complexity] || 1;
        basePrice += featurePrice;

        if (formData?.timeline) {
          timeMultiplier = timelineMultipliers?.[formData?.timeline] || 1;
          basePrice *= timeMultiplier;
        }
      }

      const finalEstimate = {
        minPrice: Math.round(basePrice * 0.8),
        maxPrice: Math.round(basePrice * 1.2),
        timeline: formData?.timeline || "2-4 months",
        teamSize: formData?.teamSize || "3-5 developers",
        features: formData?.features?.length,
        complexity: formData?.complexity,
      };

      setEstimate(finalEstimate);
      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setFormData({
      projectType: "",
      complexity: "",
      features: [],
      timeline: "",
      budget: "",
      teamSize: "",
    });
    setEstimate(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Project Cost Calculator
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get an instant estimate for your project based on your specific
            requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-brand p-8 shadow-brand"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-brand flex items-center justify-center">
                <Icon name="Calculator" size={20} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Project Details
              </h3>
            </div>

            <div className="space-y-6">
              <Select
                label="Project Type"
                placeholder="Select project type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, projectType: value }))
                }
                required
              />

              <Select
                label="Complexity Level"
                placeholder="Select complexity"
                options={complexityLevels}
                value={formData?.complexity}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, complexity: value }))
                }
                required
              />

              <Select
                label="Required Features"
                placeholder="Select features"
                options={featureOptions}
                value={formData?.features}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, features: value }))
                }
                multiple
                searchable
              />

              <Select
                label="Preferred Timeline"
                placeholder="Select timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, timeline: value }))
                }
              />

              <Select
                label="Budget Range"
                placeholder="Select budget range"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, budget: value }))
                }
              />

              <Select
                label="Team Size Preference"
                placeholder="Select team size"
                options={teamSizeOptions}
                value={formData?.teamSize}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, teamSize: value }))
                }
              />
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                variant="default"
                onClick={calculateEstimate}
                loading={isCalculating}
                disabled={!formData?.projectType || !formData?.complexity}
                iconName="Calculator"
                iconPosition="left"
                className="flex-1"
              >
                Calculate Estimate
              </Button>
              <Button
                variant="outline"
                onClick={resetCalculator}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Reset
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Estimate Results */}
            {estimate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary/5 via-accent/5 to-trust-builder/5 border border-primary/20 rounded-brand p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-trust-builder rounded-brand flex items-center justify-center">
                    <Icon name="DollarSign" size={20} color="white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Your Estimate
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-6 bg-card rounded-brand border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${estimate?.minPrice?.toLocaleString()} - $
                      {estimate?.maxPrice?.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Estimated Project Cost
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-brand p-4 border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon
                          name="Clock"
                          size={16}
                          color="var(--color-accent)"
                        />
                        <span className="text-sm font-medium text-text-primary">
                          Timeline
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-accent">
                        {estimate?.timeline}
                      </div>
                    </div>

                    <div className="bg-card rounded-brand p-4 border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon
                          name="Users"
                          size={16}
                          color="var(--color-trust-builder)"
                        />
                        <span className="text-sm font-medium text-text-primary">
                          Team Size
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-trust-builder">
                        {estimate?.teamSize}
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-brand p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">
                        Features Included
                      </span>
                      <span className="text-sm text-accent">
                        {estimate?.features} selected
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-brand"
                        style={{
                          width: `${Math.min(
                            (estimate?.features / 10) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-text-secondary mb-4">
                    * This is an estimated range. Final pricing may vary based
                    on detailed requirements and project scope.
                  </p>
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-conversion-accent hover:bg-conversion-accent/90"
                  >
                    Get Detailed Quote
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Placeholder when no estimate */}
            {!estimate && (
              <div className="bg-card border border-border rounded-brand p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-brand flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Calculator"
                    size={24}
                    color="var(--color-text-secondary)"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-text-secondary">
                  Fill in your project details to get an instant estimate
                  tailored to your needs.
                </p>
              </div>
            )}

            {/* Why Choose Us */}
            <div className="bg-card border border-border rounded-brand p-6">
              <h4 className="font-semibold text-text-primary mb-4">
                Why Choose NibleTechnology?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    color="var(--color-trust-builder)"
                  />
                  <span className="text-sm text-text-secondary">
                    Transparent pricing with no hidden costs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    color="var(--color-trust-builder)"
                  />
                  <span className="text-sm text-text-secondary">
                    Dedicated project manager assigned
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    color="var(--color-trust-builder)"
                  />
                  <span className="text-sm text-text-secondary">
                    24/7 support and maintenance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Check"
                    size={16}
                    color="var(--color-trust-builder)"
                  />
                  <span className="text-sm text-text-secondary">
                    Money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
