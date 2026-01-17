import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaChartLine,
  FaGlobeEurope,
  FaFileAlt,
} from "react-icons/fa";
import { HiOutlineBriefcase, HiOutlineOfficeBuilding } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/employer/heroimage.webp";
import { Helmet } from "react-helmet";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Clients = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaSearch className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth1"),
      description: t("clients.cservicehlistp1"),
    },
    {
      icon: <HiOutlineBriefcase className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth2"),
      description: t("clients.cservicehlistp2"),
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth3"),
      description: t("clients.cservicehlistp3"),
    },
    {
      icon: <FaGlobeEurope className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth4"),
      description: t("clients.cservicehlistp4"),
    },
    {
      icon: <FaChartLine className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth5"),
      description: t("clients.cservicehlistp5"),
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      title: t("clients.cservicehlisth6"),
      description: t("clients.cservicehlistp6"),
    },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Hair Employers | Profi Staff</title>
        <meta property="og:title" content="Hair Employers | Profi Staff" />
      </Helmet>
      <motion.section
        className="relative text-white bg-cover bg-center min-h-auto py-32 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              {t("clients.clientheroh")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10 font-inter"
              variants={fadeIn}
            >
              {t("clients.cherop")}
            </motion.p>
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 font-inter text-lg"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact">{t("clients.cherobtn")}</a>
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        className="py-16 bg-white font-inter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("clients.csubhead")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("clients.csubp1")}
              </p>
              <p className="text-lg text-gray-600">{t("clients.csubp2")}</p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-50 font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("clients.cserviceh1")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("clients.cservicehp")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gradient-to-r from-deep to-primary text-white font-inter mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("clients.chairh")}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("clients.chairp")}
          </motion.p>
          <motion.div
            className="bg-white text-deep inline-block px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact">{t("clients.chairbtn")}</a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Clients;
