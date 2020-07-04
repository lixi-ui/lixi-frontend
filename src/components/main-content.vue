<template>
  <div class='main-content'>
    <div class="main-side">
      <div class="side-wrap">
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
        <div class="side-group">
          <div class="title">title1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
          <div class="side-item">item1</div>
        </div>
      </div>
    </div>
    <div class="main-cnt">
       <div class="md-cnt">
         <slot></slot>
       </div>
    </div>
  </div>
</template>
<script>
import Introduce from '../i18n/zh-CN/docs/introduce.md'
export default {
  name: 'MainContent',
  data () {
    return {
      title: 'title'
    }
  },
  components: {Introduce}
}
</script>
<style scoped lang="scss">
.main-content{
  position: relative;
  padding-top: 4rem;
  .main-side{
    position: fixed;
    height: calc(100vh - 5rem - 2px);
    width: 150px;
    background: lightgreen;
    .side-wrap{
      height: 100%;
      overflow: auto;
      .side-group{
        margin-bottom: 10px;
      }
    }
  }
  .main-cnt{
    margin-left: 150px;
    min-height: calc(100vh - 5rem - 2px);
    margin-bottom: 0px;
    position: relative;
    top: 0;
    bottom: 0;
    // background: lightblue;
    .md-cnt{
      padding-left: 20px;
    }
  }
}
</style>
