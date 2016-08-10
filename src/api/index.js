import {UserResource, AuthResource} from './resources'

export default {
  localLogin: function (content) {
    return AuthResource.save(content)
  },
  getUserInfo: function (data) {
    return UserResource.save({id: 'id'}, data)
  }
}
