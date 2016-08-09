import {UserResource, AuthResource} from './resources'

export default {
  getLogin: function (data) {
    return AuthResource.save({id: 'id'}, data)
  } 
}
