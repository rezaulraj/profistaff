import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import titleimge from "../../assets/home/title_bg.jpg";
import NotFoundPage from "../components/NotFoundPage";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";

const AboutDetails = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const { cId } = useParams();

  const aboutdata = [
    {
      link: t("abouts.link1"),
      cardTitle: t("abouts.about-us"),
      cardh1: t("abouts.misstion"),
      cardhp: t("abouts.mtext"),
      cardh2: t("abouts.visstion"),
      cardh2p: t("abouts.vtext"),
    },
    // {
    //   link: t("abouts.link2"),
    //   cardTitle: t("abouts.alink1"),
    //   cardh1: t("abouts.basicdata.bdh1"),
    //   cardh1p1: t("abouts.basicdata.bdp1"),
    //   cardh2: t("abouts.basicdata.bdh2"),
    //   cardh2p2: t("abouts.basicdata.bdp1"),
    // },
    {
      link: t("abouts.link3"),
      cardTitle: t("abouts.alink2"),
      chardp1: t("abouts.genareldata.gdp1"),
      chardp2: t("abouts.genareldata.gdp2"),
      chardp3: t("abouts.genareldata.gdp3"),
      chardh1: t("abouts.genareldata.gdh1"),
      chardh1p1: t("abouts.genareldata.gdh1p1"),
      chardh1p2: t("abouts.genareldata.gdh1p2"),
      chardh2: t("abouts.genareldata.gdh2"),
      chardh2p1: t("abouts.genareldata.gdh2p1"),
      chardh2p2: t("abouts.genareldata.gdh2p2"),
      chardh3: t("abouts.genareldata.gdh3"),
      chardh3p1: t("abouts.genareldata.gdh3p1"),
    },
  ];

  const about = aboutdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === cId
  );

  console.log(about);

  if (!about) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-white/90">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-2xl gap-x-3 text-white/90">
              <MdArrowForwardIos />
              <h2 className="text-white/80 font-bold text-xl md:text-2xl font-quicksand uppercase">
                {t("abouts.about-us")}
              </h2>
              <MdArrowForwardIos />
              <h1 className="text-white/80 font-bold text-xl md:text-2xl font-quicksand uppercase">
                {about.cardTitle}
              </h1>
            </div>
            <div className="flex items-end justify-end py-14 relative pr-6 md:pr-0">
              <button
                className="flex items-end justify-end"
                onClick={() => setShowIcons(!showIcons)}
              >
                <FaShareAlt className="text-white text-xl cursor-pointer" />
              </button>
              {showIcons && (
                <div className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="text-blue-700 text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitterSquare className="text-blue-500 text-2xl" />
                  </a>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    <FaGooglePlus className="text-amber-800 text-2xl" />
                  </a>
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImMail className="text-amber-950 text-2xl" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <div className="flex flex-col custom:flex-row gap-8">
         
          <div className="flex-1 space-y-3 text-gray-800">
            <div className="flex flex-col items-start space-y-6 mt-6">
              {about?.cardh1 && (
                <div>
                  <h2 className="text-gray-800 text-xl font-bold font-quicksand">
                    {about?.cardh1}
                  </h2>
                  <p className="text-gray-800 font-quicksand">
                    {about?.cardhp}
                  </p>
                  <p className="text-gray-800 font-quicksand">
                    {about?.cardh1p1}
                  </p>
                </div>
              )}
              {about?.cardh2 && (
                <div>
                  <h2 className="text-gray-800 text-xl font-bold font-quicksand">
                    {about?.cardh2}
                  </h2>
                  <p className="text-gray-800 font-quicksand">
                    {about?.cardh2p}
                  </p>
                  <p className="text-gray-800 text-sm font-quicksand">
                    {about?.cardh2p2}
                  </p>
                </div>
              )}

              {about?.chardp1 && (
                <div className="space-y-3">
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardp1}
                  </p>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardp2}
                  </p>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardp3}
                  </p>
                  <h2 className="text-gray-800 text-xl font-bold font-quicksand">
                    {about.chardh1}
                  </h2>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardh1p1}
                  </p>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardh1p2}
                  </p>
                  <h2 className="text-gray-800 text-xl font-bold font-quicksand">
                    {about.chardh2}
                  </h2>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardh2p1}
                  </p>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardh2p2}
                  </p>
                  <h2 className="text-gray-800 text-xl font-bold font-quicksand">
                    {about.chardh3}
                  </h2>
                  <p className="text-gray-900 text-lg font-quicksand">
                    {about?.chardh3p1}
                  </p>
                </div>
              )}
            </div>
          </div>

         
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("abouts.about-us")}
              </h3>
              <ul className="space-y-3">
                {aboutdata.map((link, index) => {
                  const isActive =
                    cId === link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (cId === undefined && index === 0);

                  return (
                    <li key={index}>
                      <Link
                        to={`/about-us/${encodeURIComponent(
                          link?.link?.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className={`flex items-center gap-x-2 transition-colors p-2 rounded ${
                          isActive
                            ? "text-secondary bg-gray-100 font-medium"
                            : "text-gray-700 hover:text-secondary hover:bg-gray-100"
                        }`}
                      >
                        <MdArrowForwardIos className="text-xs" />
                        {link?.cardTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
