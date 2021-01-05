export default {
  namespaced: true,
  state: {
    id: 0,
    name: ''
  },
  mutations: {
    updateId (state, id) {
      state.id = id
    },
    updateName (state, name) {
      state.name = name
    },
    updateRole (state, role) {
      state.role = role
    },
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  }
}
