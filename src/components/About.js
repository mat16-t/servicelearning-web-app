// // src/components/About.js
// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <p>This page provides information about us.</p>
//     </div>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/church.jpg"
            alt="About Us"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            Welcome to our platform! We are passionate about providing high-quality 
            services and experiences to our users. Our mission is to innovate and create 
            solutions that make life easier and more enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
