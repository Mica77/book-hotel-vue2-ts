import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingComplete: false,
    hotels: [],
    defaultImageUrl: 'img/default.jpeg'
  },
  mutations: {
    setLoadingComplete(state, value) {
      state.loadingComplete = value;
    },
    setHotels(state, value) {
      state.hotels = value
    }
  },
  actions: {
    async fetchHotels({ state, commit }) {

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
          params: { _limit: 20 }
        })

        commit('setHotels', response.data)

      } finally {
        commit('setLoadingComplete', true);
      }
    }
  },
})
