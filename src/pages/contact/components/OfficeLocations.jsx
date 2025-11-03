import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const OfficeLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState("headquarters");

  const locations = [
    {
      id: "headquarters",
      name: "Headquarters",
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Drive, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@nibletechnology.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      timezone: "Pacific Standard Time (PST)",
      coordinates: "37.7749,-122.4194",
      features: [
        "Main Office",
        "Client Meetings",
        "Development Team",
        "Executive Team",
      ],
      image: "https://images.unsplash.com/photo-1728803843776-f45f82e7d3ce",
      imageAlt:
        "Modern glass office building in downtown San Francisco with city skyline view",
    },
    {
      id: "development",
      name: "Development Center",
      city: "Austin",
      country: "United States",
      address: "456 Tech Boulevard, Floor 8\nAustin, TX 78701",
      phone: "+1 (555) 234-5678",
      email: "austin@nibletechnology.com",
      hours: "Mon-Fri: 8:00 AM - 7:00 PM CST",
      timezone: "Central Standard Time (CST)",
      coordinates: "30.2672,-97.7431",
      features: [
        "Development Hub",
        "QA Testing",
        "Technical Support",
        "Innovation Lab",
      ],
      image: "https://images.unsplash.com/photo-1631248988030-141c05a37dd2",
      imageAlt:
        "Contemporary tech office space with open floor plan and modern workstations in Austin",
    },
    {
      id: "international",
      name: "International Office",
      city: "London",
      country: "United Kingdom",
      address: "789 Digital Street, Level 12\nLondon, EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@nibletechnology.com",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT",
      timezone: "Greenwich Mean Time (GMT)",
      coordinates: "51.5074,-0.1278",
      features: [
        "European Operations",
        "Client Relations",
        "Business Development",
        "Partnership Hub",
      ],
      image: "https://images.unsplash.com/photo-1518603990069-bde0f7927331",
      imageAlt:
        "Elegant Victorian building converted to modern office space in central London",
    },
  ];

  const currentLocation = locations?.find(
    (loc) => loc?.id === selectedLocation
  );

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Visit us at any of our offices worldwide. We're strategically
            located to serve clients across different time zones and markets.
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locations?.map((location) => (
            <button
              key={location?.id}
              onClick={() => setSelectedLocation(location?.id)}
              className={`px-6 py-3 rounded-brand border-2 transition-brand ${
                selectedLocation === location?.id
                  ? "border-primary bg-primary text-white"
                  : "border-border text-text-secondary hover:border-primary/50 hover:text-primary"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} color="currentColor" />
                <span className="font-medium">{location?.city}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Location Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {currentLocation?.name}
              </h3>
              <p className="text-lg text-text-secondary">
                {currentLocation?.city}, {currentLocation?.country}
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-surface rounded-brand p-6 border border-border">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    color="var(--color-primary)"
                    className="mt-0.5"
                  />
                  <div>
                    <div className="font-medium text-text-primary">Address</div>
                    <div className="text-text-secondary whitespace-pre-line">
                      {currentLocation?.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} color="var(--color-primary)" />
                  <div>
                    <div className="font-medium text-text-primary">Phone</div>
                    <div className="text-text-secondary">
                      {currentLocation?.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} color="var(--color-primary)" />
                  <div>
                    <div className="font-medium text-text-primary">Email</div>
                    <div className="text-text-secondary">
                      {currentLocation?.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} color="var(--color-primary)" />
                  <div>
                    <div className="font-medium text-text-primary">
                      Business Hours
                    </div>
                    <div className="text-text-secondary">
                      {currentLocation?.hours}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {currentLocation?.timezone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Features */}
            <div className="bg-surface rounded-brand p-6 border border-border">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Office Features
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentLocation?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Schedule Visit
              </Button>
              <Button
                variant="outline"
                iconName="Navigation"
                iconPosition="left"
              >
                Get Directions
              </Button>
              <Button variant="outline" iconName="Phone" iconPosition="left">
                Call Office
              </Button>
            </div>
          </div>

          {/* Map and Image */}
          <div className="space-y-6">
            {/* Office Image */}
            <div className="relative overflow-hidden rounded-brand">
              <img
                src={currentLocation?.image}
                alt={currentLocation?.imageAlt}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold">{currentLocation?.name}</div>
                <div className="text-sm opacity-90">
                  {currentLocation?.city}, {currentLocation?.country}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative overflow-hidden rounded-brand border border-border">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${currentLocation?.name} Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentLocation?.coordinates}&z=14&output=embed`}
                  className="border-0"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-surface rounded-brand p-6 border border-border">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center space-x-2 p-3 rounded-brand border border-border hover:border-primary/50 hover:bg-primary/5 transition-brand">
                  <Icon
                    name="MessageCircle"
                    size={16}
                    color="var(--color-primary)"
                  />
                  <span className="text-sm font-medium text-text-primary">
                    WhatsApp
                  </span>
                </button>
                <button className="flex items-center space-x-2 p-3 rounded-brand border border-border hover:border-primary/50 hover:bg-primary/5 transition-brand">
                  <Icon name="Video" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-text-primary">
                    Video Call
                  </span>
                </button>
                <button className="flex items-center space-x-2 p-3 rounded-brand border border-border hover:border-primary/50 hover:bg-primary/5 transition-brand">
                  <Icon name="Mail" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-text-primary">
                    Send Email
                  </span>
                </button>
                <button className="flex items-center space-x-2 p-3 rounded-brand border border-border hover:border-primary/50 hover:bg-primary/5 transition-brand">
                  <Icon name="Share" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-text-primary">
                    Share Location
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Coverage Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-brand p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Serving Clients Worldwide
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              While we have physical offices in key locations, we serve clients
              globally through remote collaboration, ensuring the same
              high-quality service regardless of your location.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} color="var(--color-primary)" />
                <span>50+ Countries Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-primary)" />
                <span>24/7 Support Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} color="var(--color-primary)" />
                <span>Multilingual Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} color="var(--color-primary)" />
                <span>Remote Collaboration Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
