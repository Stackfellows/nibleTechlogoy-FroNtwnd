import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(["web", "app"]);

  const services = [
    {
      id: "web",
      name: "Web Development",
      icon: "Code",
      color: "bg-accent",
      features: {
        "Development Time": "4-12 weeks",
        "Technology Stack": "React, Next.js, Node.js",
        "Responsive Design": "Yes",
        "SEO Optimization": "Advanced",
        "CMS Integration": "Yes",
        "E-commerce Ready": "Yes",
        Maintenance: "24/7 Support",
        Hosting: "Included",
        "SSL Certificate": "Free",
        Performance: "99.9% Uptime",
      },
    },
    {
      id: "app",
      name: "App Development",
      icon: "Smartphone",
      color: "bg-trust-builder",
      features: {
        "Development Time": "8-16 weeks",
        "Technology Stack": "React Native, Flutter",
        "Responsive Design": "Native",
        "SEO Optimization": "App Store",
        "CMS Integration": "API Based",
        "E-commerce Ready": "Yes",
        Maintenance: "24/7 Support",
        Hosting: "Cloud Native",
        "SSL Certificate": "Enterprise",
        Performance: "Native Speed",
      },
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: "TrendingUp",
      color: "bg-conversion-accent",
      features: {
        "Development Time": "2-4 weeks",
        "Technology Stack": "Analytics, Automation",
        "Responsive Design": "Multi-Channel",
        "SEO Optimization": "Core Service",
        "CMS Integration": "Content Strategy",
        "E-commerce Ready": "Sales Funnel",
        Maintenance: "Campaign Management",
        Hosting: "Platform Agnostic",
        "SSL Certificate": "Trust Signals",
        Performance: "ROI Tracking",
      },
    },
  ];

  const allServices = services;
  const comparisonFeatures = Object.keys(services?.[0]?.features);

  const toggleService = (serviceId) => {
    setSelectedServices((prev) => {
      if (prev?.includes(serviceId)) {
        return prev?.length > 1 ? prev?.filter((id) => id !== serviceId) : prev;
      } else {
        return prev?.length < 3 ? [...prev, serviceId] : prev;
      }
    });
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Compare Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Interactive comparison tool to help you choose the right solution
            for your business needs
          </p>
        </motion.div>

        {/* Service Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {allServices?.map((service) => (
              <button
                key={service?.id}
                onClick={() => toggleService(service?.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-brand border-2 transition-brand ${
                  selectedServices?.includes(service?.id)
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-card text-text-secondary hover:border-primary/50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedServices?.includes(service?.id)
                      ? service?.color
                      : "bg-muted"
                  }`}
                >
                  <Icon
                    name={service?.icon}
                    size={16}
                    color={
                      selectedServices?.includes(service?.id)
                        ? "white"
                        : "var(--color-text-secondary)"
                    }
                  />
                </div>
                <span className="font-medium">{service?.name}</span>
                {selectedServices?.includes(service?.id) && (
                  <Icon name="Check" size={16} color="var(--color-primary)" />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-brand overflow-hidden shadow-brand"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="text-left p-6 font-semibold text-text-primary">
                    Features
                  </th>
                  {selectedServices?.map((serviceId) => {
                    const service = allServices?.find(
                      (s) => s?.id === serviceId
                    );
                    return (
                      <th key={serviceId} className="text-center p-6">
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`w-12 h-12 rounded-brand flex items-center justify-center ${service?.color}`}
                          >
                            <Icon
                              name={service?.icon}
                              size={20}
                              color="white"
                            />
                          </div>
                          <span className="font-semibold text-text-primary">
                            {service?.name}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures?.map((feature, index) => (
                  <tr
                    key={feature}
                    className={index % 2 === 0 ? "bg-surface/50" : "bg-card"}
                  >
                    <td className="p-6 font-medium text-text-primary border-r border-border">
                      {feature}
                    </td>
                    {selectedServices?.map((serviceId) => {
                      const service = allServices?.find(
                        (s) => s?.id === serviceId
                      );
                      return (
                        <td
                          key={serviceId}
                          className="p-6 text-center text-text-secondary"
                        >
                          {service?.features?.[feature]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              className="bg-conversion-accent hover:bg-conversion-accent/90"
            >
              Get Custom Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;
