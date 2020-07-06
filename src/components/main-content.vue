<template>
  <div class='main-content'>
    <div class="main-side">
      <div class="side-wrap">
        <div class="side-group" v-for="(item,index) in nav" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="side-item"  v-for="(item1,i) in item.list" :key="i">
            <router-link
              active-class="active"
              :to="item1.path">
                {{ item1.title }}
            </router-link>
          </div>
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
    props:{
      nav: {
        type: Array,
        default: function(){
          return []
        }
      }
    },
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
    .md-cnt{
      padding-left: 20px;
    }
  }
}
</style>
