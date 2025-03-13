import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const images = [
    { id: 1, src: "/images/sl3.jpg", alt: "Image 1" },
    { id: 2, src: "/images/sl6.jpg", alt: "Image 2" },
    { id: 3, src: "/images/sl.jpg", alt: "Image 3" },
    { id: 4, src: "/images/sl4.jpg", alt: "Image 4" },
    { id: 5, src: "/images/sl2.jpg", alt: "Image 5" },
    { id: 6, src: "/images/sl5.jpg", alt: "Image 6" },
    { id: 7, src: "/images/sl7.jpg", alt: "Image 7" },
    { id: 8, src: "/images/sl11.jpg", alt: "Image 8" },
    { id: 9, src: "/images/sl8.jpg", alt: "Image 9" },
    { id: 10, src: "/images/sl10.jpg", alt: "Image 10" },
    { id: 11, src: "/images/sl9.jpg", alt: "Image 11" },
    { id: 11, src: "/images/sl15.jpg", alt: "Image 12" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8"
    >
      {/* Gallery Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-8 bg-blue-400 mx-8 rounded-md mt-32 py-5"
      >
        Gallery
      </motion.h2>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // Stagger effect for each image
          },
        }}
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            onClick={() => setSelectedImage(image.src)} // Open image on click
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            }}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Screen Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
