export default {
  namespaced: true,
  state() {
    return {
      list: []
    }
  },

  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    setSentiment(state, { id, feedback }) {
      let el = state.list.find(item => item.id === id)
      let index = state.list.indexOf(el)
      el.feedback = feedback
      state.list.splice(index, 1, el)
    }
  }
}
