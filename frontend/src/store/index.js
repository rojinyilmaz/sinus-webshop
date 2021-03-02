import Vue from 'vue'
import Vuex from 'vuex'
import { REGISTER_URL, post, removeToken } from '../api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skateboards:[
      {
        id:1,
        name:"Skateboard Hero",
        price:99,
        desc:"A Skateboard that makes you feel like a Hero",
        amount:1
      },
      {
        id:2,
        name:"Thunder skateboard",
        price:79,
        desc:"A Skateboard with lightning thunder",
        amount:1
      },
      {
        id:3,
        name:"Wavy skateboard",
        price:109,
        desc:"Ride like a wave",
        amount:1
      },
      {
        id:4,
        name:"Cool skateboard",
        price:109,
        desc:"Feel like a real pro skater",
        amount:1
      }
    ],
    clothes:[
      {
        id:4,
        name:"Logo t-shirt",
        price:29,
        desc:"A white t-shirt with our logo on",
        amount:1
      },
      {
        id:5,
        name:"Logo t-shirt",
        price:29,
        desc:"A blue t-shirt with our logo on",
        amount:1
      },
      {
        id:6,
        name:"Logo t-shirt",
        price:29,
        desc:"A black t-shirt with our logo on",
        amount:1
      }
    ],

    Order:[],
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
    }
  },
  actions: {
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
