function initUserInfo() {
  let s = localStorage.getItem('userinf')
  if(s) {
    return JSON.parse(s)
  }
  return {}
}

let state = {
  token: localStorage.getItem('token') || "",
  tokenExpire: localStorage.getItem('expire') || new Date().getTime(),
  userInfo: initUserInfo()
}

export default state;