import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    { src: "/images/sl.jpg", alt: "Gallery Image 1" },
    { src: "/images/sl2.jpg", alt: "Gallery Image 2" },
    { src: "/images/sl3.jpg", alt: "Gallery Image 3" },
    { src: "/images/sl4.jpg", alt: "Gallery Image 4" },
    { src: "/images/sl5.jpg", alt: "Gallery Image 5" }
  ];

  return (
    <section id="home">
      {/* ✅ Video Background Section */}
      <motion.div className="relative h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/slv1.mp4" autoPlay loop muted />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
          <motion.h1 className="text-5xl font-bold" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            {t("Welcome to St. Gregorios Public School")}
          </motion.h1>
          <motion.p className="mt-4 text-lg font-light max-w-2xl" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            {t("Providing quality education with strong moral values.")}
          </motion.p>
        </div>
      </motion.div>

      {/* ✅ Google Map Section */}
      <motion.div className="py-16 bg-gray-100 w-3/4 mx-auto rounded-lg shadow-lg" id="map" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-4">{t("Our Location")}</h2>
        <div className="flex justify-center">
          <iframe
            title="Google Maps"
            className="w-full h-96 max-w-5xl border-4 border-blue-900 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.8984326617185!2d77.43399020037516!3d12.897588881282967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5.1!3m3!1m2!1s0x3bae38f225bb9bcb%3A0x269233b784aca008!2sSt.%20Gregorios%20Public%20School!5e0!3m2!1sen!2sin!4v1731263520967!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* ✅ Vision & Mission Section */}
      <motion.div className="py-16 bg-gradient-to-b from-blue-900 to-blue-600 w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white  rounded-md py-4">{t("Our Vision & Mission")}</h2>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl text-white font-semibold mb-4">{t("Our Motto")}</h3>
          <p className="text-white mb-6">{t("vision_text")}</p>
          <h3 className="text-2xl text-white font-semibold mb-4">{t("Our Focus")}</h3>
          <p className="text-white">{t("mission_text")}</p>
        </div>
      </motion.div>

      {/* ✅ About & History Section */}
      <motion.div className="py-16 bg-gray-100 w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-4">{t("Our History")}</h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
          <div className="md:w-1/2">
            <img src="/images/school-img.jpg" alt="School" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <p className="text-gray-700">{t("history_text")}</p>
          </div>
        </div>
      </motion.div>

      {/* ✅ Church Section */}
      <motion.div className="py-16 bg-white w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-4">{t("Our Church")}</h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
          <div className="md:w-1/2">
            <p className="text-gray-700">{t("church_text")}</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <img src="/images/church.jpg" alt="Church" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </motion.div>

      {/* ✅ Image Carousel (Gallery) */}
      <motion.div className="py-16 bg-gray-100 w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-5">{t("Gallery")}</h2>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} onClick={() => navigate("/gallery")} className="cursor-pointer px-3 transition-transform duration-300 hover:scale-105">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
