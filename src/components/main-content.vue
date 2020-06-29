<template>
  <div class='main-content'>
    <div class="main-side">
    </div>
    <div class="main-cnt">
       <div class="div"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainContent',
  data () {
    return {
      title: 'title'
    }
  }
}
</script>
<style scoped lang="scss">
.main-content{
  position: relative;
  .main-side{
    position: absolute;
    height: calc(100vh - 5rem - 2px);
    width: 150px;
    background: lightgreen;
  }
  .main-cnt{
    margin-left: 150px;
    min-height: calc(100vh - 5rem - 2px);
    margin-bottom: 0px;
    position: relative;
    top: 0;
    bottom: 0;
    background: lightblue;
    .div{
      height: 1000px;
      width: 100px;
      background: lightcoral;
    }
  }
}
</style>
