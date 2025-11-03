import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ServicesPreview = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const services = [
    {
      id: 1,
      title: "Web Development",
      subtitle: "Custom Digital Experiences",
      description:
        "From responsive websites to complex web applications, we build digital experiences that engage users and drive business growth. Our full-stack expertise ensures scalable, secure, and performant solutions.",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1676279170337-c838813c7e39",
      alt: "Modern web development workspace with multiple monitors showing responsive website designs and code",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Custom CMS Development",
      ],

      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      stats: { projects: "85+", satisfaction: "98%" },
    },
    {
      id: 2,
      title: "App Development",
      subtitle: "Mobile-First Solutions",
      description:
        "Native iOS and Android apps, cross-platform solutions, and progressive web apps that deliver exceptional user experiences across all devices and platforms.",
      icon: "Smartphone",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1620294447945-ffcbc4a09735",
      alt: "Hands holding smartphone displaying modern mobile app interface with intuitive navigation and colorful design",
      features: [
        "Native iOS & Android",
        "Cross-Platform Development",
        "App Store Optimization",
        "Backend Integration",
      ],

      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      stats: { projects: "45+", satisfaction: "96%" },
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Growth-Driven Strategies",
      description:
        "Data-driven marketing campaigns that amplify your brand presence, engage your target audience, and deliver measurable ROI through strategic digital channels.",
      icon: "TrendingUp",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1733877687392-7aa39d980a7f",
      alt: "Digital marketing analytics dashboard showing campaign performance metrics and growth charts on computer screen",
      features: [
        "SEO & Content Strategy",
        "Social Media Marketing",
        "PPC Campaigns",
        "Analytics & Reporting",
      ],

      technologies: ["Google Ads", "Facebook Ads", "Analytics", "HubSpot"],
      stats: { projects: "120+", satisfaction: "94%" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-surface relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Icon name="Briefcase" size={16} />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6"
          >
            Comprehensive{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            From concept to deployment, we provide end-to-end digital services
            that transform your business and create lasting competitive
            advantages in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Service Navigation Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services?.map((service, index) => (
            <motion.button
              key={service?.id}
              variants={itemVariants}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-brand ${
                activeService === index
                  ? "bg-primary text-white shadow-brand-lg"
                  : "bg-card border border-border text-text-secondary hover:text-primary hover:border-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={service?.icon} size={20} />
              <span className="font-medium">{service?.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Service Display */}
        <motion.div
          key={activeService}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Service Details */}
          <div className="space-y-8">
            <div>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${services?.[activeService]?.color} rounded-2xl shadow-brand mb-6`}
              >
                <Icon
                  name={services?.[activeService]?.icon}
                  size={32}
                  color="white"
                />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                {services?.[activeService]?.title}
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                {services?.[activeService]?.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                {services?.[activeService]?.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services?.[activeService]?.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-surface rounded-xl border border-border"
                >
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-primary font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-brand-primary mb-3">
                Technologies We Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {services?.[activeService]?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {services?.[activeService]?.stats?.projects}
                </div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">
                  {services?.[activeService]?.stats?.satisfaction}
                </div>
                <div className="text-sm text-text-secondary">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className={`bg-gradient-to-r ${services?.[activeService]?.color} hover:opacity-90`}
              >
                Explore {services?.[activeService]?.title}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>

          {/* Right - Visual Showcase */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl p-8 shadow-brand-lg border border-border overflow-hidden">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${services?.[activeService]?.color} opacity-5`}
              ></div>

              <div className="relative z-10">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-brand mb-6">
                  <Image
                    src={services?.[activeService]?.image}
                    alt={services?.[activeService]?.alt}
                    className="w-full h-full object-cover transition-brand hover:scale-105"
                  />
                </div>

                {/* Interactive Demo Placeholder */}
                <div className="bg-surface rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-text-secondary">
                      Live Demo
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-warning rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-error rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full w-1/2 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <div className="h-2 bg-success/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-success rounded-full w-5/6 animate-pulse"
                        style={{ animationDelay: "2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Action Button */}
              <div className="absolute top-4 right-4">
                <button className="w-12 h-12 bg-white rounded-full shadow-brand flex items-center justify-center hover:scale-110 transition-brand">
                  <Icon name="Play" size={20} className="text-primary ml-1" />
                </button>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-success text-white p-4 rounded-2xl shadow-brand-lg">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-brand-lg">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Link to="/services">
            <Button
              variant="outline"
              size="lg"
              iconName="ExternalLink"
              iconPosition="right"
              className="text-lg px-8 py-4"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
