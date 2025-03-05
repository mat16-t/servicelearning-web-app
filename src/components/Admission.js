import React from "react";
import { useTranslation } from "react-i18next";

const Admission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
        {t("admission")}
      </h2>

      <p className="text-gray-700 text-center max-w-2xl mb-6">
        {t("admission_text")}
      </p>

      {/* Google Form Embed */}
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
        <iframe
          title="Admission Form"
          src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
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
