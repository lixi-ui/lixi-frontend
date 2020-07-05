import Vue from 'vue'
import Router from 'vue-router'
import navConfig from './nav.config.json'
// import index from '@/pages/index'

Vue.use(Router)

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../pages/docs${path}/index.md`)),
    'zh-CN');
  }
};

function loadDocs(lang,path){
  return LOAD_DOCS_MAP[lang](path);
}

var routes = []

navConfig['zh-CN'][0]['groups'][0]['list'].forEach(item => {
  console.log(item);
  var obj = {
    path: item.path,
    name: "component-" + item.title,
    meta: "",
    component: loadDocs('zh-CN', item.path)
  }
  routes.push(obj);
});

export default new Router({
  mode: 'hash',
  routes: routes
})
