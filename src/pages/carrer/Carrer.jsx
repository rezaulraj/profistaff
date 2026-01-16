import React from "react";
import { useTranslation } from "react-i18next";
import c1 from "../../assets/career/cv.jpg";
import c2 from "../../assets/img/Career Tips/attending-the-interview.jpg";
import c3 from "../../assets/img/Career Tips/education-and-training.jpg";
import c4 from "../../assets/img/Career Tips/cover-letters-are-history.jpg";

import { Link } from "react-router-dom";

import { MdArrowForwardIos } from "react-icons/md";
import Login from "../components/Login";
import { motion } from "framer-motion";
import heroImage from "../../assets/career/heroimage.jpg";
const Carrer = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const careerdata = [
    {
      img: c1,
      link: t("careers.chl1"),
      cardh1: t("careers.ch1"),
      chardp1: t("careers.cp1"),
      btn: t("careers.cbtn"),
    },
    {
      img: c2,
      link: t("careers.chl2"),
      cardh1: t("careers.ch2"),
      chardp1: t("careers.cp2"),
      btn: t("careers.cbtn"),
    },
    {
      img: c3,
      link: t("careers.chl3"),
      cardh1: t("careers.ch3"),
      chardp1: t("careers.cp3"),
      btn: t("careers.cbtn"),
    },
    {
      img: c4,
      link: t("careers.chl4"),
      cardh1: t("careers.ch4"),
      chardp1: t("careers.cp4"),
      btn: t("careers.cbtn"),
    },
  ];

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

  return (
    <div className="bg-white/90">
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
              {t("careers.cheroh")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              {t("careers.cherop")}
            </motion.p>
            <motion.button
              onClick={() => {
                const section = document.querySelector("#tips");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-100 text-gray-950 px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 cursor-pointer text-xl"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("careers.cherobtn")}
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        id="tips"
        className="max-w-screen-xl mx-auto py-6 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={container}
      >
        <div className="flex flex-col custom:flex-row gap-8">
          <div className="flex-1 space-y-3 text-gray-800">
            {careerdata.map((career, ind) => (
              <motion.div
                key={ind}
                className="grid grid-cols-1 custom:grid-cols-2 gap-6 mt-16"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={career.img}
                  alt={career.chardp1}
                  className="bg-gray-300 border border-gray-200 rounded-sm object-cover h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col items-start space-y-6">
                  <Link
                    to={`/career-advice/${encodeURIComponent(
                      career.link.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                    className="text-2xl text-secondary border-b-4 pb-1 border-secondary font-bold tracking-wide hover:text-secondary transition-colors"
                  >
                    {career.cardh1}
                  </Link>
                  <p className="text-gray-900">{career.chardp1}</p>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Link
                      to={`/career-advice/${encodeURIComponent(
                        career.link.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="px-4 py-2 border border-secondary hover:bg-secondary text-secondary font-quicksand uppercase hover:text-white text-lg font-bold flex items-center gap-x-3"
                    >
                      {career.btn}... <MdArrowForwardIos />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="hidden custom:block w-64 flex-shrink-0"
          >
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("careers.career")}
              </h3>
              <ul className="space-y-3">
                {careerdata.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={`/career-advice/${encodeURIComponent(
                        link.link.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="flex items-center gap-x-2 text-gray-900 font-quicksand hover:text-secondary transition-colors p-2 hover:bg-gray-100 rounded"
                    >
                      <MdArrowForwardIos className="text-xs" />
                      {link.cardh1}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* <Login /> */}
    </div>
  );
};

export default Carrer;
