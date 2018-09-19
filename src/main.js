/* eslint-disable no-unused-vars,no-multi-assign,no-sequences,no-unused-expressions */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
const GoogleImages = require('google-images');
import App from './App';
import router from './router';
window.$ = require('jquery'), require('jquery-ui-dist/jquery-ui');
import 'bootstrap/dist/css/bootstrap.css';
import '../build/css/mdb.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
