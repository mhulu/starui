import {GET_MENU_LIST} from '../types'
const state = {
  menuList: null
}

const mutations = {
  [GET_MENU_LIST] (state, action) {
    state.menuList = action.menuList
  }
}
export default ({
  state,
  mutations
})
