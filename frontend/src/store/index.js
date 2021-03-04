import Vue from 'vue'
import Vuex from 'vuex'
import { AUTH_URL, REGISTER_URL, post, removeToken, setToken } from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   products:[],

   cart:[],

    order:[],
    loggedIn: false,
    user:{},
    error: false
  },
  getters: {
    clothes:state=>{
      return state.clothes;
    },
    skateboards:state=>{
      return state.skateboards;
    }
  },
  mutations: {
    logIn(state, payload) {
      state.loggedIn = true;
      state.user = payload;
    },
    logOut(state) {
      state.loggedIn = false;
      removeToken();
      state.user = {};
    },
    setProducts(state, payload){
      state.products = payload
    }
    ,
    failLogin(state) {
      state.error = true;
    },
    resetFailLogin(state) {
      state.error = false
    }
  },
  actions: {
    getProducts(context){
      fetch("http://localhost:5000/api/products")
      .then(r => r.json())
      .then(json => {
       context.commit('setProducts', json);
        console.log(json)
      })
    },
    async registerUser({dispatch}, payload) {
      const response = await post(REGISTER_URL, payload);
      if(response) {
        await dispatch('authenticateUser', { email: payload.email, password: payload.password })
      }
    },
    async authenticateUser({commit}, payload) {
      const response = await post(AUTH_URL, payload)
      if(response) {
        setToken(response.data.token)
        commit('logIn', response.data.user)
      } else {
       commit('failLogin')
      }
    },
    logOut({commit}) {
      commit('logOut');
      commit('resetFailLogin')
    },
  },
  modules: {
  }
})
