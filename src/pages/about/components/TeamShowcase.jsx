import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TeamShowcase = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1677594333284-68463516a828",
      imageAlt:
        "Professional Asian woman with shoulder-length black hair in navy blazer smiling confidently at camera in modern office setting",
      bio: "Sarah leads our technology vision with over 12 years of experience in enterprise software development. She specializes in AI/ML integration and scalable architecture design.",
      expertise: [
        "AI/ML",
        "Cloud Architecture",
        "Team Leadership",
        "Strategic Planning",
      ],
      achievements: [
        "Led digital transformation for 50+ Fortune 500 companies",
        "Published researcher in AI ethics and implementation",
        "Speaker at major tech conferences worldwide",
      ],

      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        github: "https://github.com/sarahchen",
      },
      quote: "Technology should amplify human potential, not replace it.",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Lead Full-Stack Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1636955031709-e3a4a671ede8",
      imageAlt:
        "Hispanic man with short dark hair and beard wearing casual button-up shirt smiling warmly in bright modern workspace",
      bio: "Marcus brings expertise in modern web technologies and has architected solutions for startups to enterprise clients. He's passionate about clean code and user experience.",
      expertise: [
        "React/Next.js",
        "Node.js",
        "Database Design",
        "API Development",
      ],
      achievements: [
        "Built 100+ web applications across various industries",
        "Open source contributor with 10k+ GitHub stars",
        "Mentor for coding bootcamp graduates",
      ],

      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        github: "https://github.com/marcusrodriguez",
      },
      quote: "Great code is not just functional, it's poetry in motion.",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "UX/UI Design Director",
      department: "Design",
      image: "https://images.unsplash.com/photo-1554735892-2ace752cc054",
      imageAlt:
        "Young blonde woman with bright smile wearing light blue blouse in creative studio environment with design materials visible",
      bio: "Emily crafts user experiences that delight and convert. With a background in psychology and design, she creates interfaces that users love to interact with.",
      expertise: [
        "User Research",
        "Interface Design",
        "Prototyping",
        "Design Systems",
      ],
      achievements: [
        "Designed award-winning interfaces for 200+ projects",
        "Increased client conversion rates by average of 40%",
        "Featured in top design publications and blogs",
      ],

      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        dribbble: "https://dribbble.com/emilywatson",
        behance: "https://behance.net/emilywatson",
      },
      quote: "Design is not just how it looks, but how it makes people feel.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      department: "Infrastructure",
      image: "https://images.unsplash.com/photo-1503087065990-e2ef69dc88b4",
      imageAlt:
        "Asian man with glasses and professional demeanor wearing dark sweater in technology-focused office with servers visible in background",
      bio: "David ensures our applications run smoothly and securely at scale. He specializes in cloud infrastructure, automation, and security best practices.",
      expertise: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Security"],
      achievements: [
        "Managed infrastructure serving 10M+ users daily",
        "Reduced deployment time by 90% through automation",
        "Certified in multiple cloud platforms and security frameworks",
      ],

      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim",
      },
      quote:
        "Reliable infrastructure is the foundation of great user experiences.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Digital Marketing Strategist",
      department: "Marketing",
      image: "https://images.unsplash.com/photo-1665454043378-97c3964ff230",
      imageAlt:
        "Professional woman with curly brown hair wearing burgundy blazer smiling confidently in modern marketing office with campaign materials",
      bio: "Lisa drives digital growth strategies that deliver measurable results. She combines data analytics with creative campaigns to maximize ROI for our clients.",
      expertise: ["SEO/SEM", "Analytics", "Content Strategy", "Social Media"],
      achievements: [
        "Generated $50M+ in client revenue through digital campaigns",
        "Improved organic traffic by 300% for major clients",
        "Certified Google and Facebook marketing expert",
      ],

      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        twitter: "https://twitter.com/lisathompson",
      },
      quote: "Data tells the story, creativity brings it to life.",
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Mobile App Developer",
      department: "Development",
      image: "https://images.unsplash.com/photo-1535467221272-12fb327de525",
      imageAlt:
        "Young man with short brown hair wearing casual gray t-shirt working on mobile development in modern tech workspace with multiple devices",
      bio: "Alex creates mobile experiences that users can't put down. Specializing in both iOS and Android development with a focus on performance and user engagement.",
      expertise: ["React Native", "iOS/Swift", "Android/Kotlin", "Mobile UX"],
      achievements: [
        "Developed 50+ mobile apps with 5M+ downloads",
        "Apps featured in App Store and Google Play",
        "Expert in mobile performance optimization",
      ],

      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson",
      },
      quote: "Mobile is not just smaller screens, it's a different mindset.",
    },
  ];

  const departments = [
    "All",
    "Leadership",
    "Development",
    "Design",
    "Infrastructure",
    "Marketing",
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers?.filter((member) => member?.department === activeFilter);

  return (
    <section className="py-20 bg-surface">
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
              <Icon name="Users" size={24} color="white" />
            </div>
            <span className="text-primary font-semibold text-lg">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Meet the Minds Behind
            <span className="block text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in
            technology, design, and digital strategy to deliver exceptional
            results for our clients.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {departments?.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-brand ${
                activeFilter === dept
                  ? "bg-primary text-white shadow-brand"
                  : "bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMembers?.map((member, index) => (
            <motion.div
              key={member?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="bg-card rounded-brand border border-border hover:border-primary/20 hover:shadow-brand transition-brand overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="aspect-square">
                    <Image
                      src={member?.image}
                      alt={member?.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-brand duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-brand">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        {member?.social?.linkedin && (
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon name="Linkedin" size={16} color="white" />
                          </div>
                        )}
                        {member?.social?.github && (
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon name="Github" size={16} color="white" />
                          </div>
                        )}
                        {member?.social?.twitter && (
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon name="Twitter" size={16} color="white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-brand-primary mb-1 group-hover:text-primary transition-brand">
                      {member?.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {member?.role}
                    </p>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {member?.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member?.expertise
                      ?.slice(0, 3)
                      ?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    {member?.expertise?.length > 3 && (
                      <span className="px-3 py-1 bg-muted text-text-secondary text-xs font-medium rounded-full">
                        +{member?.expertise?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-brand border border-border shadow-brand-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-brand z-10"
                >
                  <Icon name="X" size={16} />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square rounded-brand overflow-hidden mb-4">
                        <Image
                          src={selectedMember?.image}
                          alt={selectedMember?.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center space-x-3">
                        {selectedMember?.social?.linkedin && (
                          <a
                            href={selectedMember?.social?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-brand"
                          >
                            <Icon name="Linkedin" size={18} />
                          </a>
                        )}
                        {selectedMember?.social?.github && (
                          <a
                            href={selectedMember?.social?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-brand"
                          >
                            <Icon name="Github" size={18} />
                          </a>
                        )}
                        {selectedMember?.social?.twitter && (
                          <a
                            href={selectedMember?.social?.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-brand"
                          >
                            <Icon name="Twitter" size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-brand-primary mb-2">
                          {selectedMember?.name}
                        </h3>
                        <p className="text-primary font-semibold text-lg mb-4">
                          {selectedMember?.role}
                        </p>
                        <blockquote className="text-text-secondary italic border-l-4 border-primary pl-4 mb-4">
                          "{selectedMember?.quote}"
                        </blockquote>
                        <p className="text-text-secondary leading-relaxed">
                          {selectedMember?.bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-brand-primary mb-3">
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedMember?.expertise?.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-brand-primary mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedMember?.achievements?.map(
                            (achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <Icon
                                  name="CheckCircle"
                                  size={16}
                                  color="var(--color-success)"
                                  className="mt-1 flex-shrink-0"
                                />
                                <span className="text-text-secondary text-sm">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamShowcase;
