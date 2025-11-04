import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    { value: 150, label: "Projects Delivered", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 50, label: "Team Members", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "+" },
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1607266424522-ccef52eb95ac",
      alt: "Developer typing code on laptop",
    },
    {
      id: 2,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      icon: "Smartphone",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1607270787560-406a02164403",
      alt: "Hands holding smartphone displaying app",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver results",
      icon: "TrendingUp",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      alt: "Business analytics dashboard on computer",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Background Gradient Circles (lighter for mobile) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-primary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating Icons (hidden on mobile) */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-brand-lg">
          <Icon name="Zap" size={32} color="white" />
        </div>
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-20 hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-success to-emerald-600 rounded-xl flex items-center justify-center shadow-brand">
          <Icon name="Rocket" size={24} color="white" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]"
        >
          {/* Left Side */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Digital Transformation Experts</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Technology that{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                  Transforms
                </span>{" "}
                Your Vision
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
                We take strategic, measured bites of complex challenges to
                deliver powerful, meaningful solutions that drive business
                growth.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-conversion-accent hover:bg-conversion-accent/90 text-lg px-8 py-4"
              >
                Start Your Transformation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-3 sm:p-4 rounded-2xl transition-brand ${
                    currentMetric === index
                      ? "bg-primary/10 border-2 border-primary/20 scale-105"
                      : "bg-surface/50 border border-border hover:bg-surface"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`text-xl sm:text-2xl font-bold ${
                      currentMetric === index
                        ? "text-primary"
                        : "text-brand-primary"
                    }`}
                  >
                    {metric.value}
                    {metric.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Services */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-brand hover:shadow-brand-lg transition-brand cursor-pointer overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-brand`}
                  ></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-brand group-hover:scale-110 transition-brand`}
                    >
                      <Icon name={service.icon} size={24} color="white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-brand-primary group-hover:text-primary transition-brand">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary mt-1 group-hover:text-text-primary transition-brand">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden sm:block w-16 h-12 rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-brand">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating CTA */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-success text-white p-4 rounded-full shadow-brand-lg hover:scale-110 transition-brand cursor-pointer"
            >
              <Icon name="MessageCircle" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center space-y-2"
        >
          <span className="text-sm text-text-secondary">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-text-secondary rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
