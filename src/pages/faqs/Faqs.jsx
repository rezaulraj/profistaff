import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroImage from "../../assets/faq/herofaq.webp";
const Faqs = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const faqItems = [
    { id: 1, heading: "fh1", content: "fp1" },
    { id: 2, heading: "fh2", content: "fp2" },
    { id: 3, heading: "fh3", content: "fp3" },
    { id: 4, heading: "fh4", content: "fp4" },
    { id: 5, heading: "fh5", content: "fp5" },
    { id: 6, heading: "fh6", content: "fp6" },
    { id: 7, heading: "fh7", content: "fp7" },
    { id: 8, heading: "fh8", content: "fp8" },
    { id: 9, heading: "fh9", content: "fp9" },
    { id: 10, heading: "fh10", content: "fp10" },
    { id: 11, heading: "fh11", content: "fp11" },
    { id: 12, heading: "fh12", content: "fp12" },
  ];

  return (
    <div className="bg-white/90">
      <motion.section
        className="relative text-white bg-cover bg-center h-[70vh] flex items-center justify-center"
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
              {t("faqs.faq")}
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        className="container mx-auto py-6 px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex flex-col custom:flex-row gap-8">
          <motion.div
            className="flex-1 space-y-6 text-gray-800 font-inter"
            variants={staggerContainer}
          >
            {faqItems.map((item, index) => (
              <motion.div key={item.id} variants={cardAnimation} custom={index}>
                <h2 className="text-md font-bold">
                  {t(`faqs.${item.heading}`)}
                </h2>
                <p>{t(`faqs.${item.content}`)}</p>
              </motion.div>
            ))}

            <motion.div variants={fadeIn}>
              <h2 className="text-lg font-bold text-gray-700">
                {t("faqs.feedback")}
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Faqs;
