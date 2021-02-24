import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes:[
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
      }
    ],

    Order:[]

  },
  getters: {
    clothes:state=>{
      return state.clothes;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
