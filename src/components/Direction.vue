<template>
  <div class="block">
    <el-page-header class="goback" @back="goBack"></el-page-header>
    <h1>毕业去向</h1>
    <el-table class="el-show" :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="去向"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.block {
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
}
.block .el-show {
  padding: 50px;
}
.block .goback {
  margin: 18px;
}
</style>
