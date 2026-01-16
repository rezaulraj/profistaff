import React from "react";
import { useTranslation } from "react-i18next";
import { CgLogIn } from "react-icons/cg";
import { Link } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 bg-gray-200/80" id="login">
      <div className="max-w-screen-xl mx-auto">
        <form action="">
          <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Login Text with Icon */}

            <div className="flex items-center justify-center gap-x-4">
              <CgLogIn className="size-8 hover:translate-x-2 transition-transform duration-500 cursor-pointer" />
              <span className="text-2xl font-semibold uppercase">
                {t("login.logintext")}
              </span>
            </div>

            {/* Input Fields - Stacked vertically on small screens */}
            <div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row md:gap-x-3">
              <input
                type="text"
                placeholder={t("login.inputemail")}
                className="h-10 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
              <input
                type="password" /* Changed from text to password for security */
                placeholder={t("login.password")}
                className="h-10 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-center gap-x-2">
              <input type="checkbox" className="h-5 w-5 accent-green-700" />
              <h4 className="text">{t("login.remember")}</h4>
            </div>

            {/* Login Button */}
            <button className="text-white/90 cursor-pointer custom:w-auto w-70 bg-red-600 hover:bg-red-700 text-lg font-medium uppercase px-5 rounded-sm py-1">
              {t("login.loginbtn")}
            </button>

            {/* Forgot Password Link */}
            <Link className="text-gray-700 hover:text-gray-600 tracking-wide text-lg text-center md:text-left">
              {t("login.forget")}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
