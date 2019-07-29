<template>
  <div>
    <div class="framework">
      <table>
        <h1>教师</h1>
        <el-divider></el-divider>
        <tr>
          <td class="show-member" v-for="(item,index) in teachers" :key="index">
            <img class="photosize" :src="item.photo" />

            <p class="toteachers" @click="godetail()">{{item.name}}</p>
          </td>
        </tr>
        <h1>学生</h1>
        <el-divider></el-divider>
        <tr>
          <td class="show-member" v-for="(item,index) in Students" :key="index">
            <img class="photosize" :src="item.photo" />
            <p>{{item.name}}</p>
            <el-popover
              placement="bottom"
              title="成员详情"
              width="400"
              trigger="click"
            >
              <p>姓名：{{item.name}}</p>
              <p>ID: {{item.id}}</p>
              <p>年龄： {{item.age}}</p>
              <p>联系方式： {{item.post}}</p> 
              <p>事件： {{item.event}}</p>
              <el-button slot="reference">详情</el-button>
            </el-popover>
          </td>
        </tr>
      </table>
      <el-divider></el-divider>
      <p class="linkto" @click="godirect()">毕业去向</p>
    </div>
  </div>
</template>

<script>
import photo1 from "../assets/pic/timg.jpg";
import url from "../api/config";
import axios from "axios";
export default {
  name: "Members",
  data() {
    return {
      teachers: [
        {
          name: "张小哲",
          photo: photo1,
          age: 13
        }
      ],
      Students: []
    };
  },
  methods: {
    godetail() {
      this.$router.push({ name: "teachers" });
    },
    godirect() {
      this.$router.push({ name: "direction" });
    }
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get(url.getMembersAll)
        .then(res => {
          // console.log(res)
          this.Students = res.data;
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "读取失败"
          });
        });
    });
  }
};
</script>

<style scoped>
.framework {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  padding: 100px 100px 30px 100px;
}
.framework h1 {
  text-align: left;
  font-size: 18px;
  color: #909399;
  font-weight: bolder;
}
.framework .el-divider {
  background-color: #fbb000;
}
.framework table {
  width: 100%;
}
.show-member {
  float: left;
  margin: 37px;
}
.show-member p {
  text-align: center;
  display: block;
  font-weight: 180;
  font-size: 14px;
  color: #909399;
}
.framework .toteachers {
  cursor: pointer;
  color: rgba(48, 188, 204, 0.544);
  font-weight: bolder;
}
.linkto {
  cursor: pointer;
  color: rgba(48, 188, 204, 0.544);
  font-weight: bolder;
  margin: 50px;
}
.photosize {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 34px;
}
</style>
