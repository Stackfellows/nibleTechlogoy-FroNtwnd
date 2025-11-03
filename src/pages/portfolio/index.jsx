import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock portfolio data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution Platform",
      description:
        "Complete digital transformation for a retail giant, implementing AI-powered recommendations and seamless checkout experience.",
      fullDescription: `This comprehensive e-commerce platform revolutionized the client's online presence through cutting-edge technology and user-centric design. We implemented advanced AI algorithms for personalized product recommendations, streamlined the checkout process to reduce cart abandonment, and created a responsive design that works flawlessly across all devices. The platform includes inventory management, customer analytics, and integrated payment processing that supports multiple currencies and payment methods.`,
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "AI/ML"],
      image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
      imageAlt:
        "Modern e-commerce website interface showing product grid and shopping cart on desktop computer",
      beforeImage:
        "https://images.unsplash.com/photo-1619409412389-f8f5e88bf1ee",
      beforeImageAlt:
        "Outdated e-commerce website with cluttered layout and poor navigation on old computer screen",
      afterImage:
        "https://images.unsplash.com/photo-1735448214728-4fa20162d297",
      afterImageAlt:
        "Modern sleek e-commerce platform with clean design and intuitive user interface",
      client: {
        name: "RetailMax Solutions",
        industry: "Retail & E-Commerce",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19b3c9b59-1762108482854.png",
        logoAlt:
          "RetailMax Solutions company logo with modern geometric design",
      },
      duration: "8 months",
      teamSize: "12 developers",
      launchDate: "March 2024",
      rating: 4.9,
      roiIncrease: 280,
      challenges: [
        "Legacy system integration with modern architecture",
        "Handling high traffic volumes during peak seasons",
        "Complex inventory management across multiple warehouses",
        "Implementing real-time analytics and reporting",
      ],

      solutions: [
        "Microservices architecture for scalability and maintainability",
        "CDN implementation and caching strategies for performance",
        "Advanced inventory tracking with automated reorder points",
        "Real-time dashboard with actionable business insights",
      ],

      results: [
        { metric: "Conversion Rate", value: "280%" },
        { metric: "Page Load Speed", value: "65%" },
        { metric: "User Engagement", value: "150%" },
        { metric: "Mobile Sales", value: "320%" },
      ],

      testimonial: {
        quote:
          "NibleTechnology transformed our entire digital presence. The new platform increased our online conversions by 280% within the first quarter.",
        name: "Sarah Chen",
        position: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
        avatarAlt:
          "Professional headshot of Asian woman with shoulder-length black hair in navy blazer",
      },
    },
    {
      id: 2,
      title: "FinTech Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication and real-time transaction processing.",
      fullDescription: `A revolutionary mobile banking application that combines cutting-edge security with exceptional user experience. The app features biometric authentication, real-time transaction processing, and advanced fraud detection. We implemented end-to-end encryption, multi-factor authentication, and compliance with international banking regulations. The intuitive interface makes complex financial operations simple and accessible to users of all technical backgrounds.`,
      category: "Mobile App",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Blockchain",
        "Biometrics",
      ],
      image: "https://images.unsplash.com/photo-1676245437659-2a05627080e4",
      imageAlt:
        "Mobile banking app interface showing account balance and transaction history on smartphone",
      beforeImage:
        "https://images.unsplash.com/photo-1704547698407-a1ce8a50dfe3",
      beforeImageAlt:
        "Traditional bank branch interior with long queues and paper-based processes",
      afterImage:
        "https://images.unsplash.com/photo-1687168644714-3343aa9b5af8",
      afterImageAlt:
        "Sleek mobile banking app with modern interface and secure biometric login",
      client: {
        name: "SecureBank Digital",
        industry: "Financial Services",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_176f7a9a7-1762108483744.png",
        logoAlt:
          "SecureBank Digital logo featuring shield and digital elements",
      },
      duration: "10 months",
      teamSize: "15 developers",
      launchDate: "January 2024",
      rating: 4.8,
      roiIncrease: 195,
      challenges: [
        "Implementing bank-grade security protocols",
        "Ensuring compliance with financial regulations",
        "Creating intuitive UX for complex financial operations",
        "Real-time transaction processing at scale",
      ],

      solutions: [
        "Multi-layered security architecture with biometric authentication",
        "Comprehensive compliance framework and audit trails",
        "User-centered design with extensive usability testing",
        "High-performance backend with real-time processing capabilities",
      ],

      results: [
        { metric: "User Adoption", value: "195%" },
        { metric: "Transaction Speed", value: "75%" },
        { metric: "Security Incidents", value: "99%" },
        { metric: "Customer Satisfaction", value: "160%" },
      ],

      testimonial: {
        quote:
          "The mobile banking app exceeded our expectations. User adoption increased by 195% and we've had zero security incidents since launch.",
        name: "Marcus Rodriguez",
        position: "CTO",
        avatar: "https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7",
        avatarAlt:
          "Professional headshot of Hispanic man with short dark hair in gray suit",
      },
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform connecting patients, doctors, and administrators with telemedicine capabilities.",
      fullDescription: `A comprehensive healthcare management system that digitizes and streamlines medical operations. The platform includes patient management, appointment scheduling, telemedicine capabilities, electronic health records, and billing integration. We implemented HIPAA-compliant security measures, real-time communication tools, and advanced analytics for healthcare insights. The system supports multiple user roles and provides seamless integration with existing medical equipment and third-party services.`,
      category: "Web Application",
      technologies: [
        "Vue.js",
        "Python",
        "Django",
        "PostgreSQL",
        "WebRTC",
        "HIPAA",
      ],
      image: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
      imageAlt:
        "Healthcare management dashboard showing patient records and appointment scheduling interface",
      beforeImage:
        "https://images.unsplash.com/photo-1707433221066-0dcb70694efe",
      beforeImageAlt:
        "Traditional hospital reception with paper files and manual appointment booking",
      afterImage:
        "https://images.unsplash.com/photo-1693943450853-e04ab12ea77c",
      afterImageAlt:
        "Modern digital healthcare platform with telemedicine and patient management features",
      client: {
        name: "MedTech Innovations",
        industry: "Healthcare Technology",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1055bf9f9-1762108487321.png",
        logoAlt:
          "MedTech Innovations logo with medical cross and technology symbols",
      },
      duration: "12 months",
      teamSize: "18 developers",
      launchDate: "September 2023",
      rating: 4.9,
      roiIncrease: 220,
      challenges: [
        "HIPAA compliance and data security requirements",
        "Integration with legacy medical systems",
        "Real-time telemedicine video quality",
        "Complex user role management and permissions",
      ],

      solutions: [
        "End-to-end encryption and comprehensive audit logging",
        "Custom API development for seamless system integration",
        "Optimized WebRTC implementation for high-quality video calls",
        "Flexible role-based access control system",
      ],

      results: [
        { metric: "Patient Satisfaction", value: "220%" },
        { metric: "Administrative Efficiency", value: "180%" },
        { metric: "Appointment No-shows", value: "60%" },
        { metric: "Data Processing Speed", value: "300%" },
      ],

      testimonial: {
        quote:
          "This system revolutionized our healthcare delivery. Patient satisfaction increased by 220% and our administrative efficiency improved dramatically.",
        name: "Dr. Emily Watson",
        position: "Head of Digital Innovation",
        avatar: "https://images.unsplash.com/photo-1733685372672-d8125b7111a7",
        avatarAlt:
          "Professional headshot of Caucasian woman with blonde hair in white lab coat",
      },
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      description:
        "Interactive online learning platform with AI-powered personalized learning paths and real-time collaboration tools.",
      fullDescription: `An innovative educational technology platform that personalizes learning experiences through AI algorithms. The system includes interactive course content, real-time collaboration tools, progress tracking, and adaptive learning paths. We implemented gamification elements, peer-to-peer learning features, and comprehensive analytics for educators. The platform supports multiple content formats including video, interactive simulations, and virtual reality experiences.`,
      category: "EdTech",
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "WebSocket",
        "AI/ML",
        "WebVR",
      ],
      image: "https://images.unsplash.com/photo-1600642413339-d64b35bd2ca2",
      imageAlt:
        "Online learning platform interface showing interactive course content and student progress dashboard",
      beforeImage:
        "https://images.unsplash.com/photo-1719498861257-44589f1d6b73",
      beforeImageAlt:
        "Traditional classroom with students sitting in rows facing blackboard",
      afterImage:
        "https://images.unsplash.com/photo-1701777508358-833de8c614ec",
      afterImageAlt:
        "Modern digital learning environment with interactive content and collaborative tools",
      client: {
        name: "EduFuture Academy",
        industry: "Education Technology",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd167431-1762108484760.png",
        logoAlt:
          "EduFuture Academy logo with graduation cap and digital elements",
      },
      duration: "9 months",
      teamSize: "14 developers",
      launchDate: "June 2024",
      rating: 4.7,
      roiIncrease: 165,
      challenges: [
        "Creating engaging interactive content",
        "Implementing AI-powered personalization",
        "Ensuring platform scalability for thousands of users",
        "Real-time collaboration and communication features",
      ],

      solutions: [
        "Gamified learning modules with interactive elements",
        "Machine learning algorithms for adaptive learning paths",
        "Cloud-based architecture with auto-scaling capabilities",
        "WebSocket implementation for real-time collaboration",
      ],

      results: [
        { metric: "Student Engagement", value: "165%" },
        { metric: "Course Completion Rate", value: "140%" },
        { metric: "Learning Retention", value: "185%" },
        { metric: "Platform Usage Time", value: "210%" },
      ],

      testimonial: {
        quote:
          "The AI-powered personalization has transformed how our students learn. Engagement increased by 165% and completion rates are at an all-time high.",
        name: "Prof. Michael Thompson",
        position: "Director of Digital Learning",
        avatar: "https://images.unsplash.com/photo-1585066047759-3438c34cf676",
        avatarAlt:
          "Professional headshot of middle-aged Caucasian man with beard in academic attire",
      },
    },
    {
      id: 5,
      title: "Smart City IoT Dashboard",
      description:
        "Real-time city management dashboard integrating IoT sensors for traffic, energy, and environmental monitoring.",
      fullDescription: `A comprehensive smart city management platform that integrates thousands of IoT sensors across urban infrastructure. The dashboard provides real-time monitoring of traffic patterns, energy consumption, air quality, and public safety metrics. We implemented predictive analytics for proactive city management, automated alert systems, and citizen engagement features. The platform supports data visualization, trend analysis, and integration with existing city management systems.`,
      category: "IoT Platform",
      technologies: [
        "React",
        "Python",
        "InfluxDB",
        "Grafana",
        "IoT",
        "Machine Learning",
      ],
      image: "https://images.unsplash.com/photo-1570550538010-e24c65eaa4bb",
      imageAlt:
        "Smart city dashboard displaying real-time IoT data with traffic patterns and environmental metrics",
      beforeImage:
        "https://images.unsplash.com/photo-1708794758104-718d87e2d6f9",
      beforeImageAlt:
        "Traditional city control room with manual monitoring systems and paper-based processes",
      afterImage:
        "https://images.unsplash.com/photo-1655284390702-acc8e3099ea2",
      afterImageAlt:
        "Modern smart city command center with digital dashboards and real-time IoT monitoring",
      client: {
        name: "MetroSmart Solutions",
        industry: "Smart City Technology",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_134ce7ba5-1762108483761.png",
        logoAlt:
          "MetroSmart Solutions logo featuring city skyline and connectivity symbols",
      },
      duration: "14 months",
      teamSize: "20 developers",
      launchDate: "November 2023",
      rating: 4.8,
      roiIncrease: 240,
      challenges: [
        "Integrating thousands of diverse IoT sensors",
        "Processing massive amounts of real-time data",
        "Creating intuitive visualizations for complex data",
        "Ensuring system reliability and uptime",
      ],

      solutions: [
        "Standardized IoT communication protocols and APIs",
        "High-performance data processing pipeline with real-time analytics",
        "Interactive data visualization with customizable dashboards",
        "Redundant system architecture with 99.9% uptime guarantee",
      ],

      results: [
        { metric: "Operational Efficiency", value: "240%" },
        { metric: "Response Time", value: "70%" },
        { metric: "Energy Savings", value: "35%" },
        { metric: "Citizen Satisfaction", value: "180%" },
      ],

      testimonial: {
        quote:
          "This IoT platform revolutionized our city management. We've achieved 240% improvement in operational efficiency and significant energy savings.",
        name: "David Park",
        position: "Chief Technology Officer",
        avatar: "https://images.unsplash.com/photo-1629272039203-7d76fdaf1324",
        avatarAlt:
          "Professional headshot of Asian man with glasses in dark business suit",
      },
    },
    {
      id: 6,
      title: "Real Estate CRM Platform",
      description:
        "Comprehensive real estate management system with property listings, client management, and automated marketing tools.",
      fullDescription: `A complete real estate management platform that streamlines property sales and client relationships. The system includes advanced property listing management, client relationship tools, automated marketing campaigns, and financial tracking. We implemented virtual property tours, AI-powered property matching, and integrated communication tools. The platform supports multiple user roles including agents, brokers, and administrators with customizable workflows and reporting.`,
      category: "CRM System",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS S3", "Stripe"],
      image: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
      imageAlt:
        "Real estate CRM dashboard showing property listings and client management interface",
      beforeImage:
        "https://images.unsplash.com/photo-1605503282870-f66f5fa4a9bb",
      beforeImageAlt:
        "Traditional real estate office with paper files and manual property tracking systems",
      afterImage:
        "https://images.unsplash.com/photo-1728873337157-79efdf91091d",
      afterImageAlt:
        "Modern digital real estate platform with virtual tours and automated client management",
      client: {
        name: "PropertyPro Realty",
        industry: "Real Estate",
        logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d410d635-1762108483792.png",
        logoAlt:
          "PropertyPro Realty logo with house icon and professional typography",
      },
      duration: "7 months",
      teamSize: "10 developers",
      launchDate: "April 2024",
      rating: 4.6,
      roiIncrease: 175,
      challenges: [
        "Managing large property databases with multimedia content",
        "Implementing virtual tour technology",
        "Automating complex marketing workflows",
        "Integration with multiple listing services (MLS)",
      ],

      solutions: [
        "Optimized database design with efficient media storage",
        "360-degree virtual tour integration with VR support",
        "Intelligent marketing automation based on client preferences",
        "Standardized MLS API integration with real-time synchronization",
      ],

      results: [
        { metric: "Sales Conversion", value: "175%" },
        { metric: "Lead Generation", value: "220%" },
        { metric: "Agent Productivity", value: "160%" },
        { metric: "Client Satisfaction", value: "190%" },
      ],

      testimonial: {
        quote:
          "Our sales conversion increased by 175% after implementing this CRM. The virtual tours and automated marketing have been game-changers.",
        name: "Jennifer Martinez",
        position: "Sales Director",
        avatar: "https://images.unsplash.com/photo-1563220599-bc8cb877de5d",
        avatarAlt:
          "Professional headshot of Hispanic woman with long dark hair in business attire",
      },
    },
  ];

  // Extract unique categories and technologies
  const categories = [...new Set(projects.map((project) => project.category))];
  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  // Filter projects based on selected filters
  useEffect(() => {
    let filtered = projects;

    if (selectedCategory) {
      filtered = filtered?.filter(
        (project) => project?.category === selectedCategory
      );
    }

    if (selectedTechnology) {
      filtered = filtered?.filter((project) =>
        project?.technologies?.includes(selectedTechnology)
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTechnology]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedTechnology("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Portfolio - NibleTechnology | Digital Transformation Success Stories
        </title>
        <meta
          name="description"
          content="Explore NibleTechnology's portfolio of successful digital transformation projects. View case studies, client testimonials, and measurable results across web development, mobile apps, and digital solutions."
        />
        <meta
          name="keywords"
          content="portfolio, case studies, digital transformation, web development, mobile apps, client success stories, NibleTechnology projects"
        />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary via-brand-secondary to-primary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Briefcase" size={20} color="white" />
              <span className="text-white font-medium">Our Work Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
              <span className="block text-accent">Success Stories</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative digital solutions that have
              transformed businesses across industries. Each project represents
              our commitment to excellence and measurable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="bg-white text-brand-primary hover:bg-white/90"
            >
              Watch Success Stories
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-brand-primary"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <StatsSection />
      {/* Portfolio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover how we've helped businesses achieve their digital
              transformation goals through innovative solutions and strategic
              implementation.
            </p>
          </div>

          {/* Project Filter */}
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            selectedCategory={selectedCategory}
            selectedTechnology={selectedTechnology}
            onCategoryChange={setSelectedCategory}
            onTechnologyChange={setSelectedTechnology}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects?.length}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project) => (
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects?.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                No Projects Found
              </h3>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                We couldn't find any projects matching your current filters. Try
                adjusting your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses that have transformed their
            digital presence with NibleTechnology. Let's discuss your project
            and create the next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold">NibleTechnology</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Transforming businesses through innovative digital solutions.
                Your vision, our expertise, measurable results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon name="Github" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} />
                  <span className="text-white/80">
                    hello@nibletechnology.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} />
                  <span className="text-white/80">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © {new Date()?.getFullYear()} NibleTechnology. All rights
              reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
