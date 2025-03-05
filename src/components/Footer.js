import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section: Address, Contact, Email */}
        <div className="text-left mb-4 md:mb-0 w-60">
          <h4 className="text-lg font-semibold">St.Gregorious School</h4>
          <p>📍 #109, Bheemanaguppe Cross, Bengaluru - 74, Karnataka, India</p>
          <p>&#x1F4DE; +91 8147988604 <br></br>+91 8147988605</p>
          <p>&#x2709;info@gregoriousschool.com</p>
        </div>

        {/* Middle Section: Mission & Vision */}
        <div className="text-left w-60">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p>"Empowering students with knowledge and values for a better future."</p>
          <h2 className="text-lg font-semibold">Our Vision</h2>
          <p>"Creating responsible global citizens through quality education."</p>
        </div>

        {/* Middle Section: Mission & Vision */}
        <div className="text-center w-60">
          <h2 className="text-lg font-semibold">Other links</h2>
        </div>

      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center mt-4 border-t border-gray-700 pt-2">
        &copy; 2024 St. Gregorious Public School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
