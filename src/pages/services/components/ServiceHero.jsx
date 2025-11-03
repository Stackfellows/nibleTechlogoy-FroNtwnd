import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-primary min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-trust-builder/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-conversion-accent/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-brand flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <span className="text-accent font-medium tracking-wide">
                  SERVICES UNIVERSE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Technology That
                <span className="block text-gradient bg-gradient-to-r from-accent to-trust-builder bg-clip-text text-transparent">
                  Transforms
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              >
                Comprehensive digital solutions designed for mid-to-large
                businesses seeking transformation partners. From web development
                to digital marketing, we deliver measurable results through
                cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-white text-brand-primary hover:bg-white/90 font-semibold"
                >
                  Explore Services
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Project Calculator
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-white/80">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-builder mb-1">
                    98%
                  </div>
                  <div className="text-sm text-white/80">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-conversion-accent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-96">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-48 h-32 bg-white/10 backdrop-blur-md rounded-brand p-4 border border-white/20"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Code" size={16} color="white" />
                    </div>
                    <span className="text-white font-medium">
                      Web Development
                    </span>
                  </div>
                  <div className="text-white/80 text-sm">
                    React, Next.js, Node.js
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-20 left-0 w-48 h-32 bg-white/10 backdrop-blur-md rounded-brand p-4 border border-white/20"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-trust-builder rounded-full flex items-center justify-center">
                      <Icon name="Smartphone" size={16} color="white" />
                    </div>
                    <span className="text-white font-medium">
                      App Development
                    </span>
                  </div>
                  <div className="text-white/80 text-sm">
                    iOS, Android, Flutter
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-0 right-8 w-48 h-32 bg-white/10 backdrop-blur-md rounded-brand p-4 border border-white/20"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-conversion-accent rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" size={16} color="white" />
                    </div>
                    <span className="text-white font-medium">
                      Digital Marketing
                    </span>
                  </div>
                  <div className="text-white/80 text-sm">
                    SEO, PPC, Social Media
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
