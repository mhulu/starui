import Vue from 'vue'
import Vuex from 'vuex'
import fullscreen from './modules/fullscreen'
import showtoast from './modules/showtoast'
import auth from './modules/auth'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    fullscreen, showtoast, auth
  },
  strict: debug
})
