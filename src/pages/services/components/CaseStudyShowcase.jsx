import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "RetailMax Solutions",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1649424221016-58857288854e",
      imageAlt:
        "Modern e-commerce website interface showing product grid and shopping cart on desktop and mobile devices",
      challenge:
        "Legacy e-commerce platform with poor performance and outdated user experience leading to high cart abandonment rates.",
      solution:
        "Complete platform rebuild using React, Next.js, and modern payment gateways with mobile-first responsive design.",
      results: {
        conversion: "+145%",
        performance: "+300%",
        revenue: "+$2.3M",
        timeline: "12 weeks",
      },
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "AWS"],
      testimonial: {
        text: "NibleTechnology transformed our entire business. The new platform not only looks amazing but has tripled our conversion rates.",
        author: "Sarah Johnson",
        position: "CEO, RetailMax Solutions",
        avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
        avatarAlt:
          "Professional headshot of Sarah Johnson, blonde woman in navy business suit smiling at camera",
      },
    },
    {
      id: 2,
      title: "Healthcare Mobile App Development",
      client: "MediConnect Pro",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1665735373302-5eea4d200055",
      imageAlt:
        "Healthcare mobile app interface showing patient dashboard with appointment scheduling and medical records on smartphone",
      challenge:
        "Need for secure, HIPAA-compliant mobile application for patient-doctor communication and appointment management.",
      solution:
        "Native iOS and Android apps with end-to-end encryption, real-time messaging, and integrated telehealth features.",
      results: {
        users: "50K+",
        rating: "4.9/5",
        appointments: "+400%",
        timeline: "16 weeks",
      },
      technologies: [
        "React Native",
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "AWS",
      ],
      testimonial: {
        text: "The app has revolutionized how we connect with patients. The security and user experience are exceptional.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, MediConnect Pro",
        avatar: "https://images.unsplash.com/photo-1620928269189-dc4ee9d981c0",
        avatarAlt:
          "Professional headshot of Dr. Michael Chen, Asian man with glasses in white medical coat",
      },
    },
    {
      id: 3,
      title: "Digital Marketing Campaign Success",
      client: "TechStartup Inc",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
      imageAlt:
        "Digital marketing analytics dashboard showing growth charts, social media metrics, and campaign performance data on laptop screen",
      challenge:
        "New startup needed comprehensive digital presence and lead generation strategy to compete in saturated market.",
      solution:
        "Multi-channel marketing approach including SEO, PPC, social media marketing, and content strategy with conversion optimization.",
      results: {
        leads: "+850%",
        traffic: "+420%",
        roi: "380%",
        timeline: "8 weeks",
      },
      technologies: [
        "Google Ads",
        "Facebook Ads",
        "HubSpot",
        "Analytics",
        "SEMrush",
      ],
      testimonial: {
        text: "Their marketing strategy took us from zero to market leader in just 8 weeks. Incredible ROI and professional execution.",
        author: "Alex Rodriguez",
        position: "Founder, TechStartup Inc",
        avatar: "https://images.unsplash.com/photo-1660221909243-77b638807872",
        avatarAlt:
          "Professional headshot of Alex Rodriguez, Hispanic man with beard in casual blue shirt smiling confidently",
      },
    },
  ];

  const currentCase = caseStudies?.[activeCase];

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
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real projects, real results. See how we've helped businesses
            transform their digital presence
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {caseStudies?.map((caseStudy, index) => (
            <button
              key={caseStudy?.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-brand border-2 transition-brand ${
                activeCase === index
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-text-secondary hover:border-primary/50"
              }`}
            >
              <span className="font-medium">{caseStudy?.client}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">
                {caseStudy?.category}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Case Study Content */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-brand shadow-brand-lg">
              <Image
                src={currentCase?.image}
                alt={currentCase?.imageAlt}
                className="w-full h-96 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-brand p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-text-primary">
                        {currentCase?.client}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {currentCase?.category}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="ExternalLink"
                        size={16}
                        color="var(--color-primary)"
                      />
                      <span className="text-sm text-primary font-medium">
                        View Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {currentCase?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {currentCase?.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Lightbulb" size={18} color="var(--color-accent)" />
                <span>Our Solution</span>
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {currentCase?.solution}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon
                  name="Code"
                  size={18}
                  color="var(--color-trust-builder)"
                />
                <span>Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentCase?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium bg-muted text-text-secondary px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
                <Icon
                  name="TrendingUp"
                  size={18}
                  color="var(--color-conversion-accent)"
                />
                <span>Results Achieved</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentCase?.results)?.map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-card border border-border rounded-brand p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-text-secondary capitalize">
                      {key?.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-trust-builder/5 rounded-brand p-6 border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={currentCase?.testimonial?.avatar}
                    alt={currentCase?.testimonial?.avatarAlt}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-text-primary italic mb-3">
                    "{currentCase?.testimonial?.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {currentCase?.testimonial?.author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {currentCase?.testimonial?.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="right"
                className="flex-1"
              >
                View Full Case Study
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                className="flex-1"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-12"
        >
          {caseStudies?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 rounded-full transition-brand ${
                activeCase === index
                  ? "bg-primary"
                  : "bg-muted hover:bg-primary/50"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
