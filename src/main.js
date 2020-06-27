// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'
import MainContent from './components/main-content'
import './style/index.scss'

Vue.config.productionTip = false

Vue.component('main-header', MainHeader)
Vue.component('main-content', MainContent)
Vue.component('main-footer', MainFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
