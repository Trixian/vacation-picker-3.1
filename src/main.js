// main.js
import Vue from 'vue'
import App from './App.vue'

// import filters
import '../filters/filters'

Vue.config.productionTip = false;

// Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app');
