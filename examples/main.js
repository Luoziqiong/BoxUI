import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import BxButton from '../packages/button'
Vue.config.productionTip = false

Vue.use(BxButton);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
