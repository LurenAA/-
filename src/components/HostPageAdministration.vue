<template>
  <div class="artiContainer">
    <el-breadcrumb separator="/" id="guide">
      <el-breadcrumb-item>
        <a href="javascript:;">后台管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javascript:;">文章选择</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-transfer v-model="value" :data="data" class="ada"></el-transfer>
    <el-button type="primary" class="button" @click = "save">保存</el-button>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
export default {
  name: "HostPageAdministration",
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
    })
  },
  data() {
    return {
      data: [],
      value: [],
      articleTitles: []
    };
  },
  watch: {
    articleTitles(val) {
      // console.log(val)
      val.forEach((element, i) => {
        this.data.push({
          key: element,
          label: element
        });
      });
    }
  },
  methods:{
    save() {
      axios.post(url.setHostPageArticles, {
        value:this.value
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
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
.artiContainer >>> .el-checkbox__input {
  left: 0 !important;
}
.artiContainer >>> .el-checkbox{
  margin-right: 35px;
}
.ada {
  padding-top: 70px;
}
.button {
  margin-top: 40px;
}
</style>
