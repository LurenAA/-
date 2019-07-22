<template>
  <div class = "container">
    <el-card class = "back_end_head">
      <div slot="header">
        <el-page-header @back="goBack" content="登陆后台管理" 
        id = "el-page-header-con">
        </el-page-header>
      </div>
      <el-login @submit_login= "loginHandle"></el-login>
    </el-card>
  </div>
</template>

<script>
import Login from "@/components/Login"
import {postPasswd} from "@/api/checkPasswd"
export default {
  name: "BackEnd",
  methods: {
    goBack() {
      this.$router.push({ name:"host"});
    },
    loginHandle(pas) {
      postPasswd.call(this, pas)
    }
  },
  components: {
    "el-login": Login
  }
};
</script>

<style scoped>
.container{
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.back_end_head{
  background-color: #fff;
  padding: 24px;
}
.el-card >>> .el-card__header{
  padding-top: 0;
}
#el-page-header-con >>> .el-page-header__content{
  font-size: 15px;
}
</style>
