<template>
  <div>
    <div class="block">
      <el-page-header class="goback" @back="goBack"></el-page-header>
      <h1>{{ar.title}}</h1>

      <el-card class="box-card">
        <p v-for="(item, index) in ar.article" :key="index">
          {{item}} <br/>
        </p>
      </el-card>
      <div>
        <el-divider content-position="left">
          <span class="divider">评论</span>
        </el-divider>
        <div class="collapse-container contentarea">
          <el-collapse accordion>
            <el-collapse-item title="点击查看评论">
              <div>
                <ul>
                  <li class="showcomments" v-for="(item,index) in getComments" :key="index">
                    {{item.comment}}
                  </li>
                </ul>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <el-input
          class="contentarea"
          type="textarea"
          :rows="2"
          placeholder="想对作者说点什么"
          v-model="comments"
        ></el-input>
        <el-button size="medium" round>
          <span class="divider" @click = "delever">发表评论</span>
        </el-button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex"
import axios from 'axios';
import url from "../api/config";
export default {
  name: "editor",
  data() {
    return {
      input1:"",
      ar:  {},
      comments: "",
      getComments: []
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    },
    delever() {
      axios.post(url.setComment, {
        value: this.comments,
        title: this.ar.title
      }). then(res => {
        // console.log(res)
        this.$notify({
                title: "成功",
                message: "评论成功",
                type: "success"
              });
      }).catch(err => {
        console.log(err)
      })
      this.getComments.push({
        comment: this.comments,
        articleTitle: this.ar.title
      })
       this.comments = ""
    }
  },
  computed: {
    ...mapGetters([
      "getArticleDetail"
    ])
  },
  mounted() {
    // console.log(this.getArticleDetail)
    this.ar = this.getArticleDetail
    axios.get(url.getComment + "?name=" + decodeURIComponent(this.ar.title))
    .then(res => {
      // console.log(res)
      this.getComments = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
};
</script>

<style scoped>
.block {
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  padding: 50px;
}
.block p {
  text-align: left;
  padding: 40px;
}
.block .contentarea {
  margin-left: 10%;
  width: 80%;
  padding: 10px;
  display: block;
}
.divider {
  font-size: 16px;
  font-weight: bolder;
}
.box-card {
  margin: 20px 20px 70px 20px;
}
.collapse-container {
  margin-left: 42px;
}
.showcomments {
  text-align: left;
}
</style>