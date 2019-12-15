import Vue from 'vue'
import App from './App.vue'
import './assets/scss/styles.scss'
import 'material-design-icons-iconfont'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
