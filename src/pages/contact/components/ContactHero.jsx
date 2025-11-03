import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-primary pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-trust-builder/10 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-conversion-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="MessageCircle" size={16} color="white" />
            <span className="text-white text-sm font-medium">
              Let's Start Your Digital Transformation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block text-gradient bg-gradient-to-r from-accent to-trust-builder bg-clip-text text-transparent">
              Your Digital Vision?
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with our expert team through multiple channels. From instant
            WhatsApp consultations to detailed project discussions, we're here
            to bring your ideas to life.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">&lt;2hrs</div>
              <div className="text-white/80 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-brand-primary hover:bg-white/90 px-8"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
