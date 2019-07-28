<template>
  <el-container class="backContainer">
    <el-header class="backend_header">
      <div class="the_header_wrapper">
        <el-page-header @back="goBack" content="后台管理"></el-page-header>
      </div>
      <div class="the_header_info">
        <div></div>
        <div></div>
        <el-dropdown @command="handleCommand">
          <el-avatar :size="40" src="asd" @error="errorHeaderInfoHandler"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">基本资料</el-dropdown-item>
            <el-dropdown-item command="b">修改密码</el-dropdown-item>
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container id="backEndSysMain">
      <el-aside id="asideBack">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="menuRouter">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>页面管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">主页</template>
              <el-menu-item index="1-1">文章选择</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">博客</template>
              <el-menu-item index="1-2">文章选择</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">大事件</template>
              <el-menu-item index="1-3">文章选择</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">文章上传</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">文章详情</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">成员管理</span>
          </el-menu-item>
          <el-menu-item index="5" ref="infoclick">
            <i class="el-icon-user-solid"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="contentDeatail">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "ManagementSystem",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.getToken == "") {
        vm.$router.push({ name: "host" });
      }
    });
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  methods: {
    gotoinfo() {
      this.$refs["infoclick"].$el.click();
      // console.log(this.$refs['infoclick'])
    },
    goBack() {
      this.$router.push({ name: "host" });
    },
    errorHeaderInfoHandler() {
      return true;
    },
    handleCommand(i) {
      switch (i) {
        case "a":
          this.gotoinfo();
          break;
        case "b":
          break;
        case "c":
          this.tokenHandle("");
          this.setUserInfo({
            account: "",
            username: ""
          });
          this.$router.push({ name: "host" });
          break;
      }
    },
    ...mapMutations(["addToken", "changeTokenExpire", "setUserInfo"]),
    ...mapActions(["tokenHandle"]),
    menuRouter(i) {
      switch (i) {
        case "2":
          this.$router.push({ name: "UploadArticle" });
          break;
        case "1-1":
          this.$router.push({ name: "HostPageAdministration" });
          break;
        case "1-2":
          this.$router.push({ name: "BokePageAdminnistr" });
          break;
        case "1-3":
          this.$router.push({ name: "EventPageAdministar" });
          break;
        case "3":
          this.$router.push({ name: "LookArticles" });
          break;
        case "4":
          this.$router.push({ name: "MemberAdministration" });
          break;
        case "5":
          this.$router.push({ name: "FundamentalInfo" });
          break;
      }
    }
  }
};
</script>

<style scoped>
.backContainer {
  background-color: #ffffff;
}
.the_header_wrapper {
  padding: 24px;
  flex: 1;
}
.backend_header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeefb;
}
.the_header_info {
  flex-basis: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.the_header_info > div {
  flex-basis: 33.3%;
}
.the_header_info > div:nth-child(3) {
  cursor: pointer;
}
#backEndSysMain {
  position: fixed;
  top: 61px;
  bottom: 10px;
  left: 0;
  right: 0;
}
.contentDeatail {
  overflow: auto;
  position: relative;
}
#asideBack {
  background: #ffffff;
  width: 250px;
  border-right: solid 1px #e6e6e6;
  padding-top: 30px;
}
</style>
