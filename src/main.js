// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "../src/store/index"
// import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "./http/http"
import axios1 from "axios"
import { Toast } from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Toast);

Vue.prototype.$axios = axios
Vue.prototype.$axios1 = axios1

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
