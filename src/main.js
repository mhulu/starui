import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import registerRouters from './routers'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
// import VueMask from 'v-mask'
import VueValidator from 'vue-validator'
import store from './vuex/store'

// Vue.use(VueMask)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.use(VueValidator)
Vue.validator('mobile', function (val) {
  return /(^(13\d|14[57]|15[^4\D]|17[13678]|18\d)\d{8}|170[^346\D]\d{7})$/.test(val)
})
Vue.validator('qq', function (val) {
  return /^[1-9]\d{4,9}$/.test(val)
})
Vue.validator('email', function (val) {
  return /\S+@\S+\.\S+/.test(val)
})
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
const router = new VueRouter({
  hashbang: false
})

sync(store, router)
registerRouters(router)
router.start(App, '#app')
