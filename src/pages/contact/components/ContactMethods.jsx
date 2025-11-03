import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ContactMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("consultation");

  const contactMethods = [
    {
      id: "consultation",
      title: "Book Consultation",
      description:
        "Schedule a detailed discussion about your project requirements",
      icon: "Calendar",
      color: "primary",
      features: [
        "Free 30-min consultation",
        "Project scope analysis",
        "Technology recommendations",
        "Timeline & budget estimate",
      ],
    },
    {
      id: "whatsapp",
      title: "WhatsApp Chat",
      description: "Get instant responses to your questions via WhatsApp",
      icon: "MessageCircle",
      color: "success",
      features: [
        "Instant messaging",
        "24/7 availability",
        "File sharing support",
        "Voice message option",
      ],
    },
    {
      id: "email",
      title: "Email Support",
      description:
        "Send detailed project requirements and get comprehensive responses",
      icon: "Mail",
      color: "accent",
      features: [
        "Detailed documentation",
        "File attachments",
        "Formal proposals",
        "Project contracts",
      ],
    },
    {
      id: "phone",
      title: "Phone Call",
      description: "Speak directly with our technical experts",
      icon: "Phone",
      color: "warning",
      features: [
        "Direct conversation",
        "Technical clarifications",
        "Immediate feedback",
        "Screen sharing support",
      ],
    },
  ];

  const getColorClasses = (color, isSelected) => {
    const colors = {
      primary: isSelected
        ? "bg-primary text-white border-primary"
        : "bg-primary/5 text-primary border-primary/20 hover:bg-primary/10",
      success: isSelected
        ? "bg-success text-white border-success"
        : "bg-success/5 text-success border-success/20 hover:bg-success/10",
      accent: isSelected
        ? "bg-accent text-white border-accent"
        : "bg-accent/5 text-accent border-accent/20 hover:bg-accent/10",
      warning: isSelected
        ? "bg-warning text-white border-warning"
        : "bg-warning/5 text-warning border-warning/20 hover:bg-warning/10",
    };
    return colors?.[color];
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We offer multiple ways to connect with our team. Select the method
            that works best for you and let's start building something amazing
            together.
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              onClick={() => setSelectedMethod(method?.id)}
              className={`p-6 rounded-brand border-2 cursor-pointer transition-brand ${getColorClasses(
                method?.color,
                selectedMethod === method?.id
              )}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-brand flex items-center justify-center ${
                    selectedMethod === method?.id
                      ? "bg-white/20"
                      : "bg-current/10"
                  }`}
                >
                  <Icon
                    name={method?.icon}
                    size={24}
                    color={
                      selectedMethod === method?.id ? "white" : "currentColor"
                    }
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{method?.title}</h3>
                </div>
              </div>
              <p
                className={`text-sm mb-4 ${
                  selectedMethod === method?.id
                    ? "text-white/90"
                    : "text-current/80"
                }`}
              >
                {method?.description}
              </p>
              <ul className="space-y-2">
                {method?.features?.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center space-x-2 text-sm ${
                      selectedMethod === method?.id
                        ? "text-white/90"
                        : "text-current/80"
                    }`}
                  >
                    <Icon name="Check" size={14} color="currentColor" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selected Method Details */}
        <div className="bg-card rounded-brand border border-border p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {contactMethods?.find((m) => m?.id === selectedMethod)?.title}
              </h3>
              <p className="text-text-secondary mb-6">
                {
                  contactMethods?.find((m) => m?.id === selectedMethod)
                    ?.description
                }
              </p>

              {selectedMethod === "consultation" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} color="var(--color-primary)" />
                    <span className="text-text-secondary">
                      Available: Mon-Fri, 9 AM - 6 PM EST
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} color="var(--color-primary)" />
                    <span className="text-text-secondary">
                      Meet with: Senior Technical Consultant
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Video" size={20} color="var(--color-primary)" />
                    <span className="text-text-secondary">
                      Format: Video call or phone
                    </span>
                  </div>
                </div>
              )}

              {selectedMethod === "whatsapp" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Smartphone"
                      size={20}
                      color="var(--color-success)"
                    />
                    <span className="text-text-secondary">
                      Number: +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" size={20} color="var(--color-success)" />
                    <span className="text-text-secondary">
                      Available worldwide
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" size={20} color="var(--color-success)" />
                    <span className="text-text-secondary">
                      Response time: &lt;15 minutes
                    </span>
                  </div>
                </div>
              )}

              {selectedMethod === "email" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} color="var(--color-accent)" />
                    <span className="text-text-secondary">
                      Email: hello@nibletechnology.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="FileText"
                      size={20}
                      color="var(--color-accent)"
                    />
                    <span className="text-text-secondary">
                      Include: Project details & requirements
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} color="var(--color-accent)" />
                    <span className="text-text-secondary">
                      Response time: Within 2 hours
                    </span>
                  </div>
                </div>
              )}

              {selectedMethod === "phone" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} color="var(--color-warning)" />
                    <span className="text-text-secondary">
                      Phone: +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} color="var(--color-warning)" />
                    <span className="text-text-secondary">
                      Hours: Mon-Fri, 9 AM - 6 PM EST
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Headphones"
                      size={20}
                      color="var(--color-warning)"
                    />
                    <span className="text-text-secondary">
                      Direct line to technical team
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              {selectedMethod === "consultation" && (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                    className="bg-primary hover:bg-primary/90"
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Clock"
                    iconPosition="left"
                    fullWidth
                  >
                    View Available Times
                  </Button>
                </>
              )}

              {selectedMethod === "whatsapp" && (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    fullWidth
                    className="bg-success hover:bg-success/90"
                  >
                    Start WhatsApp Chat
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    fullWidth
                  >
                    Save Contact
                  </Button>
                </>
              )}

              {selectedMethod === "email" && (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Mail"
                    iconPosition="left"
                    fullWidth
                    className="bg-accent hover:bg-accent/90"
                  >
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                    fullWidth
                  >
                    Email Template
                  </Button>
                </>
              )}

              {selectedMethod === "phone" && (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    fullWidth
                    className="bg-warning hover:bg-warning/90"
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                  >
                    Schedule Call
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
