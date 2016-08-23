import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import {refreshToken} from '../vuex/actions'
import {getCookie} from '../authService'
Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  if (getCookie('token')) {
    request.headers['Authorization'] = 'Bearer ' + getCookie('token')
  }
  next((response) => {
    if (response.status === 401) {
      refreshToken()
    }
  })
})

export const UserResource = Vue.resource(API_ROOT + 'user{/action}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/action}')
export const MenuResource = Vue.resource(API_ROOT + 'user/menu')
