import Vue from 'vue'
import Vuex from 'vuex'
import { REGISTER_URL, post } from '../api/api.js'

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
    auth: {
      loggedin: false,
      token: null,
      user: {
        email: '',
        name: '',
        address: {
          street:'',
          zip: '',
          city: ''
        }
      }
    }
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
    setAuth(state,payload) {
      let user = JSON.parse(payload.config.data)
      state.auth.user= user
      state.auth.loggedin = true
      console.log(state.auth)
    }
  },
  actions: {
    async registerUser({commit}, payload) {
      const response = await post(REGISTER_URL, payload)
      console.log(response)
      commit('setAuth', response)
    }
  },
  modules: {
  }
})
