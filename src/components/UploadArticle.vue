<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="artiContainer">
      <el-breadcrumb separator="/" id="guide">
        <el-breadcrumb-item>
          <a href="javascript:;">后台管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="javascript:;">文章上传</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-form-item label="文章名称" class="artiHEAd">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="文章作者" class="artiHEAd">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="文章简介" class="artiHEAd">
        <el-input v-model="form.simpleDes"></el-input>
      </el-form-item>
      <el-form-item label="文章主体" class="artiHEAd" id="ed">
        <el-upload
          class="upload-demo"
          ref= "upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :auto-upload="false"
          :before-upload="before_Upload"
          :limit	= "1"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传doc/txt文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item class="sub" label>
        <el-button type="primary" @click="onSubmit">上传</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios"
import url from "@/api/config.js"
export default {
  name: "UploadArticle",
  mounted() {
    this.$nextTick(() => {
      
    });
  },
  data() {
    return {
      form: {
        name: "",
        author: "",
        simpleDes: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.upload.submit();
    },
    before_Upload(file) {
      let FormDatas = new FormData()
      FormDatas.append('file',file)
      FormDatas.append('name',this.form.name)
      FormDatas.append('author',this.form.author)
      FormDatas.append('simpleDes',this.form.simpleDes)
      axios.post(url.upload, FormDatas, {
        headers:{
          "content-Type": 'multipart/form-data;charset=UTF-8'
        }
      }).then(res => {
        this.$notify({
          title: '成功',
          message: '上传成功',
          type: 'success'
        });
      }).catch(err => {
        this.$notify.error({
          title: '错误',
          message: '上传失败'
        });
      })
      this.form = {}
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
}
.artiHEAd {
  padding-top: 40px;
  margin: 0 auto;
}
.sub {
  padding-top: 40px;
}
#guide {
  border-bottom: 1px solid #eaeefb;
  padding: 24px;
}
.artiContainer >>> .el-form-item__label {
  width: 120px !important;
  padding-right: 30px;
}
.artiContainer >>> .el-form-item__content {
  margin-left: 120px !important;
}
.sub >>> .el-button {
  float: left;
}
.sub .el-button + .el-button {
  margin-left: 30px;
}
.upload-demo{
  float:left;
  padding-top: 20px;
}
</style>
