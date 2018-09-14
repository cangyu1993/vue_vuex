import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0,
    price:22
  },
  mutations: {
    'ADD_COUNT' (state) {
      state.count++
    },
    'REDUCE_COUNT' (state) {
      state.count--
    },
    'CHANGE_COUNT' (state,payload){
      state.count = payload
    },
    'CHANGE_PRICE' (state,payload){
      state.price = payload
    }
  },

})

export default store;
