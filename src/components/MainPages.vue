<template>
  <el-container class="el_app_container">
    <el-row id = "back_to_top">
      <el-button icon="el-icon-caret-top" native-type = "reset"
        v-show="ifShowScroll2Top" circle 
        @click = "back2TopHandle">
      </el-button>
    </el-row>
    <el-header class="el_app_el_header">
      <the-header @change-tab="changeTab"></the-header>
    </el-header>
    <el-main class="el_main">
      <router-view />
    </el-main>
    <el-footer>
      <ths-footer></ths-footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: "MainPages",
  components: {
    "the-header": Header,
    "ths-footer": Footer
  },
  methods: {
    changeTab(e) {
      switch(parseInt(e)){
        case this.GLOBAL.path_name.news:
          this.$router.push({ name: "news"});
          break;
        case this.GLOBAL.path_name["achieve"]: 
          this.$router.push({ name:"achieve"});
          break;
        case this.GLOBAL.path_name["members"]:
          this.$router.push({ name:"members"});
          break;
        case this.GLOBAL.path_name["backEnd"]:
          this.$router.push({ name:"backEnd"});
          break;
        default:
          this.$router.push({ name:"host"});
          break;
      }
    },
    scrollHandle() {
      let scrollToTop = document.documentElement.scrollTop ||
        document.body.scrollTop
      if(scrollToTop > 30) {
        this.ifShowScroll2Top = true
      } else {
        this.ifShowScroll2Top = false
      }
    },
    back2TopHandle() {
      var srcPos = document.documentElement.scrollTop ||
          document.body.scrollTop
      function step() {
        let curPos = document.documentElement.scrollTop ||
          document.body.scrollTop
        while(curPos > 10) {
          console.log(srcPos)
          let newScroll2Top = curPos - (srcPos - 0) / 5
          window.scrollTo(0, newScroll2Top)
          return window.requestAnimationFrame(step)
        }
        return window.scrollTo(0, 0)
      }
      window.requestAnimationFrame(step)
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.documentElement.scrollTop = 0
      window.addEventListener("scroll", this.scrollHandle)
    })
  },
  data() {
    return {
      ifShowScroll2Top: false
    }
  }
};
</script>

<style scoped>
.el_app_container{
  margin: 0 auto;
  padding: 0;
  width: 970px;
}
.el_app_el_header {
  height: auto !important;
}
.el_main{
  padding: 0 20px !important;
  position: relative;
}
#back_to_top{
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
}
</style>
