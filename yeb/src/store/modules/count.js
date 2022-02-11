

const count = new Vuex.Store({
  nameSpace:true,
  state:{
    num:0,
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
  },
  getters:{
    bigNum(state){
      return state.num*10
    }
  },
})
