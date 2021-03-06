/*!
=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from 'vue'; // vue config
import App from './App.vue';

// template config
import Argon from './plugins/argon-kit';
import './registerServiceWorker';

// my dependencies to build the application
import router from './router';
import axios from 'axios'; //to replace to jquery ajax
import VueAxios from 'vue-axios';
import store from './store/index.js'; // to save local data

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
