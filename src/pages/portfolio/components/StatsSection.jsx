import React from "react";
import Icon from "../../../components/AppIcon";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: "Briefcase",
      value: "150+",
      label: "Projects Completed",
      description: "Successful digital transformations delivered",
      color: "text-primary",
    },
    {
      id: 2,
      icon: "Users",
      value: "98%",
      label: "Client Satisfaction",
      description: "Average client satisfaction rating",
      color: "text-success",
    },
    {
      id: 3,
      icon: "TrendingUp",
      value: "340%",
      label: "Average ROI Increase",
      description: "Return on investment for our clients",
      color: "text-accent",
    },
    {
      id: 4,
      icon: "Award",
      value: "25+",
      label: "Industry Awards",
      description: "Recognition for excellence in development",
      color: "text-warning",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary py-16 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our portfolio speaks for itself. Here's what we've achieved for our
            clients across various industries and project scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Icon
                  name={stat?.icon}
                  size={32}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat?.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat?.label}
              </div>
              <div className="text-white/70 text-sm">{stat?.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={24} color="white" />
            </div>
            <div className="text-white font-semibold">Global Reach</div>
            <div className="text-white/70 text-sm">
              Clients across 15+ countries
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <div className="text-white font-semibold">Fast Delivery</div>
            <div className="text-white/70 text-sm">
              Average 30% faster than industry
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <div className="text-white font-semibold">Quality Assured</div>
            <div className="text-white/70 text-sm">
              99.9% bug-free delivery rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
