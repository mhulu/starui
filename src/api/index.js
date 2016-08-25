import {UserResource, AuthResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id: 'login'}, data)
  },
  getMe: function () {
    return UserResource.get({id: 'me'})
  },
  updateUser: function (data) {
    return UserResource.update({id: 'update'})
  },
  refreshToken: function () {
    return AuthResource.get({id: 'refreshToken'})
  }
}
