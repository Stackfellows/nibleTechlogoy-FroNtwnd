import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const SocialProofSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const achievements = [
    {
      icon: "Award",
      title: "Industry Recognition",
      items: [
        "Best Digital Agency 2024 - TechCrunch Awards",
        "Top 50 Innovative Companies - Forbes",
        "Excellence in Web Development - Awwwards",
        "Customer Choice Award - G2 Reviews",
      ],
    },
    {
      icon: "Users",
      title: "Client Success",
      items: [
        "150+ Projects Delivered Successfully",
        "98% Client Satisfaction Rate",
        "95% Project On-Time Delivery",
        "Zero Security Incidents",
      ],
    },
    {
      icon: "TrendingUp",
      title: "Business Impact",
      items: [
        "Average 300% ROI for Clients",
        "$50M+ Revenue Generated for Clients",
        "2M+ Users Reached Through Our Apps",
        "99.9% Uptime Across All Projects",
      ],
    },
  ];

  const partnerships = [
    {
      name: "Google Partner",
      logo: "https://via.placeholder.com/120x60/4285F4/FFFFFF?text=Google",
      logoAlt:
        "Google Partner certification badge with blue and white Google logo",
      description: "Certified Google Ads & Analytics Partner",
      level: "Premier",
    },
    {
      name: "AWS Partner",
      logo: "https://via.placeholder.com/120x60/FF9900/FFFFFF?text=AWS",
      logoAlt: "Amazon Web Services partner logo with orange AWS branding",
      description: "Advanced Consulting Partner",
      level: "Advanced",
    },
    {
      name: "Microsoft Partner",
      logo: "https://via.placeholder.com/120x60/00BCF2/FFFFFF?text=Microsoft",
      logoAlt: "Microsoft Partner Network logo with blue Microsoft branding",
      description: "Gold Application Development Partner",
      level: "Gold",
    },
    {
      name: "Meta Partner",
      logo: "https://via.placeholder.com/120x60/1877F2/FFFFFF?text=Meta",
      logoAlt:
        "Meta Business Partner logo with blue Meta branding and infinity symbol",
      description: "Meta Business Partner",
      level: "Certified",
    },
    {
      name: "Shopify Partner",
      logo: "https://via.placeholder.com/120x60/96BF48/FFFFFF?text=Shopify",
      logoAlt:
        "Shopify Partner logo with green Shopify branding and shopping bag icon",
      description: "Shopify Plus Partner",
      level: "Plus",
    },
    {
      name: "HubSpot Partner",
      logo: "https://via.placeholder.com/120x60/FF7A59/FFFFFF?text=HubSpot",
      logoAlt:
        "HubSpot Partner logo with orange HubSpot branding and sprocket icon",
      description: "Diamond Solutions Partner",
      level: "Diamond",
    },
  ];

  const liveStats = [
    { label: "Active Projects", value: 24, suffix: "", color: "text-primary" },
    { label: "Team Members", value: 52, suffix: "+", color: "text-success" },
    { label: "Countries Served", value: 15, suffix: "", color: "text-accent" },
    { label: "Years Experience", value: 5, suffix: "+", color: "text-warning" },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "Shield",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability Controls",
      icon: "Lock",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection & Privacy",
      icon: "UserCheck",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Standards",
      icon: "CreditCard",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentStat((prev) => (prev + 1) % liveStats?.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView, liveStats?.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-success/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Icon name="CheckCircle" size={16} />
            <span>Trusted & Certified</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6"
          >
            Proven{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Our commitment to quality and innovation is recognized by industry
            leaders, certified by global standards, and validated by client
            success stories.
          </motion.p>
        </motion.div>

        {/* Live Stats Dashboard */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {liveStats?.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card border border-border rounded-2xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-brand ${
                currentStat === index ? "ring-2 ring-primary/20 scale-105" : ""
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${stat?.color}`}>
                {stat?.value}
                {stat?.suffix}
              </div>
              <div className="text-text-secondary font-medium">
                {stat?.label}
              </div>
              {currentStat === index && (
                <div className="mt-3 flex justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {achievements?.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-brand"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-brand">
                  <Icon name={achievement?.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary">
                  {achievement?.title}
                </h3>
              </div>

              <div className="space-y-3">
                {achievement?.items?.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Partnerships */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              Technology Partners
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We maintain strategic partnerships with leading technology
              companies to deliver cutting-edge solutions and ensure the highest
              quality standards.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partnerships?.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-brand group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-brand"
                  />
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {partner?.level}
                  </span>
                </div>
                <h4 className="font-semibold text-brand-primary mb-1">
                  {partner?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {partner?.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Security & Compliance Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              Security & Compliance
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Your data security and privacy are our top priorities. We maintain
              the highest industry standards and certifications to protect your
              business.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications?.map((cert, index) => (
              <motion.div
                key={index}
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-brand group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert?.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand shadow-brand`}
                >
                  <Icon name={cert?.icon} size={28} color="white" />
                </div>
                <h4 className="font-bold text-brand-primary mb-2 group-hover:text-primary transition-brand">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-brand">
                  {cert?.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
