import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdArrowForwardIos } from "react-icons/md";
import { useParams } from "react-router-dom";
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
import s1 from "../../assets/img/Service/s1.jpg";
import sa1 from "../../assets/sevices/sa1.jpg";
import s2 from "../../assets/img/Service/s2.jpg";
import sa2 from "../../assets/sevices/sa2.jpg";
import s3 from "../../assets/img/Service/s3.jpg";
import sa3 from "../../assets/sevices/sa3.jpg";
import s4 from "../../assets/img/Service/s4.jpg";
import sa4 from "../../assets/sevices/sa4.jpg";
import s5 from "../../assets/img/Service/s5.jpg";
import sa5 from "../../assets/sevices/sa5.jpg";
import s6 from "../../assets/img/Service/s6.jpeg";
import sa6 from "../../assets/sevices/sa6.jpg";
import s7 from "../../assets/img/Service/s7.jpg";
import sa7 from "../../assets/sevices/sa7.jpg";
import s8 from "../../assets/img/Service/s8.jpg";
import sa8 from "../../assets/sevices/sa8.jpg";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import NotFoundPage from "../components/NotFoundPage";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

const goldColor = "#b78c47";
const goldLight = "#b78c47";
const goldDark = "#9a6f2e";
const goldGradient = `linear-gradient(135deg, ${goldColor} 0%, ${goldLight} 50%, ${goldDark} 100%)`;
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

const ServiceDetails = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const { serviceId } = useParams();
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
        `Check out this service: ${currentUrl}`
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
      shareUrl: `mailto:?subject=Check this service&body=${encodeURIComponent(
        `Check out this service: ${currentUrl}`
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

  const serverdata = [
    {
      id: 0,
      images: [s1, sa1],
      link: t("services.link1"),
      cardTitle: t("services.cardh1"),
      section1: {
        heading: t("serviceDetailes.sdha1"),
        paragraphs: [
          { p: t("serviceDetailes.sdpa1") },
          { p: t("serviceDetailes.sdpa2") },
        ],
        list: [
          { li: t("serviceDetailes.sdal1") },
          { li: t("serviceDetailes.sdal2") },
          { li: t("serviceDetailes.sdal3") },
          { li: t("serviceDetailes.sdal4") },
          { li: t("serviceDetailes.sdal5") },
          { li: t("serviceDetailes.sdal6") },
        ],
      },
      section2: {
        heading: t("serviceDetailes.sdha2"),
        paragraphs: [{ p: t("serviceDetailes.sdpa3") }],
        list: [
          { li: t("serviceDetailes.sdal7") },
          { li: t("serviceDetailes.sdal8") },
          { li: t("serviceDetailes.sdal9") },
          { li: t("serviceDetailes.sdal10") },
          { li: t("serviceDetailes.sdal11") },
          { li: t("serviceDetailes.sdal12") },
          { li: t("serviceDetailes.sdal13") },
          { li: t("serviceDetailes.sdal14") },
        ],
      },
    },
    {
      id: 1,
      images: [s2, sa2],
      link: t("services.link2"),
      cardTitle: t("services.cardh1"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpb1") },
          { p: t("serviceDetailes.sdpb2") },
        ],
        listTile: t("serviceDetailes.sdlhb1"),
        list: [
          { li: t("serviceDetailes.sdbl1") },
          { li: t("serviceDetailes.sdbl2") },
          { li: t("serviceDetailes.sdbl3") },
          { li: t("serviceDetailes.sdbl4") },
          { li: t("serviceDetailes.sdbl5") },
          { li: t("serviceDetailes.sdbl6") },
          { li: t("serviceDetailes.sdbl7") },
          { li: t("serviceDetailes.sdbl8") },
          { li: t("serviceDetailes.sdbl9") },
        ],
      },
    },
    {
      id: 2,
      images: [s3, sa3],
      link: t("services.link3"),
      cardTitle: t("services.cardh3"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpc1") },
          { p: t("serviceDetailes.sdpc2") },
          { p: t("serviceDetailes.sdpc3") },
          { p: t("serviceDetailes.sdpc4") },
        ],
        listTile: t("serviceDetailes.sdlhc1"),
        list: [
          { li: t("serviceDetailes.sdcl1") },
          { li: t("serviceDetailes.sdcl2") },
          { li: t("serviceDetailes.sdcl3") },
          { li: t("serviceDetailes.sdcl4") },
          { li: t("serviceDetailes.sdcl5") },
          { li: t("serviceDetailes.sdcl6") },
          { li: t("serviceDetailes.sdcl7") },
          { li: t("serviceDetailes.sdcl8") },
        ],
      },
    },
    {
      id: 3,
      images: [s4, sa4],
      link: t("services.link4"),
      cardTitle: t("services.cardh4"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpd1") },
          { p: t("serviceDetailes.sdpd2") },
          { p: t("serviceDetailes.sdpd3") },
          { p: t("serviceDetailes.sdpd4") },
        ],
      },
    },
    {
      id: 4,
      images: [s5, sa5],
      link: t("services.link5"),
      cardTitle: t("services.cardh5"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpe1") },
          { p: t("serviceDetailes.sdpe2") },
        ],
        listTile: t("serviceDetailes.sdlhe1"),
        list: [
          { li: t("serviceDetailes.sdel1") },
          { li: t("serviceDetailes.sdel2") },
          { li: t("serviceDetailes.sdel3") },
          { li: t("serviceDetailes.sdel4") },
        ],
      },
    },
    {
      id: 6,
      images: [s7, sa7],
      link: t("services.link7"),
      cardTitle: t("services.cardh7"),
      section1: {
        paragraphs: [{ p: t("serviceDetailes.sdpg1") }],
        listTile: t("serviceDetailes.sdlhg1"),
        list: [
          { li: t("serviceDetailes.sdlg1") },
          { li: t("serviceDetailes.sdlg2") },
          { li: t("serviceDetailes.sdlg3") },
          { li: t("serviceDetailes.sdlg4") },
          { li: t("serviceDetailes.sdlg5") },
          { li: t("serviceDetailes.sdlg6") },
        ],
      },
      section2: {
        heading: t("serviceDetailes.sdlhg2"),
        paragraphs: [
          { p: t("serviceDetailes.sdpg2") },
          { p: t("serviceDetailes.sdpg3") },
        ],
        list: [
          { li: t("serviceDetailes.sdlga1") },
          { li: t("serviceDetailes.sdlga2") },
          { li: t("serviceDetailes.sdlga3") },
          { li: t("serviceDetailes.sdlga4") },
        ],
      },
    },
    {
      id: 7,
      images: [s8, sa8],
      link: t("services.link8"),
      cardTitle: t("services.cardh8"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdphp1") },
          { p: t("serviceDetailes.sdphp2") },
        ],
        listTile: t("serviceDetailes.sdphlp3"),
        list: [
          { li: t("serviceDetailes.sdphl1") },
          { li: t("serviceDetailes.sdphl2") },
          { li: t("serviceDetailes.sdphl3") },
          { li: t("serviceDetailes.sdphl4") },
          { li: t("serviceDetailes.sdphl5") },
          { li: t("serviceDetailes.sdphl6") },
          { li: t("serviceDetailes.sdphl7") },
          { li: t("serviceDetailes.sdphl8") },
        ],
      },
    },
  ];

  const service = serverdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!service) {
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent animate-gradient-x"></div>

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
                    {t("services.service")}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1"
                >
                  <MdArrowForwardIos className="text-lg" />
                  <span className="text-lg font-bold">{service.cardTitle}</span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.cardTitle}
              </motion.h1>

              <motion.p
                className="text-white/90 text-lg max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Professional recruitment solutions tailored to your business
                needs
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
                    Share This Service
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
                <Carousel images={service.images} />
              </motion.div>

              <motion.div
                className="flex flex-col items-start space-y-6 mt-6"
                variants={containerVariants}
              >
                {service?.section1?.heading && (
                  <motion.h2
                    style={{
                      background: goldTextGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-3xl text-gray-800 font-bold font-quicksand tracking-wide"
                    variants={itemVariants}
                  >
                    {service.section1.heading}
                  </motion.h2>
                )}

                {service?.section1?.paragraphs?.map((pra, inx) => (
                  <motion.p
                    key={inx}
                    className="text-gray-700 text-lg font-quicksand leading-relaxed"
                    variants={itemVariants}
                  >
                    {pra.p}
                  </motion.p>
                ))}

                {service?.section1?.headTile1 && (
                  <>
                    <motion.h2
                      style={{
                        background: goldTextGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-xl text-gray-800 font-bold font-quicksand mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile1}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 font-quicksand text-lg"
                      variants={itemVariants}
                    >
                      {service?.section1?.para1}
                    </motion.p>
                    <motion.h2
                      style={{
                        background: goldTextGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-xl text-gray-800 font-quicksand font-bold mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile2}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 font-quicksand"
                      variants={itemVariants}
                    >
                      {service?.section1?.para2}
                    </motion.p>
                    <motion.h2
                      style={{
                        background: goldTextGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-xl text-gray-800 font-quicksand font-bold mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile3}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 text-lg font-quicksand"
                      variants={itemVariants}
                    >
                      {service?.section1?.para3}
                    </motion.p>
                  </>
                )}

                {service?.section1?.listTile && (
                  <motion.h2
                    style={{
                      background: goldTextGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-xl text-gray-800 font-bold font-quicksand mt-6"
                    variants={itemVariants}
                  >
                    {service?.section1?.listTile}
                  </motion.h2>
                )}

                <motion.ul
                  className="text-gray-700 list-disc pl-6 font-quicksand text-lg space-y-2"
                  variants={containerVariants}
                >
                  {service?.section1?.list?.map((list, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="leading-relaxed"
                    >
                      {list.li}
                    </motion.li>
                  ))}
                </motion.ul>

                {service?.section2?.heading && (
                  <motion.h2
                    style={{
                      background: goldTextGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-3xl text-gray-800 font-bold font-quicksand tracking-wide mt-8"
                    variants={itemVariants}
                  >
                    {service?.section2?.heading}
                  </motion.h2>
                )}

                {service?.section2?.paragraphs?.map((pra, inx) => (
                  <motion.p
                    key={inx}
                    className="text-gray-700 font-quicksand text-lg leading-relaxed"
                    variants={itemVariants}
                  >
                    {pra.p}
                  </motion.p>
                ))}

                {service?.section2?.list && (
                  <motion.ul
                    className="text-gray-700 list-disc pl-6 space-y-2 text-lg"
                    variants={containerVariants}
                  >
                    {service?.section2?.list?.map((list, idx) => (
                      <motion.li
                        key={idx}
                        className="font-quicksand leading-relaxed"
                        variants={itemVariants}
                      >
                        {list.li}
                      </motion.li>
                    ))}
                  </motion.ul>
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
                {t("services.service")}
              </h3>
              <ul className="space-y-3">
                {serverdata.map((link, index) => {
                  const isActive =
                    serviceId ===
                      link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (serviceId === undefined && index === 0);

                  return (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={`/services/${encodeURIComponent(
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
                        <span className="flex-1">{link?.cardTitle}</span>
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

export default ServiceDetails;
