import Login from './pages/SignIn'
import Single from './layout/Single'
export default function (router) {
  router.map({
    '/': {
      component: Single,
      auth: false,
      subRoutes: {
        '/': {
          component: Login
        }
      }
    }
  })
  router.redirect({
    '*': '/'
  })

    // 不允许没有userinfo数据而直接访问'home'及其他
  // const isHold = store.state.auth.isHold
  // router.beforeEach(function (transition) {
  //   if (transition.to.auth !== false && window.sessionStorage.getItem('wemesh.userInfo') === null) {
  //     transition.redirect('/')
  //   } else {
  //     transition.next()
  //   }
  // })
}
