import * as types from '../types'
import { getCookie } from '../../authService'

const state = {
  token: getCookie('token') || null,
  userInfo: JSON.parse(window.localStorage.getItem('auth.userInfo')) || null
}

const mutations = {
  [types.LOGIN_SUCCESS] (state, action) {
    state.token = action.token
  },
  [types.REFRESH_TOKEN_SUCCESS] (state, action) {
    state.token = action.token
  },
  [types.USERINFO_SUCCESS] (state, action) {
    state.userInfo = action.userInfo
  },
  [types.USERINFO_FAILURE] (state, action) {
    state.userInfo = null
  },
  [types.LOGOUT] (state, action) {
    state.userInfo = null
    state.token = null
  },
  [types.UPDATE_USER_INFO] (state, action) {
    state.userInfo = action.userInfo
  }
}
export default ({
  state,
  mutations
})
