import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import WebDevelopment from "@/pages/services/web-development";
import GraphicDesign from "@/pages/services/graphic-design";
import MobileDevelopment from "@/pages/services/mobile-development";
import DigitalMarketing from "@/pages/services/digital-marketing";
import EcommerceSolutions from "@/pages/services/ecommerce-solutions";
import Portfolio from "@/pages/portfolio";
import Pricing from "@/pages/pricing";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import PrivacyPolicy from "@/pages/privacy";
import services from "@/components/home/services";
import Login from "@/components/login";
import SignUp from "@/components/signup";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/graphic-design" component={GraphicDesign} />
      <Route
        path="/services/mobile-development"
        component={MobileDevelopment}
      />
      <Route path="/services/digital-marketing" component={DigitalMarketing} />
      <Route
        path="/services/ecommerce-solutions"
        component={EcommerceSolutions}
      />
      {/* <Route path="/portfolio" component={Portfolio} /> */}
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/services" component={services} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
}

import ScrollToTop from "./components/scroll-to-top";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
        <ChatbotWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
