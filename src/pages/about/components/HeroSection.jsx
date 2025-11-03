import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: "CheckCircle" },
    { number: "50+", label: "Happy Clients", icon: "Users" },
    { number: "5+", label: "Years Experience", icon: "Calendar" },
    { number: "24/7", label: "Support Available", icon: "Clock" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={24} color="white" />
                  </div>
                  <span className="text-primary font-semibold text-lg">
                    About NibleTechnology
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight"
                >
                  Technology that
                  <span className="block text-gradient">Transforms</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-text-secondary leading-relaxed max-w-2xl"
                >
                  We embody the fusion of innovation and reliability in the
                  digital transformation space. Our "nibble" approach takes
                  strategic, measured bites of complex challenges to deliver
                  digestible, powerful solutions that drive meaningful growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                    <Icon
                      name="Shield"
                      size={16}
                      color="var(--color-success)"
                    />
                    <span className="text-success font-medium">Reliable</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Icon
                      name="Rocket"
                      size={16}
                      color="var(--color-primary)"
                    />
                    <span className="text-primary font-medium">Innovative</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                    <Icon name="Heart" size={16} color="var(--color-accent)" />
                    <span className="text-accent font-medium">
                      Approachable
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats?.map((stat, index) => (
                  <motion.div
                    key={stat?.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-brand border border-border/50 hover:border-primary/20 transition-brand"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon
                          name={stat?.icon}
                          size={20}
                          color="var(--color-primary)"
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-brand-primary">
                      {stat?.number}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat?.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-brand-lg">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1531537264351-c1952d1db1f5"
                      alt="Modern office space with diverse team of professionals collaborating around a conference table with laptops and digital displays"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-brand"
                  >
                    <Icon name="CheckCircle" size={24} color="white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-brand"
                  >
                    <Icon name="Zap" size={24} color="white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-text-secondary"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
