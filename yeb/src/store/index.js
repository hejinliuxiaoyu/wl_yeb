import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    num:0,
    person:[
      {id:'1',name:'张三',age:'23'},
      {id:'2',name:'王璐',age:'28'},
    ]

  },
  actions:{
    delay({commit},val){
      setTimeout(()=>{
        commit('JIA',val)
      },1000)

    }

  },
  mutations:{
    JIA(state,val){
      state.num += val
    },
    JIAN(state,val){
      state.num -= val
    },
    ADD(state){
      state.person.push({id:'3',name:'刘晓宇',age:'28'})
    }


  },
  getters:{
    bigNum(state){
      return state.num*10
    }

  },
  modules:{

  }
})

export default store


