import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/img/global-employers-worker.jpeg";
import img2 from "../assets/img/h3.jpg";
import img3 from "../assets/img/in-collaboration-with-reputable-agencies.jpg";
import { MdNavigateNext, MdArrowForward } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoimg1 from "../assets/img/Icons/i1.png";
import logoimg2 from "../assets/img/Icons/i2.png";
import logoimg3 from "../assets/img/Icons/i3.png";
import logoimg4 from "../assets/img/Icons/i4.png";

import { IoIosArrowForward } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const slides = [
    { id: 1, image: img1, alt: "Image 1" },
    { id: 2, image: img2, alt: "Image 2" },
    { id: 3, image: img3, alt: "Image 3" },
  ];

  const cardData = [
    {
      heading: t("logotext.heading1"),
      subheading: t("logotext.subheading1"),
      image: logoimg1,
      url: "/jobs-for-candidates",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading2"),
      subheading: t("logotext.subheading2"),
      image: logoimg2,
      url: "/hiring-for-employers",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading3"),
      subheading: t("logotext.subheading3"),
      image: logoimg3,
      url: "/services/tax-returns",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading4"),
      subheading: t("logotext.subheading4"),
      image: logoimg4,
      url: "/career-tips",
      button: t("logotext.button"),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
    <div className="overflow-hidden">
      <Helmet>
        <title>Employment Agency | Recruitment & Staffing Solutions</title>
        <meta
          name="description"
          content="Find your dream job or hire qualified candidates through our premier employment agency. Expert recruitment, staffing solutions, and career services for job seekers and employers."
        />
        <meta
          name="keywords"
          content="employment agency, recruitment services, staffing solutions, job placement, hiring agency, career opportunities, talent acquisition"
        />

        <meta
          property="og:title"
          content="Employment Agency | Recruitment & Staffing Solutions"
        />
        <meta
          property="og:description"
          content="Connect with top employers or find qualified candidates through our professional recruitment services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={img1} />
        <meta property="og:url" content="https://yourdomain.com" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            name: "Profi Staff",
            description:
              "Professional employment agency providing recruitment and staffing solutions",
            url: "https://yourdomain.com",
            serviceType: [
              "Temporary Employment",
              "Permanent Placement",
              "Executive Search",
              "Career Counseling",
            ],
            areaServed: {
              "@type": "Place",
              name: "european country",
            },
          })}
        </script>

        <link rel="canonical" href="https://yourdomain.com" />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Profi Staff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <motion.section
        className="relative"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full relative"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <motion.div
                  className="relative w-full max-h-[80vh] cursor-move"
                  variants={item}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
                </motion.div>
              </SwiperSlide>
            ))}

            <motion.div
              className={`swiper-button-prev absolute left-10 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdNavigateNext />
            </motion.div>
            <motion.div
              className={`swiper-button-next absolute left-20 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </Swiper>
        </div>
      </motion.section>

      <motion.section
        className="relative bg-gray-50 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-deep mb-6">
              {t("herotext.headtext")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10 text-gray-900"
              variants={fadeIn}
            >
              {t("herotext.subtext")}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        className="py-12 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={container}
      >
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={container}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={card.url}
                  className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer block h-full"
                >
                  <div className="p-6 flex flex-col items-center justify-between h-auto md:h-[450px]">
                    <motion.img
                      src={card.image}
                      alt="card icon"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-xl font-bold text-deep font-quicksand text-center">
                      {card.heading}
                    </h3>
                    <p className="text-gray-800 mb-4 font-quicksand text-center">
                      {card.subheading}
                    </p>
                    <motion.button
                      className="flex w-full lg:w-10/12 items-center font-quicksand justify-center text-deep font-semibold text-lg px-6 py-2 rounded-sm transition-colors border border-gray-300 hover:bg-primary hover:text-white shadow-2xl uppercase cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {card.button}
                      <IoIosArrowForward className="ml-1" />
                    </motion.button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20"
          style={{ y: y2 }}
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
