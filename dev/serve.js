import Vue from 'vue';
import App from '../src/App.vue';
import store from './store.js';
import '../src/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
