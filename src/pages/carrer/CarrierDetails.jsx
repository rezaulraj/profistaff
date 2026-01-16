import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import c1 from "../../assets/career/cv.jpg";
import c2 from "../../assets/img/Career Tips/attending-the-interview.jpg";
import c3 from "../../assets/img/Career Tips/education-and-training.jpg";
import c4 from "../../assets/img/Career Tips/cover-letters-are-history.jpg";
import { Link, useParams } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaShareAlt,
  FaTelegram,
  FaReddit,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";
import { SiMessenger, SiSlack, SiDiscord } from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import NotFoundPage from "../components/NotFoundPage";
import { toast } from "react-toastify";


const goldColor = "#b78c47";
const goldDa = "#b78c47";
const goldLight = "#d4b785";
const goldDark = "#9a6f2e";
const goldGradient = `linear-gradient(135deg, ${goldColor} 0%, ${goldDa} 50%, ${goldDark} 100%)`;
const goldTextGradient = `linear-gradient(135deg, ${goldColor} 0%, ${goldLight} 100%)`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const CarrierDetails = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const { cId } = useParams();
  const currentUrl = window.location.href;

  const socialMediaPlatforms = [
    {
      name: "Facebook",
      icon: FaFacebook,
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      color: "text-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      color: "text-blue-400",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      shareUrl: `https://wa.me/?text=${encodeURIComponent(
        `Check out this career advice: ${currentUrl}`
      )}`,
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      color: "text-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      shareUrl: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: "Reddit",
      icon: FaReddit,
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      shareUrl: `https://reddit.com/submit?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "Email",
      icon: FaEnvelope,
      color: "text-gray-600",
      bgColor: "bg-gray-50 hover:bg-gray-100",
      shareUrl: `mailto:?subject=Check this career advice&body=${encodeURIComponent(
        `Check out this career advice: ${currentUrl}`
      )}`,
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
      shareUrl: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "Messenger",
      icon: SiMessenger,
      color: "text-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      shareUrl: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
        currentUrl
      )}&app_id=YOUR_APP_ID`,
    },
    {
      name: "Slack",
      icon: SiSlack,
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      shareUrl: `https://slack.com/share?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: "Discord",
      icon: SiDiscord,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      shareUrl: `https://discord.com/channels/@me`,
    },
  ];

  const careerdata = [
    {
      img: c1,
      link: t("careers.chl1"),
      cardh1: t("careers.ch1"),
      chardp1: t("careers.cp1"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.cap1") }, { p: t("careers.cap2") }],
        listTile: t("careers.cahl1"),
        list: [
          { li: t("careers.cal1") },
          { li: t("careers.cal2") },
          { li: t("careers.cal3") },
          { li: t("careers.cal4") },
          { li: t("careers.cal5") },
          { li: t("careers.cal6") },
          { li: t("careers.cal7") },
          { li: t("careers.cal8") },
          { li: t("careers.cal9") },
          { li: t("careers.cal10") },
          { li: t("careers.cal11") },
          { li: t("careers.cal12") },
          { li: t("careers.cal13") },
          { li: t("careers.cal14") },
          { li: t("careers.cal15") },
        ],
      },
    },

    {
      img: c2,
      link: t("careers.chl2"),
      cardh1: t("careers.ch2"),
      chardp1: t("careers.cp2"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [
          { p: t("careers.cbp1") },
          { p: t("careers.cbp2") },
          { p: t("careers.cbp3") },
        ],
        listTile: t("careers.cblh1"),
        list: [{ li: t("careers.cbl1") }, { li: t("careers.cbl2") }],
      },
      section2: {
        listTile: t("careers.cblh2"),
        list: [
          { li: t("careers.cbl3") },
          { li: t("careers.cbl4") },
          { li: t("careers.cbl5") },
          { li: t("careers.cbl6") },
          { li: t("careers.cbl7") },
        ],
      },
      section3: {
        listTile: t("careers.cblh3"),
        list: [{ li: t("careers.cbl8") }],
      },
    },
    {
      img: c3,
      link: t("careers.chl3"),
      cardh1: t("careers.ch3"),
      chardp1: t("careers.cp3"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.ccp1") }],
        listTile: t("careers.cclh1"),
        list: [
          { li: t("careers.ccl1") },
          { li: t("careers.ccl2") },
          { li: t("careers.ccl3") },
          { li: t("careers.ccl4") },
          { li: t("careers.ccl5") },
          { li: t("careers.ccl6") },
          { li: t("careers.ccl7") },
          { li: t("careers.ccl8") },
        ],
      },
      section4: {
        paragraphs: [{ p: t("careers.ccp2") }, { p: t("careers.ccp3") }],
      },
    },
    {
      img: c4,
      link: t("careers.chl4"),
      cardh1: t("careers.ch4"),
      chardp1: t("careers.cp4"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.cdp1") }, { p: t("careers.cdp2") }],
        listTile: t("careers.cdlh1"),
        list: [{ li: t("careers.cdl1") }],
      },
      section2: {
        listTile: t("careers.cdlh2"),
        list: [
          { li: t("careers.cdl2") },
          { li: t("careers.cdl3") },
          { li: t("careers.cdl4") },
        ],
      },
      section3: {
        listTile: t("careers.cdlh3"),
        list: [
          { li: t("careers.cdl5") },
          { li: t("careers.cdl6") },
          { li: t("careers.cdl7") },
        ],
      },
      section4: {
        listTile: t("careers.cdlh4"),
        list: [{ li: t("careers.cdl8") }, { li: t("careers.cdl9") }],
      },
    },
  ];

  const career = careerdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === cId
  );

  if (!career) {
    return <NotFoundPage />;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const openSharePopup = (url) => {
    window.open(
      url,
      "share-popup",
      "width=600,height=600,scrollbars=yes,resizable=yes"
    );
  };

  const goldBackgroundStyle = {
    background: goldGradient,
  };

  return (
    <motion.div
      className="bg-white/90"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="relative overflow-hidden" variants={fadeIn}>
        <div style={goldBackgroundStyle} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-x"></div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto py-16 px-4">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            variants={containerVariants}
          >
            <motion.div className="space-y-6 lg:w-2/3" variants={itemVariants}>
              <motion.div
                className="flex items-center flex-wrap gap-2 text-white/90"
                variants={containerVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1"
                >
                  <MdArrowForwardIos className="text-lg" />
                  <span className="text-lg font-medium">
                    {t("careers.career")}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1"
                >
                  <MdArrowForwardIos className="text-lg" />
                  <span className="text-lg font-bold">{career.cardh1}</span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {career.cardh1}
              </motion.h1>

              <motion.p
                className="text-white/90 text-lg max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Expert career advice to help you succeed in your professional
                journey
              </motion.p>

              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            <motion.div
              className="relative lg:w-1/3"
              variants={itemVariants}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-4">
                <motion.button
                  onClick={() => setShowIcons(!showIcons)}
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-4 flex items-center justify-center gap-3 hover:bg-white/30 transition-all duration-300 group shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaShareAlt className="text-white text-xl group-hover:rotate-12 transition-transform" />
                  <span className="text-white font-semibold text-lg">
                    Share This Advice
                  </span>
                </motion.button>

                <motion.button
                  onClick={copyToClipboard}
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 flex items-center justify-center gap-3 hover:bg-white/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiCopy className="text-white text-lg" />
                  <span className="text-white font-medium">Copy Link</span>
                </motion.button>
              </div>

              {showIcons && (
                <motion.div
                  className="absolute -top-20 right-0 mt-4 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 z-50 border border-gray-100"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Share on Social Media
                    </h3>
                    <button
                      onClick={() => setShowIcons(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Social Media Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {socialMediaPlatforms.slice(0, 8).map((platform, index) => (
                      <motion.a
                        key={index}
                        href={platform.shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          openSharePopup(platform.shareUrl);
                        }}
                        className={`${platform.bgColor} p-4 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:shadow-lg`}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <platform.icon
                          className={`text-2xl ${platform.color}`}
                        />
                        <span className="text-xs font-medium text-gray-700 text-center">
                          {platform.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
      
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-white/95 transform rotate-45"></div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <section className="container mx-auto py-12 px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex-1 space-y-8 text-gray-800"
            variants={containerVariants}
          >
            <div className="flex flex-col">
              <motion.div className="mb-8" variants={slideUp}>
                <motion.img
                  src={career.img}
                  alt={career.cardh1}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="flex flex-col items-start space-y-6 mt-6"
                variants={containerVariants}
              >
                {career?.section1?.paragraphs?.map((pra, inx) => (
                  <motion.p
                    key={inx}
                    className="text-gray-700 text-lg font-quicksand leading-relaxed"
                    variants={itemVariants}
                  >
                    {pra.p}
                  </motion.p>
                ))}

                {career?.section1?.listTile && (
                  <motion.h2
                    style={{
                      background: goldTextGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-2xl font-bold mt-6 font-quicksand"
                    variants={itemVariants}
                  >
                    {career?.section1?.listTile}
                  </motion.h2>
                )}

                <motion.ul
                  className="text-gray-700 list-disc pl-6 space-y-2 text-lg font-quicksand"
                  variants={containerVariants}
                >
                  {career?.section1?.list?.map((list, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="leading-relaxed"
                    >
                      {list.li}
                    </motion.li>
                  ))}
                </motion.ul>

                {career?.section2 && (
                  <>
                    <motion.h2
                      style={{
                        background: goldTextGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-2xl font-bold mt-6 font-quicksand"
                      variants={itemVariants}
                    >
                      {career?.section2?.listTile}
                    </motion.h2>

                    <motion.ul
                      className="text-gray-700 list-disc pl-6 space-y-2 text-lg font-quicksand"
                      variants={containerVariants}
                    >
                      {career?.section2?.list?.map((list, idx) => (
                        <motion.li key={idx} variants={itemVariants}>
                          {list.li}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </>
                )}

                {career?.section3 && (
                  <>
                    <motion.h2
                      style={{
                        background: goldTextGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-2xl font-bold mt-6 font-quicksand"
                      variants={itemVariants}
                    >
                      {career?.section3?.listTile}
                    </motion.h2>

                    <motion.ul
                      className="text-gray-700 list-disc pl-6 space-y-2 text-lg font-quicksand"
                      variants={containerVariants}
                    >
                      {career?.section3?.list?.map((list, idx) => (
                        <motion.li key={idx} variants={itemVariants}>
                          {list.li}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </>
                )}

                {career?.section4 && (
                  <>
                    {career?.section4?.listTile && (
                      <motion.h2
                        style={{
                          background: goldTextGradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-2xl font-bold mt-6 font-quicksand"
                        variants={itemVariants}
                      >
                        {career?.section4?.listTile}
                      </motion.h2>
                    )}

                    {career?.section4?.list && (
                      <motion.ul
                        className="text-gray-700 list-disc pl-6 space-y-2 text-lg font-quicksand"
                        variants={containerVariants}
                      >
                        {career?.section4?.list?.map((list, idx) => (
                          <motion.li key={idx} variants={itemVariants}>
                            {list.li}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    {career?.section4?.paragraphs?.map((pra, inx) => (
                      <motion.p
                        key={inx}
                        className="text-gray-700 text-lg font-quicksand leading-relaxed"
                        variants={itemVariants}
                      >
                        {pra.p}
                      </motion.p>
                    ))}
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block w-80 flex-shrink-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="sticky top-4 bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3
                style={{
                  background: goldTextGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-xl font-bold mb-6 font-lato border-b pb-3"
              >
                {t("careers.career")}
              </h3>
              <ul className="space-y-3">
                {careerdata.map((link, index) => {
                  const isActive =
                    cId === link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (cId === undefined && index === 0);

                  return (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={`/career-advice/${encodeURIComponent(
                          link?.link?.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className={`flex items-center gap-x-3 font-quicksand transition-all duration-300 p-3 rounded-lg ${
                          isActive
                            ? `bg-gradient-to-r from-[#f8f1e3] to-[#f0e6d2] text-[${goldDark}] border-l-4 border-[${goldColor}] font-semibold`
                            : `text-gray-700 hover:bg-gray-50 hover:text-[${goldColor}] hover:border-l-4 hover:border-[${goldColor}]`
                        }`}
                        style={
                          isActive
                            ? {
                                borderLeftColor: goldColor,
                                color: goldDark,
                                background: `linear-gradient(to right, #f8f1e3, #f0e6d2)`,
                              }
                            : {}
                        }
                      >
                        <MdArrowForwardIos
                          className={`text-sm ${
                            isActive ? `text-[${goldColor}]` : "text-gray-400"
                          }`}
                          style={isActive ? { color: goldColor } : {}}
                        />
                        <span className="flex-1">{link?.cardh1}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default CarrierDetails;
