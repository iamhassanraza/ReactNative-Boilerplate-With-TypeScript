import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';




export enum languagesEnum {
  en = "en",
  ar = "ar",
}

export type SupportedLanguages = "en" | "ar"

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: languagesEnum.en,
  fallbackLng: languagesEnum.en,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false
  }
});

export const changeLanguage = (language: SupportedLanguages) => {
  i18n.changeLanguage(language)
  //RESTART APP
}


export default i18n;