import React, { useState, useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

// React Icons
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaCloud,
  FaShopify,
  FaGoogle,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length black hair in navy blazer smiling confidently",
      rating: 5,
      content: `NibleTechnology transformed our entire digital infrastructure. Their 'nibble' approach broke down our complex requirements into manageable phases, delivering exceptional results at each step. The team's expertise in React and cloud architecture exceeded our expectations.`,
      videoThumbnail:
        "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65",
      videoThumbnailAlt:
        "Modern office meeting room with team discussing project on large screen display",
      project: "Enterprise Web Platform",
      result: "300% increase in user engagement",
      tags: ["Web Development", "Cloud Architecture", "React"],
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Founder & CEO",
      company: "GreenTech Innovations",
      avatar: "https://images.unsplash.com/photo-1695830209166-161b6297541d",
      avatarAlt:
        "Professional headshot of Hispanic man with short dark hair in charcoal suit with confident smile",
      rating: 5,
      content: `Working with NibleTechnology was a game-changer for our startup. They developed our mobile app from concept to App Store launch in just 12 weeks. The attention to detail and user experience design was phenomenal. Our app now has over 50K downloads!`,
      videoThumbnail:
        "https://images.unsplash.com/photo-1576267423048-15c0040fec78",
      videoThumbnailAlt:
        "Startup team celebrating app launch with laptops showing mobile app interface and download statistics",
      project: "Mobile App Development",
      result: "50K+ app downloads in 3 months",
      tags: ["Mobile Development", "UI/UX Design", "React Native"],
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Marketing Director",
      company: "Retail Plus Group",
      avatar: "https://images.unsplash.com/photo-1615885596624-83fc55f98934",
      avatarAlt:
        "Professional headshot of blonde woman in white blouse with warm smile in bright office setting",
      rating: 5,
      content: `The digital marketing strategy NibleTechnology created for us delivered incredible ROI. Our online sales increased by 250% within 6 months. Their data-driven approach and creative campaigns perfectly captured our brand voice and reached our target audience.`,
      videoThumbnail:
        "https://images.unsplash.com/photo-1690191793782-bdb489710ab6",
      videoThumbnailAlt:
        "Marketing team analyzing campaign performance on multiple monitors showing growth charts and social media metrics",
      project: "Digital Marketing Campaign",
      result: "250% increase in online sales",
      tags: ["Digital Marketing", "SEO", "Social Media"],
    },
    {
      id: 4,
      name: "David Kim",
      position: "Operations Manager",
      company: "LogiFlow Systems",
      avatar: "https://images.unsplash.com/photo-1629272039203-7d76fdaf1324",
      avatarAlt:
        "Professional headshot of Asian man with glasses in dark blue suit with friendly expression",
      rating: 5,
      content: `NibleTechnology's custom web application streamlined our entire operations workflow. What used to take hours now takes minutes. The system is intuitive, scalable, and has significantly improved our team's productivity. Exceptional work!`,
      videoThumbnail:
        "https://images.unsplash.com/photo-1531537264351-c1952d1db1f5",
      videoThumbnailAlt:
        "Business operations team using custom web application on computers in modern office environment",
      project: "Custom Web Application",
      result: "75% reduction in processing time",
      tags: ["Web Development", "Workflow Automation", "Custom Solutions"],
    },
  ];

  const companyLogos = [
    {
      name: "TechFlow Solutions",
      logo: "https://via.placeholder.com/120x40/2563EB/FFFFFF?text=TechFlow",
    },
    {
      name: "GreenTech Innovations",
      logo: "https://via.placeholder.com/120x40/10B981/FFFFFF?text=GreenTech",
    },
    {
      name: "Retail Plus Group",
      logo: "https://via.placeholder.com/120x40/F59E0B/FFFFFF?text=RetailPlus",
    },
    {
      name: "LogiFlow Systems",
      logo: "https://via.placeholder.com/120x40/8B5CF6/FFFFFF?text=LogiFlow",
    },
    {
      name: "DataSync Corp",
      logo: "https://via.placeholder.com/120x40/EF4444/FFFFFF?text=DataSync",
    },
    {
      name: "CloudVision",
      logo: "https://via.placeholder.com/120x40/06B6D4/FFFFFF?text=CloudVision",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isInView, testimonials?.length]);

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

  const testimonialVariants = {
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
      className="py-20 bg-gradient-to-b from-surface to-muted relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1),transparent_50%)]"></div>
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
            <Icon name="Heart" size={16} />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6"
          >
            Trusted by{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Hear from the companies and leaders
            who have transformed their businesses with our digital solutions.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={activeTestimonial}
          variants={testimonialVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-brand-lg border border-border">
              <div className="aspect-video relative">
                <Image
                  src={testimonials?.[activeTestimonial]?.videoThumbnail}
                  alt={testimonials?.[activeTestimonial]?.videoThumbnailAlt}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-brand-lg hover:scale-110 transition-brand group"
                  >
                    <Icon
                      name={isPlaying ? "Pause" : "Play"}
                      size={32}
                      className="text-primary ml-1 group-hover:text-accent transition-brand"
                    />
                  </button>
                </div>

                {/* Video Progress Bar (Mock) */}
                {isPlaying && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full w-1/3 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info Overlay */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                <div className="text-sm font-medium">
                  {testimonials?.[activeTestimonial]?.project}
                </div>
                <div className="text-xs opacity-80">
                  {testimonials?.[activeTestimonial]?.result}
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-success text-white p-4 rounded-2xl shadow-brand-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} fill="currentColor" />
                <span className="text-xl font-bold">
                  {testimonials?.[activeTestimonial]?.rating}.0
                </span>
              </div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="space-y-6">
            {/* Quote */}
            <div className="relative">
              <Icon
                name="Quote"
                size={48}
                className="text-primary/20 absolute -top-4 -left-2"
              />
              <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed font-medium pl-8">
                "{testimonials?.[activeTestimonial]?.content}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-brand">
                <Image
                  src={testimonials?.[activeTestimonial]?.avatar}
                  alt={testimonials?.[activeTestimonial]?.avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-primary">
                  {testimonials?.[activeTestimonial]?.name}
                </h4>
                <p className="text-text-secondary">
                  {testimonials?.[activeTestimonial]?.position}
                </p>
                <p className="text-primary font-medium">
                  {testimonials?.[activeTestimonial]?.company}
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className="text-warning"
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-text-secondary">5.0 out of 5</span>
            </div>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2">
              {testimonials?.[activeTestimonial]?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="flex items-center space-x-2 text-primary hover:text-accent transition-brand font-medium">
                <span>Read Full Case Study</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center space-x-4 mb-16"
        >
          {testimonials?.map((_, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => setActiveTestimonial(index)}
              className={`w-12 h-12 rounded-full border-2 transition-brand ${
                activeTestimonial === index
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={testimonials?.[index]?.avatar}
                alt={testimonials?.[index]?.avatarAlt}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Company Logos */}
        {/* Company Logos / Technology Partners */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-text-secondary mb-8 text-lg"
          >
            Trusted Technology Partners
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-10 text-5xl text-primary/70 hover:text-primary transition-all duration-500"
          >
            <FaReact
              className="hover:text-cyan-400 transition-transform hover:scale-110"
              title="React"
            />
            <FaNodeJs
              className="hover:text-green-500 transition-transform hover:scale-110"
              title="Node.js"
            />
            <SiMongodb
              className="hover:text-emerald-500 transition-transform hover:scale-110"
              title="MongoDB"
            />
            <FaAws
              className="hover:text-orange-400 transition-transform hover:scale-110"
              title="AWS"
            />
            <FaCloud
              className="hover:text-sky-400 transition-transform hover:scale-110"
              title="Cloud"
            />
            <FaShopify
              className="hover:text-green-400 transition-transform hover:scale-110"
              title="Shopify"
            />
            <SiTailwindcss
              className="hover:text-cyan-500 transition-transform hover:scale-110"
              title="Tailwind CSS"
            />
            <FaGoogle
              className="hover:text-red-500 transition-transform hover:scale-110"
              title="Google"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
