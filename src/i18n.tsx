import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./i18n.json";

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      vi: {
        translations: translations,
      },
    },
    lng: "vi",
    fallbackLng: "vi",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
