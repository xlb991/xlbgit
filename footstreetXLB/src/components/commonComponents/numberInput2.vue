<template>
   <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="number" readonly="readonly" @change="setStoreInfo" ref="count"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.js'

  export default {
    data(){
      return {

      }
    },
    created(){

    },
    mounted(){
     mui(".mui-numbox").numbox()
     console.log(this.haveCount)
     this.setStoreInfo()
    },
    methods: {
      // 设置store的count值
      setStoreInfo(){
        this.$store.commit("updateFoodInfo",{id: this.itemid ,count: this.$refs.count.value})

      }

    },
    props: ['number','itemid']



  }

</script>

<style>
</style>
