export const state = () => ({
  user: null
})

export const getters = {
  getUser: (state) => {
    return state.user
  }
}

export const mutations = {
  updateUser(state, user) {
    state.user = user
  }
}

export const actions = {
  setUser({commit, state}, data) {
    let user = state.user
    user = data
    commit('UPDATE_USER', user)
  }
}
