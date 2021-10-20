import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingComplete: false,
    hotels: [],
    defaultImageUrl: 'img/default.jpeg',
    currentHotel: {},
    bookResult: {}
  },
  mutations: {
    setLoadingComplete(state, value) {
      state.loadingComplete = value;
    },
    setHotels(state, value) {
      state.hotels = value
    },
    setCurrentHotel(state, value) {
      state.currentHotel = value
    },
    setBookResult(state, value) {
      state.bookResult = value || {}
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
    },

    async fetchHotel({ state, commit }, hotelId) {

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
          params: { id: hotelId }
        })

        const data: any = response.data;
        const hotel = data.length ? data[0] : {}

        commit('setCurrentHotel', hotel)
      } finally {

      }
    },

    async book({ state, commit, dispatch }, bookParams) {

      console.log(bookParams)

      //эмуляция
      const response = await new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve({ success: true });
        }, 1000)
      })

      commit('setBookResult', response)
    },

    rejectBooking({ state, commit }) {
      commit('setBookResult', {})
    },
  },
})
