import { LOGIN_SUCCESS, USERINFO_SUCCESS, USERINFO_FAILURE, UPDATE_USER_INFO, LOGOUT } from '../types'
import { getCookie } from '../../authService'

const state = {
  token: getCookie('token') || null,
  user: null
}

const mutations = {
  [LOGIN_SUCCESS] (state, action) {
    state.token = action.token
  },
  [USERINFO_SUCCESS] (state, action) {
    state.user = action.user
  },
  [USERINFO_FAILURE] (state, action) {
    state.user = null
  },
  [LOGOUT] (state, action) {
    state.user = null
    state.token = null
  },
  [UPDATE_USER_INFO] (state, action) {
    state.user = action.user
  }
}
export default ({
  state,
  mutations
})
