<template>
  <div id="app">
    <main-header :navAll="navAll"></main-header>
    <main-content class="page-component" :nav="nav">
      <router-view></router-view>
    </main-content>
  </div>
</template>

<script>
import Home from './pages/home/index.vue'
import docs from './pages/docs/index.vue'
import navsData from './router/nav.config.json'
export default {
  name: 'App',
  data(){
    return {
      meta: this.$route.meta,
      nav: [],
      navAll: []
    }
  },
  components: {
    Home: Home,
    docs: docs
  },
  mounted(){
    console.log('nav?',navsData["zh-CN"][1].children[0].children);
    this.nav = navsData["zh-CN"][1].children
    this.navAll = navsData["zh-CN"]
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .page-component__scroll {
      height: calc(100% - 80px);
      margin-top: 80px;

      > .el-scrollbar__wrap {
        overflow-x: auto;
      }
    }

    .page-component {
      box-sizing: border-box;
      height: 100%;

      &.page-container {
        padding: 0;
      }

      .page-component__nav {
        width: 240px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        transition: padding-top .3s;

        > .el-scrollbar__wrap {
          height: 100%;
          overflow-x: auto;
        }

        &.is-extended {
          padding-top: 0;
        }
      }

      .side-nav {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;

        & > ul {
          padding-bottom: 50px;
        }
      }

      .page-component__content {
        padding-left: 270px;
        padding-bottom: 100px;
        box-sizing: border-box;
      }

      .content {
        padding-top: 50px;

        > {
          h3 {
            margin: 55px 0 20px;
          }

          table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;

            strong {
              font-weight: normal;
            }

            td, th {
              border-bottom: 1px solid #dcdfe6;
              padding: 15px;
              max-width: 250px;
            }

            th {
              text-align: left;
              white-space: nowrap;
              color: #909399;
              font-weight: normal;
            }

            td {
              color: #606266;
            }

            th:first-child, td:first-child {
              padding-left: 10px;
            }
          }

          ul:not(.timeline) {
            margin: 10px 0;
            padding: 0 0 0 20px;
            font-size: 14px;
            color: #5e6d82;
            line-height: 2em;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .page-component {
        .page-component__nav {
          width: 100%;
          position: static;
          margin-top: 0;
        }
        .side-nav {
          padding-top: 0;
          padding-left: 50px;
        }
        .page-component__content {
          padding-left: 10px;
          padding-right: 10px;
        }
        .content {
          padding-top: 0;
        }
        .content > table {
          overflow: auto;
          display: block;
        }
      }
    }
  }
</style>
