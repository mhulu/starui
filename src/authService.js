import cookie from 'react-cookie'
import {cookieDomain} from './config.js'
let cookieConfig = {}
if (cookieDomain !== '') {
  cookieConfig = {domain: cookieDomain}
}

export function saveCookie (name, value) {
  cookie.save(name, value, cookieConfig)
}

export function getCookie (name) {
  return cookie.load(name)
}

export function removeCookie (name) {
  cookie.remove(name, cookieConfig)
}

export function signOut () {
  window.localStorage.clear()
  cookie.remove('token', cookieConfig)
}

export function isLogin () {
  return !!cookie.load('token')
}
