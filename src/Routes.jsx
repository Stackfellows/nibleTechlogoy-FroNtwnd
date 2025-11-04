import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// import NotFound from "./pages/NotFound";

import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import AdminDashboard from "pages/AdminDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* ✅ Default home route */}
          <Route path="/" element={<Homepage />} />

          {/* Other pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* ✅ 404 fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
