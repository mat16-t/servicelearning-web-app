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

// ✅ Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-400 p-3 rounded-full shadow-lg hover:bg-gray-600 transition z-20"
  >
    ◀
  </button>
);

// ✅ Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-400 p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
  >
    ▶
  </button>
);

  // Carousel Settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,  // ✅ Add Next Button
    prevArrow: <PrevArrow />,
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
    { src: "/images/sl5.jpg", alt: "Gallery Image 5" },
    { src: "/images/sl6.jpg", alt: "Gallery Image 6" },
    { src: "/images/sl7.jpg", alt: "Gallery Image 7" },
    { src: "/images/sl8.jpg", alt: "Gallery Image 8" },
    { src: "/images/sl9.jpg", alt: "Gallery Image 9" },
    { src: "/images/sl10.jpg", alt: "Gallery Image 10" },
    { src: "/images/sl11.jpg", alt: "Gallery Image 11" },
    { src: "/images/sl12.jpg", alt: "Gallery Image 8" },
    { src: "/images/sl13.jpg", alt: "Gallery Image 9" }
    // { src: "/images/sl10.jpg", alt: "Gallery Image 10" },
    // { src: "/images/sl11.jpg", alt: "Gallery Image 11" }
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
          <motion.p className="mt-4 text-lg font-light max-w-2xl tracking-widest" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            {t("Care • Compassion • Truth")}
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

      {/* ✅ Principal & Headmaster Section */}
      <motion.div className="py-16 bg-gray-100 w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-4">{t("Our Leadership")}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* 📌 Principal */}
          <div className="w-full md:w-1/2 text-center">
            <img src="/images/principal.jpg" alt="Principal" className="w-65 h-65 mx-auto rounded-20 shadow-md" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{t("Principal")}</h3>
            <p className="text-gray-700 mt-2 px-6">
              {t("We aim to create an environment where students thrive academically and morally.")}
            </p>
          </div>

          {/* Headmaster */}
          <div className="w-full md:w-1/2 text-center">
            <img src="/images/headmaster.jpg" alt="Headmaster" className="w-65 h-65 mx-auto rounded-20 shadow-md" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{t("Headmistress")}</h3>
            <p className="text-gray-700 mt-2 px-6">
              {t("We believe in a balanced education that nurtures both intellectual curiosity and character development.")}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ✅ School & Church Section */}
      <motion.div className="py-16 bg-white w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-4">{t("Our School & Church")}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* School Section */}
          <div className="w-full md:w-1/2 text-center">
            <img src="/images/school-img2.jpg" alt="School" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{t("Our School")}</h3>
            <p className="text-gray-700 mt-2 px-6">{t("St. Gregorios Public School is dedicated to academic excellence and moral development, ensuring students grow into responsible global citizens.")}
            </p>
          </div>

          {/* Church Section */}
          <div className="w-full md:w-1/2 text-center">
            <img src="/images/church.jpg" alt="Church" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{t("Our Church")}</h3>
            <p className="text-gray-700 mt-2 px-6">
              {t("The St. Gregorios Orthodox Cathedral, under the Diocese of St. Gregorios, plays a key role in fostering spiritual growth and community values.")}
            </p>
          </div>
        </div>
      </motion.div>
      {/* Image Carousel (Gallery) */}
      <motion.div className="py-16 bg-gray-100 w-3/4 mx-auto rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white bg-blue-900 rounded-md py-5">{t("Gallery")}</h2>
        <div className="relative max-w-6xl mx-auto">
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
