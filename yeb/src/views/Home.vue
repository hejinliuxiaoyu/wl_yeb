<template>
<div>
  <count></count>
  <el-divider content-position="center">另一个组件</el-divider>
  <person></person>
</div>
</template>

<script>
  import count from '../components/count';
  import person from '../components/person'
export default {
  name: "Home",
  components:{
    count,person
  }
}
</script>

<style scoped>

</style>
