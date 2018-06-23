import * as i18n from 'i18next';
import * as translations from '../translations.json';

i18n
  .init({
    resources: translations,
    fallbackLng: 'ru',
    debug: true,
    // have a comnpmmon namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',

    keySeparator: false, // we use content as keys
  });

export default i18n;
