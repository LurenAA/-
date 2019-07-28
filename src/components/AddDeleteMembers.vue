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
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" @select="menuRouter">
          <el-menu-item v-for="(value,key) in membersNames" :key="key" :index="value">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ value }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main v-loading="loading" element-loading-text="拼命加载中">
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
export default {
  name: "AddDeleteMembers",
  data() {
    return {
      loading: false,
      membersNames: [],
      data: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get(url.getMemberNames)
        .then(res => {
          // console.log(res);
          this.membersNames = res.data;
        })
        .catch(err => {
          console.log(err);
          this.$notify.error({
            title: "错误",
            message: "读取成员失败"
          });
        });
    });
  },
  methods: {
    menuRouter(i) {
      // console.log(i)
      this.loading = true;
      axios
        .get(url.getMemberInfobyName + "?name=" + encodeURIComponent(i))
        .then(res => {
          // console.log(res)
          this.data = res.data;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "读取成员信息失败"
          });
        });
    }
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
</style>
