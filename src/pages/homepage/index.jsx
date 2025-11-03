import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import BrandStorySection from "./components/BrandStorySection";
import ServicesPreview from "./components/ServicesPreview";
import TestimonialsSection from "./components/TestimonialsSection";
import SocialProofSection from "./components/SocialProofSection";
import CTASection from "./components/CTASection";

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          NibleTechnology - Digital Transformation Experts | Premium Technology
          Services
        </title>
        <meta
          name="description"
          content="Transform your business with NibleTechnology's premium digital solutions. Expert web development, mobile apps, and digital marketing services that drive growth and innovation."
        />
        <meta
          name="keywords"
          content="digital transformation, web development, mobile app development, digital marketing, technology consulting, React development, custom software"
        />
        <meta
          property="og:title"
          content="NibleTechnology - Digital Transformation Experts"
        />
        <meta
          property="og:description"
          content="Premium technology services that transform your vision into powerful digital solutions. Trusted by 150+ companies worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nibletechnology.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NibleTechnology - Digital Transformation Experts"
        />
        <meta
          name="twitter:description"
          content="Premium technology services that transform your vision into powerful digital solutions."
        />
        <link rel="canonical" href="https://nibletechnology.com" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Hero Section - First impression with animated service previews */}
          <HeroSection />

          {/* Brand Story Section - Interactive nibble approach explanation */}
          <BrandStorySection />

          {/* Services Preview - Comprehensive digital solutions showcase */}
          <ServicesPreview />

          {/* Testimonials Section - Client success stories with video testimonials */}
          <TestimonialsSection />

          {/* Social Proof Section - Industry recognition and partnerships */}
          <SocialProofSection />

          {/* CTA Section - Multiple conversion touchpoints */}
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-brand-primary text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">NibleTechnology</h3>
                    <p className="text-white/70 text-sm">
                      Digital Transformation
                    </p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 max-w-md">
                  Taking strategic, measured bites of complex challenges to
                  deliver digestible, powerful solutions that drive meaningful
                  growth.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand cursor-pointer">
                    <span className="text-white text-sm font-bold">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand cursor-pointer">
                    <span className="text-white text-sm font-bold">Tw</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand cursor-pointer">
                    <span className="text-white text-sm font-bold">Fb</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <a
                      href="/services"
                      className="hover:text-white transition-brand"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-white transition-brand"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-white transition-brand"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-white transition-brand"
                    >
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>+1 (555) 123-4567</li>
                  <li>hello@nibletechnology.com</li>
                  <li>
                    123 Innovation Drive
                    <br />
                    Tech City, TC 12345
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} NibleTechnology. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="/privacy"
                  className="text-white/60 hover:text-white text-sm transition-brand"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-white/60 hover:text-white text-sm transition-brand"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
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

export default Homepage;
