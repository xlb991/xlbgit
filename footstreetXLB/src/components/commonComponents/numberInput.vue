<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="haveCount">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref="count"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button" @click="getCount">+</button>
    </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.js'

  export default {
    data(){
      return {

      }
    },
    mounted(){
     mui(".mui-numbox").numbox()
     console.log(this.haveCount)
    },
    methods: {
      getCount(){
        var value = this.$refs.count.value
        this.$emit("getNum",value)
      }
    },
    props: ['haveCount'],
    watch: {
      'haveCount': function(now,old){
        var newnow = parseInt(now)
        mui(".mui-numbox").numbox().setOption('haveCount',newnow)
      }
    }


  }

</script>

<style>
</style>
