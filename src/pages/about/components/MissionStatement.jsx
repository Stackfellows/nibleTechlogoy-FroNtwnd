import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const MissionStatement = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    growth: 0,
  });

  const metrics = [
    {
      key: "projects",
      target: 150,
      suffix: "+",
      label: "Projects Delivered",
      icon: "CheckCircle",
      description:
        "Successfully completed projects across various industries and technologies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "clients",
      target: 50,
      suffix: "+",
      label: "Happy Clients",
      icon: "Users",
      description:
        "Long-term partnerships built on trust, quality, and exceptional results.",
      color: "from-green-500 to-emerald-500",
    },
    {
      key: "satisfaction",
      target: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "Heart",
      description:
        "Consistently exceeding expectations with every project we deliver.",
      color: "from-pink-500 to-rose-500",
    },
    {
      key: "growth",
      target: 300,
      suffix: "%",
      label: "Average ROI Growth",
      icon: "TrendingUp",
      description:
        "Measurable business impact through our digital transformation solutions.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const missionPoints = [
    {
      icon: "Target",
      title: "Our Mission",
      content: `To empower businesses with innovative digital solutions that drive meaningful growth and transformation. We believe technology should amplify human potential, not replace it.`,
      highlight: "Empowering Digital Transformation",
    },
    {
      icon: "Eye",
      title: "Our Vision",
      content: `To be the global leader in human-centered digital innovation, creating technology experiences that are not just functional, but transformational for businesses and their customers.`,
      highlight: "Global Innovation Leadership",
    },
    {
      icon: "Compass",
      title: "Our Purpose",
      content: `We exist to bridge the gap between complex technology and business success, making digital transformation accessible, measurable, and impactful for organizations of all sizes.`,
      highlight: "Bridging Technology & Success",
    },
  ];

  const approaches = [
    {
      step: "01",
      title: "Strategic Discovery",
      description:
        "We start by understanding your business goals, challenges, and opportunities.",
      icon: "Search",
      details: [
        "Comprehensive business analysis",
        "Technology audit and assessment",
        "Stakeholder interviews and workshops",
        "Market research and competitive analysis",
      ],
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "We craft tailored solutions that align with your vision and objectives.",
      icon: "Lightbulb",
      details: [
        "Custom architecture planning",
        "User experience design",
        "Technology stack selection",
        "Implementation roadmap creation",
      ],
    },
    {
      step: "03",
      title: "Agile Development",
      description:
        "We build and iterate with transparency, collaboration, and quality focus.",
      icon: "Code",
      details: [
        "Iterative development cycles",
        "Regular client communication",
        "Quality assurance testing",
        "Performance optimization",
      ],
    },
    {
      step: "04",
      title: "Launch & Growth",
      description:
        "We ensure successful deployment and provide ongoing support for continuous improvement.",
      icon: "Rocket",
      details: [
        "Smooth deployment process",
        "Team training and documentation",
        "Performance monitoring",
        "Continuous optimization",
      ],
    },
  ];

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      metrics?.forEach((metric) => {
        let current = 0;
        const increment = metric?.target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric?.target) {
            current = metric?.target;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [metric?.key]: Math.floor(current),
          }));
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("metrics-section");
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Icon name="Compass" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Driving Digital
            <span className="block text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're committed to creating technology solutions that don't just
            meet today's needs, but anticipate tomorrow's opportunities and
            challenges.
          </p>
        </motion.div>

        {/* Mission, Vision, Purpose */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {missionPoints?.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl group-hover:from-primary/10 group-hover:to-accent/10 transition-brand"></div>
              <div className="relative bg-card rounded-brand border border-border p-8 hover:border-primary/20 hover:shadow-brand transition-brand h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={point?.icon} size={28} color="white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4 text-center">
                  {point?.title}
                </h3>
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {point?.highlight}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed text-center">
                  {point?.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Metrics */}
        <div id="metrics-section" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-lg text-text-secondary">
              Measurable results that demonstrate our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics?.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative group cursor-pointer ${
                  activeMetric === index ? "scale-105" : ""
                } transition-brand`}
                onMouseEnter={() => setActiveMetric(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric?.color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-brand`}
                ></div>
                <div className="relative bg-card rounded-brand border border-border p-8 hover:border-primary/20 hover:shadow-brand transition-brand text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${metric?.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon name={metric?.icon} size={28} color="white" />
                  </div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    {counters?.[metric?.key]}
                    {metric?.suffix}
                  </div>
                  <div className="text-lg font-semibold text-primary mb-3">
                    {metric?.label}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {metric?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              The Nibble Approach
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our strategic, measured approach to digital transformation ensures
              sustainable success and meaningful business impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {approaches?.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="flex items-start space-x-6 p-8 bg-card rounded-brand border border-border hover:border-primary/20 hover:shadow-brand transition-brand">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Icon name={approach?.icon} size={24} color="white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {approach?.step}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-primary transition-brand">
                      {approach?.title}
                    </h4>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {approach?.description}
                    </p>
                    <ul className="space-y-2">
                      {approach?.details?.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center space-x-3"
                        >
                          <Icon
                            name="CheckCircle"
                            size={16}
                            color="var(--color-success)"
                          />
                          <span className="text-text-secondary text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-card rounded-brand border border-border p-8 md:p-12">
              <h3 className="text-3xl font-bold text-brand-primary mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how our proven approach can help you achieve your
                digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-brand transition-brand flex items-center justify-center space-x-2">
                  <Icon name="MessageCircle" size={20} />
                  <span>Start a Conversation</span>
                </button>
                <button className="px-8 py-4 border border-border hover:border-primary/20 text-brand-primary font-semibold rounded-brand transition-brand flex items-center justify-center space-x-2">
                  <Icon name="FileText" size={20} />
                  <span>Download Our Approach Guide</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;
