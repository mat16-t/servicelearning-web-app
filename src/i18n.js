// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en.json';
import knTranslation from './locales/kn.json';

i18n
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      kn: { translation: knTranslation }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback if the selected language is unavailable
    interpolation: { escapeValue: false }, // React already escapes by default
    debug: true // Set to false in production
  });

export default i18n;
