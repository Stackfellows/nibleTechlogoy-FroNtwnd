import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectEstimator = () => {
  const [selectedService, setSelectedService] = useState("web-development");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [projectComplexity, setProjectComplexity] = useState("medium");
  const [timeline, setTimeline] = useState("3-6-months");

  const services = {
    "web-development": {
      name: "Web Development",
      icon: "Globe",
      basePrice: 15000,
      features: [
        {
          id: "responsive",
          name: "Responsive Design",
          price: 0,
          included: true,
        },
        { id: "cms", name: "Content Management System", price: 3000 },
        { id: "ecommerce", name: "E-commerce Integration", price: 8000 },
        { id: "api", name: "Custom API Development", price: 5000 },
        { id: "seo", name: "SEO Optimization", price: 2000 },
        { id: "analytics", name: "Analytics Integration", price: 1500 },
        { id: "security", name: "Advanced Security Features", price: 3500 },
        { id: "multilingual", name: "Multi-language Support", price: 4000 },
      ],
    },
    "app-development": {
      name: "Mobile App Development",
      icon: "Smartphone",
      basePrice: 25000,
      features: [
        { id: "ios", name: "iOS App", price: 0, included: true },
        { id: "android", name: "Android App", price: 8000 },
        { id: "backend", name: "Custom Backend", price: 12000 },
        { id: "push", name: "Push Notifications", price: 2500 },
        { id: "offline", name: "Offline Functionality", price: 4000 },
        { id: "payment", name: "Payment Integration", price: 3500 },
        { id: "social", name: "Social Media Integration", price: 2000 },
        { id: "location", name: "GPS/Location Services", price: 3000 },
      ],
    },
    "digital-marketing": {
      name: "Digital Marketing",
      icon: "TrendingUp",
      basePrice: 5000,
      features: [
        {
          id: "seo-audit",
          name: "SEO Audit & Strategy",
          price: 0,
          included: true,
        },
        { id: "ppc", name: "PPC Campaign Management", price: 3000 },
        { id: "social-media", name: "Social Media Marketing", price: 2500 },
        { id: "content", name: "Content Marketing", price: 4000 },
        { id: "email", name: "Email Marketing Automation", price: 2000 },
        {
          id: "analytics-setup",
          name: "Analytics & Reporting Setup",
          price: 1500,
        },
        { id: "conversion", name: "Conversion Rate Optimization", price: 3500 },
        { id: "brand", name: "Brand Strategy & Design", price: 5000 },
      ],
    },
  };

  const complexityMultipliers = {
    simple: {
      multiplier: 0.8,
      name: "Simple",
      description: "Basic functionality, standard design",
    },
    medium: {
      multiplier: 1.0,
      name: "Medium",
      description: "Custom features, moderate complexity",
    },
    complex: {
      multiplier: 1.5,
      name: "Complex",
      description: "Advanced features, high customization",
    },
    enterprise: {
      multiplier: 2.0,
      name: "Enterprise",
      description: "Large scale, multiple integrations",
    },
  };

  const timelineMultipliers = {
    "1-3-months": {
      multiplier: 1.3,
      name: "1-3 Months",
      description: "Rush delivery",
    },
    "3-6-months": {
      multiplier: 1.0,
      name: "3-6 Months",
      description: "Standard timeline",
    },
    "6-12-months": {
      multiplier: 0.9,
      name: "6-12 Months",
      description: "Extended timeline",
    },
    flexible: {
      multiplier: 0.85,
      name: "Flexible",
      description: "No rush, best rates",
    },
  };

  const currentService = services?.[selectedService];

  const calculateEstimate = () => {
    let basePrice = currentService?.basePrice;

    // Add selected features
    const featuresPrice = selectedFeatures?.reduce((total, featureId) => {
      const feature = currentService?.features?.find(
        (f) => f?.id === featureId
      );
      return total + (feature?.price || 0);
    }, 0);

    // Apply complexity multiplier
    const complexityMultiplier =
      complexityMultipliers?.[projectComplexity]?.multiplier;

    // Apply timeline multiplier
    const timelineMultiplier = timelineMultipliers?.[timeline]?.multiplier;

    const totalPrice =
      (basePrice + featuresPrice) * complexityMultiplier * timelineMultiplier;

    return {
      basePrice,
      featuresPrice,
      totalPrice: Math.round(totalPrice),
      savings:
        totalPrice < basePrice + featuresPrice
          ? Math.round(basePrice + featuresPrice - totalPrice)
          : 0,
    };
  };

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev?.includes(featureId)
        ? prev?.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const estimate = calculateEstimate();

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Project Cost Estimator
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Get an instant estimate for your project. Customize the features and
            complexity to see real-time pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Selection */}
            <div className="bg-card rounded-brand border border-border p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Select Service Type
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(services)?.map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedService(key);
                      setSelectedFeatures([]);
                    }}
                    className={`p-4 rounded-brand border-2 transition-brand text-left ${
                      selectedService === key
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon
                        name={service?.icon}
                        size={24}
                        color="currentColor"
                      />
                      <span className="font-medium">{service?.name}</span>
                    </div>
                    <div className="text-sm opacity-80">
                      Starting from ${service?.basePrice?.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features Selection */}
            <div className="bg-card rounded-brand border border-border p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Select Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService?.features?.map((feature) => (
                  <label
                    key={feature?.id}
                    className={`flex items-center justify-between p-4 rounded-brand border-2 cursor-pointer transition-brand ${
                      feature?.included
                        ? "border-success bg-success/5 text-success cursor-not-allowed"
                        : selectedFeatures?.includes(feature?.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={
                          feature?.included ||
                          selectedFeatures?.includes(feature?.id)
                        }
                        onChange={() =>
                          !feature?.included && toggleFeature(feature?.id)
                        }
                        disabled={feature?.included}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <div>
                        <div className="font-medium">{feature?.name}</div>
                        {feature?.included && (
                          <div className="text-xs text-success">Included</div>
                        )}
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {feature?.price === 0
                        ? "Free"
                        : `+$${feature?.price?.toLocaleString()}`}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Complexity & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Complexity */}
              <div className="bg-card rounded-brand border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Project Complexity
                </h3>
                <div className="space-y-3">
                  {Object.entries(complexityMultipliers)?.map(
                    ([key, complexity]) => (
                      <label
                        key={key}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="complexity"
                          value={key}
                          checked={projectComplexity === key}
                          onChange={(e) =>
                            setProjectComplexity(e?.target?.value)
                          }
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{complexity?.name}</div>
                          <div className="text-sm text-text-secondary">
                            {complexity?.description}
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          {complexity?.multiplier === 1
                            ? "Standard"
                            : `${complexity?.multiplier}x`}
                        </div>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-brand border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Project Timeline
                </h3>
                <div className="space-y-3">
                  {Object.entries(timelineMultipliers)?.map(
                    ([key, timelineOption]) => (
                      <label
                        key={key}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={key}
                          checked={timeline === key}
                          onChange={(e) => setTimeline(e?.target?.value)}
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <div className="flex-1">
                          <div className="font-medium">
                            {timelineOption?.name}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {timelineOption?.description}
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          {timelineOption?.multiplier === 1
                            ? "Standard"
                            : `${timelineOption?.multiplier}x`}
                        </div>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Estimate Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-brand border border-border p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Project Estimate
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Base Price</span>
                  <span className="font-medium">
                    ${estimate?.basePrice?.toLocaleString()}
                  </span>
                </div>

                {estimate?.featuresPrice > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">
                      Additional Features
                    </span>
                    <span className="font-medium">
                      +${estimate?.featuresPrice?.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">
                    Complexity (
                    {complexityMultipliers?.[projectComplexity]?.name})
                  </span>
                  <span className="font-medium">
                    {complexityMultipliers?.[projectComplexity]?.multiplier}x
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">
                    Timeline ({timelineMultipliers?.[timeline]?.name})
                  </span>
                  <span className="font-medium">
                    {timelineMultipliers?.[timeline]?.multiplier}x
                  </span>
                </div>

                <hr className="border-border" />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-text-primary">Total Estimate</span>
                  <span className="text-primary">
                    ${estimate?.totalPrice?.toLocaleString()}
                  </span>
                </div>

                {estimate?.savings > 0 && (
                  <div className="bg-success/5 border border-success/20 rounded-brand p-3">
                    <div className="flex items-center space-x-2 text-success">
                      <Icon name="TrendingDown" size={16} />
                      <span className="text-sm font-medium">
                        You save ${estimate?.savings?.toLocaleString()} with
                        this timeline
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Discuss This Estimate
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                >
                  Download PDF Quote
                </Button>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-brand">
                <div className="flex items-start space-x-2">
                  <Icon
                    name="Info"
                    size={16}
                    color="var(--color-text-secondary)"
                    className="mt-0.5"
                  />
                  <div className="text-sm text-text-secondary">
                    <p className="font-medium mb-1">This is an estimate</p>
                    <p>
                      Final pricing may vary based on specific requirements and
                      detailed project analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
