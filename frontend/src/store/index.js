import Vue from 'vue'
import Vuex from 'vuex'
import { REGISTER_URL, post, removeToken } from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   products:[],

   cart:[],

    order:[],
    loggedIn: false
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
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
      removeToken();
    },
    setProducts(state, payload){
      state.products = payload
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
    async registerUser(context, payload) {
      const response = await post(REGISTER_URL, payload);
      console.log(response);
      console.log(context);
    },
    logOut({commit}) {
      commit('logOut');
    }
  },
  modules: {
  }
})
