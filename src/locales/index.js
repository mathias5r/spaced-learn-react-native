import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

// There are different tags for the same language in iOS and Android platform
const normalizeTranslate = {
  en_US: `en_US`,
  pt_BR: `pt_BR`,
  en: `en_US`,
  pt_US: `pt_BR`,
};

const getLanguageByDevice = () => {
  return Platform.OS === `ios`
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  // eslint-disable-next-line no-prototype-builtins
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize);
  // eslint-disable-next-line no-unused-expressions
  iHaveThisLanguage ? (I18n.locale = translateNormalize) : (I18n.defaultLocale = `en_US`);
};

setLanguageToI18n();

export const t = key => I18n.t(key);
