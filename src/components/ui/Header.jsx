import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "/src/components/ui/Button.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "About", path: "/about", icon: "Users" },
    { name: "Services", path: "/services", icon: "Briefcase" },
    { name: "Portfolio", path: "/portfolio", icon: "FolderOpen" },
    { name: "Contact", path: "/contact", icon: "MessageCircle" },
  ];

  const moreItems = [
    { name: "Admin Dashboard", path: "/admin-dashboard", icon: "Settings" },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-brand border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 transition-brand hover:opacity-80"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-brand flex items-center justify-center shadow-interactive">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-trust-builder rounded-full animate-pulse-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand-primary tracking-tight">
                NibleTechnology
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Digital Transformation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-brand text-sm font-medium transition-brand group ${
                  isActivePath(item?.path)
                    ? "text-primary bg-primary/5"
                    : "text-text-secondary hover:text-primary hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    name={item?.icon}
                    size={16}
                    color={
                      isActivePath(item?.path)
                        ? "var(--color-primary)"
                        : "currentColor"
                    }
                  />
                  <span>{item?.name}</span>
                </div>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-brand text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted/50 transition-brand flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-brand shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-brand ${
                        isActivePath(item?.path)
                          ? "text-primary bg-primary/5"
                          : "text-text-secondary hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="text-sm"
            >
              +1 (555) 123-4567
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-conversion-accent hover:bg-conversion-accent/90"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-brand text-text-secondary hover:text-primary hover:bg-muted/50 transition-brand"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 bg-surface/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-brand text-sm font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-text-secondary hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  <Icon
                    name={item?.icon}
                    size={18}
                    color={
                      isActivePath(item?.path)
                        ? "var(--color-primary)"
                        : "currentColor"
                    }
                  />
                  <span>{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                size="sm"
              >
                +1 (555) 123-4567
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                size="sm"
                className="bg-conversion-accent hover:bg-conversion-accent/90"
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-success rounded-full shadow-brand-lg flex items-center justify-center text-white hover:scale-105 transition-brand animate-pulse-slow group">
          <Icon name="MessageCircle" size={24} color="white" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-cta-urgent rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">1</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
