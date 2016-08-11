import {getCookie} from './authService'

import Login from './components/Auth/Login'
import Overlay from './components/Overlay'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import NProgress from 'nprogress'

export default function (router) {
  router.map({
    '/auth': {
      component: Overlay,
      auth: false,
      subRoutes: {
        '/': {
          component: Login
        }
      }
    },
    '/': {
      component: Dashboard,
      subRoutes: {
        '/': {
          component: Home
        }
      }
    },
    '*': {
      component: NotFound
    }
  })

  // 访问Dashboard及其子组件需要登录
  router.beforeEach(function (transition) {
    if (transition.to.auth !== false && getCookie('token') === undefined) {
      transition.redirect('/auth/')
    } else {
      NProgress.start()
      transition.next()
    }
  })

  router.afterEach(function (transition) {
    NProgress.done()
  })
}
