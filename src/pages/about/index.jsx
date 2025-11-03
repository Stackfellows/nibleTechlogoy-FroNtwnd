import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import CompanyStory from "./components/CompanyStory";
import TeamShowcase from "./components/TeamShowcase";
import CultureSection from "./components/CultureSection";
import MissionStatement from "./components/MissionStatement";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us - NibleTechnology | Digital Transformation Experts
        </title>
        <meta
          name="description"
          content="Learn about NibleTechnology's mission to transform businesses through innovative digital solutions. Meet our expert team and discover our culture of excellence."
        />
        <meta
          name="keywords"
          content="about nibletechnology, digital transformation team, technology experts, company culture, mission vision"
        />
        <meta
          property="og:title"
          content="About Us - NibleTechnology | Digital Transformation Experts"
        />
        <meta
          property="og:description"
          content="Discover the story behind NibleTechnology and meet the team driving digital innovation for businesses worldwide."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <HeroSection />
          <CompanyStory />
          <MissionStatement />
          <TeamShowcase />
          <CultureSection />
        </main>

        {/* Footer */}
        <footer className="bg-brand-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <span className="text-xl font-bold">NibleTechnology</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Transforming businesses through innovative digital solutions
                  that drive meaningful growth and success.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-brand"
                  >
                    <span className="text-sm">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-brand"
                  >
                    <span className="text-sm">t</span>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-brand"
                  >
                    <span className="text-sm">in</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/homepage"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portfolio"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Cloud Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-brand"
                    >
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-white/60">📍</span>
                    <span className="text-white/80">
                      123 Tech Street, Innovation District, San Francisco, CA
                      94105
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white/60">📞</span>
                    <span className="text-white/80">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white/60">✉️</span>
                    <span className="text-white/80">
                      hello@nibletechnology.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} NibleTechnology. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-brand"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-brand"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-brand"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
