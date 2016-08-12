import {UserResource, AuthResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({action: 'login'}, data)
  },
  getMe: function () {
    return UserResource.get({action: 'me'})
  },
  refreshToken: function () {
    return AuthResource.save({action: 'refreshToken'})
  }
}
