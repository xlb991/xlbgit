<template>
  <div>
    <my-comment></my-comment>
  </div>
</template>

<script>
  // 评论区域组件
  import comment from '../comment/commentCommon.vue'
  export default {
    components: {
      "myComment": comment
    }
  }
</script>

<style lang="scss" scoped="scoped">
</style>
