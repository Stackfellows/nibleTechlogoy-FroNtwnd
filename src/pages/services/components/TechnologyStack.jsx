import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const techCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "bg-accent",
      technologies: [
        {
          name: "React",
          level: 95,
          description: "Modern component-based UI library",
        },
        {
          name: "Next.js",
          level: 90,
          description: "Full-stack React framework",
        },
        {
          name: "TypeScript",
          level: 88,
          description: "Type-safe JavaScript development",
        },
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first CSS framework",
        },
        {
          name: "Framer Motion",
          level: 85,
          description: "Advanced animation library",
        },
        {
          name: "Redux Toolkit",
          level: 87,
          description: "State management solution",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      color: "bg-trust-builder",
      technologies: [
        {
          name: "Node.js",
          level: 93,
          description: "JavaScript runtime environment",
        },
        {
          name: "Express.js",
          level: 90,
          description: "Fast web application framework",
        },
        { name: "MongoDB", level: 88, description: "NoSQL database solution" },
        {
          name: "PostgreSQL",
          level: 85,
          description: "Advanced relational database",
        },
        {
          name: "Redis",
          level: 82,
          description: "In-memory data structure store",
        },
        { name: "GraphQL", level: 80, description: "Query language for APIs" },
      ],
    },
    mobile: {
      title: "Mobile Development",
      icon: "Smartphone",
      color: "bg-conversion-accent",
      technologies: [
        {
          name: "React Native",
          level: 90,
          description: "Cross-platform mobile development",
        },
        {
          name: "Flutter",
          level: 85,
          description: "Google's UI toolkit for mobile",
        },
        { name: "Swift", level: 82, description: "Native iOS development" },
        {
          name: "Kotlin",
          level: 80,
          description: "Modern Android development",
        },
        {
          name: "Expo",
          level: 88,
          description: "React Native development platform",
        },
        { name: "Firebase", level: 87, description: "Mobile backend services" },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "Cloud",
      color: "bg-secondary",
      technologies: [
        {
          name: "AWS",
          level: 92,
          description: "Amazon Web Services cloud platform",
        },
        { name: "Docker", level: 88, description: "Containerization platform" },
        {
          name: "Kubernetes",
          level: 85,
          description: "Container orchestration",
        },
        {
          name: "Vercel",
          level: 90,
          description: "Frontend deployment platform",
        },
        { name: "GitHub Actions", level: 87, description: "CI/CD automation" },
        { name: "Terraform", level: 83, description: "Infrastructure as code" },
      ],
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build exceptional
            digital solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(techCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-brand border-2 transition-brand ${
                activeCategory === key
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-text-secondary hover:border-primary/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeCategory === key ? category?.color : "bg-muted"
                }`}
              >
                <Icon
                  name={category?.icon}
                  size={16}
                  color={
                    activeCategory === key
                      ? "white"
                      : "var(--color-text-secondary)"
                  }
                />
              </div>
              <span className="font-medium">{category?.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories?.[activeCategory]?.technologies?.map(
            (tech, index) => (
              <motion.div
                key={tech?.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-brand p-6 hover:shadow-brand transition-brand group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {tech?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {tech?.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {tech?.level}%
                    </div>
                    <div className="text-xs text-text-secondary">
                      Proficiency
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech?.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full ${techCategories?.[activeCategory]?.color}`}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-brand">
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <Icon name="ExternalLink" size={14} />
                    <span>Learn more about {tech?.name}</span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-trust-builder/5 rounded-brand p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">
                Technologies Mastered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-text-secondary">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust-builder mb-2">
                100%
              </div>
              <div className="text-sm text-text-secondary">
                Up-to-date Stack
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-conversion-accent mb-2">
                24/7
              </div>
              <div className="text-sm text-text-secondary">
                Learning & Adapting
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
