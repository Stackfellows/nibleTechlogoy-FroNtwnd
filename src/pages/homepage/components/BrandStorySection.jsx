import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const BrandStorySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.15 });

  const storySteps = [
    {
      id: 1,
      title: "Identify",
      subtitle: "Strategic Analysis",
      description:
        "We take the first step by deeply understanding your business challenges, market position, and transformation goals.",
      icon: "Search",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1574674082930-f0cf3d1cfb46",
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Solution Architecture",
      description:
        "Breaking down complex requirements, we craft tailored solutions aligned with your vision and technical needs.",
      icon: "Palette",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1491821240753-4faf4ed28766",
    },
    {
      id: 3,
      title: "Develop",
      subtitle: "Technical Excellence",
      description:
        "Our team transforms designs into powerful, scalable solutions using cutting-edge technologies.",
      icon: "Code2",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1498502153174-e65bbd350bd3",
    },
    {
      id: 4,
      title: "Deploy",
      subtitle: "Seamless Launch",
      description:
        "We ensure smooth deployment and provide ongoing support for lasting success.",
      icon: "Rocket",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78",
    },
  ];

  const companyValues = [
    {
      icon: "Target",
      title: "Precision",
      description: "Every solution is crafted to fit your needs.",
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "We use technologies that keep you ahead.",
    },
    {
      icon: "Shield",
      title: "Reliability",
      description: "Partnerships built on trust and results.",
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Together, we achieve extraordinary results.",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % storySteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-b from-surface to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Icon name="BookOpen" size={16} />
            <span className="ml-2">Our Story</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-brand-primary mb-4">
            The{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Nibble
            </span>{" "}
            Approach
          </h2>

          <p className="text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We take strategic, measured bites of complex challenges — breaking
            them into powerful, manageable solutions that drive real growth.
          </p>
        </motion.div>

        {/* Story Steps */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Left - Steps */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            {storySteps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative mb-4 p-5 rounded-2xl border cursor-pointer transition-all ${
                  activeStep === index
                    ? "bg-card border-primary/30 shadow-md"
                    : "bg-surface/50 border-border hover:bg-card hover:border-primary/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r ${step.color} text-white`}
                  >
                    <Icon name={step.icon} size={22} />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        activeStep === index
                          ? "text-primary"
                          : "text-brand-primary"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-4 sm:p-6 border border-border shadow-md overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={storySteps[activeStep].image}
                  alt={storySteps[activeStep].title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold text-brand-primary">
                  {storySteps[activeStep].title}
                </h4>
                <p className="text-sm text-accent mb-2">
                  {storySteps[activeStep].subtitle}
                </p>
                <p className="text-text-secondary text-sm">
                  {storySteps[activeStep].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name={value.icon} size={24} color="white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-brand-primary mb-1">
                {value.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStorySection;
