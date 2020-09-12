import Vue from 'vue'
import Vuex from 'vuex'

import sentiments from './modules/sentiments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sentiments
  }
})

