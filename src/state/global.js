import * as types from './mutationTypes';
import axios from 'axios';

export const state = {
  locale: 'id',
  snackbar: {
    titleText: '',
    buttonText: '',
    color: '',
    timeout: 3000,
    onClick: null,
    visible: false,
  },
};

export const mutations = {
  [types.SET_LOCALE](state, { locale }) {
    state.locale = locale;
  },
  [types.SHOW_SNACKBAR](state, payload) {
    state.snackbar = { ...state.snackbar, ...payload };
  },
  [types.HIDE_SNACKBAR](state) {
    state.snackbar.visible = false;
  },
};

export const actions = {
  async changeLocale({ commit }, payload) {
    const { i18n, locale } = payload;
    if (!(locale in i18n.messages)) {
      const message = await import(`@src/lang/${locale}.json`);
      i18n.setLocaleMessage(locale, message.default);
      await commit(types.SET_LOCALE, payload);
    }
    commit(types.SET_LOCALE, payload);
    setI18nLanguage(payload);
  },
  showSnackbar({ commit }, payload) {
    commit(types.SHOW_SNACKBAR, payload);
  },
};

const setI18nLanguage = ({ i18n, locale }) => {
  i18n.locale = locale;
  axios.defaults.headers.common['Accept-Language'] = locale;
  document.querySelector('html').setAttribute('lang', locale);
};
