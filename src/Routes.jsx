import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import PageTransition, { getRouteTransition } from "./components/PageTransition";
import NotFound from "./pages/NotFound";
import InteractiveMenuOrdering from './pages/interactive-menu-ordering';
import Checkout from './pages/checkout';
// Removed import for CustomerReviewsCommunity
import DeliveryOrderingInformation from './pages/delivery-ordering-information';
import ContactMultiChannelSupport from './pages/contact-multi-channel-support';
import Homepage from './pages/homepage';

// Component to handle animated routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <RouterRoutes location={location} key={location.pathname}>
        {/* Define your route here */}
        <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
        <Route path="/interactive-menu-ordering" element={<PageTransition><InteractiveMenuOrdering /></PageTransition>} />
        <Route path="/delivery-ordering-information" element={<PageTransition><DeliveryOrderingInformation /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/contact-multi-channel-support" element={<PageTransition><ContactMultiChannelSupport /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </RouterRoutes>
    </AnimatePresence>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <AnimatedRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
