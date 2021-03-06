// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify';
import Notificaton from 'vue-notification';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.use(Notificaton)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
