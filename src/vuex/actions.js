import * as utils from '../utils'
import api from '../api'
import { signOut, saveCookie } from '../authService'
import swal from 'sweetalert'
import * as types from './types'
export const fullscreen = ({ dispatch }) => {
  dispatch(types.TOGGLE_FULLSCREEN)
  utils.fullscreen()
}

export const showToast = ({dispatch}, content, type = 'error') => {
  dispatch(types.HIDE_TOASTSHOW_TOAST, {content: content, type: type})
}

export const hideToast = ({dispatch}) => {
  dispatch(types.HIDE_TOAST)
}

export const logout = ({dispatch, router}) => {
  dispatch(types.LOGOUT)
  signOut()
  window.location.reload()
}
/**
 * 本地登录
 * @param  {[type]} store       [description]
 * @param  {[type]} credentials [description]
 * @return {[type]}             [description]
 */
export const localLogin = (store, credentials) => {
  api.localLogin(credentials).then(response => {
    const token = response.data.result
    saveCookie('token', token)
    getUserInfo(store)
    store.dispatch(types.LOGIN_SUCCESS, {token: token})
    swal({
      title: '登录成功',
      text: '系统正在自动跳转... ...',
      type: 'success',
      timer: 2000,
      showConfirmButton: false
    }, function () {
      window.location = '/'
    })
  }, response => {
    swal({
      title: '登录失败',
      text: '您输入的信息有误,请重新输入',
      type: 'error',
      confirmButtonText: '重新输入'
    })
  })
}
export const refreshToken = (store) => {
  api.refreshToken().then(response => {
    const token = response.data.result
    saveCookie('token', token)
    store.dispatch(types.REFRESH_TOKEN_SUCCESS, {token: token})
    window.location = '/'
  }, response => {
    signOut()
    swal({
      title: '出现错误',
      text: '系统自动刷新令牌未能成功，正在返回登录页面... ...',
      type: 'error',
      timer: 1000
    }, function () {
      window.location = '/'
    })
  })
}
/**
 * 获取用户信息(包括菜单 消息等)
 */
export const getUserInfo = ({dispatch}) => {
  api.getMe().then(response => {
    if (!response.ok) {
      return dispatch(types.USERINFO_FAILURE)
    }
    window.localStorage.setItem('userInfo', JSON.stringify(response.data))
    dispatch(types.USERINFO_SUCCESS, {userInfo: response.data})
  }, response => {
    dispatch(types.USERINFO_FAILURE)
  })
}

/*
更新用户信息(包括菜单 消息等)
 */
// export const updateUserInfo = ({dispatch, router}, weid) => {
//   makeUserInfo({dispatch, router}, weid)
//   makeCookie({dispatch}, weid)
// }

/**
 * 获取公众号信息
 */
export const getMenuList = ({dispatch}) => {
  api.getMenuList().then(response => {
    dispatch(types.GET_MENU_LIST, {menuList: response.data})
  }, response => {
    return swal('发生错误', response.data, 'error')
  })
}

// export const deleteWxmp = ({dispatch, router}, id) => {
//   swal({
//     title: '确定删除数据吗？',
//     text: '该操作不会影响您的公众号数据，但在微脉事中的数据会被删除',
//     type: 'error',
//     showCancelButton: true,
//     confirmButtonColor: '#DD6B55',
//     cancelButtonText: '算了，留着吧',
//     confirmButtonText: '是的，我要删除'
//   }, function () {
//     api.deleteWxmp(id).then(response => {
//       window.location.reload()
//     }, response => {
//       return swal('发生错误', response.statusText, 'error')
//     })
//   })
// }

// export const getWxToken = ({dispatch}, weid) => {
//   if (getCookie('wxToken') === undefined) {
//     makeCookie({dispatch}, weid)
//   }
//   return getCookie('wxToken')
// }

// function makeCookie ({dispatch}, weid) {
//   api.getWxToken(weid).then(response => {
//     document.cookie = 'wxToken=' + response.data.token + ';expires=' + new Date(response.data.expires).toUTCString()
//     dispatch(types.GET_WXTOKEN)
//   }, response => {
//     return swal('发生错误', response.statusText, 'error')
//   })
// }

// function makeUserInfo ({dispatch, router}, id) {
//   api.getUserInfo(id).then(response => {
//     let json = response.data
//     window.sessionStorage.setItem('wemesh.userInfo', JSON.stringify(json))
//     dispatch(types.GET_USER_INFO, {
//       userInfo: json
//     })
//     router.go({name: 'home'})
//   }, response => {
//     return swal('发生错误', response.statusText, 'error')
//   })
// }
