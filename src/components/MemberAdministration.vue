<template>
  <div class="artiContainer">
    <el-breadcrumb separator="/" id="guide">
      <el-breadcrumb-item>
        <a href="javascript:;">后台管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javascript:;">成员管理</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-container id="wap">
      <el-aside width="300px">
        <el-menu class="el-menu-vertical-demo" @select="menuRouter">
          <el-menu-item v-for="(value,key) in membersNames" :key="key" :index="value">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ value }}</span>
          </el-menu-item>
          <el-menu-item index="add">
            <i class="el-icon-plus"></i>
            <span slot="title">添加成员</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main v-loading="loading" element-loading-text="拼命加载中">
        <el-row :gutter="20">
          <el-col :span="10" class="uploadContainer">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="oncahnge"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="8" class="memberConte">
            <el-row :gutter="20">
              <el-col :span="6" class="labells">
                <label>姓名:</label>
              </el-col>
              <el-col :span="18">
                <el-input v-model="data.name"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="!addFlag">
              <el-col :span="6">ID:</el-col>
              {{data.id}}
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8" class="labells">
                <label>联系方式:</label>
              </el-col>
              <el-col :span="16">
                <el-input v-model="data.post"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" class="labells">
                <label>年龄:</label>
              </el-col>
              <el-col :span="18">
                <el-input v-model="data.age"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-container id="simped">
          <el-aside width="150">
            <p>简介：</p>
          </el-aside>
          <el-main>
            <div id="editor" class="editor">
              <p>{{data.event}}</p>
            </div>
            <el-footer id="theFooter">
              <el-button type="primary" v-if="!addFlag" @click="upload">保存</el-button>
              <el-button v-if="!addFlag" type="danger" @click="deleteHadnle">删除</el-button>
              <el-button v-if="addFlag" type="primary" @click="upload">添加</el-button>
            </el-footer>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
import E from "wangeditor";
export default {
  name: "MemberAdministration",
  data() {
    return {
      loading: false,
      membersNames: [],
      data: {},
      addFlag: false,
      imageUrl: "", //展示图片
      file: {}
    };
  },
  methods: {
    oncahnge(file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.file = file.raw;
    },
    menuRouter(i) {
      this.file = {};
      this.imageUrl = "";
      if (i != "add") {
        this.loading = true;
        this.addFlag = false;
        axios
          .get(url.getMemberInfobyName + "?name=" + encodeURIComponent(i))
          .then(res => {
            // console.log(res)
            this.data = res.data;
            this.imageUrl = res.data.photo;
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
      } else {
        this.addFlag = true;
        this.data = {};
        this.imageUrl = "";
      }
    },
    upload() {
      let FormDatas = new FormData();
      FormDatas.append("file", this.file);
      FormDatas.append("name", this.data.name);
      let ageVal = parseInt(this.data.age);
      if (isNaN(ageVal)) ageVal = -1;
      FormDatas.append("age", ageVal);
      FormDatas.append("post", this.data.post);
      let idVal = parseInt(this.data.id);
      if (isNaN(idVal)) idVal = -1;
      FormDatas.append("id", idVal);
      FormDatas.append("event", this.editor.txt.text());
      axios
        .post(url.uploadMembers, FormDatas)
        .then(res => {
          if (res.data == "true" || res.data == true) {
            if (idVal == -1) {
              this.membersNames.push(this.data.name);
              this.clearAll();
              this.$notify({
                title: "成功",
                message: "添加成功",
                type: "success"
              });
            } else {
              this.$notify({
                title: "成功",
                message: "修改成功",
                type: "success"
              });
            }
          }
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "上传失败"
          });
        });
    },
    clearAll() {
      this.file = {};
      this.data = "";
      this.imageUrl = "";
      this.editor.txt.clear();
    },
    deleteHadnle() {
      this.$confirm("此操作将永久删除该成员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios
            .get(url.deleteMember + "?id=" + this.data.id)
            .then(res => {
              var index = this.membersNames.indexOf(this.data.name);
              this.membersNames.splice(index , 1)
              this.clearAll()
              this.$notify({
                title: "成功",
                message: "删除成功",
                type: "success"
              });
            })
            .catch(err => {
              this.$notify.error({
                title: "错误",
                message: "删除失败"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.editor = new E("#editor");
    this.editor.create();
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
#wap > .el-aside {
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
  left: 300px;
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
.blockPic {
  padding: 25px;
  width: 150px;
  height: 200px;
}
#simped {
  padding: 20px 40px 0;
}
#simped .el-main {
  padding: 0;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 40px;
  overflow: hidden;
}
#simped .el-aside {
  padding-left: 10px;
}
.labells {
  line-height: 44px;
}
.memberConte .el-row {
  padding-top: 20px;
}
#theFooter {
  padding-top: 30px;
}
button + button {
  padding-left: 15px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #1f1717;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  border: 1px dashed #8c939d;
  width: 138px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 138px;
  height: 178px;
  display: block;
}
.uploadContainer {
  padding-top: 30px;
  padding-left: 60px !important;
}
</style>
