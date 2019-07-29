<template>
  <div class = "head_wrapper">
    <div class = "img_wrapper">
      <img src = "../assets/pic/logo.gif" alt = "logo">
    </div>
    <h1 id = "header_title">班级博客</h1>
    <div id = "place_holder"></div>
    <el-menu :default-active="activeIndex" 
    class="header_tabs" mode="horizontal" 
    @select="handleSelect" active-text-color = "#42B9B0">
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">博客</el-menu-item>
      <el-menu-item index="3">成员</el-menu-item>
      <el-menu-item index="4">大事件</el-menu-item>
      <el-menu-item index="5">后台管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import global_ from '@/components/Global.vue'
export default {
  name: "Host",
  methods: {
    handleSelect(key, keyPath) {
      this.$emit("change-tab", key);
    }
  },
  data() {
   return {
      activeIndex: '1'
   }
  },
  mounted() {
    this.$nextTick(() => {
      let name = this.$router.currentRoute.name;
      switch(name) {
        case "host":
          this.activeIndex = global_.path_name["host"] + ''
          break;
        case "news":
          this.activeIndex = global_.path_name["news"] + ''
          break;
        case "members":
          this.activeIndex = global_.path_name["members"] + ''
          break;
        case "achieve":
          this.activeIndex = global_.path_name["achieve"] + ''
          break;
      }
    })
  }
}
</script>

<style scoped>
.head_wrapper {
  overflow: hidden;
  align-items:flex-end;
  display: flex;
  padding: 0 5px;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  background: #fff url("../assets/pic/header_bgres.gif") repeat-x top;
}
.img_wrapper{
  width: 5vw;
  float: left;
  margin: 0;
  padding: 4px 0 4px 10px;
}
.img_wrapper > img{
  width: 100%;
}
#header_title{
  align-self: center;
  margin-left: 15px;
  color: #0c3762;
  font-size: 1.3em;
  font-weight: normal;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
}
#place_holder{
  flex: 1;
}
</style>
