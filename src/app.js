import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    }
  }
})