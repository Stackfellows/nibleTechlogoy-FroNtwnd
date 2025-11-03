import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: `NibleTechnology transformed our entire digital presence. Their team didn't just build us a website - they created a comprehensive digital ecosystem that increased our online conversions by 280% within the first quarter.`,
      name: "Sarah Chen",
      position: "CEO & Founder",
      company: "TechVision Solutions",
      avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length black hair in navy blazer",
      rating: 5,
      projectType: "E-commerce Platform",
      results: "280% conversion increase",
    },
    {
      id: 2,
      quote: `Working with NibleTechnology was a game-changer for our startup. They understood our vision and delivered a mobile app that exceeded our expectations. The user engagement metrics speak for themselves - 95% user retention rate.`,
      name: "Marcus Rodriguez",
      position: "CTO",
      company: "FinanceFlow Inc",
      avatar: "https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7",
      avatarAlt:
        "Professional headshot of Hispanic man with short dark hair in gray suit",
      rating: 5,
      projectType: "Mobile Application",
      results: "95% user retention",
    },
    {
      id: 3,
      quote: `The level of technical expertise and attention to detail from NibleTechnology is unmatched. They rebuilt our legacy system into a modern, scalable platform that handles 10x our previous traffic without any performance issues.`,
      name: "Dr. Emily Watson",
      position: "Head of Digital Innovation",
      company: "MedTech Innovations",
      avatar: "https://images.unsplash.com/photo-1733685372672-d8125b7111a7",
      avatarAlt:
        "Professional headshot of Caucasian woman with blonde hair in white lab coat",
      rating: 5,
      projectType: "System Modernization",
      results: "10x traffic capacity",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <div className="bg-surface py-16 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say
            about their experience working with NibleTechnology.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl shadow-brand-lg p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success/5 to-warning/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Quote" size={32} color="var(--color-primary)" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-text-primary leading-relaxed mb-8 font-medium">
                "{current?.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Image
                    src={current?.avatar}
                    alt={current?.avatarAlt}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <div className="font-bold text-text-primary text-lg">
                      {current?.name}
                    </div>
                    <div className="text-text-secondary">
                      {current?.position}
                    </div>
                    <div className="text-primary font-medium">
                      {current?.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end space-y-2">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(current?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={18}
                        className="text-warning"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">
                      {current?.projectType}
                    </div>
                    <div className="text-sm font-semibold text-success">
                      {current?.results}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card hover:bg-primary hover:text-white border border-border rounded-full flex items-center justify-center transition-all duration-200 shadow-brand"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card hover:bg-primary hover:text-white border border-border rounded-full flex items-center justify-center transition-all duration-200 shadow-brand"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your digital presence and drive
            measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
