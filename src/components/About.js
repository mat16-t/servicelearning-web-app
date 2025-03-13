import React from "react";

const About = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center mt-20">
        
        {/* 🔹 School Section */}
        <div className="w-full flex flex-col md:flex-row items-center mb-16">
          {/* 📸 School Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/school-img.jpg"  // Replace with actual school image
              alt="Our School"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* 📝 School Text */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold text-gray-800">About Our School</h2>
            <p className="mt-4 text-gray-600">
              <strong>St. Gregorious Public School</strong> is a premier institution dedicated to 
              providing quality education rooted in values and excellence. With a focus on 
              holistic development, we offer an academically enriching and morally uplifting 
              environment for our students.
            </p>
            <p className="mt-4 text-gray-600">
              Our well-structured curriculum, experienced faculty, and state-of-the-art 
              infrastructure empower students to excel in academics, sports, and cultural 
              activities. We believe in shaping future leaders with discipline, integrity, 
              and compassion.
            </p>
          </div>
        </div>

        {/* 🔹 Church Section */}
        <div className="w-full flex flex-col md:flex-row-reverse items-center">
          {/* Church Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/church.jpg"  // Replace with actual church image
              alt="Our Church"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Church Text */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:mr-8">
            <h2 className="text-3xl font-bold text-gray-800">About Our Church</h2>
            <p className="mt-4 text-gray-600">
              The **St. Gregorious Orthodox Cathedral** is a beacon of faith and tradition, 
              playing an integral role in the **spiritual and moral guidance** of our school. 
              As part of the esteemed **Diocese of St. Gregorios**, our church fosters values 
              of **faith, service, and community engagement** among students and families.
            </p>
            <p className="mt-4 text-gray-600">
              Rooted in rich Orthodox traditions, our church provides students with **spiritual 
              growth opportunities**, ensuring that they develop into **compassionate and 
              responsible individuals** who contribute positively to society.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
