import Vue from 'vue'
import App from './App.vue'
import router from './router'
import memedata from './meme-ledger'

Vue.config.productionTip = false


let data = {
  currentWeek: 1,
  currentYear: 2020,
  memes: memedata,
  numberOfWeeks: [1,2,3],
  topWeek: 3
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
