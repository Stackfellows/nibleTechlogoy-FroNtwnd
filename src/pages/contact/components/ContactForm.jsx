import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const projectTypes = [
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "Mobile App Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "ecommerce", label: "E-commerce Solution" },
    { value: "custom-software", label: "Custom Software" },
    { value: "consultation", label: "Technical Consultation" },
  ];

  const budgetRanges = [
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-30k", label: "$15,000 - $30,000" },
    { value: "30k-50k", label: "$30,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k+", label: "$100,000+" },
    { value: "discuss", label: "Let's Discuss" },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  if (submitSuccess) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-success/5 border border-success/20 rounded-brand p-12">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Thank You for Reaching Out!
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We've received your project inquiry and our team will review it
              carefully. You can expect to hear from us within 2 hours during
              business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
              >
                Continue on WhatsApp
              </Button>
              <Button variant="outline" iconName="Calendar" iconPosition="left">
                Schedule Follow-up Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Tell Us About Your Project
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Fill out the form below with your project details and we'll get back
            to you with a comprehensive proposal and timeline.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-surface rounded-brand p-6 border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
              <Icon name="User" size={20} color="var(--color-primary)" />
              <span>Personal Information</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                required
                error={errors?.fullName?.message}
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                required
                error={errors?.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                error={errors?.phone?.message}
                {...register("phone", {
                  pattern: {
                    value: /^[\+]?[1-9][\d]{0,15}$/,
                    message: "Invalid phone number",
                  },
                })}
              />

              <Input
                label="Company Name"
                type="text"
                placeholder="Your company name"
                error={errors?.company?.message}
                {...register("company")}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-surface rounded-brand p-6 border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
              <Icon name="Briefcase" size={20} color="var(--color-primary)" />
              <span>Project Details</span>
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Project Type <span className="text-error">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projectTypes?.map((type) => (
                    <label key={type?.value} className="relative">
                      <input
                        type="radio"
                        value={type?.value}
                        className="sr-only"
                        {...register("projectType", {
                          required: "Please select a project type",
                        })}
                      />
                      <div
                        className={`p-4 border-2 rounded-brand cursor-pointer transition-brand ${
                          watch("projectType") === type?.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="text-sm font-medium text-center">
                          {type?.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors?.projectType && (
                  <p className="mt-2 text-sm text-error">
                    {errors?.projectType?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Budget Range
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {budgetRanges?.map((budget) => (
                    <label key={budget?.value} className="relative">
                      <input
                        type="radio"
                        value={budget?.value}
                        className="sr-only"
                        {...register("budget")}
                      />
                      <div
                        className={`p-4 border-2 rounded-brand cursor-pointer transition-brand ${
                          watch("budget") === budget?.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="text-sm font-medium text-center">
                          {budget?.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Description <span className="text-error">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                  className="w-full px-4 py-3 border border-border rounded-brand focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  {...register("description", {
                    required: "Project description is required",
                    minLength: {
                      value: 50,
                      message:
                        "Please provide more details (minimum 50 characters)",
                    },
                  })}
                />
                {errors?.description && (
                  <p className="mt-2 text-sm text-error">
                    {errors?.description?.message}
                  </p>
                )}
              </div>

              <Input
                label="Timeline"
                type="text"
                placeholder="When do you need this completed? (e.g., 3 months, ASAP, Flexible)"
                error={errors?.timeline?.message}
                {...register("timeline")}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-surface rounded-brand p-6 border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center space-x-2">
              <Icon
                name="MessageSquare"
                size={20}
                color="var(--color-primary)"
              />
              <span>Additional Information</span>
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  How did you hear about us?
                </label>
                <select
                  className="w-full px-4 py-3 border border-border rounded-brand focus:ring-2 focus:ring-primary focus:border-primary"
                  {...register("referralSource")}
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">
                    Referral from friend/colleague
                  </option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="portfolio">Saw our portfolio</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Any additional information, questions, or specific requirements..."
                  className="w-full px-4 py-3 border border-border rounded-brand focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  {...register("notes")}
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  {...register("newsletter")}
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-text-secondary"
                >
                  I'd like to receive updates about NibleTechnology's services
                  and industry insights
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  {...register("terms", {
                    required: "You must agree to the terms and conditions",
                  })}
                />
                <label htmlFor="terms" className="text-sm text-text-secondary">
                  I agree to the{" "}
                  <span className="text-primary hover:underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-primary hover:underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  <span className="text-error">*</span>
                </label>
              </div>
              {errors?.terms && (
                <p className="text-sm text-error">{errors?.terms?.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="default"
              size="lg"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90 px-12"
            >
              {isSubmitting ? "Sending..." : "Send Project Inquiry"}
            </Button>
            <p className="mt-4 text-sm text-text-secondary">
              We'll respond within 2 hours during business hours
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
