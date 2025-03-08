import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { id: 1, src: "/images/sl3.jpg", alt: "Image 1", title: "Title 1" },
    { id: 2, src: "/images/sl6.jpg", alt: "Image 2", title: "Title 2" },
    { id: 3, src: "/images/sl.jpg", alt: "Image 3", title: "Title 3" },
    { id: 4, src: "/images/sl4.jpg", alt: "Image 4", title: "Title 4" },
    { id: 5, src: "/images/sl2.jpg", alt: "Image 5", title: "Title 5" },
    { id: 6, src: "/images/sl5.jpg", alt: "Image 6", title: "Title 6" },
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
        className="text-3xl font-bold text-center mb-8 bg-blue-400 mx-8 rounded-md mt-20 py-5"
      >
        Gallery
      </motion.h2>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-row-2 h-90 w-full gap-4"
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
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            }}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
