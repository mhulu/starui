import cookie from 'react-cookie'

export function getCookie (name) {
  return cookie.load(name)
}

export function removeCookie (name) {
  cookie.remove(name)
}

export function signOut () {
  window.sessionStorage.clear()
  cookie.remove('wemesh')
}
