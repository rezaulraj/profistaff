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
      <Helmet>
        <title>
          About Us - Leading Employment Agency Since 2010 | Profi Staff
        </title>
        <meta
          name="description"
          content="Profi Staff is a trusted recruitment agency with over a decade of experience. Learn about our mission, values, and commitment to connecting employers with top talent since 2010."
        />
        <meta
          name="keywords"
          content="about Profi Staff, employment agency history, recruitment company, staffing agency Croatia, hiring experts, employment services since 2010"
        />

        <meta
          property="og:title"
          content="About Profi Staff - Trusted Recruitment Experts Since 2010"
        />
        <meta
          property="og:description"
          content="Discover our story, mission, and values as a leading employment agency connecting businesses with qualified talent across multiple industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://profistaff.top/about-us" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Profi Staff",
            description:
              "Leading employment agency specializing in recruitment and staffing solutions since 2010",
            publisher: {
              "@type": "EmploymentAgency",
              name: "Profi Staff d.o.o.",
              description: t("abouts.basicdata.bdh1"),
              foundingDate: "2010",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Prilaz Gjure Deželića 71",
                addressLocality: "Zagreb",
                postalCode: "10000",
                addressCountry: "HR",
              },
            },
            mainEntity: {
              "@type": "Organization",
              name: "Profi Staff",
              description: t("abouts.aherop1"),
              foundingDate: "2010",
              mission: t("abouts.mtext"),
              vision: t("abouts.vtext"),
              employee: {
                "@type": "Profi Staff",
                name: "Profi Staff",
              },
              areaServed: ["Croatia", "International"],
              numberOfEmployees: "50-100",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://profistaff.top",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://profistaff.top/about-us",
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When was Profi Staff founded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Profi Staff was founded in 2010 and has been providing professional recruitment services for over a decade.",
                },
              },
              {
                "@type": "Question",
                name: "What is Profi Staff's mission?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: t("abouts.mtext"),
                },
              },
              {
                "@type": "Question",
                name: "What are Profi Staff's core values?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Integrity, Excellence, and Collaboration guide all our recruitment practices and client relationships.",
                },
              },
            ],
          })}
        </script>

        <link rel="canonical" href="https://yourdomain.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Profi Staff" />
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
            className="flex flex-col items-center justify-center font-inter"
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
        className="py-16 bg-gray-100 font-inter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-16 bg-gray-100 font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="md:w-1/3 bg-deep p-8 text-white flex flex-col justify-center">
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

      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="bg-white text-deep px-8 inline-block py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
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
