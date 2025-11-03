import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const BrandStorySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const storySteps = [
    {
      id: 1,
      title: "Identify",
      subtitle: "Strategic Analysis",
      description:
        "We take the first strategic bite by deeply understanding your business challenges, market position, and digital transformation goals.",
      icon: "Search",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1574674082930-f0cf3d1cfb46",
      alt: "Business team analyzing data charts and graphs on large wall display in modern office",
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Solution Architecture",
      description:
        "Breaking down complex requirements into digestible components, we craft tailored solutions that align with your vision and technical needs.",
      icon: "Palette",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1491821240753-4faf4ed28766",
      alt: "UX designer sketching wireframes and user interface designs on paper with colorful markers",
    },
    {
      id: 3,
      title: "Develop",
      subtitle: "Technical Excellence",
      description:
        "Our expert team transforms designs into powerful, scalable solutions using cutting-edge technologies and industry best practices.",
      icon: "Code2",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1498502153174-e65bbd350bd3",
      alt: "Software developer coding on multiple monitors with colorful programming interface and terminal windows",
    },
    {
      id: 4,
      title: "Deploy",
      subtitle: "Seamless Launch",
      description:
        "We ensure smooth deployment and provide ongoing support, making your digital transformation journey complete and successful.",
      icon: "Rocket",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78",
      alt: "Team celebrating successful project launch with laptops showing deployment dashboard and analytics",
    },
  ];

  const companyValues = [
    {
      icon: "Target",
      title: "Precision",
      description:
        "Every solution is carefully crafted to meet your specific needs",
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "Cutting-edge technologies that keep you ahead of the curve",
    },
    {
      icon: "Shield",
      title: "Reliability",
      description: "Dependable partnerships built on trust and transparency",
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % storySteps?.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, storySteps?.length]);

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-surface to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
            <Icon name="BookOpen" size={16} />
            <span>Our Story</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6"
          >
            The{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Nibble
            </span>{" "}
            Approach
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            We believe in taking strategic, measured bites of complex
            challenges. Like savoring a perfect meal, we break down your digital
            transformation into digestible, powerful solutions that deliver
            lasting results.
          </motion.p>
        </motion.div>

        {/* Interactive Story Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left - Story Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            {storySteps?.map((step, index) => (
              <motion.div
                key={step?.id}
                className={`relative p-6 rounded-2xl border transition-brand cursor-pointer ${
                  activeStep === index
                    ? "bg-card border-primary/20 shadow-brand-lg"
                    : "bg-surface/50 border-border hover:bg-card hover:border-primary/10"
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Step Number */}
                <div className="absolute -left-3 top-6">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-brand ${
                      activeStep === index
                        ? "bg-primary text-white"
                        : "bg-muted text-text-secondary"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex items-start space-x-4 ml-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      step?.color
                    } rounded-xl flex items-center justify-center shadow-brand ${
                      activeStep === index ? "scale-110" : ""
                    } transition-brand`}
                  >
                    <Icon name={step?.icon} size={24} color="white" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-1 transition-brand ${
                        activeStep === index
                          ? "text-primary"
                          : "text-brand-primary"
                      }`}
                    >
                      {step?.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-2">
                      {step?.subtitle}
                    </p>
                    <p
                      className={`text-text-secondary transition-brand ${
                        activeStep === index ? "text-text-primary" : ""
                      }`}
                    >
                      {step?.description}
                    </p>
                  </div>
                </div>

                {/* Progress Line */}
                {index < storySteps?.length - 1 && (
                  <div className="absolute left-1 top-14 w-0.5 h-16 bg-border"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Visual Display */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-card rounded-3xl p-8 shadow-brand-lg border border-border overflow-hidden">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${storySteps?.[activeStep]?.color} opacity-5 transition-brand`}
              ></div>

              <div className="relative z-10">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-brand">
                  <Image
                    src={storySteps?.[activeStep]?.image}
                    alt={storySteps?.[activeStep]?.alt}
                    className="w-full h-full object-cover transition-brand hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-2xl font-bold text-brand-primary mb-2">
                    {storySteps?.[activeStep]?.title}
                  </h4>
                  <p className="text-accent font-medium mb-4">
                    {storySteps?.[activeStep]?.subtitle}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {storySteps?.[activeStep]?.description}
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {companyValues?.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-brand group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand shadow-brand">
                <Icon name={value?.icon} size={28} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-brand-primary mb-2 group-hover:text-primary transition-brand">
                {value?.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-brand">
                {value?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStorySection;
