import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import InteractiveMenuOrdering from './pages/interactive-menu-ordering';
// Removed import for CustomerReviewsCommunity
import DeliveryOrderingInformation from './pages/delivery-ordering-information';
import ContactMultiChannelSupport from './pages/contact-multi-channel-support';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/interactive-menu-ordering" element={<InteractiveMenuOrdering />} />
        <Route path="/delivery-ordering-information" element={<DeliveryOrderingInformation />} />
        <Route path="/contact-multi-channel-support" element={<ContactMultiChannelSupport />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
