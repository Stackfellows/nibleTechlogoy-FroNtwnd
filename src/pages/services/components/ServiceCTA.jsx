import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceCTA = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "+1 (555) 123-4567",
      color: "bg-accent",
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Get detailed project information",
      action: "hello@nibletechnology.com",
      color: "bg-trust-builder",
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Instant support via WhatsApp",
      action: "Start Chat",
      color: "bg-success",
    },
    {
      icon: "Calendar",
      title: "Schedule Meeting",
      description: "Book a consultation call",
      action: "Book Now",
      color: "bg-conversion-accent",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-trust-builder/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-gradient bg-gradient-to-r from-accent to-trust-builder bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join 500+ successful businesses that have transformed their
            operations with our cutting-edge technology solutions. Let's discuss
            your project today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-white text-brand-primary hover:bg-white/90 font-semibold px-8"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods?.map((method, index) => (
            <motion.div
              key={method?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-brand p-6 text-center hover:bg-white/15 transition-brand group cursor-pointer"
            >
              <div
                className={`w-16 h-16 ${method?.color} rounded-brand flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand`}
              >
                <Icon name={method?.icon} size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {method?.title}
              </h3>
              <p className="text-white/80 text-sm mb-3">
                {method?.description}
              </p>
              <div className="text-accent font-medium">{method?.action}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat?.number}
              </div>
              <div className="text-white/80 text-sm">{stat?.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-brand p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-trust-builder rounded-brand flex items-center justify-center">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              100% Satisfaction Guarantee
            </h3>
          </div>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            We're so confident in our services that we offer a 30-day money-back
            guarantee. If you're not completely satisfied with our work, we'll
            refund your investment.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} color="var(--color-trust-builder)" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} color="var(--color-trust-builder)" />
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} color="var(--color-trust-builder)" />
              <span>Dedicated support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} color="var(--color-trust-builder)" />
              <span>Quality assurance</span>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-3 bg-cta-urgent/20 border border-cta-urgent/30 rounded-brand px-6 py-3">
            <div className="w-8 h-8 bg-cta-urgent rounded-full flex items-center justify-center animate-pulse">
              <Icon name="Zap" size={16} color="white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Urgent Project?</div>
              <div className="text-white/80 text-sm">
                Call us now: +1 (555) 123-4567
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
