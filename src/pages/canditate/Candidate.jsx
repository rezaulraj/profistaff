import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaFileUpload,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
  FaSearch,
  FaUserTie,
  FaGlobe,
  FaLanguage,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import heroImage from "../../assets/candidate/heroimage.jpg";
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

const Candidate = () => {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const services = [
    {
      icon: <FaSearch className="text-3xl text-primary" />,
      title: t("candidate.citemh1"),
      description: t("candidate.citemp1"),
    },
    {
      icon: <FaUserTie className="text-3xl text-primary" />,
      title: t("candidate.citemh2"),
      description: t("candidate.citemp2"),
    },
    {
      icon: <FaGlobe className="text-3xl text-primary" />,
      title: t("candidate.citemh3"),
      description: t("candidate.citemp3"),
    },
    {
      icon: <FaLanguage className="text-3xl text-primary" />,
      title: t("candidate.citemh4"),
      description: t("candidate.citemp4"),
    },
    {
      icon: <FaFileAlt className="text-3xl text-primary" />,
      title: t("candidate.citemh5"),
      description: t("candidate.citemp5"),
    },
    {
      icon: <FaHandshake className="text-3xl text-primary" />,
      title: t("candidate.citemh6"),
      description: t("candidate.citemp6"),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-lato">
              {t("candidate.cherohead")}
            </h1>
            <motion.p
              className="text-xl max-w-2xl mx-auto mb-10 font-poppins"
              variants={fadeIn}
            >
              {t("candidate.cherop1")}.
            </motion.p>
            <motion.button
              onClick={() => {
                const section = document.querySelector("#register");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-100 text-gray-950 px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 cursor-pointer text-lg font-inter"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("candidate.cherobtn")}
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/10 backdrop-blur-sm"></div>
      </motion.section>

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
              {t("candidate.csubhead")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("candidate.csubp1")}
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
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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

      <section className="py-16 bg-gray-50 font-inter">
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
                {t("candidate.clisth")}
              </h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start ">
                  <span className="text-primary mr-2">✔</span>
                  {t("candidate.clist1")}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  {t("candidate.clist2")}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  {t("candidate.clist3")}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔</span>
                  {t("candidate.clist4")}
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("candidate.csptialh")}
              </h3>
              <p className="text-gray-600 mb-6">{t("candidate.csptialp1")}</p>
              <div className="bg-blue-50 border-l-4 border-primary p-4">
                <p className="text-primary font-medium">
                  {t("candidate.csptialp2")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="register" className="py-16 bg-white font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-6"
              variants={fadeIn}
            >
              {t("candidate.from")}
            </motion.h2>

            <form
              action="https://formsubmit.co/f18c636b84623b378d65cbcb24663d7a"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_next"
                value="https://80twenty.online/thank-you"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-600 mb-2 font-medium">
                    {t("candidate.inputname")}
                  </label>
                  <input
                    type="text"
                    name="Full Name"
                    required
                    placeholder={t("candidate.inputname")}
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>

                <div>
                  <label className="text-gray-600 mb-2 font-medium">
                    {t("candidate.inputeamil")}
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder={t("candidate.inputeamil")}
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>

                <div>
                  <label className="text-gray-600 mb-2 font-medium">
                    Work Experience
                  </label>
                  <input
                    type="text"
                    name="work-experience"
                    required
                    placeholder={"Number- years of experience"}
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>

                <div>
                  <label className="text-gray-600 mb-2 font-medium">
                    {t("candidate.inputphone")}
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    required
                    placeholder={t("candidate.inputphone")}
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>

                <div>
                  <label className="text-gray-600 mb-2 font-medium">
                    {t("candidate.birth")}
                  </label>
                  <input
                    type="date"
                    name="Date of Birth"
                    required
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-gray-600 mb-2 font-medium">
                    {t("candidate.profession")}
                  </label>
                  <input
                    type="text"
                    name="Profession"
                    required
                    placeholder={t("candidate.profession")}
                    className="h-12 px-4 rounded-lg border border-gray-300 w-full"
                  />
                </div>
              </div>

              <div className="border bg-primary p-2 inline-block rounded-md border-primary cursor-pointer ">
                <label className="text-white mb-2 font-medium ">
                  {t("candidate.cv")}
                </label>
                <input
                  type="file"
                  name="Resume"
                  accept=".pdf"
                  required
                  onChange={handleFileChange}
                  className="block w-full text-gray-200"
                />
                {fileName && (
                  <p className="text-sm text-gray-500 mt-2">
                    Selected: {fileName}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-5 h-5"
                  required
                />
                <label htmlFor="consent" className="text-gray-700">
                  {t("candidate.condition")}
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full md:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-primary text-white font-bold uppercase flex items-center justify-center gap-2 cursor-pointer"
                variants={fadeIn}
              >
                {t("candidate.register")}
                <BsArrowRight className="text-lg" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Candidate;
