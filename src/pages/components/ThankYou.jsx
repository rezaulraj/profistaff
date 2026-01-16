import React from "react";
import { motion } from "framer-motion";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 via-white to-amber-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center"
      >
        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <IoIosCheckmarkCircle className="text-green-500 w-20 h-20" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your message has been successfully sent. We’ll get back to you as soon
          as possible.
        </p>

        <Link
          to="/"
          className="inline-block bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary transition duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
