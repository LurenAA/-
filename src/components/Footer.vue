<template>
  <div class = "footer_container">
    <h1>
        © Copyright 2012-2016, XXX.
      not Created using 
      <a href = "https://cn.vuejs.org">vue</a>
      2.x
    </h1>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer_container{
    padding: 25px 0 15px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .footer_container > h1{
    padding: 8px;
    font-size: 11px;
    text-align: center;
    letter-spacing: 0.5px
  }
  .footer_container > h1 > a:link {
    font-weight: bold;
    text-decoration: none;
    color: #dc3c01;
  }
  .footer_container > h1 > a:hover{
    font-weight: bold;
    text-decoration:underline;
    color: #892601
  }
</style>

