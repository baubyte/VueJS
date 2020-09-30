import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:'Vuex Desde Cero.',
    nombre:'BAU',
    apellido:'BYTE'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    mensaje(state){
      return state.msg;
    },
    nombreCompleto(state){
      return state.nombre+state.apellido;
    }

  }
})
