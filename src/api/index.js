import {UserResource, AuthResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource.save({id: 'login'}, data)
  },
  getMe: function () {
    return UserResource.get({id: 'me'})
  },
  getUser: function (id) {
    return UserResource.get({id: id})
  },
  updateUser: function (id, data) {
    return UserResource.update({id: id}, data)
  },
  refreshToken: function () {
    return AuthResource.get({id: 'refreshToken'})
  }
}
