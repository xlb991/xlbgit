<template>
  <div class="commentBox">
    <h4>评论区域</h4>
    <hr />
    <textarea maxlength="120" placeholder="请输入所要评论的信息" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click.enter="sendComment" >发表评论</mt-button>
    <ul class="mui-table-view">
      <div v-for="item in commentList">
        <li class="mui-table-view-divider">用户：{{ item.username }}</li>
        <li class="mui-table-view-cell">{{ item.text === '' ? '用户累了，未填写' : item.text}} <span class="mui-badge mui-badge-primary"><img :src="item.avatar" /></span></li>
      </div>
    </ul>
    <mt-button type="primary" size="large">加载更多</mt-button>
  </div>
</template>

<script>
  // 导入Mnit-ui
  import { Toast } from 'mint-ui'
  // 导入本地json数据（axios
  import axios from 'axios'
  export default {
    data(){
      return{
        commentList: [],
        msg: ''
        }
    },
    created(){
      this.getAllComments()
    },
    methods: {
      getAllComments(){
        axios.get('/api/ratings').then( res => {
          if(res.data.errno === 0){
            this.commentList = res.data.data
          }else{
            Toast({
              message: '评论信息加载失败，检查网络',
              position: 'middle',
              duration: 5000
            })

          }
        })
      },
      sendComment(){
        // 校验评论数据是否为空
        if(this.msg.trim().length === 0 ){
            Toast("请留下点东西吧")
        }else{
          var newComment = {
            username: "136*******29",
            text: this.msg,
            "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
          }
          this.commentList.unshift(newComment)
          // 清空文本框
          this.msg = ''
        }
      }

    },
    props: ['id']

  }
</script>

<style lang="scss" scoped="scoped">
  .commentBox {
    textarea {
      margin-bottom: 0px;
    }
    .mui-table-view {
      .mui-badge {
        overflow: hidden;
      }
      margin-top: 11px;
      img {
        width: 40px;
      }
    }
  }
</style>
