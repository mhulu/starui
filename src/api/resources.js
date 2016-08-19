import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import {refreshToken} from '../vuex/actions'
// import swal from 'sweetalert'
import {getCookie} from '../authService'
Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  if (getCookie('token')) {
    request.headers['Authorization'] = 'Bearer' + getCookie('token')
  }
  next((response) => {
    if (response.status === 401) {
      refreshToken()
    }
  })
})
// Vue.http.interceptors.push({
//   request (request) {
//     // 这里对请求体进行处理
//     request.headers = request.headers || {}
//     if (getCookie('token')) {
//       request.headers['Authorization'] = 'Bearer ' + getCookie('token')
//     }
//     return request
//   },
//   response (response) {
    // 这里可以对响应的结果进行处理
    // if (response.status === 401) {
    //   signOut()
    //   swal({
    //     title: '您需要重新提供登录凭据',
    //     type: 'error',
    //     text: '您的登录凭据已过期或者不正确，需要重新填写',
    //     confirmButtonText: '返回重新填写',
    //     animation: 'slide-from-top'
    //   }, function (isConfirm) {
    //     if (isConfirm) {
    //       window.location = '/'
    //     }
    //   })
    // }
    // if (response.status === 401) {
    //   signOut()
    //   window.location.pathname = '/'
    // }
//     if (response.status === 401) {
//       refreshToken()
//     }
//     return response
//   }
// })

export const UserResource = Vue.resource(API_ROOT + 'user{/action}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/action}')
export const MenuResource = Vue.resource(API_ROOT + 'user/menu')
