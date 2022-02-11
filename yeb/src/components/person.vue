<template>
    <div>
      <p>count组件的计数结果：{{num}}</p>
      <h2>person列表</h2>
      <ul>
        <li v-for="item in person" :key="item.id">
          {{item.name}}--{{item.age}}
        </li>
      </ul>
      <el-button type="success" @click="add">新增一个人</el-button>
    </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'person',
    computed:{
      ...mapState(['num','person'])
    },
    methods:{
      ...mapMutations(['Add']),
      add(){
        this.$store.commit('ADD')
      }
    }
  }
</script>

<style scoped>

</style>
