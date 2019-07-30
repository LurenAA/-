<template>
  <div>
    <div class="block">
      <el-timeline>
        <div v-for="(item,index) in news" :key="index">
          <el-timeline-item
            v-if="index<currentPage1*pagesize&&index>=(currentPage1-1)*pagesize"
            :timestamp="item.date"
            placement="top"
          >
            <el-card>
              <h4>
                <p class="detail" @click="godetail(item)">{{item.title}}</p>
              </h4>
              <p>作者：{{item.author}}</p>
            </el-card>
          </el-timeline-item>
        </div>
      </el-timeline>
      <el-pagination
        :current-page.sync="currentPage1"
        :page-size="pagesize"
        layout="prev, pager, next, jumper"
        :total="news.length"
      ></el-pagination>
    </div>
    <!-- <div>
      <el-drawer title="我是外面的 Drawer" :visible.sync="drawer" size="50%">
        <div></div>
      </el-drawer>
    </div>-->
  </div>
</template>

<script>
import url from '../api/config';
import axios from 'axios';
import {mapMutations} from "vuex"
export default {
  name: "News",
  mounted() {
    axios.get(url.getContentByCols + "?col=2") 
    .then(res => {
      console.log(res)
      this.news = res.data
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
      currentPage1: 1,
      pagesize: 4,
      news: []
    };
  },
  methods: {
    godetail(item) {
      this.changeArticleDetail(item)
      this.$router.push({ name: "detail" });
    },
    ...mapMutations([
      "changeArticleDetail"
    ])
  }
};
</script>

<style>
.block {
  background-color: #fbfbfb79;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  padding-top: 35px;
  padding-right: 95px;
  padding-left: 35px;
  padding-bottom: 35px;
}
.block .el-pagination {
  margin: 20px;
}
.el-timeline-item__wrapper .el-timeline-item__timestamp.is-top {
  text-align: left;
  margin-bottom: 12px;
  padding-top: -1px;
}

.el-timeline-item .el-timeline-item__tail {
  border-left: 2px solid rgba(255, 255, 255, 0.76);
}
.el-timeline-item .el-timeline-item__node {
  background-color: rgb(144, 218, 218);
}
.el-timeline .el-timeline-item {
  padding-top: 22px;
}

.el-card p {
  font-size: 13px;
  font-weight: bold;
  display: inline;
}
.detail {
  cursor: pointer;
}
</style>
style>
