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
      <el-transfer v-model="value" :data="data" class = "ada"></el-transfer>
      <el-button type="primary" class = "button">保存</el-button>
  </div>
</template>

<script>
import url from "@/api/config.js";
import axios from "axios";
export default {
  name: "EventPageAdministration",
   data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
}
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
.artiContainer >>> .el-checkbox__input{
  left: 0 !important;
}
.ada{
  padding-top: 70px;
}
.button{
  margin-top: 40px;
}
.artiContainer >>> .el-checkbox{
  margin-right: 35px;
}
</style>
