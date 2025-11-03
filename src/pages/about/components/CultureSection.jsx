import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CultureSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const cultureVideos = [
    {
      id: 1,
      title: "A Day in Our Office",
      description:
        "Experience the energy and collaboration that drives our daily innovation.",
      thumbnail: "https://images.unsplash.com/photo-1674268512499-355244d163a5",
      thumbnailAlt:
        "Modern open office space with diverse team members collaborating at standing desks with natural lighting and plants",
      duration: "2:30",
      category: "Office Life",
    },
    {
      id: 2,
      title: "Team Building Adventures",
      description:
        "See how we strengthen bonds and build trust through shared experiences.",
      thumbnail: "https://images.unsplash.com/photo-1584479897226-e4dbccd7ea25",
      thumbnailAlt:
        "Team of professionals participating in outdoor team building activities with ropes course and collaborative challenges",
      duration: "3:15",
      category: "Team Building",
    },
    {
      id: 3,
      title: "Innovation in Action",
      description:
        "Watch our team tackle complex challenges with creativity and expertise.",
      thumbnail: "https://images.unsplash.com/photo-1690192079218-fe6dce1486c0",
      thumbnailAlt:
        "Software development team brainstorming around whiteboard with code diagrams and innovative technology concepts",
      duration: "4:20",
      category: "Innovation",
    },
    {
      id: 4,
      title: "Client Success Stories",
      description:
        "Hear directly from our team about the projects that make us proud.",
      thumbnail: "https://images.unsplash.com/photo-1565598469107-2bd14ae7e7e4",
      thumbnailAlt:
        "Professional presentation setting with team members discussing successful client projects and celebrating achievements",
      duration: "5:10",
      category: "Success Stories",
    },
  ];

  const cultureValues = [
    {
      icon: "Users",
      title: "Collaborative Spirit",
      description:
        "We believe the best solutions emerge when diverse minds work together.",
      stats: "95% team satisfaction",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Lightbulb",
      title: "Continuous Learning",
      description:
        "We invest in our team's growth with learning budgets and conference attendance.",
      stats: "40 hours/month learning",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Heart",
      title: "Work-Life Balance",
      description:
        "Flexible schedules and remote work options help our team thrive.",
      stats: "Flexible work arrangements",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Award",
      title: "Excellence Recognition",
      description:
        "We celebrate achievements and recognize outstanding contributions.",
      stats: "Monthly recognition program",
      color: "from-orange-500 to-red-500",
    },
  ];

  const workPerks = [
    {
      icon: "Coffee",
      title: "Premium Coffee & Snacks",
      description: "Fuel your creativity with our fully stocked kitchen",
    },
    {
      icon: "Gamepad2",
      title: "Game Room",
      description: "Unwind with games, pool table, and relaxation space",
    },
    {
      icon: "Dumbbell",
      title: "Fitness Membership",
      description: "Company-sponsored gym memberships and wellness programs",
    },
    {
      icon: "GraduationCap",
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, books, and conferences",
    },
    {
      icon: "Plane",
      title: "Flexible PTO",
      description: "Unlimited vacation policy with minimum 3 weeks encouraged",
    },
    {
      icon: "Home",
      title: "Remote Work",
      description: "Work from anywhere with full remote work support",
    },
  ];

  return (
    <section className="py-20 bg-background">
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
              <Icon name="Heart" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">
              Our Culture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Where Innovation Meets
            <span className="block text-gradient">Human Connection</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our culture is built on trust, creativity, and shared success. We
            create an environment where every team member can thrive, innovate,
            and make a meaningful impact.
          </p>
        </motion.div>

        {/* Culture Videos */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              See Our Culture in Action
            </h3>
            <p className="text-lg text-text-secondary">
              Get an inside look at what makes NibleTechnology a great place to
              work.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-card rounded-3xl p-6 border border-border shadow-brand-lg">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative group cursor-pointer">
                    <Image
                      src={cultureVideos?.[activeVideo]?.thumbnail}
                      alt={cultureVideos?.[activeVideo]?.thumbnailAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-brand duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-brand">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-brand">
                        <Icon name="Play" size={24} color="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">
                        {cultureVideos?.[activeVideo]?.duration}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {cultureVideos?.[activeVideo]?.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-brand-primary">
                      {cultureVideos?.[activeVideo]?.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {cultureVideos?.[activeVideo]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video List */}
            <div className="space-y-4">
              {cultureVideos?.map((video, index) => (
                <motion.div
                  key={video?.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`cursor-pointer p-4 rounded-brand border transition-brand ${
                    activeVideo === index
                      ? "bg-primary/5 border-primary/20 shadow-brand"
                      : "bg-card border-border hover:border-primary/10 hover:bg-muted/30"
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="flex space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={video?.thumbnail}
                          alt={video?.thumbnailAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Icon name="Play" size={12} color="white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            activeVideo === index
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-text-secondary"
                          }`}
                        >
                          {video?.category}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {video?.duration}
                        </span>
                      </div>
                      <h5
                        className={`font-semibold mb-1 transition-brand ${
                          activeVideo === index
                            ? "text-primary"
                            : "text-brand-primary"
                        }`}
                      >
                        {video?.title}
                      </h5>
                      <p className="text-sm text-text-secondary line-clamp-2">
                        {video?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              What Drives Us Every Day
            </h3>
            <p className="text-lg text-text-secondary">
              Our core values shape how we work, collaborate, and grow together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-brand"></div>
                <div className="relative bg-card rounded-brand border border-border p-6 hover:border-primary/20 hover:shadow-brand transition-brand">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value?.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon name={value?.icon} size={28} color="white" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-primary mb-3 text-center">
                    {value?.title}
                  </h4>
                  <p className="text-text-secondary text-center leading-relaxed mb-4">
                    {value?.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {value?.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-brand-primary mb-4">
            Perks & Benefits
          </h3>
          <p className="text-lg text-text-secondary">
            We invest in our team's happiness, health, and professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workPerks?.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex items-start space-x-4 p-6 bg-card rounded-brand border border-border hover:border-primary/20 hover:shadow-brand transition-brand group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-brand flex-shrink-0">
                <Icon
                  name={perk?.icon}
                  size={20}
                  color="var(--color-primary)"
                />
              </div>
              <div>
                <h5 className="font-semibold text-brand-primary mb-2 group-hover:text-primary transition-brand">
                  {perk?.title}
                </h5>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {perk?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
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
                Ready to Join Our Team?
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our
                passion for innovation and excellence. Explore our current
                openings and become part of our growing family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-brand transition-brand flex items-center justify-center space-x-2">
                  <Icon name="Users" size={20} />
                  <span>View Open Positions</span>
                </button>
                <button className="px-8 py-4 border border-border hover:border-primary/20 text-brand-primary font-semibold rounded-brand transition-brand flex items-center justify-center space-x-2">
                  <Icon name="FileText" size={20} />
                  <span>Company Handbook</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
