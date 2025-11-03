import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const quickActions = [
    {
      title: "Free Consultation",
      description: "Get expert advice tailored to your business needs",
      icon: "MessageSquare",
      color: "from-blue-500 to-cyan-500",
      action: "Book Now",
      link: "/contact",
    },
    {
      title: "Project Estimate",
      description: "Receive a detailed quote for your project",
      icon: "Calculator",
      color: "from-green-500 to-emerald-500",
      action: "Get Quote",
      link: "/contact",
    },
    {
      title: "Portfolio Review",
      description: "Explore our latest work and case studies",
      icon: "FolderOpen",
      color: "from-purple-500 to-pink-500",
      action: "View Work",
      link: "/portfolio",
    },
  ];

  const contactMethods = [
    {
      method: "WhatsApp",
      value: "+1 (555) 123-4567",
      icon: "MessageCircle",
      color: "text-success",
      available: "Available 24/7",
    },
    {
      method: "Email",
      value: "hello@nibletechnology.com",
      icon: "Mail",
      color: "text-primary",
      available: "Response within 2 hours",
    },
    {
      method: "Phone",
      value: "+1 (555) 123-4567",
      icon: "Phone",
      color: "text-accent",
      available: "Mon-Fri 9AM-6PM EST",
    },
  ];

  const handleEmailSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      </div>
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
          <Icon name="Rocket" size={32} color="white" />
        </div>
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-20 hidden lg:block"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
          <Icon name="Sparkles" size={24} color="white" />
        </div>
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Icon name="Zap" size={16} />
            <span>Ready to Transform?</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Let's Build Something{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Your digital transformation journey starts with a single
            conversation. Let's discuss how we can turn your vision into
            reality.
          </motion.p>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto mb-12"
          >
            <form onSubmit={handleEmailSubmit} className="flex gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="bg-white text-brand-primary hover:bg-white/90 px-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? <Icon name="Check" size={20} /> : "Subscribe"}
              </Button>
            </form>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-success text-sm mt-2"
              >
                ✓ Thank you! We'll be in touch soon.
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {quickActions?.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-brand-lg hover:bg-white/15 transition-brand group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${action?.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand shadow-brand`}
              >
                <Icon name={action?.icon} size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-brand">
                {action?.title}
              </h3>
              <p className="text-white/70 mb-6 group-hover:text-white/90 transition-brand">
                {action?.description}
              </p>
              <Link to={action?.link}>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-brand-primary"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {action?.action}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods?.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-brand group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-brand">
                <Icon name={contact?.icon} size={24} color="white" />
              </div>
              <h4 className="font-semibold text-white mb-1">
                {contact?.method}
              </h4>
              <p className="text-white/80 font-medium mb-2">{contact?.value}</p>
              <p className="text-xs text-white/60">{contact?.available}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-brand-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Schedule Free Consultation
              </Button>
            </Link>

            <div className="flex items-center space-x-2 text-white/80">
              <Icon name="Clock" size={16} />
              <span className="text-sm">Usually responds within 1 hour</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center items-center space-x-6"
          >
            <div className="flex items-center space-x-2 text-white/60">
              <Icon name="Shield" size={16} />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Icon name="CheckCircle" size={16} />
              <span className="text-sm">No Commitment Required</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Icon name="Zap" size={16} />
              <span className="text-sm">Quick Response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTASection;
