let actions = {
  tokenHandle(context, payload) {
    context.commit("changeTokenExpire", new Date().getTime())
    context.commit("addToken", payload)
  },
  clearToken(context){
    context.commit("changeTokenExpire", "")
    context.commit("addToken", "")
    localStorage.removeItem("token")
    localStorage.removeItem("expire")
  }
}

export default actions