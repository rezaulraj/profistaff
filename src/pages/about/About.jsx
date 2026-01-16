import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/about/heroimage.webp";
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

const AboutUs = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <FaHandshake className="text-3xl text-primary" />,
      title: t("abouts.avaluelisth1"),
      description: t("abouts.avaluelistp1"),
    },
    {
      icon: <FaBullseye className="text-3xl text-primary" />,
      title: t("abouts.avaluelisth2"),
      description: t("abouts.avaluelistp2"),
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      title: t("abouts.avaluelisth3"),
      description: t("abouts.avaluelistp3"),
    },
  ];

  return (
    <div className="bg-gray-50">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("abouts.aheroh1")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              {t("abouts.aherop1")}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaBullseye className="text-3xl text-[#0C4591] mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("abouts.misstion")}
                </h2>
              </div>
              <p className="text-lg text-gray-700">{t("abouts.mtext")}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaEye className="text-3xl text-[#FBB92E] mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("abouts.visstion")}
                </h2>
              </div>
              <p className="text-lg text-gray-700">{t("abouts.vtext")}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("abouts.astoryh")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("abouts.astoryp")}
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary p-8 text-white flex flex-col justify-center">
                <FaHistory className="text-5xl mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center">
                  {t("abouts.asince")}
                </h3>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-lg text-gray-700 mb-6">
                  {t("abouts.asincep1")}
                </p>
                <p className="text-lg text-gray-700">{t("abouts.asincep2")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("abouts.avalueh")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("abouts.avlauep")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gradient-to-r from-[#2B99D3] to-[#0C4591] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("abouts.aaproch1")}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("abouts.aaprochp1")}
          </motion.p>
          <motion.div
            className="bg-white text-blue-800 px-8 inline-block py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact">{t("abouts.aaprochbtn")}</a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
