<template>
  <div class = "container">
    <el-card class = "back_end_head">
      <div slot="header">
        <el-page-header @back="goBack" content="登陆后台管理" 
        id = "el-page-header-con">
        </el-page-header>
      </div>
      <el-login @submit_login= "loginHandle" 
       ref= "login_han"></el-login>
    </el-card>
  </div>
</template>

<script>
import Login from "@/components/Login"
import {postPasswd} from "@/api/checkPasswd"
import global_ from '@/components/Global.vue'
export default {
  name: "BackEnd",
  methods: {
    goBack() {
      this.$router.push({ name:"host"});
    },
    handleLoginSuccess(res) {
      console.log(this)
      let sta = res.data.state
      if(sta == global_.loginState["deprecate"]) {
        this.$message('账户过期，请联系管理员');
      } else if (sta == global_.loginState["success"]) {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
        this.$router.push({ name:"managementSystem"});
      } else  {
        this.$message.error('密码或账户错误');
        this.$refs["login_han"].ruleForm.pass = ''
        this.$refs["login_han"].$refs["ruleForm"].clearValidate()
      }
    },  
    loginHandle(pas) {
      postPasswd.call(this, pas, this.handleLoginSuccess)
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
