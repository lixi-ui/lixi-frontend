import Vue from 'vue'
import Router from 'vue-router'
import navConfig from './nav.config.json'

Vue.use(Router)

const LOAD_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../pages${path}/index.vue`)),
    'zh-CN');
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../pages/${path}.md`)),
    'zh-CN');
  }
};

function loadDocs(lang,path){
  return LOAD_DOCS_MAP[lang](path);
}

var routes = []

navConfig['zh-CN'].forEach(item => {
  var obj = {
    path: item.path,
    name: "component-" + item.name,
    meta: "",
    component: load('zh-CN', item.path)
  }
  if (item.children) {
    var routes1 = []
    item.children.forEach(item1 => {
      var obj1 = {
        path: item.path + item1.path,
        name: "component-" + item1.name,
        meta: "",
        component: load('zh-CN', item.path + item1.path)
      }
      if (item1.children) {
        var routes2 = []
        item1.children.forEach(item2 => {
          var obj2 = {
            path: item.path + item1.path + item2.path,
            name: "component-" + item2.name,
            meta: "",
            component: loadDocs('zh-CN', item.path + item1.path + '/zh-CN' + item2.path)
          }
          routes2.push(obj2)
        })
        obj1.children = routes2
      }
      routes1.push(obj1)
    })
    obj.children = routes1
  }
  routes.push(obj);
})

export default new Router({
  mode: 'hash',
  routes: routes
})
