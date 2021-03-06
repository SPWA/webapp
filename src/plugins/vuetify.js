import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VSelect,
  VCard,
  VDivider,
  VExpansionPanel,
  VSnackbar,
  transitions,
} from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import '@assets/style/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VSelect,
    VCard,
    VDivider,
    VExpansionPanel,
    VSnackbar,
    transitions,
  },
  theme: {
    primary: colors.teal.base,
  },
});
