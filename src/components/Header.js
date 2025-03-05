// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "kn" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <header className="fixed w-full flex flex-col items-center px-4 py-3 bg-gradient-to-b from-black to-transparent shadow-lg z-10">
//       {/* 🔹 Top Section: Logo & Search Box */}
//       <div className="w-3/4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl md:text-4xl font-bold text-white">{t("St. Gregorious Public School")}</div>

//         {/* 🔹 Right Section: Search Box & Menu Icon */}
//         <div className="flex items-center space-x-3">
//           {/* Search Box */}
//           <div className="relative hidden md:block">
//             <input
//               type="text"
//               placeholder={t("Search")}
//               className="py-1 px-4 rounded-full border border-gray-300 focus:outline-none text-black focus:border-blue-500"
//             />
//             <button className="absolute right-1 top-1 p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 111.4-1.4l4.35 4.35"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* 🔹 Menu Button (Mobile Only) */}
//           <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Navigation - Desktop */}
//       <nav className="hidden lg:flex w-3/4 justify-center items-center space-x-6 py-2 my-5 border-t border-gray-300 bg-blue-400 rounded-md">
//         <a href="/" className="hover:text-blue-600">{t("Home")}</a>
//         <a href="/about" className="hover:text-blue-600">{t("About")}</a>
//         <a href="/gallery" className="hover:text-blue-600">{t("Gallery")}</a>
//         <a href="/contact" className="hover:text-blue-600">{t("Contact")}</a>
//         <a href="/admission" className="hover:text-blue-600">{t("Admission")}</a>

//         {/* Language Toggle Button */}
//         <button
//           onClick={toggleLanguage}
//           className="hover:text-blue-600 ml-4 px-4 py-2 rounded text-black font-semibold">
//           {t("ಅನುವಾದಿಸಿ")}
//         </button>
//       </nav>

//       {/* 🔹 Dropdown Menu - Mobile */}
//       {isOpen && (
//         <div className="lg:hidden w-50px bg-white shadow-md mt-2 rounded-md">
//           <nav className="flex flex-col text-center">
//             <a href="/" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Home")}</a>
//             <a href="/about" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("About")}</a>
//             <a href="/gallery" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Gallery")}</a>
//             <a href="/contact" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Contact")}</a>
//             <a href="/admission" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Admission")}</a>
//             <button onClick={toggleLanguage} className="py-2 hover:text-blue-600">{t("ಅನುವಾದಿಸಿ")}</button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "kn" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <header className="fixed w-full flex flex-col items-center px-4 py-3 bg-gradient-to-b from-black to-transparent z-10">
//       {/* 🔹 Top Section: Logo & Search Box */}
//       <div className="w-full flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl md:text-4xl font-bold text-white">{t("St. Gregorious Public School")}</div>

//         {/* 🔹 Navigation - Desktop */}
//       <nav className="hidden lg:flex w-3/4 justify-center items-center space-x-6 py-2 my-5 rounded-md">
//         <a href="/" className="text-white hover:text-blue-600">{t("Home")}</a>
//         <a href="/about" className="text-white hover:text-blue-600">{t("About")}</a>
//         <a href="/gallery" className="text-white hover:text-blue-600">{t("Gallery")}</a>
//         <a href="/contact" className="text-white hover:text-blue-600">{t("Contact")}</a>
//         <a href="/admission" className="text-white hover:text-blue-600">{t("Admission")}</a>

//         {/* Language Toggle Button */}
//         <button
//           onClick={toggleLanguage}
//           className="hover:text-blue-600 ml-4 px-4 py-2 rounded text-white font-semibold">
//           {t("ಅನುವಾದಿಸಿ")}
//         </button>
//       </nav>

//         {/* 🔹 Right Section: Search Box & Menu Icon */}
//         <div className="flex items-center space-x-3">
//           {/* Search Box */}
//           <div className="relative hidden md:block">
//             <input
//               type="text"
//               placeholder={t("Search")}
//               className="py-1 px-4 rounded-full border border-gray-300 focus:outline-none text-black focus:border-blue-500"
//             />
//             <button className="absolute right-1 top-1 p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 111.4-1.4l4.35 4.35"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* 🔹 Menu Button (Mobile Only) */}
//           <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Dropdown Menu - Mobile */}
//       {isOpen && (
//         <div className="lg:hidden w-50px bg-white shadow-md mt-2 rounded-md">
//           <nav className="flex flex-col text-center">
//             <a href="/" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Home")}</a>
//             <a href="/about" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("About")}</a>
//             <a href="/gallery" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Gallery")}</a>
//             <a href="/contact" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Contact")}</a>
//             <a href="/admission" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Admission")}</a>
//             <button onClick={toggleLanguage} className="py-2 hover:text-blue-600">{t("ಅನುವಾದಿಸಿ")}</button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "kn" : "en";
    i18n.changeLanguage(newLang);
  };

  // Detect scroll and update navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Change navbar when scrolled down
      } else {
        setIsScrolled(false); // Reset navbar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full flex flex-col items-center px-4 py-3 shadow-lg z-10 
      transition-all duration-500 ease-in-out
      ${isScrolled ? "bg-white backdrop-blur-md" : "bg-gradient-to-b from-black to-transparent"}`}
    >
      {/* 🔹 Top Section: Logo & Search Box */}
      <div className="w-full flex justify-between items-center transition-all duration-500 ease-in-out">
        {/* Logo */}
        
        <div
          className={`text-xl md:text-4xl font-bold transition-all duration-300 ease-in-out
          ${isScrolled ? "text-black" : "text-white"}`}
        >
          {t("St. Gregorious Public School")}
        </div>

        {/* 🔹 Navigation - Desktop */}
        <nav className="hidden lg:flex w-3/4 justify-center items-center space-x-6 py-2 my-5 rounded-md transition-all duration-500 ease-in-out">
          <a href="/" className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}>{t("Home")}</a>
          <a href="/about" className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}>{t("About")}</a>
          <a href="/gallery" className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}>{t("Gallery")}</a>
          <a href="/contact" className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}>{t("Contact")}</a>
          <a href="/admission" className={`${isScrolled ? "text-black" : "text-white"} hover:text-blue-600`}>{t("Admission")}</a>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={`hover:text-blue-600 ml-4 px-4 py-2 rounded font-semibold transition-all duration-500 ease-in-out
            ${isScrolled ? "text-black" : "text-white"}`}
          >
            {t("ಅನುವಾದಿಸಿ")}
          </button>
        </nav>

        {/* 🔹 Right Section: Search Box & Menu Icon */}
        <div className="flex items-center space-x-3">
          {/* Search Box */}
          <div className="relative hidden md:block transition-all duration-500 ease-in-out">
            <input
              type="text"
              placeholder={t("Search")}
              className="py-1 px-4 rounded-full border border-gray-300 focus:outline-none text-black focus:border-blue-500"
            />
            <button className="absolute right-1 top-1 p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 111.4-1.4l4.35 4.35"/>
              </svg>
            </button>
          </div>

          {/* 🔹 Menu Button (Mobile Only) */}
          <button className="lg:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* 🔹 Dropdown Menu - Mobile */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-md mt-2 rounded-md transition-all duration-500 ease-in-out">
          <nav className="flex flex-col text-center">
            <a href="/" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Home")}</a>
            <a href="/about" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("About")}</a>
            <a href="/gallery" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Gallery")}</a>
            <a href="/contact" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Contact")}</a>
            <a href="/admission" className="py-2 border-b hover:text-blue-600" onClick={() => setIsOpen(false)}>{t("Admission")}</a>
            <button onClick={toggleLanguage} className="py-2 hover:text-blue-600">{t("ಅನುವಾದಿಸಿ")}</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
