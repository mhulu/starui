import {getCookie} from './authService'

import Login from './components/Auth/Login'
import Overlay from './components/Overlay'
import Me from './components/Profile/Me'
import Security from './components/Profile/Security'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

export default function (router) {
  router.map({
    // Overlay pages
    '/auth': {
      component: Overlay,
      auth: false,
      subRoutes: {
        '/': {
          component: Login
        }
      }
    },
    // Dashboard
    '/': {
      component: Dashboard,
      subRoutes: {
        // HOME
        '/': {
          component: Home
        },
        '/profile/me': {
          component: Me
        },
        '/profile/security': {
          component: Security
        }
      }
    },
    '*': {
      component: NotFound
    }
  })

  // 访问Dashboard及其子组件需要登录
  router.beforeEach(function (transition) {
    // 如果当前页面是非auth且没有token和userInfo(即直接访问需要验证的页面),则跳转到登陆页面
    if ((transition.to.auth !== false && getCookie('token') === undefined) || (transition.to.auth !== false && window.localStorage.getItem('userInfo') === null)) {
      transition.redirect('/auth')
    // 如果当前页面是auth并且有token(即登陆了之后又直接访问登陆页面),则忽略
    } else if (transition.to.auth === false && getCookie('token') !== undefined) {
      transition.abort()
    } else {
      transition.next()
    }
  })
}
