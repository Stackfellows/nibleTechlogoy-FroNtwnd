import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ServiceHero from "./components/ServiceHero";
import ServiceCard from "./components/ServiceCard";
import ServiceComparison from "./components/ServiceComparison";
import TechnologyStack from "./components/TechnologyStack";
import ProjectCalculator from "./components/ProjectCalculator";
import CaseStudyShowcase from "./components/CaseStudyShowcase";
import ServiceCTA from "./components/ServiceCTA";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      category: "Frontend & Backend",
      icon: "Code",
      iconBg: "bg-accent",
      startingPrice: "5,000",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js. We create responsive, fast, and SEO-optimized websites that drive business growth and provide exceptional user experiences.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "CMS Integration",
        "E-commerce Ready",
        "API Development",
        "Database Design",
        "Security Implementation",
        "Third-party Integrations",
        "Analytics Setup",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Vercel",
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "Understanding your business requirements and technical specifications",
        },
        {
          title: "Design & Prototyping",
          description:
            "Creating wireframes and interactive prototypes for approval",
        },
        {
          title: "Development & Testing",
          description:
            "Building the application with rigorous testing at each stage",
        },
        {
          title: "Deployment & Launch",
          description:
            "Deploying to production with monitoring and optimization",
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing support, updates, and performance monitoring",
        },
      ],
      timeline: "4-12 weeks",
      caseStudy: {
        title: "E-commerce Platform - 300% Performance Boost",
        client: "RetailMax Solutions",
      },
    },
    {
      id: "app-development",
      title: "Mobile App Development",
      category: "iOS & Android",
      icon: "Smartphone",
      iconBg: "bg-trust-builder",
      startingPrice: "8,000",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Using React Native and Flutter, we build apps that provide native performance with shared codebase efficiency.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "In-app Purchases",
        "Social Media Integration",
        "Analytics Integration",
        "Biometric Authentication",
        "Cloud Synchronization",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS Amplify",
      ],
      process: [
        {
          title: "Market Research",
          description: "Analyzing target audience and competitor landscape",
        },
        {
          title: "UX/UI Design",
          description: "Creating intuitive and engaging mobile interfaces",
        },
        {
          title: "Development",
          description: "Building native or cross-platform applications",
        },
        {
          title: "Testing & QA",
          description:
            "Comprehensive testing on multiple devices and OS versions",
        },
        {
          title: "App Store Launch",
          description:
            "Publishing to App Store and Google Play with optimization",
        },
      ],
      timeline: "8-16 weeks",
      caseStudy: {
        title: "Healthcare App - 50K+ Active Users",
        client: "MediConnect Pro",
      },
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      category: "SEO & PPC",
      icon: "TrendingUp",
      iconBg: "bg-conversion-accent",
      startingPrice: "2,500",
      description:
        "Comprehensive digital marketing strategies including SEO, PPC, social media marketing, and content strategy. We help businesses increase online visibility and drive qualified leads.",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Strategy",
        "Email Marketing",
        "Conversion Optimization",
        "Analytics & Reporting",
        "Brand Management",
        "Influencer Marketing",
        "Marketing Automation",
      ],
      technologies: [
        "Google Ads",
        "Facebook Ads",
        "HubSpot",
        "Mailchimp",
        "SEMrush",
        "Analytics",
      ],
      process: [
        {
          title: "Market Analysis",
          description: "Researching target audience and competitive landscape",
        },
        {
          title: "Strategy Development",
          description: "Creating comprehensive marketing strategy and roadmap",
        },
        {
          title: "Campaign Setup",
          description:
            "Implementing campaigns across chosen marketing channels",
        },
        {
          title: "Optimization",
          description: "Continuous monitoring and optimization for better ROI",
        },
        {
          title: "Reporting",
          description: "Regular performance reports and strategy adjustments",
        },
      ],
      timeline: "2-8 weeks",
      caseStudy: {
        title: "Startup Growth - 850% Lead Increase",
        client: "TechStartup Inc",
      },
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      category: "Online Stores",
      icon: "ShoppingCart",
      iconBg: "bg-secondary",
      startingPrice: "7,500",
      description:
        "Complete e-commerce platforms with payment processing, inventory management, and customer analytics. Built for scalability and optimized for conversions.",
      features: [
        "Custom Shopping Cart",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Accounts",
        "Product Catalog",
        "Shipping Integration",
        "Tax Calculation",
        "Multi-currency Support",
        "Admin Dashboard",
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Stripe",
        "PayPal",
        "Magento",
        "BigCommerce",
      ],
      process: [
        {
          title: "Business Analysis",
          description:
            "Understanding your products, customers, and business model",
        },
        {
          title: "Platform Selection",
          description: "Choosing the best e-commerce platform for your needs",
        },
        {
          title: "Store Development",
          description: "Building custom store with all required features",
        },
        {
          title: "Payment Setup",
          description: "Integrating secure payment gateways and shipping",
        },
        {
          title: "Launch & Optimize",
          description: "Going live and optimizing for conversions",
        },
      ],
      timeline: "6-14 weeks",
      caseStudy: {
        title: "Fashion Store - $2.3M Revenue Boost",
        client: "StyleHub Fashion",
      },
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      category: "Enterprise Solutions",
      icon: "Settings",
      iconBg: "bg-warning",
      startingPrice: "15,000",
      description:
        "Tailored software solutions for specific business needs. From CRM systems to workflow automation, we build software that streamlines operations and increases efficiency.",
      features: [
        "Custom Business Logic",
        "Database Architecture",
        "User Management",
        "Workflow Automation",
        "Reporting & Analytics",
        "API Integrations",
        "Security & Compliance",
        "Scalable Architecture",
        "Cloud Deployment",
        "Maintenance & Support",
      ],
      technologies: [
        "Python",
        "Java",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes",
      ],
      process: [
        {
          title: "Requirements Gathering",
          description:
            "Detailed analysis of business processes and requirements",
        },
        {
          title: "System Architecture",
          description:
            "Designing scalable and maintainable system architecture",
        },
        {
          title: "Development Phases",
          description: "Iterative development with regular client feedback",
        },
        {
          title: "Integration & Testing",
          description: "System integration and comprehensive testing",
        },
        {
          title: "Deployment & Training",
          description: "Production deployment and user training",
        },
      ],
      timeline: "12-24 weeks",
      caseStudy: {
        title: "CRM System - 40% Efficiency Increase",
        client: "Enterprise Corp",
      },
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      category: "Design & Prototyping",
      icon: "Palette",
      iconBg: "bg-error",
      startingPrice: "3,500",
      description:
        "User-centered design solutions that create intuitive and engaging digital experiences. From wireframes to high-fidelity prototypes, we design for usability and conversion.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems",
        "Responsive Design",
        "Accessibility Compliance",
        "Brand Integration",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
      ],
      process: [
        {
          title: "User Research",
          description: "Understanding user needs, behaviors, and pain points",
        },
        {
          title: "Information Architecture",
          description: "Organizing content and features for optimal user flow",
        },
        {
          title: "Wireframing",
          description: "Creating low-fidelity layouts and user journeys",
        },
        {
          title: "Visual Design",
          description:
            "Developing high-fidelity designs and interactive prototypes",
        },
        {
          title: "Testing & Iteration",
          description: "User testing and design refinement based on feedback",
        },
      ],
      timeline: "3-8 weeks",
      caseStudy: {
        title: "Banking App - 95% User Satisfaction",
        client: "FinanceFirst Bank",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Services - NibleTechnology | Web Development, App Development &
          Digital Marketing
        </title>
        <meta
          name="description"
          content="Comprehensive digital solutions including web development, mobile app development, digital marketing, and custom software. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, digital marketing, custom software, UI/UX design, e-commerce solutions"
        />
        <meta property="og:title" content="Services - NibleTechnology" />
        <meta
          property="og:description"
          content="Transform your business with our comprehensive digital solutions and cutting-edge technology services."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <ServiceHero />

        {/* Services Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Comprehensive digital solutions designed to transform your
                business and drive measurable results
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services?.map((service, index) => (
                <ServiceCard
                  key={service?.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Project Calculator */}
        <ProjectCalculator />

        {/* Case Study Showcase */}
        <CaseStudyShowcase />

        {/* Call to Action */}
        <ServiceCTA />
      </div>
    </>
  );
};

export default Services;
