import Vue from 'vue'
import App from './App.vue'
import BxButton from '../packages/button'
Vue.config.productionTip = false

Vue.use(BxButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
