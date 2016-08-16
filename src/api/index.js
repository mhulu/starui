import {UserResource, AuthResource, MenuResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({action: 'login'}, data)
  },
  getMe: function () {
    return UserResource.get({action: 'me'})
  },
  refreshToken: function () {
    return AuthResource.get({action: 'refreshToken'})
  },
  getMenuList: function () {
    return MenuResource.get()
  }
}
