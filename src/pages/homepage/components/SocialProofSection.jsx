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
      logo: "/assets/partners/google.png",
      logoAlt: "Google Partner Certification Badge",
      description: "Certified Google Ads & Analytics Partner",
      level: "Premier",
    },
    {
      name: "AWS Partner",
      logo: "/assets/partners/aws.png",
      logoAlt: "AWS Partner Badge",
      description: "Advanced Consulting Partner",
      level: "Advanced",
    },
    {
      name: "Microsoft Partner",
      logo: "/assets/partners/microsoft.png",
      logoAlt: "Microsoft Partner Logo",
      description: "Gold Application Development Partner",
      level: "Gold",
    },
    {
      name: "Meta Partner",
      logo: "/assets/partners/meta.png",
      logoAlt: "Meta Business Partner Logo",
      description: "Meta Business Partner",
      level: "Certified",
    },
    {
      name: "Shopify Partner",
      logo: "/assets/partners/shopify.png",
      logoAlt: "Shopify Partner Logo",
      description: "Shopify Plus Partner",
      level: "Plus",
    },
    {
      name: "HubSpot Partner",
      logo: "/assets/partners/hubspot.png",
      logoAlt: "HubSpot Partner Logo",
      description: "Diamond Solutions Partner",
      level: "Diamond",
    },
    // 🆕 React Partner Added
    {
      name: "React Partner",
      logo: "/assets/partners/react.png",
      logoAlt: "React Partner Logo",
      description: "Official React Development & Consulting Partner",
      level: "Certified",
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
        setCurrentStat((prev) => (prev + 1) % liveStats.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, 3, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden"
    >
      {/* Light Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-success/5 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
            <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Our commitment to quality and innovation is recognized by industry
            leaders, certified by global standards, and validated by client
            success stories.
          </motion.p>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {liveStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card border border-border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-transform duration-300 ${
                currentStat === index ? "ring-2 ring-primary/20 scale-105" : ""
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Icon name={achievement.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary">
                  {achievement.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {achievement.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-text-secondary"
                  >
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnerships */}
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
              Strategic partnerships with top tech leaders to deliver
              excellence.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partnerships.map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* <Image
                    src={partner.logo}
                    alt={partner.logoAlt}
                    loading="lazy"
                    className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300"
                  /> */}
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {partner.level}
                  </span>
                </div>
                <h4 className="font-semibold text-brand-primary mb-1">
                  {partner.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
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
              We meet the highest global standards for privacy and security.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.03 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon name={cert.icon} size={28} color="white" />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
