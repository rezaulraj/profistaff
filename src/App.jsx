import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/components/NotFoundPage";
import Candidate from "./pages/canditate/Candidate";
import Service from "./pages/service/Service";
import Carrer from "./pages/carrer/Carrer";
import About from "./pages/about/About";
import Faqs from "./pages/faqs/Faqs";
import ServiceDetails from "./pages/service/ServiceDetails";
import ScrollToTop from "./pages/components/ScrollToTop";
import Clients from "./pages/client/Clients";
import Contact from "./pages/contact/Contact";
import "./App.css";
import CarrierDetails from "./pages/carrer/CarrierDetails";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import AboutDetails from "./pages/about/AboutDetalis";
import ThankYou from "./pages/components/ThankYou";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs-for-candidates" element={<Candidate />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/career-tips" element={<Carrer />} />
          <Route path="/career-advice/:cId" element={<CarrierDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/:cId" element={<AboutDetails />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/hiring-for-employers" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 left-2 before:shadow-2xl shadow-2xl hover:shadow-gray-400 cursor-pointer hover:bg-redest-dark p-3 rounded-full transition-colors duration-300 z-50"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="w-5 h-5 text-blue-dark hover:text-blue animate-bounce" />
        </motion.button>
      )}
    </>
  );
}

export default App;
