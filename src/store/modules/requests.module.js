import axios from "../../axios/requests";
import store from '../index'

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests
    },
    addRequest(state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async create( { commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.post(`requests.json?auth=${token}`, payload)
        commit('addRequest', {...payload, id: data.name})
        dispatch('setMessage', {
          value: 'Заявка создана',
          type: 'primary'
        }, { root: true })
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    requests(state) {
      return state.requests
    }
  }
}
