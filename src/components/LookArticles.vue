<template>
  <div class="artiContainer">
    <el-breadcrumb separator="/" id="guide">
      <el-breadcrumb-item>
        <a href="javascript:;">后台管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javascript:;">文章详情</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-container id = "wap">
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" @select="menuRouter">
          <el-menu-item v-for="(value,key) in articleTitles" :key="key" :index="value">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ value }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main v-loading="loading" element-loading-text="拼命加载中">
        <el-container id = "pinerContainer">
          <el-main>
          <h1 style="font-size:20px;">{{data.title}}</h1>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">作者：{{data.author}}</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">日期： {{data.date}}</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" id="rowsa">
            <el-col :span="5" id ="jianj">
              <div class="grid-content bg-purple">简介：</div>
            </el-col>
            <el-col :span="19">
              <div class="grid-content bg-purple">{{data.simpleDes}}...</div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <p v-for="(value,key) in data.article" :key="key">
            {{value.replace(/\s*/g,"")}}
          </p>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
export default {
  name: "LookArticles",
  data() {
    return {
      articleTitles: [],
      loading: false,
      data: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get(url.getArticlesTitles)
        .then(res => {
          // console.log(res)
          this.articleTitles = res.data;
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "读取文章失败"
          });
        });
    });
  },
  methods: {
    menuRouter(i) {
      this.loading = true;
      axios
        .get(url.getArticlesInfoByName + "?name=" + encodeURIComponent(i))
        .then(res => {
          setTimeout(() => {
            this.loading = false;
          }, 200);
          this.data = res.data;
          // console.log(res)
        })
        .catch(res => {
          setTimeout(() => {
            this.loading = false;
          }, 200);
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
.el-col-20 {
  text-align: left;
}
#rowsa {
  padding-top: 20px;
}
.el-col-12 {
  text-align: left;
}
.el-col-12 + .el-col-12 {
  text-align: right;
}
#jianj{
  text-align: left;
}
#jianj + div{
  text-align: left;
}
#pinerContainer p{
  text-align: justify;
  text-indent: 4ch;
}
</style>
