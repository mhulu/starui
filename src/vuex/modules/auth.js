import * as types from '../types'
import { getCookie } from '../../authService'

const state = {
  token: getCookie('token') || null,
  userInfo: null
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
    state.user = null
  },
  [types.LOGOUT] (state, action) {
    state.user = null
    state.token = null
  },
  [types.UPDATE_USER_INFO] (state, action) {
    state.user = action.user
  }
}
export default ({
  state,
  mutations
})
