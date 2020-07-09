<template>
  <div class='main-header'>
    <div class="main-nav-left">
      <img src="../assets/lixi-logo.png"/>
      Lixi.js
    </div>
    <div class="main-nav-right">
      <div class="nav-right">
        <div class="nav-right-wrap">


          <div class="nav-item" v-for="(item,index) in navAll" :key="index">
            <span v-if="!item.children">
              <router-link
                active-class="active"
                :to="item.path">
                  {{ item.name + item.path }}
              </router-link>
            </span>
             <span v-if="item.children">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                  {{ item.name }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item1,index1) in item.children" :key="index1">
                    {{ item1.name }}
                    <router-link
                      active-class="active"
                      :to="item1.urlPath">
                        {{ item1.title }}
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
          </div>


          <div class="nav-item">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                学习<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                生态系统<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            团队
          </div>
          <div class="nav-item">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                资源列表<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                支持lixi<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                多语言<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            参与翻译
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      title: 'title',
      value: '选项1'
    }
  },
  props: {
    navAll:[]
  }
}
</script>

<style lang="scss" scoped>
  .main-header{
    display: flex;
    position: fixed;
    .main-nav-left{
      flex: none;
      width: 110px;
      height: 2.2rem;
      img{
        height: 2.4rem;
        width: 2.4rem;
        vertical-align: middle;
      }
    }
    .main-nav-right{
      flex-grow: 1;
      background: #ddd;
      .nav-right{
        display: inline-block;
        float: right;
        padding-right: 10px;
        color: #409EFF;
        font-size: 12px;
        .nav-right-wrap{
          display: flex;
          .nav-item{
            padding: 0 5px;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
