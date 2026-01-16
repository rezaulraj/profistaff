import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare, FaTimes, FaYoutube } from "react-icons/fa";

import logo from "/profilogo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [previewLang, setPreviewLang] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data?.country === "HR" && i18n?.language !== "hr") {
          i18n.changeLanguage("hr");
        }
      } catch (error) {
        console.error("Error detecting country:", error);
      }
    };

    detectCountry();
  }, [i18n]);

  const convertToSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

  const navigation = [
    { title: t("menu.home"), path: "/" },
    {
      title: t("menu.services"),
      path: "/services",
      subNav: [
        {
          title: t("services.link1"),
          path: convertToSlug(t("services.link1")),
        },
        {
          title: t("services.link2"),
          path: convertToSlug(t("services.link2")),
        },
        {
          title: t("services.link3"),
          path: convertToSlug(t("services.link3")),
        },
        {
          title: t("services.link4"),
          path: convertToSlug(t("services.link4")),
        },
        {
          title: t("services.link5"),
          path: convertToSlug(t("services.link5")),
        },
        {
          title: t("services.link6"),
          path: convertToSlug(t("services.link6")),
        },
        {
          title: t("services.link7"),
          path: convertToSlug(t("services.link7")),
        },
        {
          title: t("services.link8"),
          path: convertToSlug(t("services.link8")),
        },
        {
          title: t("services.link9"),
          path: convertToSlug(t("services.link9")),
        },
      ],
    },
    { title: t("menu.candidates"), path: "/jobs-for-candidates" },
    { title: t("menu.clients"), path: "/hiring-for-employers" },

    { title: t("menu.career"), path: "/career-tips" },
    { title: t("menu.about"), path: "/about-us" },
    { title: t("menu.faq"), path: "/faqs" },
    { title: t("menu.contact"), path: "/contact" },
  ];

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const linkIcon = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profi.staff01" },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/profi.staff01/",
    },
    { icon: <FaTwitter />, link: "https://x.com/ProfiStaff01" },
    { icon: <FaPinterestP />, link: "https://www.pinterest.com/profistaff01" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@ProfiStaff01" },
  ];

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  const handleLanguageClick = (lang) => {
    setSelectedLang(lang);
  };

  const handleMouseEnter = (lang) => {
    setPreviewLang(lang);
    i18n.changeLanguage(lang);
  };

  const handleMouseLeave = () => {
    setPreviewLang(null);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <header
      className={`bg-white transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="hidden container mx-auto md:flex items-center justify-between px-4 lg:px-8 xl:px-0 py-2">
        <div className="flex items-center text-gray-800 border-l border-r border-gray-200">
          {linkIcon.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              className={`flex items-center px-3 py-1 hover:translate-y-1 transition-transform duration-500 text-secondary ${
                index !== 0 ? "border-l border-gray-200" : ""
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          {["HR", "EN"].map((lang) => {
            const langLower = lang.toLowerCase();
            const isActive = (previewLang || selectedLang) === langLower;

            return (
              <button
                key={lang}
                className={`px-3 py-1 hover:text-secondary cursor-pointer rounded-md mr-2 border hover:translate-y-1 transition-transform duration-500 ${
                  isActive
                    ? "border-secondary text-secondary font-bold"
                    : "border-gray-300 text-gray-800"
                }`}
                onClick={() => handleLanguageClick(langLower)}
                onMouseEnter={() => handleMouseEnter(langLower)}
                onMouseLeave={handleMouseLeave}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      <div className="relative px-4 lg:px-8 xl:px-0 container mx-auto flex items-center justify-between bg-white/90">
        <Link to="/">
          <img src={logo} className="w-auto h-20 md:h-24" alt="profi staff" />
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navigation.map((item, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={item.path}
                  className={`font-semibold text-[13px] transition-colors uppercase tracking-widest font-quicksand ${
                    location.pathname === item.path
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-gray-900 hover:text-secondary"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="flex">
            <button
              className={`px-2 hover:text-secondary font-quicksand cursor-pointer ${
                i18n.language === "hr"
                  ? "text-secondary font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage("hr")}
            >
              HR
            </button>
            <button
              className={`px-2 hover:text-primary border-l font-quicksand border-gray-200 ${
                i18n.language === "en"
                  ? "text-primary font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
          <button
            className="text-gray-800 hover:text-red-600 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 cursor-pointer" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-primary text-white p-1 font-bold cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-gray-900/30 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className="absolute right-0 top-0 h-full w-5/5 max-w-full bg-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <Link to="/">
                    <img
                      src={logo}
                      width={130}
                      height={60}
                      alt="Company Logo "
                      className="cursor-pointer"
                    />
                  </Link>
                  <button
                    className="text-gray-800 hover:text-primary cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {navigation.map((item, idx) => (
                      <li key={idx} className="border-b border-gray-300">
                        {item.subNav ? (
                          <div>
                            <div
                              className="flex justify-between items-center px-4 py-2 text-lg font-inter font-medium text-gray-800 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer"
                              onClick={() => toggleSubMenu(idx)}
                            >
                              <span>{item.title}</span>
                              <svg
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  openSubMenu === idx
                                    ? "transform rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                            {openSubMenu === idx && (
                              <ul className="pl-6 py-2 space-y-2 bg-gray-100 rounded-lg">
                                {item.subNav.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={`${item.path}/${subItem.path}`}
                                      className="block px-4 py-2 text-base font-normal text-gray-700 font-quicksand hover:bg-gray-200 rounded-lg transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-300 font-quicksand rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
