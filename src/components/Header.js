import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // List of pages for search
  const pages = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/about" },
    { name: t("Gallery"), path: "/gallery" },
    { name: t("Contact"), path: "/contact" },
    { name: t("Admission"), path: "/admission" },
  ];

  // Detect scroll and update navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = pages.filter((page) =>
        page.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  // Navigate to selected search page
  const handleSelectPage = (path) => {
    navigate(path);
    setSearchQuery("");
    setFilteredResults([]);
  };

  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "kn" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full flex items-center justify-between px-6 py-8 shadow-lg z-10 transition-all duration-500 ease-in-out
        ${isScrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-gradient-to-b from-black to-transparent"}
      `}
    >
      {/* 🔹 Left Section: School Name */}
      <motion.div
        className={`text-xl md:text-3xl font-bold transition-all duration-300 ease-in-out
          ${isScrolled ? "text-black" : "text-white"}
        `}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/school-logo.jpg" alt="School Logo" className="w-12 h-12 object-contain" />
        {t("St. Gregorious Public School")}
      </motion.div>

      {/* 🔹 Center Section: Navigation */}
      <nav className="hidden md:flex space-x-6 transition-all duration-500 ease-in-out">
        {pages.map((page) => (
          <motion.a
            key={page.path}
            href={page.path}
            className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {page.name}
          </motion.a>
        ))}
      </nav>

      {/* 🔹 Right Section: Search & Mobile Menu */}
      <div className="flex items-center space-x-3">
        {/* 🔹 Search Box */}
        <motion.div
          className="relative hidden md:block transition-all duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <input
            type="text"
            placeholder={t("Search")}
            value={searchQuery}
            onChange={handleSearchChange}
            className="py-1 px-4 rounded-full border border-gray-300 focus:outline-none text-black focus:border-blue-500"
          />
          <button className="absolute right-1 top-1 p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 111.4-1.4l4.35 4.35"
              />
            </svg>
          </button>

          {/* 🔹 Search Results */}
          {filteredResults.length > 0 && (
            <div className="absolute w-full bg-white shadow-md rounded-lg mt-2">
              {filteredResults.map((page) => (
                <div
                  key={page.path}
                  onClick={() => handleSelectPage(page.path)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {page.name}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* 🔹 Mobile Menu Button */}
        <motion.button
          className={`lg:hidden text-2xl focus:outline-none transition-all duration-500 ease-in-out
            ${isScrolled ? "text-black" : "text-white"}
          `}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:hidden w-full bg-white shadow-md mt-2 rounded-md transition-all duration-500 ease-in-out absolute top-14 left-0 right-0"
          >
            <nav className="flex flex-col text-center">
              {pages.map((page) => (
                <a
                  key={page.path}
                  href={page.path}
                  className="py-2 border-b hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </a>
              ))}
              <button onClick={toggleLanguage} className="py-2 hover:text-blue-600">{t("ಅನುವಾದಿಸಿ")}</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
