import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import axios from "axios";

const ProjectEstimator = () => {
  const [selectedService, setSelectedService] = useState("web-development");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [projectComplexity, setProjectComplexity] = useState("medium");
  const [timeline, setTimeline] = useState("3-6-months");
  const [email, setEmail] = useState(""); // ✅ added email input
  const [fullName, setFullName] = useState(""); // ✅ added name input
  const [isLoading, setIsLoading] = useState(false);

  const services = {
    "web-development": {
      name: "Web Development",
      icon: "Globe",
      basePrice: 15000,
      features: [
        {
          id: "responsive",
          name: "Responsive Design",
          price: 0,
          included: true,
        },
        { id: "cms", name: "Content Management System", price: 3000 },
        { id: "ecommerce", name: "E-commerce Integration", price: 8000 },
        { id: "api", name: "Custom API Development", price: 5000 },
        { id: "seo", name: "SEO Optimization", price: 2000 },
        { id: "analytics", name: "Analytics Integration", price: 1500 },
        { id: "security", name: "Advanced Security Features", price: 3500 },
        { id: "multilingual", name: "Multi-language Support", price: 4000 },
      ],
    },
    "app-development": {
      name: "Mobile App Development",
      icon: "Smartphone",
      basePrice: 25000,
      features: [
        { id: "ios", name: "iOS App", price: 0, included: true },
        { id: "android", name: "Android App", price: 8000 },
        { id: "backend", name: "Custom Backend", price: 12000 },
        { id: "push", name: "Push Notifications", price: 2500 },
        { id: "offline", name: "Offline Functionality", price: 4000 },
        { id: "payment", name: "Payment Integration", price: 3500 },
        { id: "social", name: "Social Media Integration", price: 2000 },
        { id: "location", name: "GPS/Location Services", price: 3000 },
      ],
    },
    "digital-marketing": {
      name: "Digital Marketing",
      icon: "TrendingUp",
      basePrice: 5000,
      features: [
        {
          id: "seo-audit",
          name: "SEO Audit & Strategy",
          price: 0,
          included: true,
        },
        { id: "ppc", name: "PPC Campaign Management", price: 3000 },
        { id: "social-media", name: "Social Media Marketing", price: 2500 },
        { id: "content", name: "Content Marketing", price: 4000 },
        { id: "email", name: "Email Marketing Automation", price: 2000 },
        {
          id: "analytics-setup",
          name: "Analytics & Reporting Setup",
          price: 1500,
        },
        { id: "conversion", name: "Conversion Rate Optimization", price: 3500 },
        { id: "brand", name: "Brand Strategy & Design", price: 5000 },
      ],
    },
  };

  const complexityMultipliers = {
    simple: { multiplier: 0.8, name: "Simple" },
    medium: { multiplier: 1.0, name: "Medium" },
    complex: { multiplier: 1.5, name: "Complex" },
    enterprise: { multiplier: 2.0, name: "Enterprise" },
  };

  const timelineMultipliers = {
    "1-3-months": { multiplier: 1.3, name: "1-3 Months" },
    "3-6-months": { multiplier: 1.0, name: "3-6 Months" },
    "6-12-months": { multiplier: 0.9, name: "6-12 Months" },
    flexible: { multiplier: 0.85, name: "Flexible" },
  };

  const currentService = services[selectedService];

  const calculateEstimate = () => {
    let basePrice = currentService.basePrice;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = currentService.features.find((f) => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    const total =
      (basePrice + featuresPrice) *
      complexityMultipliers[projectComplexity].multiplier *
      timelineMultipliers[timeline].multiplier;

    return {
      basePrice,
      featuresPrice,
      totalPrice: Math.round(total),
    };
  };

  const estimate = calculateEstimate();

  // ✅ Function to send data and request PDF + email
  const handleDownloadQuote = async () => {
    if (!email || !fullName) {
      alert("Please enter your name and email before downloading the quote.");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        name: fullName,
        email,
        projectType: currentService.name,
        totalEstimate: estimate.totalPrice,
        timeline: timelineMultipliers[timeline].name,
        complexity: complexityMultipliers[projectComplexity].name,
        features: selectedFeatures.map((id) => {
          const f = currentService.features.find((x) => x.id === id);
          return f?.name;
        }),
      };

      const res = await axios.post(
        "http://localhost:5000/api/project-estimator",
        payload,
        { responseType: "blob" }
      );

      // Download PDF
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Project_Estimate_${fullName.replace(/\s/g, "_")}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);

      alert("📩 PDF downloaded & also sent to your email!");
    } catch (err) {
      console.error(err);
      alert("Error sending or downloading PDF");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Project Cost Estimator
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Get an instant estimate for your project — customize below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Config Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Selection */}
            <div className="bg-card rounded-brand border border-border p-6">
              <h3 className="text-xl font-semibold mb-6">
                Select Service Type
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(services).map(([key, s]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedService(key);
                      setSelectedFeatures([]);
                    }}
                    className={`p-4 rounded-brand border-2 transition ${
                      selectedService === key
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name={s.icon} size={24} />
                      <span className="font-medium">{s.name}</span>
                    </div>
                    <div className="text-sm opacity-80">
                      Starting from ${s.basePrice.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-card rounded-brand border border-border p-6">
              <h3 className="text-xl font-semibold mb-6">Select Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.features.map((f) => (
                  <label
                    key={f.id}
                    className={`flex items-center justify-between p-4 rounded-brand border-2 cursor-pointer transition ${
                      f.included
                        ? "border-success bg-success/5 text-success cursor-not-allowed"
                        : selectedFeatures.includes(f.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={f.included || selectedFeatures.includes(f.id)}
                        onChange={() =>
                          !f.included &&
                          setSelectedFeatures((prev) =>
                            prev.includes(f.id)
                              ? prev.filter((id) => id !== f.id)
                              : [...prev, f.id]
                          )
                        }
                        disabled={f.included}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="font-medium">{f.name}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {f.price === 0 ? "Free" : `+$${f.price.toLocaleString()}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Estimate Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-brand border border-border p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Project Estimate</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>${estimate.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Features</span>
                  <span>+${estimate.featuresPrice.toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Estimate</span>
                  <span className="text-primary">
                    ${estimate.totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* ✅ Added User Input Section */}
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border border-border rounded-brand text-sm focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter your email to receive quote"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-border rounded-brand text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  onClick={() => alert("Let's discuss your project!")}
                >
                  Discuss This Estimate
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="Download"
                  onClick={handleDownloadQuote}
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Download & Email PDF Quote"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
