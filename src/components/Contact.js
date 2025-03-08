import React from "react";

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
      <p className="mt-4 text-lg">Address: #109, Bheemanaguppe Cross, Bengaluru - 74, Karnataka, India</p>
      <p>Email: stgregoriosschoolkengeri@gmail.com | Phone: +91 8147988604 | +91 8147988605</p>
      
      {/* Google Map */}
      <div className="mt-8 flex justify-center">
        <iframe
          title="Google Maps"
          className="w-full h-96 max-w-5xl border-4 border-blue-900 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.8984326617185!2d77.43399020037516!3d12.897588881282967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5.1!3m3!1m2!1s0x3bae38f225bb9bcb%3A0x269233b784aca008!2sSt.%20Gregorios%20Public%20School!5e0!3m2!1sen!2sin!4v1731263520967!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
