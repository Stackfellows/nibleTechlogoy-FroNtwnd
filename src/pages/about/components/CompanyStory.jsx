import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CompanyStory = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2019",
      title: "The Vision Begins",
      description:
        "Founded with a mission to bridge the gap between complex technology and business growth. Started with a small team of passionate developers.",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1632923945807-8657cb4888e4",
      imageAlt:
        "Modern startup office with exposed brick walls, wooden desks, and young entrepreneurs working on laptops with whiteboards covered in business plans",
    },
    {
      year: "2020",
      title: "Digital Transformation Focus",
      description:
        "Pivoted to specialize in digital transformation solutions, helping businesses adapt to the rapidly changing digital landscape during global challenges.",
      icon: "Rocket",
      image: "https://images.unsplash.com/photo-1690191793785-2607c27d5c20",
      imageAlt:
        "Professional team meeting in glass conference room with digital transformation charts and graphs displayed on large monitors",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description:
        "Grew our team to include specialists in AI, machine learning, and advanced web technologies. Established our core values and company culture.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b",
      imageAlt:
        "Diverse group of software developers and designers collaborating in modern open office space with multiple monitors and coding environments",
    },
    {
      year: "2022",
      title: "Innovation Lab Launch",
      description:
        "Launched our Innovation Lab to experiment with cutting-edge technologies and develop proprietary solutions for complex business challenges.",
      icon: "Beaker",
      image: "https://images.unsplash.com/photo-1698919585695-546e4a31fc8f",
      imageAlt:
        "High-tech laboratory environment with advanced computer workstations, multiple screens displaying code and data visualizations",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description:
        "Achieved industry recognition for our innovative solutions and client success stories. Expanded our services to serve international markets.",
      icon: "Award",
      image: "https://images.unsplash.com/photo-1682975826318-7cf36d64082b",
      imageAlt:
        "Professional award ceremony with technology industry leaders holding golden trophy in modern corporate auditorium",
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Continuing to push boundaries with AI-driven solutions, sustainable technology practices, and next-generation digital experiences.",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1639091381285-e69c2b19ac58",
      imageAlt:
        "Futuristic office space with holographic displays, AI interfaces, and team members working with advanced technology solutions",
    },
  ];

  const values = [
    {
      icon: "Target",
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    },
    {
      icon: "Shield",
      title: "Reliability",
      description:
        "Our clients trust us to deliver consistent, high-quality results that exceed expectations.",
    },
    {
      icon: "Heart",
      title: "Human-Centered",
      description:
        "Technology should serve people. We design solutions that enhance human experiences and capabilities.",
    },
    {
      icon: "Zap",
      title: "Agile Excellence",
      description:
        "We adapt quickly to changing requirements while maintaining the highest standards of quality.",
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
              <Icon name="BookOpen" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            The Journey of
            <span className="block text-gradient">Digital Innovation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From a small startup to a recognized leader in digital
            transformation, our journey has been driven by passion, innovation,
            and an unwavering commitment to client success.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline Navigation */}
            <div className="space-y-4">
              {timeline?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`cursor-pointer p-6 rounded-brand border transition-brand ${
                    activeTimeline === index
                      ? "bg-primary/5 border-primary/20 shadow-brand"
                      : "bg-card border-border hover:border-primary/10 hover:bg-muted/30"
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-brand ${
                        activeTimeline === index
                          ? "bg-primary text-white"
                          : "bg-muted text-text-secondary"
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span
                          className={`text-2xl font-bold transition-brand ${
                            activeTimeline === index
                              ? "text-primary"
                              : "text-text-secondary"
                          }`}
                        >
                          {item?.year}
                        </span>
                        {activeTimeline === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-primary rounded-full"
                          />
                        )}
                      </div>
                      <h3
                        className={`text-lg font-semibold mb-2 transition-brand ${
                          activeTimeline === index
                            ? "text-brand-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        {item?.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline Visual */}
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-card rounded-3xl p-8 border border-border shadow-brand-lg">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={timeline?.[activeTimeline]?.image}
                      alt={timeline?.[activeTimeline]?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon
                          name={timeline?.[activeTimeline]?.icon}
                          size={20}
                          color="white"
                        />
                      </div>
                      <span className="text-3xl font-bold text-primary">
                        {timeline?.[activeTimeline]?.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">
                      {timeline?.[activeTimeline]?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {timeline?.[activeTimeline]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            Our Core Values
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we
            create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-card rounded-brand border border-border hover:border-primary/20 hover:shadow-brand transition-brand group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-brand">
                <Icon
                  name={value?.icon}
                  size={28}
                  color="var(--color-primary)"
                />
              </div>
              <h4 className="text-xl font-semibold text-brand-primary mb-3">
                {value?.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {value?.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
