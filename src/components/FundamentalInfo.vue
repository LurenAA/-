<template>
  <div class="artiContainer">
    <el-breadcrumb separator="/" id="guide">
      <el-breadcrumb-item>
        <a href="javascript:;">后台管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javascript:;">基本信息</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-container id="wap">
      <div>
        <div class="block"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
      </div>
      <div class = "div-item">
        用户名： <span>{{data.username}}</span>
      </div>
      <div class = "div-item">
        账户： <span>{{data.account}}</span>
      </div>
      <div class = "div-item">
        过期： <span>{{data.deprecate}}</span>
      </div>
      <div class = "div-item">
        特权： <span>{{data.level}}</span>
      </div>
    </el-container>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "FundamentalInfo",
  data() {
    return {
      data: {},
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  mounted() {
    this.$nextTick(() => {
      let account = this.getUserInfo.account;
      axios
        .get(url.getUserFundemetalInfo + "?account=" + account)
        .then(res => {
          console.log(res);
          this.data = res.data
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  }
};
</script>

<style scoped>
.artiContainer {
  padding: 40px;
  padding-right: 80px;
  background: #ffffff;
  border-radius: 15px;
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  overflow: hidden;
}
#guide {
  border-bottom: 1px solid #eaeefb;
  padding: 24px;
}
.el-aside {
  position: absolute;
  left: 0;
  bottom: 40px;
  top: 103px;
  overflow: auto;
  border-right: solid 1px #e6e6e6;
}
#wap > .el-main {
  position: absolute;
  right: 0;
  left: 200px;
  bottom: 40px;
  top: 103px;
  overflow: auto;
}
.el-menu-vertical-demo {
  padding-top: 30px;
}
#wap{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 70px;
}
.div-item{
  padding-top: 30px;
  font-size: 20px;
}
.div-item > span {
  font-size: 25px;
  color: #aaaaaa;
}
</style>