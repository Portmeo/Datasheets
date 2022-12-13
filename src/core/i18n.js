import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from '../assets/i18n/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es
      }
    },
    lng: 'es'
  });

export default i18n;
