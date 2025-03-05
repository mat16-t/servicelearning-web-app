import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,  // Tablet breakpoint
        settings: {
          slidesToShow: 2,  // Show 2 images on tablets
        },
      },
      {
        breakpoint: 768,  // Mobile breakpoint
        settings: {
          slidesToShow: 1,  // Show 1 image on mobile
        },
      },
    ],
  };

  const images = [
    { src: "/images/sl.jpg", alt: "Gallery Image 1" },
    { src: "/images/sl2.jpg", alt: "Gallery Image 2" },
    { src: "/images/sl3.jpg", alt: "Gallery Image 3" },
    { src: "/images/sl4.jpg", alt: "Gallery Image 4" },
    { src: "/images/sl5.jpg", alt: "Gallery Image 5" },
    { src: "/images/sl6.jpg", alt: "Gallery Image 6" },
  ];

  return (
    <section id="home">
      {/* ✅ Video Background Section */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/slv1.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">{t("welcome")}</h1>
        </div>
      </div>

      {/* ✅ Map Section */}
      <div className="py-16 bg-gray-100 w-3/4 mx-auto" id="map">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black bg-blue-400 rounded-md py-5">
          {t("location")}
        </h2>
        <div className="flex justify-center">
          <iframe
            title="Google Maps"
            className="w-full h-96 max-w-5xl border-2 border-gray-400 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.8984326617185!2d77.43399020037516!3d12.897588881282967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5.1!3m3!1m2!1s0x3bae38f225bb9bcb%3A0x269233b784aca008!2sSt.%20Gregorios%20Public%20School!5e0!3m2!1sen!2sin!4v1731263520967!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ✅ About Section (Vision & Mission) */}
      <div className="py-16 bg-white w-3/4 mx-auto">
        <h2 className="text-4xl w-full font-bold text-center mb-8 text-black bg-blue-400 rounded-md py-5">
          {t("about")}
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            {t("Our Motto")}
          </h3>
          <p className="text-gray-700 mb-6">{t("vision_text")}</p>

          <h3 className="text-2xl font-semibold text-black mb-4">
            {t("Our Focus")}
          </h3>
          <p className="text-gray-700">{t("mission_text")}</p>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-gray-100 w-3/4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black bg-blue-400 rounded-md py-5">
          {t("history")}
        </h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/images/school-img.jpg"
              alt="School"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h3 className="text-2xl font-semibold text-black mb-4">
              {t("history")}
            </h3>
            <p className="text-gray-700">{t("history_text")}</p>
          </div>
        </div>
      </div>

      {/* Church Section */}
      <div className="py-16 bg-white w-3/4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black bg-blue-400 rounded-md py-5">
          {t("church")}
        </h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
          {/* Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-black mb-4 ">{t("church")}</h3>
            <p className="text-gray-700">{t("church_text")}</p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <img
              src="/images/church.jpg"
              alt="Church"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* ✅ Image Carousel (Gallery) */}
      <div className="py-16 bg-gray-100 w-3/4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black bg-blue-400 rounded-md py-5">
          {t("Gallery")}
        </h2>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => navigate("/gallery")}
                className="cursor-pointer px-3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Home;
