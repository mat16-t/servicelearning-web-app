import React from "react";
import { useTranslation } from "react-i18next";

const Admission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="w-3/4 text-4xl font-bold text-center mb-8 text-black bg-blue-900 rounded-md py-5 mt-20">
        {t("Admission Form")}
      </h2>
      {/* Google Form Embed */}
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
        <iframe
          title="Admission Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9JYmNJ0AmnQZ0kTTHgufY5rjPCEmNyZErF763ne52DyBXtQ/viewform?usp=dialog"
          width="100%"
          height="600px"
          frameBorder="0"
          className="rounded-lg"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Admission;
