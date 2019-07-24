let mutations = {
  addToken(state, payLoad) {
    localStorage.setItem('token', payLoad);
    state.token = payLoad
  },
  changeTokenExpire(state, payLoad) {
    localStorage.setItem('expire', payLoad);
    state.tokenExpire = payLoad
  },
  setUserInfo(state, payLoad) {
    localStorage.setItem('userInfo', JSON.stringify(payLoad));
    state.userInfo = payLoad
  }
}

export default mutations;