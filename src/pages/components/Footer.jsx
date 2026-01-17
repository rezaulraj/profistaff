import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/profiicon.png";

const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/services" },
    { title: t("menu.candidates"), path: "/jobs-for-candidates" },
    { title: t("menu.clients"), path: "/hiring-for-employers" },
    { title: t("menu.career"), path: "/career-tips" },
    { title: t("menu.about"), path: "/about-us" },
    { title: t("menu.faq"), path: "/faqs" },
    { title: t("menu.contact"), path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <img
                src={logo}
                alt="Profi Staff Logo"
                className="w-16 h-16 object-contain"
              />
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white">Profi Staff</h2>
                <p className="text-primary font-semibold">
                  {t("footer.heading")}
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm leading-relaxed"
            >
              {t("footer.headingpara")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/profi.staff01",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.pinterest.com/profistaff01",
                },
                { icon: FaTwitter, href: "https://x.com/ProfiStaff01" },
                {
                  icon: FaInstagramSquare,
                  href: "https://www.instagram.com/profi.staff01/",
                },
                {
                  icon: FaPinterest,
                  href: "https://www.pinterest.com/profistaff01",
                },
                {
                  icon: FaYoutube,
                  href: "https://www.youtube.com/@ProfiStaff01",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="bg-[#171D27] p-2 rounded-full text-primary group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Follow us
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:border-l md:border-r border-gray-700 md:px-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-white mb-6 text-center md:text-left"
            >
              {t("footer.quicklink")}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 group text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-amber-400"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-white mb-6"
            >
              {t("footer.contactinfo")}
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-[#171D27] p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaLocationDot className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">Head Office</h4>
                <p className="text-gray-300 text-sm">
                  8 Khalid Bin Al Waleed Street, Sharq, Kuwait City, Kuwait
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-[#171D27] p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaEnvelope className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Address</h4>
                <a
                  href="mailto:info@profistaff.top"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  info@profistaff.top
                </a>
              </div>
            </motion.div>

            {/* Phone - Commented out as in original */}
            {/* <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaPhone className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Profi Staff" className="w-8 h-8" />
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Profi Staff. All rights reserved.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link to="/contact">
            <motion.button
              className="bg-gradient-to-r from-deep to-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
