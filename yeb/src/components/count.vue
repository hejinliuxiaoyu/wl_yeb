<template>
    <div>
        <p>计数:{{num}}</p>
        <p>计数的10倍:{{bigNum}}</p>
        <el-select v-model="countNum">
          <el-option :value="1">1</el-option>
          <el-option :value="2">2</el-option>
          <el-option :value="3">3</el-option>
        </el-select>
        <el-button type="success" @click="add(countNum)">加</el-button>
        <el-button type="success" @click="jian(countNum)">减</el-button>
        <el-button type="success" @click="delay(countNum)">延迟1S显示结果</el-button>
     <p>下面人员列表总数：{{person.length}}</p>
    </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

  export default {
    name: 'count',
    data(){
      return{
        countNum:'',

      }
    },
    computed:{
      ...mapState(['num','person']),
      ...mapGetters(['bigNum']),
    },
    methods:{
      ...mapMutations(['JIA','JIAN']),
      ...mapActions(['delay']),
      add(val){
        if(this.countNum){
          this.$store.commit('JIA',val)
        }else{
          this.$message.info('请选择一个数')
        }

      },
      jian(val){
        if(this.countNum){
          this.$store.commit('JIAN',val)
        }else{
          this.$message.info('请选择一个数')
        }
      },
      delay(val){
        this.$store.dispatch('delay',val)

      }
    }

  }
</script>

<style scoped>

</style>
