import * as i18n from 'i18next';
import * as translations from './translations.json';
import * as LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: true,
    // have a comnpmmon namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',

    keySeparator: false, // we use content as keys
  });

export default i18n;
