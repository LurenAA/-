<template>
  <div class="container">
    <el-badge value="new" class="item">班级风采</el-badge>
    <el-divider></el-divider>
    <div class="swiper-container">
      <el-carousel indicator-position="outside" height="350px">
        <el-carousel-item v-for="(item,index) in swipper" :key="index">
          <h3>
            <img :src="item.images" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-badge value="hot" class="item">热门文章</el-badge>
    <el-divider></el-divider>
    <div class="collapse-container">
      <el-collapse accordion>
        <div v-for="(item,index) in article" :key="index">
          <el-collapse-item :title="item.title">
            <p v-for="(a,index1) in item.article" :key="index1">
              {{a}}
            </p>
          </el-collapse-item>
        </div>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import classimg from "../assets/pic/class.jpeg";
import gate from "../assets/pic/gate.jpg";
import pggg from "../assets/pic/pggg.jpg";
import url from '../api/config';
import axios from 'axios';
export default {
  name: "Host",
  mounted() {
    axios.get(url.getContentByCols + "?col=1") 
    .then(res => {
      // console.log(res)
      this.article = res.data
    })
    .catch(err => {
      this.$notify.error({
            title: "错误",
            message: "读取文章失败"
          });
    })
  },
  data() {
    return {
      swipper: [
        {
          images: classimg
        },
        {
          images: gate
        },
        {
          images: pggg
        }
      ],
      article: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 20px 30px;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-top: 0;
}
.swiper-container {
  margin: 40px 40px 80px 40px;
  background-color: #f3f3f3;
}
.swiper-container img {
  width: 654px;
  height: 270px;
  margin-top: 32px;
}
.collapse-container {
  margin: 0 40px 40px 60px;
}
h2 {
  font: bold 24px "Hiragino Sans GB";
  color: #323a3f;
  padding: 8px 0;
  margin: 8px 0;
  text-align: left;
}
p {
  margin: 8px 0;
  padding: 0 0 8px 0;
  font: normal 12px/1.8em Arial, 宋体, sans-serif;
  display: block;
  text-indent: 4ch;
  text-align: justify !important;
}
.el-divider {
  background-color: #fbb000;
}
</style>
