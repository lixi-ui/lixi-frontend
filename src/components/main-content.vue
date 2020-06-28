<template>
  <div class='main-content'>
    <div class="main-side">
    </div>
    <div class="main-cnt">
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
  }
  .main-cnt{
    margin-left: 150px;
    height: 100%;
    background: lightblue;
  }
}
</style>
