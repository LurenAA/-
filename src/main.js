// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index.js';

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.prototype.GLOBAL = global_;
/* eslint-disable no-new */
router.afterEach((to, from) => {
  if(new Date().getTime() - store.getters.getTokenExpire >= 1000000 &&
  store.getters.getTokenExpire != "") {
    store.dispatch("clearToken")
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
