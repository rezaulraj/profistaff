import React, { useState, useEffect, useRef } from "react";
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
  const [sticky, setSticky] = useState(false);
  const stickyRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const stickyElement = stickyRef.current;
      if (stickyElement) {
        const stickyPosition = stickyElement.offsetTop;
        setSticky(window.scrollY > stickyPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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
    <header className="sticky top-0 z-50">
      <div
        className={`bg-white transition-all duration-300 ${
          sticky ? "hidden" : "block"
        } ${isScrolled ? "shadow-md" : ""}`}
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
      </div>

      <div
        ref={stickyRef}
        className={`bg-[#171D27] shadow-2xl transition-all duration-300 ${
          sticky
            ? "fixed top-0 left-0 right-0 z-50 animate-stickySlideDown"
            : "relative"
        }`}
      >
        <div className="px-4 lg:px-8 xl:px-0 py-2 container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center h-full">
            <img
              src={logo}
              alt="Profi Staff Logo"
              className="h-16 md:h-20 w-auto object-contain filter brightness-105 contrast-110
                drop-shadow-lg"
            />
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
                        : "text-white hover:text-secondary"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {sticky && (
              <div className="flex">
                <button
                  className={`px-2 hover:text-secondary font-quicksand cursor-pointer ${
                    i18n.language === "hr"
                      ? "text-secondary font-bold"
                      : "text-white"
                  }`}
                  onClick={() => i18n.changeLanguage("hr")}
                >
                  HR
                </button>
                <button
                  className={`px-2 hover:text-primary border-l font-quicksand border-gray-400 ${
                    i18n.language === "en"
                      ? "text-primary font-bold"
                      : "text-white"
                  }`}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  EN
                </button>
              </div>
            )}
            <button
              className="text-white hover:text-secondary cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        </div>

        <div
          ref={menuRef}
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gray-900 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-75" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logo}
                    width={130}
                    height={60}
                    alt="Company Logo"
                    className="cursor-pointer"
                  />
                </Link>
                <button
                  className="text-gray-800 hover:text-primary cursor-pointer p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>

              <div className="flex justify-center p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md font-quicksand font-medium transition-colors ${
                      i18n.language === "hr"
                        ? "bg-secondary text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("hr");
                      setIsMenuOpen(false);
                    }}
                  >
                    HR
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md font-quicksand font-medium transition-colors ${
                      i18n.language === "en"
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsMenuOpen(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item.subNav ? (
                        <div className="border-b border-gray-200 pb-1">
                          <div
                            className="flex justify-between items-center px-4 py-3 text-lg font-inter font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
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
                            <ul className="pl-6 mt-2 space-y-1 bg-gray-50 rounded-lg">
                              {item.subNav.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={`${item.path}/${subItem.path}`}
                                    className="block px-4 py-3 text-base font-normal text-gray-700 font-quicksand hover:bg-gray-100 rounded-lg transition-colors"
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
                          className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 font-quicksand rounded-lg transition-colors border-b border-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-center space-x-4">
                    {linkIcon.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-secondary hover:text-white transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg">{item.icon}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
