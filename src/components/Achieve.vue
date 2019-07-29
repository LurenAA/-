<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "Achieve",
  data() {
    return {
      drawer: false,
      activities: [
        {
          content: "01901701班 企业认知实习参观",
          timestamp: "2019-7-05",
          color: "#0bb887",
          icon: "el-icon-magic-stick",
          size: "large",
          type: "primary"
        },
        {
          content: "01901701 18年6.21主题班会",
          timestamp: "2018-6-21",
          color: "#0bb887",
          icon: "el-icon-loading",
          size: "large",
          type: "primary"
        },
        {
          content: "素质拓展活动",
          timestamp: "2018-5-26",
          size: "large",
          color: "#879768",
          icon: "el-icon-magic-stick",
          type: "primary"
        },
        {
          content: "0190107团支部获2017年度“五四红旗团支部”荣誉称号",
          timestamp: "2018-5-04",
          size: "large",
          color: "red",
          icon: "el-icon-s-flag",
          type: "primary"
        },
        {
          content: "01901701班2017-2018春季第一次驻班党员大会",
          timestamp: "2018-5-01",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "01901701班2017-2018班导师见面会",
          timestamp: "2018-4-18",
          size: "large",
          type: "primary",
          icon: "el-icon-loading"
        },
        {
          content: "01901701班第一次轰趴",
          timestamp: "2018-4-02",
          size: "large",
          type: "primary",
          icon: "el-icon-sugar",
          color: "red"
        },
        {
          content: "相遇",
          timestamp: "2017-10-08",
          size: "large",
          type: "primary",
          color: "blue"
        }
      ]
    };
  }
};
</script>

<style scoped>
.block {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  padding-top: 35px;
  padding-right: 95px;
  padding-left: 35px;
  padding-bottom: 35px;
}
/* .block .el-timeline-item .el-timeline-item__tail {
  border-left: 2px solid rgba(55, 255, 255, 0.76);
} */
</style>
