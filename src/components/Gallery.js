import React from "react";

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/sl3.jpg', alt: 'Image 1', title: 'Title 1' },
    { id: 2, src: '/images/sl6.jpg', alt: 'Image 2', title: 'Title 2' },
    { id: 3, src: '/images/sl.jpg', alt: 'Image 3', title: 'Title 3' },
    { id: 4, src: '/images/sl4.jpg', alt: 'Image 4', title: 'Title 4' },
    { id: 5, src: '/images/sl2.jpg', alt: 'Image 5', title: 'Title 5' },
    { id: 6, src: '/images/sl5.jpg', alt: 'Image 6', title: 'Title 6' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8 bg-blue-400 mx-8 rounded-md mt-20 py-5">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-row-2 h-90 w-full gap-4">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
            {/* <div className="p-2 text-center">
              <p className="text-sm font-semibold">{image.title}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
