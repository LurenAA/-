<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <div class = "el-icon-s-custom-wrapper">
      <i class="el-icon-s-custom"></i>
    </div>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" autocomplete="off"
      placeholder="账户"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"
      placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item class = "suBmit">
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button disabled	id = "secOne">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度必须不小于6"));
      } else {
        callback();
      }
    };
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账户"));
      } else if (value.length < 6) {
        callback(new Error("账户长度必须不小于6"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        account: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submit_login", this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.demo-ruleForm{
  box-sizing: border-box;
  padding: 40px 10px 0;
  position: relative;
}
.el-icon-s-custom-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-100%) scale(1.5);
  transform-origin: top;
}
.demo-ruleForm >>> .el-form-item__content{
  margin-left: 0px !important;
}
#secOne{
  margin-left: 20px;
}
.suBmit {
  padding-top: 15px;
}
</style>
